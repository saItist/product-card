const USERS_KEY = 'users';
const status = document.getElementById('status');
const usersContainer = document.getElementById('users');

const loadBtn = document.getElementById('load-users');
const removeAllBtn = document.getElementById('remove-all');


function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem(USERS_KEY));
}

function saveUsersToStorage(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function renderUsers(users) {
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';

    card.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p>${user.email}</p>
      <p>Возраст: ${user.age}</p>
      <button data-id="${user.id}">Удалить</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      deleteUser(user.id);
    });

    usersContainer.append(card);
  });
}


async function fetchUsers() {
  try {
    // симуляция долгой загрузки
    await new Promise(resolve => setTimeout(resolve, 1500));

    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error('Ошибка загрузки данных');
    }

    const data = await response.json();
    saveUsersToStorage(data.users);
    return data.users;

  } catch (error) {
    status.textContent = 'Ошибка при загрузке данных';
    throw error;
  }
}

function init() {
  const users = getUsersFromStorage();

  if (!users) {
    status.textContent = 'Данные загружаются…';

    fetchUsers()
      .then(users => {
        status.textContent = '';
        renderUsers(users);
      })
      .catch(() => {});
  } else {
    status.textContent = '';
    renderUsers(users);
  }
}

function deleteUser(id) {
  const users = getUsersFromStorage();
  const updatedUsers = users.filter(user => user.id !== id);

  saveUsersToStorage(updatedUsers);
  renderUsers(updatedUsers);
}

removeAllBtn.addEventListener('click', () => {
  localStorage.removeItem(USERS_KEY);
  usersContainer.innerHTML = '';
  status.textContent = 'Все пользователи удалены';
});

loadBtn.addEventListener('click', () => {
  const users = getUsersFromStorage();

  if (!users || users.length === 0) {
    status.textContent = 'Нет пользователей для отображения';
    return;
  }

  if (usersContainer.children.length === users.length) {
    status.textContent = 'Все пользователи уже отображены';
    return;
  }

  status.textContent = '';
  renderUsers(users);
});


init();