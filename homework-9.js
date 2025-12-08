// Подписка на email
const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('subscribe-email');

emailInput.addEventListener("input", () => {
    emailInput.style.border = "none";
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
        console.log('Неверный email');
        emailInput.style.border = "1px solid red";
        return;
    }
    emailInput.style.border = "";
    console.log({ email: email });
});

// Регистрация пользователя
const registerForm = document.getElementById("register-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const birthDate = document.getElementById("birth-date");
const login = document.getElementById("login");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("password-repeat");
const errorMessage = document.getElementById("error-message");

let registeredUser = null; // хранит зарегистрированного пользователя

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Скрываем ошибки
    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    // Проверка всех полей
    if (!firstName.value.trim() ||
        !lastName.value.trim() ||
        !birthDate.value ||
        !login.value.trim() ||
        !password.value ||
        !passwordRepeat.value) 
    {
        errorMessage.textContent = "Заполните все поля!";
        errorMessage.style.display = "block";
        return;
    }

    // Проверка совпадения паролей
    if (password.value !== passwordRepeat.value) {
        errorMessage.textContent = "Пароли не совпадают!";
        errorMessage.style.display = "block";
        return;
    }

    // Создание пользователя
    registeredUser = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        birthDate: birthDate.value,
        login: login.value.trim(),
        password: password.value,
        createdOn: new Date(),
    };

    console.log("Регистрация успешна!");
    console.log(registeredUser);

    // Можно очистить форму после регистрации
    registerForm.reset();
    alert("Регистрация прошла успешно!");
});

// Модальное окно авторизации
const authButton = document.getElementById("auth-button");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeModal = modal.querySelector(".close-modal");
const authForm = document.getElementById("auth-form");
const authError = document.getElementById("auth-error"); // заранее добавь <p id="auth-error" style="color:red; display:none"></p> в HTML под формой

authButton.addEventListener("click", () => {
    modal.classList.add("modal-showed"); // открыть модалку
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-showed"); // закрыть крестиком
});

overlay.addEventListener("click", () => {
    modal.classList.remove("modal-showed"); // закрыть по затемнённому фону
});

// Глобальная переменная для текущего пользователя
let currentUser = null;

// Авторизация
authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginInput = document.getElementById("auth-login").value.trim();
    const passwordInput = document.getElementById("auth-password").value;

    if (!registeredUser) {
        authError.textContent = "Сначала зарегистрируйтесь!";
        authError.style.display = "block";
        return;
    }

    if (loginInput === registeredUser.login && passwordInput === registeredUser.password) {
        // Успешная авторизация
        modal.classList.remove("modal-showed");
        authForm.reset();
        authError.style.display = "none";

        // Создаем текущего пользователя и добавляем lastLogin
        currentUser = { ...registeredUser, lastLogin: new Date() };

        console.log("Текущий пользователь:", currentUser);
        alert(`Привет, ${currentUser.firstName}! Вы успешно вошли. Время последнего входа: ${currentUser.lastLogin}`);
    } else {
        authError.textContent = "Неверный логин или пароль";
        authError.style.display = "block";
    }
});