class MinStack {
  constructor() {
    this.stack = [];
    this.size = 0;
    this.minIndex = -1;
  }

  push(val) {
    this.stack.push(val);
    this.size += 1;
  }

  pop() {
    this.size -= 1;
    return this.stack.pop();
  }

  peek() {
    if (this.size !== 0) return this.stack[this.size - 1];
  }

  min() {}
}

// const ms = new MinStack();
// ms.push(10);
// ms.push(5);
// ms.push(10);

// console.log(ms.peek());

// const popped = ms.pop();
// console.log(popped);
// console.log(ms.peek());
