/**
 * MILAURA QUIZ CONFIG V1
 * Source de vérité unique pour les 6 questions du quiz émotionnel
 *
 * IMPORTANT :
 * - Ne JAMAIS dupliquer ces questions ailleurs
 * - Modification ici = modification partout
 * - Respecter strictement la structure (scoring dépend des keys)
 */

window.MilauraQuizConfig = {

  // Métadonnées quiz
  meta: {
    version: "1.0",
    totalQuestions: 6,
    estimatedDuration: "60 secondes"
  },

  // 6 questions
  questions: [

    // Question 1
    {
      id: "q1",
      text: "Comment vous sentez-vous en ce moment ?",
      type: "single_choice",
      answers: [
        { value: "reconfort", label: "J'ai besoin de réconfort" },
        { value: "protection", label: "Je me sens vulnérable" },
        { value: "serenite", label: "Je suis agité·e" },
        { value: "elegance", label: "Je veux rayonner" },
        { value: "joie", label: "Je cherche la légèreté" }
      ]
    },

    // Question 2
    {
      id: "q2",
      text: "Quelle énergie recherchez-vous au quotidien ?",
      type: "single_choice",
      answers: [
        { value: "reconfort", label: "Douceur et apaisement" },
        { value: "protection", label: "Force et ancrage" },
        { value: "serenite", label: "Calme et clarté" },
        { value: "elegance", label: "Confiance et grâce" },
        { value: "joie", label: "Vitalité et optimisme" }
      ]
    },

    // Question 3 (tiebreaker si égalité avec Q6)
    {
      id: "q3",
      text: "Quand vous allumez une bougie, c'est pour...",
      type: "single_choice",
      answers: [
        { value: "reconfort", label: "Créer un cocon chaleureux" },
        { value: "protection", label: "Délimiter mon espace sacré" },
        { value: "serenite", label: "Méditer ou me recentrer" },
        { value: "elegance", label: "Sublimer mon intérieur" },
        { value: "joie", label: "Célébrer un moment heureux" }
      ]
    },

    // Question 4
    {
      id: "q4",
      text: "Si votre journée était une couleur, ce serait...",
      type: "single_choice",
      answers: [
        { value: "reconfort", label: "Bleu doux" },
        { value: "protection", label: "Noir profond" },
        { value: "serenite", label: "Violet apaisant" },
        { value: "elegance", label: "Rose délicat" },
        { value: "joie", label: "Vert lumineux" }
      ]
    },

    // Question 5
    {
      id: "q5",
      text: "Quel rituel vous attire le plus ?",
      type: "single_choice",
      answers: [
        { value: "reconfort", label: "M'envelopper dans un plaid avec un thé" },
        { value: "protection", label: "Marcher pieds nus pour me reconnecter" },
        { value: "serenite", label: "Respirer profondément avant de dormir" },
        { value: "elegance", label: "Prendre soin de moi avec intention" },
        { value: "joie", label: "Danser sur ma chanson préférée" }
      ]
    },

    // Question 6 (tiebreaker principal)
    {
      id: "q6",
      text: "Quel mot résonne le plus en vous ?",
      type: "single_choice",
      answers: [
        { value: "reconfort", label: "Tendresse" },
        { value: "protection", label: "Ancrage" },
        { value: "serenite", label: "Sérénité" },
        { value: "elegance", label: "Élégance" },
        { value: "joie", label: "Joie" }
      ]
    }

  ],

  // Règles de scoring
  scoring: {
    method: "count_values", // Compter les occurrences de chaque value
    tiebreaker: ["q6", "q3"], // Ordre priorité en cas d'égalité
    fallback: "reconfort" // Si aucune réponse (ne devrait jamais arriver)
  },

  // Mapping value → emotional_profile.handle
  profiles: {
    reconfort: "reconfort",
    protection: "protection",
    serenite: "serenite",
    elegance: "elegance",
    joie: "joie-de-vivre" // Attention : handle ≠ value ici
  }

};
