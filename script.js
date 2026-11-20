
const TELEGRAM_URL = "https://t.me/NEXORA_EU";

const flags = {
  "Німеччина": "🇩🇪",
  "Бельгія": "🇧🇪",
  "Нідерланди": "🇳🇱"
};

const jobs = [];

function add(country, category, items) {
  items.forEach(([profession, city]) => {
    jobs.push({ country, category, profession, city });
  });
}

// ЕЛЕКТРОЕНЕРГЕТИКА
add("Бельгія", "Електроенергетика", [
  ["Монтаж ліфтів", "Мехелен та округ"]
]);

add("Німеччина", "Електроенергетика", [
  ["Монтаж систем PV (сонячних панелей) на дахах", "Траппенкамп"],
  ["Монтаж сонячних батарей", "Алерстедт"],
  ["Монтаж сонячних панелей", "Штутгарт"],
  ["Монтаж сонячних панелей", "Нюрнберг"],
  ["Монтаж сонячних панелей", "Гамбург та район"],
  ["Монтаж сонячних панелей", "Верден"],
  ["Монтаж сонячних панелей", "Дармштадт"],
  ["Монтаж сонячних панелей на дахах", "Бремен"],
  ["Монтаж сонячних панелей на дахах", "Гамбург та околиці"],
  ["Монтаж сонячних панелей на даху", "Брахтталь"],
  ["Монтаж сонячних панелей на даху", "Харен"],
  ["Монтаж сонячних панелей на даху", "Саксонія"],
  ["Електрик", "Мюнхен"],
  ["Електрик", "Фризойте"],
  ["Електрик", "Вольфсбург"],
  ["Електрик", "Дамме"],
  ["Електрик PV", "Оберхаузен"],
  ["Електрик (підключення сонячних панелей)", "Брахтталь"],
  ["Електрик (підключення сонячних панелей)", "Саксонія"],
  ["Електромонтаж", "Дюссельдорф та околиці"],
  ["Електромонтаж", "Майнц"],
  ["Електромонтаж", "Франкфурт-на-Майні"]
]);

// БУДІВНИЦТВО — НІМЕЧЧИНА
add("Німеччина", "Будівництво", [
  ["Плиточник", "Хоф"],
  ["Плиточник", "Швебиш-Халль"],
  ["Плиточник", "Бад-Герренальб та околиці"],
  ["Плиточник", "Штутгарт"],
  ["Плиточник", "Лейпциг, Нюрнберг та околиці"],
  ["Плиточник", "Зигмарингендорф"],
  ["Плиточник", "Нюрнберг"],
  ["Плиточник", "Гамбург"],
  ["Плиточник", "Оснабрюк"],
  ["Плиточник-штукатур", "Ферден"],
  ["Сантехнік", "Округи Триер-Зарбург"],
  ["Сантехнік", "Вальдорф"],
  ["Сантехнік систем опалення", "Бюрен"],
  ["Спеціаліст з укладання бруківки", "Райне"],
  ["Будівельник-універсал", "Дортмунд"],
  ["Укладання бруківки та тротуарної плитки", "Зельце"],
  ["Укладальник бруківки", "Райне"],
  ["Універсал-внутрішник", "Гревенвисбах"],
  ["Універсал-внутрішник", "Диллинген (Саар)"],
  ["Штукатур", "Прюм"],
  ["Маляр", "Дюссельдорф, Леверкузен, Мюнхен"],
  ["Маляр", "Геттінген"],
  ["Майстер внутрішніх оздоблювальних робіт", "Прюм"],
  ["Майстер-універсал", "Магдебург"],
  ["Міні-екскаватор", "Кобленц (радіус 100 км)"],
  ["Міні-екскаватор", "Регіон Ганновер"],
  ["Мокрий фасад", "Дюссельдорф, Леверкузен, Мюнхен"],
  ["Монтаж", "Гамбург, Мюнхен, Берлін та інші міста"],
  ["Монтаж алюмінієвих конструкцій", "Швабах"],
  ["Монтаж алюмінієвих дахів", "Еберсбах та радіус 70 км"],
  ["Монтаж вентильованих фасадів", "Бонн"],
  ["Монтаж гіпсокартону", "Нюрнберг"],
  ["Монтаж ліфтів", "Нюрнберг, Мюнхен, Бремен"],
  ["Монтаж металоконструкцій", "Мюнстер, Лугау"],
  ["Монтаж вікон", "Берлін"],
  ["Монтаж вікон і дверей", "Нюрнберг"],
  ["Монтаж систем опалення", "Дамме"],
  ["Монтаж підлог", "Зигмарингендорф"],
  ["Монтаж систем кондиціонування", "Східна частина країни"],
  ["Монтаж систем опалення та теплових насосів", "Хайльбронн (Баден-Вюртемберг)"],
  ["Монтаж систем опалення, кондиціонування та теплових насосів", "Баден-Вюртемберг, Фальц, Саарланд"],
  ["Монтаж теплових насосів", "Брахтталь"],
  ["Монтаж теплових насосів", "Мюнхен"],
  ["Опалубник", "Гарбсен"],
  ["Опалубник-бетонник", "Мінден та радіус 60 км"],
  ["Опалубник-бетонник", "Зігбург"]
]);

