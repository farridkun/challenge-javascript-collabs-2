const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(Error('Invalid ID'));
      }
      let response;
      if (id > 10) {
        resolve(
          (response = {
            success: false,
            id: id,
            message: 'User Not Found!'
          })
        );
      } else {
        resolve(
          (response = {
            success: true,
            id: id,
            message: 'User Found'
          })
        );
      }
    }, 2000);
  });
};

const promiseAll = () => {
  document.querySelector('#nowActivity').innerText = 'Now Clicked 🎈';

  Promise.all([
    getUser(3), // 1
    getUser(4), // 2
    getUser(10), // 3
    getUser(11), // 4
    getUser(12) // 5
  ])

    .then((res) =>
      res.map((ress, i) => {
        document.querySelector('#hasil').innerText = `${i + 1}. ${ress.id} - ${
          ress.success
        } - ${ress.message}`;
        document.querySelector('#status').innerText = 'Pending ❗❗❗';
      })
    )
    .catch((error) => {
      document.querySelector('#status').innerText = `Hmm ❌ ${error}`;
    });
};
