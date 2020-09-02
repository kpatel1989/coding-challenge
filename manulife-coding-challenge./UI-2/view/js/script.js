(async function () {
    let insertButton = document.getElementById('button');
    let input = document.getElementById('input');
    let totalCount = document.getElementById('totalCount');
    let table = document.getElementById('table');

    // Function triggered when insert button is clicked.
    const searchBtnClick = async function () {
        const inputValue = input.value;
        const regex = new RegExp(/^[a-zA-Z]*$/);
        if (inputValue == '' || !regex.test(inputValue)) {
            alert('Please provide the valid input');
            return;
        }
        showLoader(true);
        table.innerHTML = '';
        const url = `https://jsonmock.hackerrank.com/api/cities?city=${inputValue}`;
        const response = await fetch(url).then(response => response.json());
        console.log(response.data);
        totalCount.innerHTML = `Total cities found: ${response.data.length}`;
        const citiesGroupedByState = response.data.reduce((group, cityData) => {
            group[cityData.state] = group[cityData.state] || [];
            group[cityData.state].push(cityData.city);
            return group;
        }, {});
        showLoader(false);
        Object.keys(citiesGroupedByState).forEach(stateGroup => {
            const stateRow = document.createElement('tr');
            let column = document.createElement('td');
            column.innerHTML = stateGroup;
            stateRow.appendChild(column);
            citiesGroupedByState[stateGroup].forEach(city => {
                let column = document.createElement('td');
                column.innerHTML = city;
                stateRow.appendChild(column);
            });
            table.appendChild(stateRow);
        });
    }

    const showLoader = (show)  => {
        let loader = document.querySelector('.loader');
        if (show) {
            loader.style.display = "block";
        } else {
            loader.style.display = "none";
        }
    }
    // Add event listener on button click.
    insertButton.addEventListener('click', searchBtnClick, false);
})();