function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE
    let totalNeighbours = states.length;
    let newState = [];
    let dayState = [states];
    for(let i = 1; i<=days; i++) {
        dayState[i] = [];
    }
    for (let i = 0; i < totalNeighbours; i++) {
        newState.push(findState(states, dayState, i,days));
    }
    return newState;

}

function findState(states, dayState, index, day) {
    if (day === 0 || index < 0  || index > states.length-1) {
        return (index >= 0 && index <= states.length-1)  ? states[index] : 0;
    } else {
        let leftDayState = getDayState(states, dayState, day - 1, index - 1);
        let rightDayState = getDayState(states, dayState, day - 1, index + 1);
        let left = leftDayState != undefined ? leftDayState
            : findState(states, dayState, index - 1, day - 1);
        let right = rightDayState != undefined ? rightDayState
            : findState(states, dayState, index + 1, day - 1);

        if (left === right) {
            dayState[day][index] = 0;
            return 0;
        } else {
            dayState[day][index] = 1;
            return 1;
        }
    }
}

function getDayState(states, dayState, day, index) {
    if (day <= 0 || index < 0  || index > states.length-1) {
        return (index >= 0 && index <= states.length-1)  ? states[index] : 0;
    }
    return dayState[day][index];
}

let states = [1,0,1,1,0,1];
console.log(cellCompete(states, 5));

states = [];
console.log(cellCompete(states, -1));

states = [1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1];
console.log(cellCompete(states, 1000));
