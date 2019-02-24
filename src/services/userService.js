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
      history.push('/');
    } else {
      rej({ error: 'invalid username or password' });
    }
  }, 3000);
});

export {
  getUser,
};
