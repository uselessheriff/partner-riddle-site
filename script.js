const SITE = {
  overline: "Для тебя",
  preview: {
    overline: "Для тебя",
    title: "Для тебя кое-что новенькое",
    text: "Добавилось несколько загадок и кое-что ещё… Готова узнать, какой сюрприз ждёт тебя?",
    buttonText: "Начать",
    imageSrc: "assets/preview-letter.jpg",
    imageAlt: "Письмо с сердцем и нежными веточками"
  },
  riddles: [
    {
      title: "Загадка первая",
      riddle: "Что последнее я готовил для своей китюськи?",
      acceptedAnswers: [
        "свинина с перцем и морковью рис",
        "свинина с перцем и морковью с рисом",
        "свинина с перцем, морковью и рисом",
        "рис со свининой с перцем и морковью",
        "свинина с овощами и рисом",
        "свинина с рисом",
        "рис со свининой",
        "свинина с перцем",
        "свинина с морковью",
        "свинина с овощами",
        "мясо с рисом",
        "рис с мясом",
        "свинина"
      ],
      answerGroups: [
        ["свинина", "свининой", "свинину", "свинины", "свинья", "свиньей", "мясо", "мясом"],
        ["рис", "рисом", "риса"],
        ["перец", "перцем", "перца", "перчиком"],
        ["морковь", "морковью", "моркови", "морковка", "морковкой"]
      ],
      wrongMessages: [
        "Пока не то. Вспомни последнее блюдо, которое я готовил для тебя.",
        "Почти. Там были мясо, овощи и гарнир.",
        "Ещё попытка. Можно ответить совсем коротко."
      ]
    },
    {
      title: "Загадка вторая",
      riddle: "36-е слово в моём последнем стишке тебе?",
      acceptedAnswers: ["мы"],
      wrongMessages: [
        "Пока не то. Это слово про нас двоих.",
        "Подумай, кто мы друг для друга.",
        "Ещё попытка. Регистр не важен."
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
    },
    {
      title: "Загадка четвёртая",
      riddle: "На кого я похож?",
      acceptedAnswers: [
        "добрыня никитич", "добрыня никитичь", "добрыня никитыч",
        "добрыня-никитич", "добриня никитич", "добрыня", "никитич",
        "dobrynya nikitich", "dobrinya nikitich", "nikitich",
        "леонардо дикаприо", "леонардо ди каприо", "леонардо ди-каприо",
        "леонардо дикапирио", "леонардо дикаприа", "леонардо дикприо",
        "дикаприо", "ди каприо", "ди-каприо", "дикапирио", "дикприо",
        "леонардо", "leonardo dicaprio", "leonardo di caprio", "dicaprio"
      ],
      allowNameVariant: true,
      wrongMessages: [
        "Подумай о двух очень разных, но одинаково легендарных вариантах.",
        "Один герой — богатырь, другой — голливудская звезда.",
        "Вспомни Добрыню Никитича или Леонардо ДиКаприо."
      ]
    },
    {
      title: "Загадка пятая",
      riddle: "Какое 25-е слово на картине?",
      acceptedAnswers: ["сексуальный"],
      wrongMessages: [
        "Посчитай слова на картине ещё раз.",
        "Подсказка: это слово описывает особое очарование.",
        "Ищи слово про притягательность."
      ]
    },
    {
      title: "Загадка шестая",
      riddle: "Закончи фразу: «Вот какая вот хуйня …»",
      acceptedAnswers: ["собачка", "собачька", "сабачка", "сабачька"],
      wrongMessages: [
        "Ну ты же знаешь, кто там должен быть.",
        "Маленькая подсказка: хвостатая и очень милая.",
        "Это слово про маленькую пушистую подружку."
      ]
    }
  ],
  answerLabel: "Ответ",
  buttonText: "Проверить",
  emptyMessage: "Напиши ответ, который кажется тебе самым точным.",
  successOverline: "Для тебя",
  successTitle: "Ты отгадала",
  successText: "Смотри внимательно",
  successNote: "Ты прошла все шесть загадок. Сладкий сюрприз уже ждёт тебя.",
  giftSrc: "assets/gift.jpg",
  giftAlt: "Упакованный сладкий подарок с синей лентой",
  giftCaption: "Вот он, твой маленький сладкий мешочек.",
  photoSrc: "assets/surprise-closet.jpg",
  photoAlt: "Шкаф с одеждой; синее сердечко отмечает место сюрприза",
  photoCaption: "Ищи там, где я нарисовал для тебя синее сердечко.",
  closing: "Сладкий вечер дома и кое-что мягкое, чему мы вместе придумаем форму, уже ждут нас. С праздником, любимая."
};

const previewPanel = document.querySelector("#preview-panel");
const previewImage = document.querySelector("#preview-image");
const startButton = document.querySelector("#start-button");
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

function editDistanceAtMostOne(left, right) {
  if (Math.abs(left.length - right.length) > 1) return false;

  let leftIndex = 0;
  let rightIndex = 0;
  let differences = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] === right[rightIndex]) {
      leftIndex += 1;
      rightIndex += 1;
      continue;
    }

    differences += 1;
    if (differences > 1) return false;
    if (left.length > right.length) leftIndex += 1;
    else if (right.length > left.length) rightIndex += 1;
    else {
      leftIndex += 1;
      rightIndex += 1;
    }
  }

  if (leftIndex < left.length || rightIndex < right.length) differences += 1;
  return differences <= 1;
}

