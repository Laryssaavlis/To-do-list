const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = taskText;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        span.classList.add('completed');
      } else {
        span.classList.remove('completed');
      }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});