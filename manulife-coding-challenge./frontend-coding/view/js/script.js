(function () {
    let insertButton = document.getElementById('button');
    let input = document.getElementById('input');
    let list = document.getElementById('list');

    // Function triggered when insert button is clicked.
    const insertButtonClick = function () {
        const inputValue = input.value.trim();
        // Reset input value
        input.value = '';

        // Display alert if input value is not valid.
        if (!inputValue || inputValue == '') {
            alert('Please provide the valid input');
        } else {
            // Create new list item and append to #list.
            const newListItem = document.createElement('li');
            newListItem.innerHTML = inputValue;
            list.appendChild(newListItem);
        }
    }
    // Add event listener on button click.
    insertButton.addEventListener('click', insertButtonClick, false);
})();