function isAcceptedAnswer(answer, acceptedAnswers, allowNameVariant = false, answerGroups = []) {
  const normalizedAnswer = normalizeAnswer(answer);
  const compactedAnswer = compactAnswer(answer);

  const exactMatch = acceptedAnswers.some((acceptedAnswer) => (
      normalizeAnswer(acceptedAnswer) === normalizedAnswer ||
      compactAnswer(acceptedAnswer) === compactedAnswer
  ));
  if (exactMatch) return true;

  if (answerGroups.length) {
    const answerWords = normalizedAnswer.split(" ");
    const hasIngredient = (group) => group.some((ingredient) =>
      answerWords.includes(normalizeAnswer(ingredient))
    );

    if (hasIngredient(answerGroups[0]) && answerGroups.slice(1).some(hasIngredient)) {
      return true;
    }
  }

  if (!allowNameVariant) return false;

  const answerWords = normalizedAnswer.split(" ");
  const acceptedWords = acceptedAnswers.flatMap((acceptedAnswer) =>
    normalizeAnswer(acceptedAnswer).split(" ")
  );

  return answerWords.some((answerWord) => acceptedWords.some((acceptedWord) =>
    answerWord.length >= 5 && acceptedWord.length >= 5 &&
    editDistanceAtMostOne(answerWord, acceptedWord)
  ));
}

function getCurrentRiddle() {
  return SITE.riddles[currentRiddleIndex];
}

function fillPreview() {
  document.title = SITE.preview.overline;
  document.querySelector("#preview-overline").textContent = SITE.preview.overline;
  document.querySelector("#preview-title").textContent = SITE.preview.title;
  document.querySelector("#preview-text").textContent = SITE.preview.text;
  document.querySelector("#start-button").textContent = SITE.preview.buttonText;
  previewImage.src = SITE.preview.imageSrc;
  previewImage.alt = SITE.preview.imageAlt;
}

function updateProgress() {
  const steps = [...progressLine.querySelectorAll("span")];

  if (steps.length !== SITE.riddles.length) {
    progressLine.replaceChildren(...SITE.riddles.map(() => document.createElement("span")));
  }

  const currentSteps = [...progressLine.querySelectorAll("span")];

  currentSteps.forEach((step, index) => {
    step.classList.toggle("is-complete", index < currentRiddleIndex);
    step.classList.toggle("is-active", index === currentRiddleIndex);
  });
}

function fillRiddle() {
  const currentRiddle = getCurrentRiddle();

  document.title = `${SITE.overline} · ${currentRiddle.title.toLowerCase()}`;
  document.querySelector("#site-overline").textContent = SITE.overline;
  document.querySelector("#page-title").textContent = currentRiddle.riddle;
  document.querySelector("#riddle-text").textContent =
    `${currentRiddleIndex + 1} из ${SITE.riddles.length}`;
  document.querySelector("#answer-label").textContent = SITE.answerLabel;
  document.querySelector("#submit-button").textContent = SITE.buttonText;
  input.placeholder = SITE.answerLabel;
  progressLine.style.setProperty("--step-count", SITE.riddles.length);
  input.value = "";
  message.textContent = "";
  failedAttempts = 0;
  updateProgress();
}

function fillSuccess() {
  document.querySelector("#success-overline").textContent = SITE.successOverline;
  document.querySelector("#success-title").textContent = SITE.successTitle;
  document.querySelector("#success-text").textContent = SITE.successText;
  document.querySelector("#success-note").textContent = SITE.successNote;
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
  previewPanel.hidden = true;
  riddlePanel.hidden = true;
  successPanel.hidden = false;
  document.title = `${SITE.overline} · ${SITE.successTitle.toLowerCase()}`;
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

  if (isAcceptedAnswer(
    answer,
    currentRiddle.acceptedAnswers,
    currentRiddle.allowNameVariant,
    currentRiddle.answerGroups
  )) {
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

startButton.addEventListener("click", () => {
  previewPanel.hidden = true;
  riddlePanel.hidden = false;
  fillRiddle();
  window.scrollTo({ top: 0, behavior: "smooth" });

  window.setTimeout(() => {
    input.focus();
  }, 220);
});

fillRiddle();
fillSuccess();
fillPreview();
