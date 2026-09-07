import urllib.request, json, re, hashlib, concurrent.futures, pathlib, datetime
from html.parser import HTMLParser
base='https://milaura.fr'
paths=['/','/pages/bijoux-par-pierre','/collections/bijoux-pierres-naturelles','/collections/bracelets-pierres','/collections/colliers-pierres','/collections/bagues-pierres','/collections/par-pierre-aigue-marine','/collections/par-pierre-sodalite','/collections/par-pierre-quartz-rose','/products/bague-en-argent-925-et-aigue-marine-du-bresil','/products/bracelet-horus-dore-en-sodalite-6-mm','/pages/pierres-de-naissance','/pages/cadeaux-anniversaire-de-mariage','/robots.txt','/sitemap.xml','/llms.txt']
out=pathlib.Path('/private/tmp/milaura-seo-evidence-20260907');out.mkdir(exist_ok=True)
class Parse(HTMLParser):
 def __init__(self): super().__init__();self.meta={};self.canonical='';self.links=[];self.h1=[];self.title=[];self.tag='';self.schema=[];self.ld=False;self.buf=''
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='meta': self.meta[d.get('name',d.get('property',''))]=d.get('content','')
  if t=='link' and d.get('rel')=='canonical': self.canonical=d.get('href','')
  if t=='a': self.links.append(d.get('href',''))
  if t in ['h1','title']: self.tag=t
  if t=='script' and d.get('type')=='application/ld+json': self.ld=True;self.buf=''
 def handle_endtag(self,t):
  if t==self.tag:self.tag=''
  if t=='script' and self.ld:
   try:self.schema.append(json.loads(self.buf))
   except: self.schema.append({'parse_error':True})
   self.ld=False
 def handle_data(self,d):
  if self.tag=='h1':self.h1.append(d.strip())
  if self.tag=='title':self.title.append(d.strip())
  if self.ld:self.buf+=d

def fetch(path):
 try:
  r=urllib.request.urlopen(urllib.request.Request(base+path,headers={'User-Agent':'Mozilla/5.0 (compatible; MilAuraAudit/1.0)'}),timeout=25);b=r.read();s=b.decode(); p=Parse();p.feed(s);name=hashlib.sha256(path.encode()).hexdigest()[:12];(out/(name+'.html')).write_bytes(b)
  title_match=re.search(r'<title[^>]*>(.*?)</title>',s,re.S)
  result={'observed_date':datetime.datetime.now(datetime.timezone.utc).isoformat(),'h1_count':len(re.findall(r'<h1\b',s)),'path':path,'status':r.status,'final_url':r.url,'sha256':hashlib.sha256(b).hexdigest(),'title':re.sub(r'\s+',' ',title_match[1]).strip() if title_match else '','h1':p.h1,'canonical':p.canonical,'robots':p.meta.get('robots',''),'description':p.meta.get('description',''),'schema':p.schema,'links':sorted(set(x for x in p.links if x.startswith(('/products/','/collections/','/pages/','/blogs/')))),'evidence_file':name+'.html'}
  if path.endswith('.txt') or path.endswith('.xml'):result['text']=s
  return result
 except Exception as e:return {'path':path,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex: results=list(ex.map(fetch,paths))
(out/'probe.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
for x in results: print(json.dumps({k:x.get(k) for k in ['path','status','error','title','h1','canonical','robots']},ensure_ascii=False))
