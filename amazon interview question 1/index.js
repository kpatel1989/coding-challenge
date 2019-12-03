/**
 * Given the list of competitors and review. find the top N competitors having at most unique reviews.
 */
function topNCompetitors(numCompetitors, topNCompetitors, competitors,
    numReviews, reviews) {
    // WRITE YOUR CODE HERE
    let reviewCount = [];
    let head = new SortedCompetitors(0, '', null);
    for (let i = 0; i < numCompetitors; i++) {
        let count = 0;
        for (let j = 0; j < numReviews; j++) {
            if (reviews[j].includes(competitors[i])) {
                count++;
            }
        }
        if (count > 0) {
            head = head.insert(count, competitors[i]);
        }
    }
    return head.getGreaterValues(topNCompetitors);
}

class SortedCompetitors {
    constructor(count, competitor, right) {
        this.count = count;
        this.competitor = competitor;
        this.right = right;
    }
    insert(newCount, competitor) {
        if ((newCount > this.count) ||
            newCount === this.count && competitor < this.competitor) {
            let newNode = new SortedCompetitors(newCount, competitor, this);
            return newNode;
        } else {
            if (this.right) {
                this.right = this.right.insert(newCount, competitor);
            } else {
                this.right = new SortedCompetitors(newCount, competitor, null);
            }
            return this;
        }
    }
    getGreaterValues(total) {
        if (this.right && total > 1) {
            return [this.competitor].concat(this.right.getGreaterValues(total - 1));
        }
        return [this.competitor];
    }
}
// FUNCTION SIGNATURE ENDS

console.log(topNCompetitors(5, 2, ['abc', 'cde', 'erf'],
    9, ['asd adasd asd abc', 'asd a dasdas cde', 'asdasda sas abc', 'asd asd awd ascde', 'asdas dasa cde',
    'asdasd asd erf', 'asd as dasda abc', 'asd awd acsfgdfg fd erf', 'asd awda wda cde']));


console.log(topNCompetitors(5, 2, ['anacell', 'betacellular', 'certacular', 'deltacellular', 'eurocell'],
    3, ['Best service provided by anacell',
        'betacellular has great services',
        'anacell provides best service']));

console.log(topNCompetitors(5, 2, ['anacell', 'betacellular', 'certacular', 'deltacellular', 'eurocell'],
    5, ['I love anacell. Best service provided by anacell in the town',
        'betacellular has great services',
        'deltacellular provides much best service than betacellular',
        'cetracular is worst than eurocell',
        'betacellular is better than deltacellular']));