document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.text-field');
  const addButton = document.querySelector('.add-button');
  const list = document.querySelector('.list');

  const temporaryList = [];

  addButton.addEventListener('click', function () {
    const text = input.value.trim();

    if (!/^[а-яА-Я0-9]+$/.test(text)) {
      alert('Допустимы только буквы кириллицы и цифры.');
      return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = text;

    temporaryList.push(newItem.innerHTML);

    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    let resultArray = temporaryList.sort((a, b) => a.localeCompare(b));

    resultArray.forEach((itemText) => {
      const li = document.createElement('li');
      li.textContent = itemText;
      list.appendChild(li);
    });

    input.value = '';
  });
});
