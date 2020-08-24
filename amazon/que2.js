function largestItemAssociation(itemAssociation)
{
    // WRITE YOUR CODE HERE
    let associations = [];
    let totalAssociations = itemAssociation.length;
    for (let i = 0; i < totalAssociations; i++) {
        let itemsCountInAssociation = itemAssociation[i].length;
        for (let j = 0; j < itemsCountInAssociation; j++) {
            let item = itemAssociation[i][j];
            console.log(item);
            let existingAssociation = false;
            if (associations.length > 0) {
                existingAssociation = getExistingAssociation(item, associations);
            } else {
                associations.push([item]);
                lastAssociation = 0;
            }
            if (existingAssociation) {
                merge(existingAssociation, itemAssociation[i]);
                break;
            } else {
                if (j == 0) {
                    lastAssociation++;
                }
                associations[lastAssociation].push(item);
            }
        }
    }
    console.log(associations);
}

function merge(existingAssociation, newAssociation) {
    let count = newAssociation.length;
    for(let i = 0; i < count; i++) {
        existingAssociation.push(newAssociation[i]);
    }
}

function getExistingAssociation(item, associations) {
    let totalAssociations = associations.length;
    console.log("Total Associations created", associations);
    for (let i = 0; i < totalAssociations; i++) {
        let itemsCountInAssociation = associations[i].length;
        for (let j = 0; j < itemsCountInAssociation; j++) {
            console.log("Get Existing", item, associations[i][j]);
            if (associations[i][j] === item) {
                console.log("True");
                return associations[i];
            }
        }
    }
    return null;
}

let a = [["item1", "item2"],
    ["item3", "item4"],
    ["item4", "item5"]];
console.log(largestItemAssociation(a));
