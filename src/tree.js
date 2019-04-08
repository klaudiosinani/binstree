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
    if (node.value < target.value) {
      if (target.left) {
        return this._insert(node, target.left);
      }

      target.left = node;
    } else {
      if (target.right) {
        return this._insert(node, target.right);
      }

      target.right = node;
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
}

module.exports = Tree;