// БУДІВНИЦТВО — БЕЛЬГІЯ
add("Бельгія", "Будівництво", [
  ["Плиточник", "Синт-Никлас"],
  ["Тротуарник-плиточник", "Антверпен"],
  ["Універсал-внутрішник", "Різні міста"],
  ["Універсал-внутрішник", "Брюссель та околиці"],
  ["Фасадчик", "Остенде"],
  ["Фасадчик", "Розеларе"],
  ["Штукатур", "Вевелгем"],
  ["Штукатур", "Льєж"],
  ["Штукатур", "Льєж"],
  ["Штукатур", "Гент"],
  ["Штукатур", "Лімбург"],
  ["Штукатур (машинна штукатурка)", "Лімбург та околиці"],
  ["Маляр", "Синт-Никлас"],
  ["Майстер-універсал", "Ост-Фландрія та Вест-Фландрія"],
  ["Майстер-універсал", "Брюссель"],
  ["Машинна штукатурка", "Лімбург"],
  ["Мокрий фасад", "Антверпен та околиці"],
  ["Монтаж меблів", "Західна Фландрія"],
  ["Монтажник вікон і дверей", "Евергем"],
  ["Монтаж систем кондиціонування", "Крамершоек"],
  ["Монтаж систем кондиціонування", "Лімбург"],
  ["Монтаж систем опалення", "Льєж"],
  ["Монтаж будівельних риштувань", "Західна та Східна Фландрія"]
]);

// БУДІВНИЦТВО — НІДЕРЛАНДИ
add("Нідерланди", "Будівництво", [
  ["Універсал-внутрішник", "Амстердам"],
  ["Монтаж газових котлів", "По всій країні"],
  ["Монтаж гіпсокартону", "Ойстервейк"],
  ["Монтаж кухні", "Рурмонд"]
]);

// ТЕЛЕКОМУНІКАЦІЇ
add("Німеччина", "Телекомунікації", [
  ["Бруківник", "Регіон Ганновер"],
  ["Прокладання інтернет-кабелю", "Вольфрамс-Ешенбах"],
  ["Прокладання кабелю", "Кобленц (радіус 100 км)"],
  ["Прокладання кабелю", "Вупперталь"]
]);

// ПЕРЕВЕЗЕННЯ
add("Німеччина", "Перевезення", [
  ["Водій CE", "Гінсгайм-Густафсбург"],
  ["Водій CE", "Дюссельдорф"],
  ["Водій CE", "Хільден"]
]);

add("Бельгія", "Перевезення", [
  ["Водій CE", "Стабрук"]
]);

// ВИРОБНИЦТВО
add("Німеччина", "Виробництво", [
  ["Маляр на виробництво", "Аугустдорф"],
  ["Механік-ливарник", "Майнц"],
  ["Формувальник", "Майнц"]
]);

// НЕКВАЛІФІКОВАНА РОБОТА
add("Німеччина", "Некваліфікована робота", [
  ["Підсобник", "Донауешинген"],
  ["Помічник інженера з кондиціонування", "Східна частина країни"],
  ["Помічник монтажника", "Мелле"],
  ["Помічник монтажника металоконструкцій", "Вайкерсхайм"],
  ["Помічник монтажника опалення", "Вормс"],
  ["Помічник монтажника сонячних панелей", "Нойштадт-ін-Гольштайн"],
  ["Помічник з монтажу вікон", "Оснабрюк"],
  ["Помічник з монтажу СЕС", "Мангейм"],
  ["Помічник з укладання бруківки", "Райне"],
  ["Працівник складу", "Хамм"],
  ["Працівник складу", "Ведемарк"],
  ["Різноробочий", "Буцбах"],
  ["Різноробочий", "Зукков"],
  ["Різноробочий на будівництво парканів", "Ленгеде"],
  ["Шліфування металоконструкцій", "Штадталлендорф"]
]);

