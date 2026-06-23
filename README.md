# Partner Riddle Site

Минималистичный статический сайт-загадка для GitHub Pages.

## Что поменять

1. Открой `script.js`.
2. В объекте `SITE` замени:
   - `riddles` — три последовательные загадки;
   - `acceptedAnswers` внутри каждой загадки — правильные варианты ответа;
   - `successText`, `giftCaption`, `photoCaption`, `closing` — поздравление и подписи;
   - `giftSrc` — путь к фото подарка;
   - `photoSrc` — путь к фото тайника.
3. Положи фотографию тайника в `assets/`.

Сейчас используются:

```js
giftSrc: "assets/gift.jpg",
photoSrc: "assets/secret-location.jpg",
```

## Как опубликовать через GitHub Pages

Вариант через сайт GitHub:

1. Создай новый public repository, например `partner-riddle-site`.
2. Загрузи в него все файлы из этой папки.
3. Открой `Settings` -> `Pages`.
4. В `Build and deployment` выбери `Deploy from a branch`.
5. Выбери branch `main` и folder `/root`.
6. Подожди несколько минут и открой ссылку вида:

```text
https://USERNAME.github.io/partner-riddle-site/
```

Вариант через GitHub CLI:

```powershell
cd "E:\моя личность\artifacts\partner-riddle-site"
git init
git branch -M main
git add .
git commit -m "Add riddle site"
gh repo create partner-riddle-site --public --source=. --remote=origin --push
```

После этого включи GitHub Pages в `Settings` -> `Pages` на GitHub.

## Приватность

GitHub Pages публикует сайт в интернете. Не добавляй на фото адрес, документы, переписки, платежные данные или другие личные данные.

Ответ хранится в `script.js`, поэтому технически его можно посмотреть через исходный код страницы. Для романтической загадки это нормально, но это не защита секрета.

## Текущий сценарий

Сайт показывает три экрана подряд:

1. `Что последнее я готовил для своей китюськи?`
   Засчитываются варианты вроде `киндер`, `киндер пингви`, `киндер-пингви`, `kinder pingui`.
2. `36-е слово в моём последнем стишке тебе?`
   Ответ `люблю` засчитывается в любом регистре.
3. `Первое слово, которое тебе придёт в голову.`
   Засчитываются варианты вроде `комбербутч`, `камбербутч`, `камбербуч`, `комбербуч`.
