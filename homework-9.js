import { Modal } from './modal.js';
import { Form } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- ФОРМЫ ---------- */

  const subscribeForm = new Form('subscribe-form');
  const registerForm = new Form('register-form');
  const authForm = new Form('auth-form');

  /* ---------- ПОДПИСКА ---------- */

  document
    .getElementById('subscribe-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();

      if (!subscribeForm.isValid()) {
        console.log('Неверный email');
        return;
      }

      const values = subscribeForm.getValues();
      console.log(values);

      subscribeForm.reset();
    });

  /* ---------- РЕГИСТРАЦИЯ ---------- */

  const errorMessage = document.getElementById("error-message");
  let registeredUser = null;

  document
    .getElementById('register-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();

      errorMessage.style.display = "none";

      if (!registerForm.isValid()) {
        errorMessage.textContent = "Заполните все поля!";
        errorMessage.style.display = "block";
        return;
      }

      const values = registerForm.getValues();

      if (values.password !== values['password-repeat']) {
        errorMessage.textContent = "Пароли не совпадают!";
        errorMessage.style.display = "block";
        return;
      }

      registeredUser = {
        ...values,
        createdOn: new Date(),
      };

      registerForm.reset();
      alert("Регистрация прошла успешно!");
    });

  /* ---------- МОДАЛКА ---------- */

  const authModal = new Modal('modal');
  const authButton = document.getElementById("auth-button");

  authButton.addEventListener("click", () => {
    authModal.open();
  });

  /* ---------- АВТОРИЗАЦИЯ ---------- */

  const authError = document.getElementById("auth-error");
  let currentUser = null;

  document
    .getElementById('auth-form')
    .addEventListener('input', () => {
      authError.style.display = 'none';
    });

  document
    .getElementById('auth-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();

      if (!authForm.isValid()) {
        authError.textContent = "Заполните все поля";
        authError.style.display = "block";
        return;
      }

      const values = authForm.getValues();

      if (!registeredUser) {
        authError.textContent = "Сначала зарегистрируйтесь!";
        authError.style.display = "block";
        return;
      }

      if (
        values['auth-login'] === registeredUser.login &&
        values['auth-password'] === registeredUser.password
      ) {
        authModal.close();
        authForm.reset();
        authError.style.display = "none";

        currentUser = { ...registeredUser, lastLogin: new Date() };
        alert(
          `Привет, ${currentUser.login}!\n` +
          `Дата регистрации: ${currentUser.createdOn.toLocaleString()}`
        );
      } else {
        authError.textContent = "Неверный логин или пароль";
        authError.style.display = "block";
      }
    });

  

  
});