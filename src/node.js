'use strict';

class Node {
  constructor(value) {
    this._left = null;
    this._right = null;
    this._value = value;
  }

  get degree() {
    let degree = 0;

    if (this.left) {
      degree++;
    }

    if (this.right) {
      degree++;
    }

    return degree;
  }

  get left() {
    return this._left;
  }

  set left(node) {
    this._left = node;
  }

  get right() {
    return this._right;
  }

  set right(node) {
    this._right = node;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  height() {
    let height = -1;
    let current = this;

    const queue = [];
    queue.push(current);

    while (queue.length > 0) {
      height += 1;
      let nodes = queue.length;

      while (nodes > 0) {
        current = queue.shift();

        if (current.left) {
          queue.push(current.left);
        }

        if (current.right) {
          queue.push(current.right);
        }

        nodes--;
      }
    }

    return height;
  }

  isFull() {
    return this.left && this.right;
  }

  isInternal() {
    return this.left !== null || this.right !== null;
  }

  isLeaf() {
    return !this.left && !this.right;
  }

  isPartial() {
    return this.degree === 1;
  }
}

module.exports = Node;
