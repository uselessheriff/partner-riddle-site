const SITE = {
  overline: "Для тебя",
  riddles: [
    {
      title: "Загадка первая",
      riddle: "Что последнее я готовил для своей китюськи?",
      acceptedAnswers: [
        "киндер",
        "киндер пингви",
        "киндер-пингви",
        "киндер пингвин",
        "kinder",
        "kinder pingui",
        "kinder pingvi"
      ],
      wrongMessages: [
        "Пока не то. Вспомни вкусную штуку, которую я делал для тебя последней.",
        "Почти. Это было сладкое и очень узнаваемое.",
        "Еще попытка. Ответ можно написать коротко."
      ]
    },
    {
      title: "Загадка вторая",
      riddle: "36-е слово в моём последнем стишке тебе?",
      acceptedAnswers: ["люблю"],
      wrongMessages: [
        "Пока не то. Это слово в стишке было самым важным.",
        "Подумай про то, что я чаще всего хочу тебе сказать.",
        "Еще попытка. Регистр не важен."
      ]
    },
    {
      title: "Загадка третья",
      riddle: "Первое слово, которое тебе придёт в голову.",
      acceptedAnswers: [
        "комбербутч",
        "камбербутч",
        "камбербуч",
        "комбербуч",
        "камбербэтч",
        "комбербэтч",
        "камбербетч",
        "комбербетч"
      ],
      wrongMessages: [
        "Пока не оно. Напиши самое первое странное слово, которое всплыло.",
        "Почти. Тут можно ошибиться в написании, я засчитаю близкие варианты.",
        "Еще попытка. Главное — звучание."
      ]
    }
  ],
  answerLabel: "Ответ",
  buttonText: "Проверить",
  emptyMessage: "Напиши ответ, который кажется тебе самым точным.",
  successOverline: "Ты отгадала",
  successTitle: "Смотри внимательно",
  successText: "Ты прошла все три загадки. Маленький сладкий сюрприз уже ждёт тебя.",
  giftSrc: "assets/gift.jpg",
  giftAlt: "Упакованный сладкий подарок с синей лентой",
  giftCaption: "Вот он, твой маленький сладкий мешочек.",
  photoSrc: "assets/secret-location.jpg",
  photoAlt: "Фото места, где спрятан сладкий сюрприз",
  photoCaption: "Он спрятан в пакете с пряжей.",
  closing: "С праздником, любимая."
};

const form = document.querySelector("#answer-form");
const input = document.querySelector("#answer-input");
const message = document.querySelector("#answer-message");
const riddlePanel = document.querySelector("#riddle-panel");
const progressLine = document.querySelector("#progress-line");
const successPanel = document.querySelector("#success-panel");
const giftPhoto = document.querySelector("#gift-photo");
const secretPhoto = document.querySelector("#secret-photo");

let currentRiddleIndex = 0;
let failedAttempts = 0;

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replaceAll("ё", "е")
    .replace(/[.,!?;:()[\]{}"']/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ");
}

function compactAnswer(value) {
  return normalizeAnswer(value).replace(/\s/g, "");
}

function isAcceptedAnswer(answer, acceptedAnswers) {
  const normalizedAnswer = normalizeAnswer(answer);
  const compactedAnswer = compactAnswer(answer);

  return acceptedAnswers.some((acceptedAnswer) => {
    return (
      normalizeAnswer(acceptedAnswer) === normalizedAnswer ||
      compactAnswer(acceptedAnswer) === compactedAnswer
    );
  });
}

function getCurrentRiddle() {
  return SITE.riddles[currentRiddleIndex];
}

function updateProgress() {
  const steps = [...progressLine.querySelectorAll("span")];

  steps.forEach((step, index) => {
    step.classList.toggle("is-complete", index < currentRiddleIndex);
    step.classList.toggle("is-active", index === currentRiddleIndex);
  });
}

function fillRiddle() {
  const currentRiddle = getCurrentRiddle();

  document.title = SITE.overline;
  document.querySelector("#site-overline").textContent =
    `${SITE.overline} · ${currentRiddleIndex + 1} из ${SITE.riddles.length}`;
  document.querySelector("#page-title").textContent = currentRiddle.title;
  document.querySelector("#riddle-text").textContent = currentRiddle.riddle;
  document.querySelector("#answer-label").textContent = SITE.answerLabel;
  document.querySelector("#submit-button").textContent = SITE.buttonText;
  input.placeholder = SITE.answerLabel;
  input.value = "";
  message.textContent = "";
  failedAttempts = 0;
  updateProgress();
}

function fillSuccess() {
  document.querySelector("#success-overline").textContent = SITE.successOverline;
  document.querySelector("#success-title").textContent = SITE.successTitle;
  document.querySelector("#success-text").textContent = SITE.successText;
  document.querySelector("#gift-caption").textContent = SITE.giftCaption;
  document.querySelector("#photo-caption").textContent = SITE.photoCaption;
  document.querySelector("#closing-text").textContent = SITE.closing;
  giftPhoto.alt = SITE.giftAlt;
  secretPhoto.alt = SITE.photoAlt;
}

function showNextRiddle() {
  currentRiddleIndex += 1;
  fillRiddle();
  input.focus();

  riddlePanel.classList.remove("is-changing");
  requestAnimationFrame(() => {
    riddlePanel.classList.add("is-changing");
  });
}

function showSuccess() {
  giftPhoto.src = SITE.giftSrc;
  secretPhoto.src = SITE.photoSrc;
  riddlePanel.hidden = true;
  successPanel.hidden = false;
  message.textContent = "";
  form.querySelector("button").disabled = true;
  input.disabled = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showWrongAnswer() {
  const currentRiddle = getCurrentRiddle();
  const index = Math.min(failedAttempts, currentRiddle.wrongMessages.length - 1);

  message.textContent = currentRiddle.wrongMessages[index];
  failedAttempts += 1;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const answer = input.value;
  const currentRiddle = getCurrentRiddle();

  if (!normalizeAnswer(answer)) {
    message.textContent = SITE.emptyMessage;
    input.focus();
    return;
  }

  if (isAcceptedAnswer(answer, currentRiddle.acceptedAnswers)) {
    if (currentRiddleIndex < SITE.riddles.length - 1) {
      showNextRiddle();
      return;
    }

    showSuccess();
    return;
  }

  showWrongAnswer();
  input.select();
});

fillRiddle();
fillSuccess();
