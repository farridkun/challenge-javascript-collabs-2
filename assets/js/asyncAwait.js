const asyncAwait = async () => {
  document.querySelector('#nowActivity').innerText = 'Now Clicked 🎈';
  document.querySelector('#hasil').innerText = 'Waiting a seconds... ⌛';

  const firstName = await getFirstName();
  const lastName = await getLastName();
  const fullName = `${firstName} ${lastName}`;

  document.querySelector('#hasil').innerText = fullName;
  document.querySelector('#status').innerText = 'Fulfilled ✅';
};