// АВТОМОБІЛЬНИЙ СЕРВІС
add("Німеччина", "Автомобільний сервіс", [
  ["Автомаляр", "Міттенар-Оффенбах"],
  ["Автомеханік", "Гамбург"],
  ["Автоелектрик", "Берлін"],
  ["Кузовник", "Міттенар-Оффенбах"]
]);

// ЕЛЕМЕНТИ САЙТУ
const jobGrid = document.getElementById("jobGrid");
const searchInput = document.getElementById("search");
const countrySelect = document.getElementById("country");
const typeSelect = document.getElementById("type");

let visibleCount = 18;

document.getElementById("totalJobs").textContent = jobs.length;

// Додаємо категорії у фільтр
[...new Set(jobs.map(job => job.category))].forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  typeSelect.appendChild(option);
});

// Кількість вакансій у країнах
function updateCountryCounts() {
  const ids = {
    "Німеччина": "countGermany",
    "Бельгія": "countBelgium",
    "Нідерланди": "countNetherlands"
  };

  Object.entries(ids).forEach(([country, id]) => {
    document.getElementById(id).textContent =
      jobs.filter(job => job.country === country).length + " вакансій";
  });
}

// Фільтрація
function getFilteredJobs() {
  const query = searchInput.value.trim().toLocaleLowerCase("uk");
  const country = countrySelect.value;
  const category = typeSelect.value;

  return jobs.filter(job => {
    const text =
      `${job.profession} ${job.city} ${job.country} ${job.category}`
      .toLocaleLowerCase("uk");

    return (!query || text.includes(query)) &&
      (country === "all" || job.country === country) &&
      (category === "all" || job.category === category);
  });
}

// Показ вакансій
function filterJobs(reset = true) {
  if (reset) visibleCount = 18;

  const filtered = getFilteredJobs();

  jobGrid.innerHTML = filtered.slice(0, visibleCount).map(job => {
    const index = jobs.indexOf(job);

    return `
      <article class="job-card" tabindex="0" role="button"
        onclick="showDetails(${index})"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();showDetails(${index})}">

        <div class="job-meta">
          <span class="job-flag">${flags[job.country]} ${job.country}</span>
          <span class="job-category">${job.category}</span>
        </div>

        <h3>${escapeHTML(job.profession)}</h3>
        <p class="job-city">📍 ${escapeHTML(job.city)}</p>

        <a class="job-open" href="${TELEGRAM_URL}" target="_blank"
          rel="noopener" onclick="event.stopPropagation()">
          Перейти до Telegram →
        </a>
      </article>
    `;
  }).join("");

  document.getElementById("resultCount").textContent =
    `Знайдено вакансій: ${filtered.length}`;

  document.getElementById("empty").hidden = filtered.length !== 0;
  document.getElementById("loadMore").hidden =
    visibleCount >= filtered.length;
}

// Показати більше
function showMore() {
  visibleCount += 18;
  filterJobs(false);
}

// Скинути фільтри
function resetFilters() {
  searchInput.value = "";
  countrySelect.value = "all";
  typeSelect.value = "all";
  filterJobs();
}

// Фільтр за країною
function selectCountry(country) {
  countrySelect.value = country;
  filterJobs();

  document.getElementById("jobs").scrollIntoView({
    behavior: "smooth"
  });
}

// Деталі вакансії
function showDetails(index) {
  const job = jobs[index];

  document.getElementById("detailCategory").textContent = job.category;
  document.getElementById("detailTitle").textContent = job.profession;

  document.getElementById("detailDescription").textContent =
    `${flags[job.country]} ${job.country} · 📍 ${job.city}. Натисни кнопку нижче, щоб відкрити Telegram-канал NEXORA.`;

  openModal("detailsModal");
}

// Захист тексту карток
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

// Модальні вікна
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// Вхід — демонстраційна форма
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  document.getElementById("loginResult").textContent =
    (!email || !password)
      ? "Заповни email і пароль."
      : "Це демонстраційний макет: справжню авторизацію не підключено.";
}

// Закриття модального вікна кліком поза ним
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal(modal.id);
  });
});

// Закриття клавішею Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.show").forEach(modal => {
      closeModal(modal.id);
    });
  }
});

// Події фільтрів
searchInput.addEventListener("input", () => filterJobs());
countrySelect.addEventListener("change", () => filterJobs());
typeSelect.addEventListener("change", () => filterJobs());

// Мобільне меню
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("open");
  });
});

// Запуск сайту
updateCountryCounts();
filterJobs();
