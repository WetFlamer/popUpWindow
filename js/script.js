const questionnaireApp = document.querySelector('.questionnaire-app')


    setTimeout(() => {
        questionnaireApp.style.opacity = '1'
        questionnaireApp.style.visibility = 'visible'
    }, 2000)


const closeBtn = document.querySelector('#close')
closeBtn.addEventListener('click', () => {
  questionnaireApp.style.visibility = 'hidden'
})

// Получаем необходимые элементы DOM
const progressBar = document.querySelector(".progress .bar");
const questionsWrapper = document.querySelector(".questions-wrapper");
const options = document.querySelectorAll(".option");
const inner = document.querySelector("#inner_check");
const loader = document.querySelector(".loader");
const sitesContainer = document.querySelector(".__multi-result");

// Объект со списком случайных сайтов
const websites = [
  {
    name: "Website 1",
    url: "https://www.example1.com",
  },
  {
    name: "Website 2",
    url: "https://www.example2.com",
  },
];

// Переменная для отслеживания прогресса ответов
let answeredQuestions = 0;
const choice1Image = document.querySelector("#choice_1_image");
const choice2Image = document.querySelector("#choice_2_image");
const choice3Image = document.querySelector("#choice_3_image");
const choice4Image = document.querySelector("#choice_4_image");
const choice1 = document.querySelector("#choice_1");
const choice2 = document.querySelector("#choice_2");
const choice3 = document.querySelector("#choice_3");
const choice4 = document.querySelector("#choice_4");
const choiceText = document.querySelector("#choice_1_text");
const choiceText2 = document.querySelector("#choice_2_text");
const choiceText3 = document.querySelector("#choice_3_text");
const choiceText4 = document.querySelector("#choice_4_text");

const question = document.querySelector("#question");

