class Node {
    constructor(num) {
        this.num = num;
        this.left = null;
        this.right = null;
    };
};

class BTree {
    constructor() {
        this.root = null;
    };
    
    insert = num => {
        const _insert = (node, num) => {
            if (node === null) return new Node(num);
            else if (num <= node.num) {
                const subTree = _insert(node.left, num);
                node.left = subTree;
                
                return node;
            } else {
                const subTree = _insert(node.right, num);
                node.right = subTree;
                
                return node;
            }
        };
        
        this.root = _insert(this.root, num);
    };
    
    remove = num => {
        const _remove = (node, num) => {
            if (node === null) return null;
            else if (node.num === num) {
                const leftNull = node.left === null;
                const rightNull = node.right === null;
                
                if (leftNull && rightNull) return null;
                else if (leftNull) return node.right;
                else if (rightNull) return node.left;
                else {
                    const treeToBeMoved = node.left;
                    let ptr = node.right;

                    while (ptr.left !== null) ptr = ptr.left;
                    ptr.left = treeToBeMoved;

                    return node.right;
                }
                
            }
            else if (num < node.num) {
                const subTree = _remove(node.left, num);
                node.left = subTree;

                return node;
            }
            else {
                const subTree = _remove(node.right, num);
                node.right = subTree;

                return node;
            }
        };
        
        this.root = _remove(this.root, num);
    };

    toArray = () => {
        const arr = [];

        const _toArray = node => {
            if (node === null) return;
            else {
                _toArray(node.left);
                arr.push(node.num);
                _toArray(node.right);
            }
        };

        _toArray(this.root);
        
        return arr;
    };

    print = () => {
        const arr = this.toArray();
        console.log(arr);
    }
};

const activityNotifications = (expenditure, d) => {
    const length = expenditure.length;
    const bt = new BTree();

    for (let i = 0; i < d; i++) {
        const currExp = expenditure[i];

        bt.insert(currExp);
    }
    
    let nCount = 0;
    
    for (let i = d; i < length; i++) {
        const currExp = expenditure[i];
        const nExp = bt.toArray();
        const length = nExp.length;

        let med;
        
        if (length % 2 === 1) {
            const middleIdx = Math.floor(length / 2);
            med = nExp[middleIdx];
        }
        else {
            const rightMiddleIdx = length / 2;
            const leftMiddleIdx = rightMiddleIdx - 1;
            med = (nExp[leftMiddleIdx] + nExp[rightMiddleIdx]) / 2;
        }


        if (currExp >= (2 * med)) nCount += 1;
        
        console.log({ med, currExp, nExp });

        const oldestExp = expenditure[i - d];
        bt.remove(oldestExp);
        bt.insert(currExp);   
    }
    
    return nCount;
};

console.log(
    activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)
);

// const bt = new BTree();
// bt.insert(2);
// bt.insert(3);
// bt.insert(4);
// bt.insert(2);
// bt.insert(3);
// bt.remove(2);
// bt.print();
