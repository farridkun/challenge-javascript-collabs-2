const promiseChaining = () => {
  document.querySelector('#nowActivity').innerText = 'Now Clicked 🎈';
  getUser(11)
    .then((res) => {
      document.querySelector(
        '#hasil'
      ).innerText = `${res.id} - ${res.success} - ${res.message}`;
      document.querySelector('#status').innerText = 'Progress 1 of 3 ❗';
      return getUser(10);
    })
    .then((res) => {
      document.querySelector(
        '#hasil'
      ).innerText = `${res.id} - ${res.success} - ${res.message}`;
      document.querySelector('#status').innerText = 'Progress 2 of 3 ❗❗';
      return getUser(9);
    })
    .then((res) => {
      document.querySelector('#status').innerText = 'Fulfilled ✅';
      document.querySelector(
        '#hasil'
      ).innerText = `${res.id} - ${res.success} - ${res.message}`;
    })
    .catch((error) => {
      document.querySelector('#status').innerText = `Hmm ❌ ${error}`;
    });
};