progressBar.style.width = "0";
// Обработчик клика на вариант ответа
options.forEach((option, index) => {
  option.addEventListener("click", () => {
    if (answeredQuestions === 0) {
      choice1Image.style.backgroundImage = `url(./images/php1kXPLN.webp)`;
      choice2Image.style.backgroundImage = "url(./images/php7Wq8g3.webp)";
      choice3Image.style.backgroundImage = "url(./images/phpECfWul.webp)";
      choice4Image.style.backgroundImage = "url(./images/phpprbNWs.webp)";
      question.textContent =
        "What type of relationship would you like to have?";

      choiceText.textContent = 'Serios'
      choiceText2.textContent = 'Casual'
      choiceText3.textContent = 'Cheating'
      choiceText4.textContent = 'Flirting'
    }
    if (answeredQuestions === 1) {
      choice1Image.style.backgroundImage = `url(./images/phpp6w5or.webp)`;
      choice2Image.style.backgroundImage = "url(./images/phpBvsQ5n.webp)";
      choice3Image.style.backgroundImage = "url(./images/phpVGDr5T.webp)";
      choice4Image.style.backgroundImage = "none";
      choice4.style.display = "none";
      question.textContent =
        "How important is the education level of a partner for you?";
        choiceText.textContent = 'Important'
        choiceText2.textContent = 'Very Important'
        choiceText3.textContent = 'Not Important'
    }
    if (answeredQuestions === 2) {
      choice1Image.style.backgroundImage = `url(./images/phpYd8oMF.webp)`;
      choice4Image.style.backgroundImage = "url(./images/phpMOhOlY.webp)";

      choice3.style.display = "none";
      choice2.style.display = "none";

      question.textContent =
        "What distance is okay for you to start a relationship?";

        choiceText.textContent = 'Online'
        choiceText4.textContent = "I'm Flexible"
    }

    // Удаляем активный класс у всех вариантов
    options.forEach((option) => option.classList.remove("active"));
    // Добавляем активный класс к выбранному варианту
    option.classList.add("active");

    // Увеличиваем счетчик ответов
    answeredQuestions++;

    // Обновляем прогресс-бар
    const progress = (answeredQuestions / options.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Проверяем, является ли текущий вопрос последним
    if (answeredQuestions === options.length) {
      // Если это последний вопрос, скрываем блок вопросов и показываем загрузку
      questionsWrapper.style.display = "none";
      loader.style.display = "block";

      // Задержка перед отображением случайных сайтов
      setTimeout(() => {
        // Очищаем контейнер с сайтами
        sitesContainer.innerHTML = "";
        inner.style.display = "none";
        // Генерируем случайные сайты из объекта и добавляем их в контейнер
        websites.forEach((website) => {
          const siteElement = document.createElement("div");
          siteElement.innerHTML = `
          <div class="result-partner"><a href="/goto/aWQ9MjIyMyZ0cz0xNjg0ODcwMjY3JnBvcz1udWxsJmNvdD02NSZyc3JjPWJvb3N0cmFuayZwc2g9M2JiNTU3Y2ExN2U2ZGRjYzBmM2IzMjRmMDc1NjJkOWQmcHZpZD1wdi42NDZkMGY3M2MxMGQyNS41MzE0MzAxNSZhZGI9bnVsbCZwY250PTEyJnRlbXBsYXRlPWR5bmFtaWNfdGVtcGxhdGUmaG9zdF9pZD0xNTYmc2VhX2xwX2NhdGVnb3J5PWRlZmF1bHQmc2VhX2xwX2NhdGVnb3J5X2lkPTI4MyZzZWFfbHBfdHJhZmZpY19zb3VyY2U9aG9tZSZzZWFfbHBfdHJhZmZpY19zb3VyY2VfaWQ9MTgmcmFua2luZ19jYXRlZ29yeT1kZWZhdWx0JnJhbmtpbmdfY2F0ZWdvcnlfaWQ9MjgzJnJhbmtpbmdfdHJhZmZpY19zb3VyY2U9aG9tZSZyYW5raW5nX3RyYWZmaWNfc291cmNlX2lkPTE4" aria-label="Silversingles" target="_blank" class="link-wrap"></a><!----><a href="/goto/aWQ9MjIyMyZ0cz0xNjg0ODcwMjY3JnBvcz1udWxsJmNvdD02NSZyc3JjPWJvb3N0cmFuayZwc2g9M2JiNTU3Y2ExN2U2ZGRjYzBmM2IzMjRmMDc1NjJkOWQmcHZpZD1wdi42NDZkMGY3M2MxMGQyNS41MzE0MzAxNSZhZGI9bnVsbCZwY250PTEyJnRlbXBsYXRlPWR5bmFtaWNfdGVtcGxhdGUmaG9zdF9pZD0xNTYmc2VhX2xwX2NhdGVnb3J5PWRlZmF1bHQmc2VhX2xwX2NhdGVnb3J5X2lkPTI4MyZzZWFfbHBfdHJhZmZpY19zb3VyY2U9aG9tZSZzZWFfbHBfdHJhZmZpY19zb3VyY2VfaWQ9MTgmcmFua2luZ19jYXRlZ29yeT1kZWZhdWx0JnJhbmtpbmdfY2F0ZWdvcnlfaWQ9MjgzJnJhbmtpbmdfdHJhZmZpY19zb3VyY2U9aG9tZSZyYW5raW5nX3RyYWZmaWNfc291cmNlX2lkPTE4" aria-label="Silversingles" target="_blank" class="partner-image"><img src="https://media.api-domain-compado.com/media/phpm0XYYa.jpg?d=x&amp;q=90" width="80" height="80" alt="partner-image"></a><!----><!----><!----><!----><div class="partner-information"><p class="text"><strong>SilverSingles offers serious 50+ dating. You're best served by a dating site that suits your needs in your golden years.</strong><br>
          &nbsp;</p>
          
          <ul>
              <li style="margin: 5px 0px;">Exclusive 50+ dating community</li>
              <li style="margin: 5px 0px;">Geared toward helping you meet that special someone</li>
              <li style="margin: 5px 0px;">Receive new matches every day until you meet that special someone</li>
              <li style="margin: 5px 0px;">Free registration</li>
              <li style="margin: 5px 0px;">Website is easy to navigate</li>
          </ul>
          
          <div style="margin: 5px 0">&nbsp;</div></div><a href="/goto/aWQ9MjIyMyZ0cz0xNjg0ODcwMjY3JnBvcz1udWxsJmNvdD02NSZyc3JjPWJvb3N0cmFuayZwc2g9M2JiNTU3Y2ExN2U2ZGRjYzBmM2IzMjRmMDc1NjJkOWQmcHZpZD1wdi42NDZkMGY3M2MxMGQyNS41MzE0MzAxNSZhZGI9bnVsbCZwY250PTEyJnRlbXBsYXRlPWR5bmFtaWNfdGVtcGxhdGUmaG9zdF9pZD0xNTYmc2VhX2xwX2NhdGVnb3J5PWRlZmF1bHQmc2VhX2xwX2NhdGVnb3J5X2lkPTI4MyZzZWFfbHBfdHJhZmZpY19zb3VyY2U9aG9tZSZzZWFfbHBfdHJhZmZpY19zb3VyY2VfaWQ9MTgmcmFua2luZ19jYXRlZ29yeT1kZWZhdWx0JnJhbmtpbmdfY2F0ZWdvcnlfaWQ9MjgzJnJhbmtpbmdfdHJhZmZpY19zb3VyY2U9aG9tZSZyYW5raW5nX3RyYWZmaWNfc291cmNlX2lkPTE4" aria-label="Silversingles" target="_blank" rel="nofollow" class="clickout-button" style="background: rgb(35, 223, 235);"> Visit Site </a></div>
          `;
          sitesContainer.appendChild(siteElement);
        });

        // Показываем контейнер с сайтами и скрываем загрузку
        sitesContainer.style.display = "block";
        loader.style.display = "none";
      }, 2000); // Измените задержку (в миллисекундах) по своему усмотрению
    } else {
      // Если это не последний вопрос, показываем следующий вопрос
      const nextQuestion = questionsWrapper.children[answeredQuestions];
      nextQuestion.style.display = "grid";
    }
  });
});

