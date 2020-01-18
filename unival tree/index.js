/**
 * A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:
     0
    / \
   1   0
      / \
     1   0
    / \
   1   1

 */


 class Tree {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    findUnivalSubTrees() {
        let unival = (!this.left && !this.right) || (this.left && this.right && this.left.value == this.right.value) ? 1 : 0;
        if (this.left) {
            unival += this.left.findUnivalSubTrees()
        }
        if (this.right) {
            unival += this.right.findUnivalSubTrees()
        }
        return unival;
    }
 }

let t = new Tree(
            0 , new Tree(1), new Tree(
                0, new Tree(
                    1, new Tree(1), new Tree(1)
                ), new Tree(0)
            )
        );
console.log(t.findUnivalSubTrees());