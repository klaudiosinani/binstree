'use strict';

class Node {
  constructor(key, value) {
    this._left = null;
    this._right = null;
    this._key = key;
    this._value = value;
  }

  get children() {
    const children = [];

    if (this.left) {
      children.push(this.left);
    }

    if (this.right) {
      children.push(this.right);
    }

    return children;
  }

  get degree() {
    return this.children.length;
  }

  get key() {
    return this._key;
  }

  get left() {
    return this._left;
  }

  set left(node) {
    if (node.key >= this.key) {
      throw new Error('Left child node key must be less than the parent node key');
    }

    this._left = node;
  }

  get right() {
    return this._right;
  }

  set right(node) {
    if (node.key <= this.key) {
      throw new Error('Right child node key must be greater than the parent node key');
    }

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
        queue.push(...current.children);
        nodes--;
      }
    }

    return height;
  }

  isFull() {
    return this.left !== null && this.right !== null;
  }

  isInternal() {
    return this.left !== null || this.right !== null;
  }

  isLeaf() {
    return !this.left && !this.right;
  }

  isLeftPartial() {
    return this.left !== null && !this.right;
  }

  isPartial() {
    return this.degree === 1;
  }

  isRightPartial() {
    return !this.left && this.right !== null;
  }
}

module.exports = Node;
