/**
 * Given a singly linked list and an integer k, remove the kth last element from the list.
 * k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
 */

 class LinkedList {
     constructor(value, node) {
         this.value = value;
         this.next = node;
     }
     findKthElement(position,  isReverse) {
        // suppose total length = n,
        // So the Kth last element from the list  is
        // x = n - k
        let currentPosition = 0;
        let kthElement = this;
        let node = this;
        while(node) {
            if (isReverse) {
                if (currentPosition - position >= 0) {
                    if (kthElement.next)
                        kthElement = kthElement.next;
                }
            } else {
                if (currentPosition + 1 === position) {
                    kthElement = node;
                    break;
                }
            }
            node = node.next;
            currentPosition++;
        }
        return kthElement;
     }
     deleteKthElement(position, isReverse) {
        let kthPrevElement = isReverse ? position + 1 : position - 1;
        kthPrevElement = this.findKthElement(kthPrevElement, isReverse);
        kthPrevElement.next = kthPrevElement.next ? kthPrevElement.next.next: null;
     }
     static deserialize(arr, startElement = 0) {
        if (arr && arr.length > 0) {
            if (startElement === arr.length) {
                return null;
            }
            const ele = arr[startElement];
            let node = new LinkedList(ele, LinkedList.deserialize(arr, startElement+1));
            return node;
        } else {
            return null;
        }
     }

    static serialize(node) {
        if (node.next) {
            return [node.value].concat(LinkedList.serialize(node.next));
        } else {
            return [node.value];
        }
    }
 }

let a = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,111,222,333,444,555,666];
a = [];
let numOfElements = Math.ceil(Math.random()*100) % 30 + 5;
for(let i = 0; i<numOfElements; i++) {
    a.push(Math.ceil((Math.random()*100) % 20));
}
console.log(a.toString(), 'of size', a.length);


let head = LinkedList.deserialize(a);
let serializeList = LinkedList.serialize(head).join('->');
console.log(serializeList);
let kthPosition = (a.length - 5) % a.length;
let kthElement = head.findKthElement(kthPosition, true);
console.log('Finding ', kthPosition, ' element from last is :', kthElement.value);
head.deleteKthElement(kthPosition, true);
console.log('New list - ', LinkedList.serialize(head).join('->'));

kthPosition = (a.length-1 - 5) % a.length-1;
kthElement = head.findKthElement(kthPosition, false);
console.log('Finding ', kthPosition, ' element from start is :', kthElement.value);
head.deleteKthElement(kthPosition, false);
console.log('New list - ', LinkedList.serialize(head).join('->'));
