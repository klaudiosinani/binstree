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

  isInternal() {
    return this.left !== null || this.right !== null;
  }

  isLeaf() {
    return !this.left && !this.right;
  }
}

module.exports = Node;
