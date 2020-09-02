/**
 * There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
 * Given N, write a function that returns the number of unique ways you can climb the staircase.
 * The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time,
you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5},
you could climb 1, 3, or 5 steps at a time.
 */



 function climb(steps, stepsAtatime) {
     let posibilities = [];
     if (steps == 0) return [];
    for(let i = 0; i < stepsAtatime.length; i++) {
        let step = stepsAtatime[i];
        if (step == steps) {
            posibilities = posibilities.concat([step]);
        }
        else if (steps - step > 0) {
            let ways = climb(steps-step, stepsAtatime).map(ps => [step].concat(ps));
            posibilities = posibilities.concat(ways);
        }
    };
    return posibilities;
 }

 function stepPerms(steps) {
    return takeSteps(steps, {});
}

function takeSteps(steps, possibleWays) {
    if (steps == 1) {
        return 1;
    } else if (steps == 2) {
        return 2;
    } else if (steps == 3) {
        return 1 + takeSteps(steps - 1, possibleWays) + takeSteps(steps - 2, possibleWays);
    }

    let firstStep = possibleWays[steps - 1] ? possibleWays[steps - 1] : takeSteps(steps - 1, possibleWays);
    let twoSteps = possibleWays[steps - 2] ? possibleWays[steps - 2] : takeSteps(steps - 2, possibleWays);
    let threeStep = possibleWays[steps - 3] ? possibleWays[steps - 3] : takeSteps(steps - 3, possibleWays);
    if (!possibleWays[steps-1]) {
        possibleWays[steps - 1] = firstStep;
    }
    if (!possibleWays[steps - 2]) {
        possibleWays[steps - 2] = twoSteps;
    }
    if (!possibleWays[steps - 3]) {
        possibleWays[steps - 3] = threeStep;
    }
    return firstStep + twoSteps + threeStep;
}

function findNumberOfWays(stairCases) {


    for (let sItr = 0; sItr < stairCases.length; sItr++) {
        const n = parseInt(stairCases[sItr], 10);
        const res = stepPerms(n);
        console.log(res + '\n');
    }
}


console.log(climb(4, [1,2]));
console.log(climb(4, [1,3,5]));
let pos = climb(10, [1,3,5])
console.log(pos, pos.length);

console.log(stepPerms(4, [1,2]));
console.log(stepPerms(3, [1,3,5]));
console.log(stepPerms(10, [1,3,5]));

let ways = [
    32,
    33,
    35,
    36,
    36];

console.log(findNumberOfWays(ways));