// Variables

let pendingArray = [];
let processArray = [];
let completeArray = [];

let userInput = document.getElementById('user-input');
let addTaskButton = document.getElementById('add-task');
let messageBox = document.getElementById('message-boxx');
let message = document.getElementById('message');

//container
let pendingContainer = document.getElementById('pending-box');
let processContainer = document.getElementById('process-box');
let completeContainer = document.getElementById('complete-box');

//removeButtons
let removePendingBtn = document.getElementsByClassName('remove-pending');
let removeProcessBtn = document.getElementsByClassName('remove-process');
let removeCompleteBtn = document.getElementsByClassName('remove-complete');

//Send Buttons
let sendToProcessBtn = document.getElementsByClassName('send-to-process');
let sendToProcessBtn2 = document.getElementsByClassName('send-to-process2');
let sendToPendingBtn = document.getElementsByClassName('send-to-pending');
let sendToompleteBtn = document.getElementsByClassName('send-to-complete');

function addTask() {
    if (userInput.value === "") {
        message.textContent = 'Enter Somthings to add.';
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 2000);
    } else {
        let userValue = userInput.value;
        pendingArray.push(userValue);
        userInput.value = '';
        messageBox.style.display = 'block';
        message.textContent = 'Successfuly Added.';
        messageBox.style.backgroundColor = 'green'
        setTimeout(() => {
            messageBox.style.display = 'none';
            messageBox.style.backgroundColor = '#ffd000'
        }, 1400);

        render();
    }
}

addTaskButton.addEventListener('click', addTask)
userInput.addEventListener('change', addTask)

function render() {
    // Clear the container before rendering
    pendingContainer.innerHTML = '';
    processContainer.innerHTML = '';
    completeContainer.innerHTML = '';

    // Rendering All Pending Templates
    // Pending ToDo
    pendingArray.forEach((todo, index) => {
        let item = document.createElement('li');
        item.innerHTML = `${todo} <span><img data-set="${index}" class="edit-pending" src="./Asset/edit.png" alt=""><img data-set="${index}" class="remove-pending" src="./Asset/delete.png" alt=""><img data-set="${index}" class="send-to-process" src="./Asset/next.png" alt=""></span>`;
        pendingContainer.appendChild(item);
    });

    // Process ToDo
    processArray.forEach((todo, index) => {
        let item = document.createElement('li');
        item.innerHTML = `${todo} <span><img data-set="${index}" class="send-to-pending" src="./Asset/previous.png" alt=""><img data-set="${index}" class="remove-process" src="./Asset/delete.png" alt=""><img data-set="${index}" class="send-to-complete" src="./Asset/next.png" alt=""></span>`;
        processContainer.appendChild(item);
    });

    // Complete Todo
    completeArray.forEach((todo, index) => {
        let item = document.createElement('li');
        item.innerHTML = `${todo} <span><img data-set="${index}" class="send-to-process2" src="./Asset/previous.png" alt=""><img data-set="${index}" class="remove-complete" src="./Asset/checked.png" alt="">`;
        completeContainer.appendChild(item);
    });

    //Removing ToDo
    //Pending
    Array.from(removePendingBtn).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            pendingArray.splice(index, 1)
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Removed.';
            messageBox.style.backgroundColor = 'red'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });

    //Process
    Array.from(removeProcessBtn).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            processArray.splice(index, 1)
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Removed.';
            messageBox.style.backgroundColor = 'red'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });

    //complete
    Array.from(removeCompleteBtn).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            completeArray.splice(index, 1)
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Completed Task.';
            messageBox.style.backgroundColor = 'green'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });

    //Sending ToDo
    // Pending to Process
    Array.from(sendToProcessBtn).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            let moveTodo = pendingArray.splice(index, 1);
            processArray.push(moveTodo[0])
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Move To Process.';
            messageBox.style.backgroundColor = 'black'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });

    // complete to Process
    Array.from(sendToProcessBtn2).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            let moveTodo = completeArray.splice(index, 1);
            processArray.push(moveTodo[0])
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Move To Process.';
            messageBox.style.backgroundColor = 'black'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });

    // Process to Pending
    Array.from(sendToPendingBtn).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            let moveTodo = processArray.splice(index, 1);
            pendingArray.push(moveTodo[0])
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Move To Pending.';
            messageBox.style.backgroundColor = 'black'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });

    // Process to complete
    Array.from(sendToompleteBtn).forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-set');
            let moveTodo = processArray.splice(index, 1);
            completeArray.push(moveTodo[0])
            render();
            messageBox.style.display = 'block';
            message.textContent = 'Successfuly Completed.';
            messageBox.style.backgroundColor = 'black'
            setTimeout(() => {
                messageBox.style.display = 'none';
                messageBox.style.backgroundColor = '#ffd000'
            }, 1400);
        })
    });
}


render();
