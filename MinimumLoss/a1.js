class Node {
    constructor(num, parent) {
        this.num = num;
        this.parent = parent;
        this.left = null;
        this.right = null;
    };
};

class BTree {
    constructor() {
        this.root = null;
        this.x = 5;
    };
    
    insert = num => {
        const insertIntoTree = (node, num, parent) => {
            if (node === null) return new Node(num, parent);
            else if (num <= node.num) {
                const newTree = insertIntoTree(node.left, num, node);
                node.left = newTree;

                return node;
            } else {
                const newTree = insertIntoTree(node.right, num, node);
                node.right = newTree;

                return node;
            }
        };
        
        this.root = insertIntoTree(this.root, num, null);
    };
    
    search = num => {
        const searchForNode = (node, num) => {
            if (node === null) return null;
            else if (node.num === num) return node;
            else if (num <= node.num) return searchForNode(node.left, num);
            else return searchForNode(node.right, num);
        };
        
        return searchForNode(this.root, num);
    };
    
    searchForGreater = num => {
        const node = this.search(num);
        
        if (node === null) return null;
        
        let ptr = node;
        let foundAncestorOnRight = false;

        if (ptr.right !== null) {
            ptr = ptr.right;

            while (ptr.left !== null) ptr = ptr.left;

            return ptr;
        }

        while (!foundAncestorOnRight) {
            const parent = ptr.parent;
            
            if (parent === null) return null;
            
            if (parent.left === ptr) {
                ptr = parent;
                foundAncestorOnRight = true;
            }
            else ptr = parent;
        }

        return ptr;
    };

    intoArray = () => {
        const arr = [];
        const turnIntoArray = node => {
            if (node === null) return;
            else {
                turnIntoArray(node.left);
                arr.push(node.num);
                turnIntoArray(node.right);
            }
        };

        turnIntoArray(this.root);

        return arr;
    };
};

// const bt = new BTree();
// bt.insert(10);
// bt.insert(11);
// bt.insert(9);
// const val = bt.searchForGreater(10);
// console.log(
//     val?
//     val.num : 'not found'
// );
// const arr = bt.intoArray();
// console.log(arr);
// const x = new Node(5, null);
// console.log(x);

const minimumLoss = price => {
    const bt = new BTree();
    let minDelta = Number.MAX_VALUE;

    price.forEach(p => {
        bt.insert(p);
        const node = bt.searchForGreater(p);

        if (node) {
            const pastPrice = node.num;
            const delta = pastPrice - p;

            if (delta < minDelta) minDelta = delta;
        }
    });

    return minDelta;
};

console.log(
    minimumLoss([20, 15, 8, 2, 12]),
);
