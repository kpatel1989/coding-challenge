function minimumBribes(q) {
    let queLen = q.length;
    let bribe = 0;
    let lastMan = 1, lastManPos = 0, minExpected = 1;
    let queueMap = {};
    for ( let j = 0; j < queLen; j++) {
        queueMap[q[j]] = j;

        lastMan = Math.max(lastMan, q[j]);
        lastManPos = lastMan === q[j] ? j : lastManPos;
        if (q[j] == minExpected) {
            while(queueMap[minExpected] != undefined) {
                minExpected++;
            }
        }
        let swaps = q[j] - (j + 1);
        if (swaps > 2) {
            bribe = 'Too chaotic';
            break;
        } else if (swaps == 1 || swaps == 2) {
            bribe += swaps;
        } else if (q[j] > minExpected) {
            if (lastManPos < j) {
                let expectedPosition = lastManPos + (lastMan - (lastManPos+1));
                if (j < expectedPosition) {
                    bribe += (expectedPosition - j);
                }
            }
        }

    }
    console.log(bribe);
}


minimumBribes([2,1,5,3,4]);
minimumBribes([5,1,2,3,7,8,6,4]);
minimumBribes([1,2,5,3,7,8,6,4]);
minimumBribes([1,2,5,3,7,8,6,4,9,12,13,11,10]);

// min = 4;
// max = 8; maxPosition = 6;
// curr = 6;
// position = 7;
// expectedPosition = 8

// 6 - 7 = -1 +