    let todoList = [
      {task: "Buy the milk", done: false},
      {task: "Pay for internet", done: true},
      {task: "Call the mom", done: false},
      {task: "Read the book", done: false},
      {task: "Make home work", done: true},
      {task: "Watch the film", done: false},
      {task: "Wash the dishes", done: true},
      {task: "Walk with dog", done: false},
      {task: "Order the pizza", done: false},
      {task: "Visit the doctor", done: true},
      {task: "Repair computer", done: false},
      {task: "Present flowers to the girlfriend", done: true},
      {task: "Play video games", done: false},
      {task: "Send resume", done: true},
      {task: "Go on vacation", done: false}
    ];
  
    const ulElement = document.querySelector('.list');
    const taskInput = document.querySelector('.task-input');
    const createButton = document.querySelector('.actions .btn');
    const allButton = document.getElementById('all');
    const completedButton = document.getElementById('completed');
    const uncompletedButton = document.getElementById('uncompleted');
  
    function viewToDOList(filter = 'all') {
      ulElement.innerHTML = '';
  
      todoList.forEach(item => {
        if (filter === 'completed' && !item.done) return;
        if (filter === 'uncompleted' && item.done) return;
  
        const liElement = document.createElement('li');
        liElement.textContent = item.task;
        liElement.className = item.done ? 'list-item list-item_done' : 'list-item';
        liElement.addEventListener('click', () => {
          item.done = !item.done;
          viewToDOList(filter);
        });
        ulElement.append(liElement);
      });
    }
  
    createButton.addEventListener('click', () => {
      const task = taskInput.value.trim();
      if (task) {
        todoList.unshift({task: task, done: false});
        taskInput.value = '';
        viewToDOList();
      }
    });
  
    allButton.addEventListener('click', () => viewToDOList('all'));
    completedButton.addEventListener('click', () => viewToDOList('completed'));
    uncompletedButton.addEventListener('click', () => viewToDOList('uncompleted'));
  
    viewToDOList();