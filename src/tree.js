'use strict';
const Node = require('./node');

class Tree {
  constructor() {
    this._root = null;
  }

  get root() {
    return this._root;
  }

  _insert(node, target) {
    while (target) {
      if (node.value === target.value) {
        return;
      }

      if (node.value < target.value) {
        if (!target.left) {
          target.left = node;
          return;
        }

        target = target.left;
      } else {
        if (!target.right) {
          target.right = node;
          return;
        }

        target = target.right;
      }
    }
  }

  includes(value) {
    let {_root: current} = this;

    while (current) {
      if (value === current.value) {
        return true;
      }

      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  insert(...values) {
    values.forEach(value => {
      const {_root} = this;
      const node = new Node(value);

      if (_root) {
        return this._insert(node, _root);
      }

      this._root = node;
    });
    return this;
  }

  isEmpty() {
    return !this.root;
  }

  max() {
    let {_root: max} = this;

    if (max) {
      while (max.right) {
        max = max.right;
      }
    }

    return max;
  }

  min() {
    let {_root: min} = this;

    if (min) {
      while (min.left) {
        min = min.left;
      }
    }

    return min;
  }
}

module.exports = Tree;
