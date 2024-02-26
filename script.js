/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

const sendInput = document.querySelector('#input'); 
const itemsContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) { 
    if (event.key == 'Enter') {
        
        const messageText = sendInput.value;

        const newMessage = document.createElement('div');
        newMessage.classList.add('item');
        newMessage.textContent = messageText;
        
        if (messageText != '') {
            itemsContainer.append(newMessage);
        }
    
        sendInput.value = '';

        const input = document.querySelectorAll('.item');
        for (let item of input) {
        item.classList.toggle('done'); 
    }

    }
})


/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
