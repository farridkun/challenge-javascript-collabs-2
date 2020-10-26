// ? Promise.all on Module
const getFirstName = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      return true ? resolve('Binar') : reject(Error('Gagal'));
    }, 3000);
  });
  return promise;
};

const getLastName = (first) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return true ? resolve(`${first} Academy`) : reject(Error('Gagal'));
    }, 3000);
  });
};

const modulePromiseAll = () => {
  document.querySelector('#nowActivity').innerText = 'Now Clicked 🎈';
  document.querySelector('#hasil').innerText = 'Waiting a seconds... ⌛';
  getFirstName()
    .then((hasil) => getLastName(hasil))
    .then((hasil2) => {
      document.querySelector('#hasil').innerText = hasil2;
      document.querySelector('#status').innerText = 'Fulfilled ✅';
    })
    .catch(
      (error) =>
        (document.querySelector('#status').innerText = `Hmm ❌ ${error}`)
    );
};
