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

console.log(climb(4, [1,2]));
console.log(climb(4, [1,3,5]));
let pos = climb(10, [1,3,5])
console.log(pos, pos.length);