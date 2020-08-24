function largestItemAssociation(itemAssociation)
{
    // WRITE YOUR CODE HERE
    let associations = {};
    let totalAssociations = itemAssociation.length;
    for (let i = 0; i < totalAssociations; i++) {
        let itemsCountInAssociation = itemAssociation[i].length;
        for (let j = 0; j < itemsCountInAssociation; j++) {
            let item = itemAssociation[i][j];
            let existingAssociation = -1;
            if (Object.keys(associations).length > 0) {
                existingAssociation = getExistingAssociation(item, itemAssociation, i);
            } else {
                associations[i] = i;
            }
            if (existingAssociation > -1) {
                associations[i] = existingAssociation;
                break;
            } else {
                associations[i] = i;
            }
        }
    }
    console.log(associations);
    let links = [];
    Object.keys(associations).forEach(a => {

    })
}

function getExistingAssociation(item, associations, maxRow) {
    for (let i = 0; i < maxRow; i++) {
        let itemsCountInAssociation = associations[i].length;
        for (let j = 0; j < itemsCountInAssociation; j++) {
            console.log(associations[i][j], item);
            if (associations[i][j] === item) {
                return i;
            }
        }
    }
    return -1;
}

let a = [["item1", "item2"],
    ["item3", "item4"],
    ["item4", "item5"]];
console.log(largestItemAssociation(a));
