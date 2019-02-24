const getUser = (username, password) => new Promise((res, rej) => {
  const credentials = {
    username: 'alexander',
    password: '12345',
  };

  const user = {
    name: 'alexander',
    surname: 'matiugin',
    email: 'alexander.matiugin@gmail.com',
    age: 25,
  };

  setTimeout(() => {
    if (username === credentials.username && password === credentials.password) {
      res({ user });
    } else {
      rej({ error: 'invalid username or password' });
    }
  }, 1000);
});

const onAuthChanged = () => new Promise((res, rej) => {
  setTimeout(() => {
    const user = localStorage.getItem('user');

    if (user) {
      res(JSON.parse(user));
    } else {
      rej({ error: 'not authorize' });
    }
  }, 1000);
});

export {
  getUser,
  onAuthChanged,
};
