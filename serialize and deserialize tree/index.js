/**
 * Given the root to a binary tree,
 * implement serialize(root), which serializes the tree into a string,
 * and deserialize(s), which deserializes the string back into the tree.

    For example, given the following Node class

    class Node:
        def __init__(self, val, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right
    The following test should pass:

    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'
 * */


class Node {
    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right;
    }

    serialize() {
        let serializedArray = [];
        serializedArray.push(this.value);
        if (this.left) {
            serializedArray = serializedArray.concat(this.left.serialize());
        } else {
            serializedArray.push(' -1');
        }
        if (this.right) {
            serializedArray = serializedArray.concat(this.right.serialize());
        } else {
            serializedArray.push(' -1');
        }
        return serializedArray.join(' ');
    }

    /**
     * 20 8 -4 12 -10 -14 25  -1 -30
     * 20 8 4 -1 -1 12 10 -1 -1 14 -1 -1 25 -1 30 -1 -1
     *         20
              /  \
             8   25
            / \    \
           4  12   30
              / \
             10  14
    */
    static deserialize(serializedString) {
        if (!serializedString || serializedString.trim().length == 0) return;
        let serializedArray = serializedString.split(' ');
        let root = new Node('', null, null);
        root._parseArray(serializedArray, 0);
        return root;
    }
    _parseArray(serializedArray, currentIndex = 0) {
        if (!serializedArray || serializedArray.length === 0) return currentIndex;
        if (currentIndex >= serializedArray.length) return currentIndex;
        let firstValue = serializedArray[currentIndex];
        this.value = firstValue;
        currentIndex++;
        if (currentIndex < serializedArray.length && serializedArray[currentIndex] !== '-1') {
            this.left = new Node('', null, null);
            currentIndex = this.left._parseArray(serializedArray, currentIndex);
        } else {
            currentIndex++;
        }
        if (currentIndex < serializedArray.length && serializedArray[currentIndex] !== '-1') {
            this.right = new Node('', null, null);
            currentIndex = this.right._parseArray(serializedArray, currentIndex);
        } else {
            currentIndex++;
        }
        return currentIndex;
    }
}

/*
            root
        left    right
    left.left

*/


const serializedString = '20 8 4 -1 -1 12 10 -1 -1 14 -1 -1 25 -1 30';
const root = Node.deserialize(serializedString);
console.log('Deserializing left.right.left', root.left.right.left.value);
console.log('Serialized String', root.serialize());
