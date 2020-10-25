const asyncAwait = async () => {
  document.querySelector('#nowActivity').innerText = 'Now Clicked 🎈';
  const firstName = await getFirstName();
  const lastName = await getLastName();
  const fullName = `${firstName} ${lastName}`;

  document.querySelector('#hasil').innerText = fullName;
  document.querySelector('#status').innerText = 'Fulfilled ✅';
};
