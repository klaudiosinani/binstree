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

  _min(node) {
    let min = node;

    if (min) {
      while (min.left) {
        min = min.left;
      }
    }

    return min;
  }

  _remove(value, node) {
    if (value < node.value) {
      node.left = this._remove(value, node.left);
      return node;
    }

    if (value > node.value) {
      node.right = this._remove(value, node.right);
      return node;
    }

    if (node.isLeaf()) {
      return null;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    const successor = this._min(node.right);
    node.value = successor.value;
    node.right = this._remove(successor.value, node.right);
    return node;
  }

  height() {
    let height = -1;
    let {_root: current} = this;

    if (current) {
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
    }

    return height;
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

  inOrder(fn) {
    const stack = [];
    let {_root: current} = this;

    while (current || stack.length > 0) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        fn(current.value);
        current = current.right;
      }
    }

    return this;
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

  levelOrder(fn) {
    let {_root: current} = this;

    if (current) {
      const queue = [];
      queue.push(current);

      while (queue.length > 0) {
        current = queue.shift();
        fn(current.value);

        if (current.left) {
          queue.push(current.left);
        }

        if (current.right) {
          queue.push(current.right);
        }
      }
    }

    return this;
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
    return this._min(this._root);
  }

  outOrder(fn) {
    const stack = [];
    let {_root: current} = this;

    while (current || stack.length > 0) {
      if (current) {
        stack.push(current);
        current = current.right;
      } else {
        current = stack.pop();
        fn(current.value);
        current = current.left;
      }
    }

    return this;
  }

  postOrder(fn) {
    let last = null;
    const stack = [];
    let {_root: current} = this;

    while (current || stack.length > 0) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        const recent = stack[stack.length - 1];

        if (recent.right && recent.right !== last) {
          current = recent.right;
        } else {
          fn(recent.value);
          last = stack.pop();
        }
      }
    }

    return this;
  }

  preOrder(fn) {
    let {_root: current} = this;

    if (current) {
      const stack = [current];

      while (stack.length > 0) {
        current = stack.pop();
        fn(current.value);

        if (current.right) {
          stack.push(current.right);
        }

        if (current.left) {
          stack.push(current.left);
        }
      }
    }

    return this;
  }

  remove(value) {
    const {_root} = this;

    if (_root) {
      this._root = this._remove(value, _root);
    }

    return this;
  }

  search(value) {
    let {_root: current} = this;

    while (current) {
      if (value === current.value) {
        return current;
      }

      current = value < current.value ? current.left : current.right;
    }

    return current;
  }

  size() {
    let size = 0;
    this.inOrder(() => size++);
    return size;
  }

  toArray() {
    const array = [];
    this.inOrder(x => array.push(x));
    return array;
  }
}

module.exports = Tree;
