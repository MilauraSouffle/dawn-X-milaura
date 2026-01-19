/**
 * MILAURA QUIZ V1
 * Gestion du quiz émotionnel - Questions 1-3 (E1-2)
 * Lit UNIQUEMENT depuis window.MilauraQuizConfig
 */

(function () {
  'use strict';

  // Vérifier config
  if (!window.MilauraQuizConfig) {
    console.error('MilauraQuizConfig non chargé');
    return;
  }

  const config = window.MilauraQuizConfig;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // State
  let currentQuestionIndex = 0;
  let userAnswers = []; // Array de values

  // Elements DOM
  const app = document.getElementById('MilauraQuizApp');
  if (!app) return;

  const introScreen = document.getElementById('QuizIntro');
  const questionsScreen = document.getElementById('QuizQuestions');
  const resultScreen = document.getElementById('QuizResult');

  const startBtn = document.getElementById('QuizStartBtn');
  const backBtn = document.getElementById('QuizBackBtn');

  const questionContainer = document.getElementById('QuizQuestionContainer');
  const progressFill = document.getElementById('QuizProgressFill');
  const progressCurrent = document.getElementById('QuizProgressCurrent');
  const progressTotal = document.getElementById('QuizProgressTotal');

  // Init
  function init() {
    if (progressTotal) {
      progressTotal.textContent = config.meta.totalQuestions;
    }

    // Event listeners
    if (startBtn) {
      startBtn.addEventListener('click', startQuiz);
    }

    if (backBtn) {
      backBtn.addEventListener('click', goBack);
    }
  }

  // Démarrer quiz
  function startQuiz() {
    hideScreen(introScreen);
    showScreen(questionsScreen);
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion(currentQuestionIndex);
  }

  // Afficher question
  function renderQuestion(index) {
    if (index >= config.questions.length) {
      // Toutes les questions répondues → calculer résultat
      showResult();
      return;
    }

    const question = config.questions[index];

    if (!question) {
      console.error('Question introuvable:', index);
      return;
    }

    // Update progress
    updateProgress(index + 1);

    // Render HTML
    let html = `
      <h2 class="milaura-quiz-question-text">${question.text}</h2>
      <div class="milaura-quiz-answers">
    `;

    question.answers.forEach((answer, i) => {
      const isSelected = userAnswers[index] === answer.value ? 'selected' : '';
      html += `
        <button
          type="button"
          class="milaura-quiz-answer ${isSelected}"
          data-value="${answer.value}"
          data-question-index="${index}"
          data-answer-index="${i}"
        >
          ${answer.label}
        </button>
      `;
    });

    html += `</div>`;

    questionContainer.innerHTML = html;

    // Event listeners sur réponses
    const answerBtns = questionContainer.querySelectorAll('.milaura-quiz-answer');
    answerBtns.forEach(btn => {
      btn.addEventListener('click', handleAnswer);
    });

    // Afficher/masquer bouton retour
    if (backBtn) {
      backBtn.style.visibility = index > 0 ? 'visible' : 'hidden';
    }
  }

  // Gérer sélection réponse
  function handleAnswer(e) {
    const value = e.currentTarget.dataset.value;
    const questionIndex = parseInt(e.currentTarget.dataset.questionIndex, 10);

    // Enregistrer réponse
    userAnswers[questionIndex] = value;

    // Marquer comme sélectionné
    const allAnswers = questionContainer.querySelectorAll('.milaura-quiz-answer');
    allAnswers.forEach(btn => btn.classList.remove('selected'));
    e.currentTarget.classList.add('selected');

    // Passer à question suivante après délai
    setTimeout(() => {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    }, reducedMotion ? 100 : 400);
  }

  // Retour question précédente
  function goBack() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
    }
  }

  // Update progress bar
  function updateProgress(current) {
    const total = config.meta.totalQuestions;
    const percent = (current / total) * 100;

    if (progressFill) {
      progressFill.style.width = percent + '%';
    }

    if (progressCurrent) {
      progressCurrent.textContent = current;
    }
  }

  // Calculer scoring
  function calculateScore() {
    const counts = {};

    // Compter occurrences de chaque value
    userAnswers.forEach(value => {
      counts[value] = (counts[value] || 0) + 1;
    });

    // Trouver max
    let maxCount = 0;
    let winners = [];

    Object.entries(counts).forEach(([value, count]) => {
      if (count > maxCount) {
        maxCount = count;
        winners = [value];
      } else if (count === maxCount) {
        winners.push(value);
      }
    });

    // Si égalité, appliquer tiebreaker
    if (winners.length > 1) {
      const tiebreakers = config.scoring.tiebreaker; // ["q6", "q3"]

      for (let i = 0; i < tiebreakers.length; i++) {
        const questionId = tiebreakers[i];
        const questionIndex = config.questions.findIndex(q => q.id === questionId);

        if (questionIndex !== -1 && userAnswers[questionIndex]) {
          const tiebreakerValue = userAnswers[questionIndex];

          if (winners.includes(tiebreakerValue)) {
            winners = [tiebreakerValue];
            break;
          }
        }
      }

      // Si toujours égalité après tiebreakers, prendre premier par ordre alphabétique
      if (winners.length > 1) {
        winners.sort();
        winners = [winners[0]];
      }
    }

    const winnerValue = winners[0] || config.scoring.fallback;

    // Mapper value → profile handle
    return config.profiles[winnerValue] || config.scoring.fallback;
  }

  // Afficher résultat
  function showResult() {
    hideScreen(questionsScreen);
    showScreen(resultScreen);

    const profileHandle = calculateScore();

    // Rediriger vers page résultat avec profil
    window.location.href = `/pages/quiz-resultat?profile=${profileHandle}`;
  }

  // Helpers affichage écrans
  function showScreen(screen) {
    if (screen) {
      screen.style.display = 'block';
    }
  }

  function hideScreen(screen) {
    if (screen) {
      screen.style.display = 'none';
    }
  }

  // Init au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
