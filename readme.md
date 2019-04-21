<h1 align="center">
  Binstree
</h1>

<h4 align="center">
  🌲 Binary search trees for ES6
</h4>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/binstree">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/binstree.svg?branch=master">
  </a>
  <a href='https://coveralls.io/github/klaussinani/binstree?branch=master'>
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/klaussinani/binstree/badge.svg?branch=master">
  </a>
</p>

## Description

ES6 implementation of the binary search tree data structure with TypeScript support.

Come over to [Twitter](https://twitter.com/klaussinani) to share your thoughts on the project.

Visit the [contributing guidelines](https://github.com/klaussinani/binstree/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

## Contents

- [Description](#description)
- [Install](#install)
- [In Depth](#in-depth)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Install

### Yarn

```bash
yarn add binstree
```

### NPM

```bash
npm install binstree
```

## In Depth

A binary search tree is a rooted binary tree data structure, whose nodes contain a unique `key` & an associated `value`, and point to two distinguished `left` and `right` sub-trees. The tree satisfies the binary search property, thus the key in each node is greater than any key stored in the left sub-tree, and less than any key stored in the right sub-tree. As an imminent result of this principle, tree operations are greatly benefited, since on average each key comparison allows the operations to skip about half of the tree, so that each insertion, deletion or lookup takes time proportional to the logarithm of the number of nodes stored in the tree.

## Usage

Binstree exposes a chainable API, that can be utilized through a simple and minimal syntax, allowing you to combine methods effectively.

Usage examples can be also found at the [`test`](https://github.com/klaussinani/binstree/tree/master/test) directory.

```js
'use strict';
const {Tree, Node} = require('binstree');

const tree = new Tree();
//=> Tree { root: null }

tree.insert(10, 'A');
// => Tree { root: Node { left: null, right: null, key: 10, value: 'A' } }

tree.root;
//=> Node { left: null, right: null, key: 10, value: 'A' }

const node = new Node(10, 'A');

tree.root.key === node.key;
//=> true

tree.root.value === node.value;
//=> true

tree.insert(5, 'B').insert(15, 'C').root;
//=> Node { left: [Node], right: [Node], key: 10, value: 'A' }

tree.root.left;
//=> Node { left: null, right: null, key: 5, value: 'B' }

tree.root.right;
//=> Node { left: null, right: null, key: 15, value: 'C' }

tree.insert(2, 'D').insert(7, 'E').insert(12, 'F').insert(20, 'G');

tree.search(5);
//=> Node { key: 5, value: 'B',
//  left: Node { left: null, right: null, key: 2, value: 'D' },
//  right: Node { left: null, right: null, key: 7, value: 'E' } }

tree.search(15);
//=> Node { key: 15, value: 'C',
//  left: Node { left: null, right: null, key: 12, value: 'F' },
//  right: Node { left: null, right: null, key: 20, value: 'G' } }

tree.includes(12);
//=> true

tree.includes(100);
//=> false

tree.height();
//=> 2

tree.isBalanced();
//=> true

tree.remove(10).root;
//=> Node { key: 12, value: 'F',
//  left: Node { left: [Node], right: [Node], key: 5, value: 'B' },
//  right: Node { left: null, right: [Node], key: 15, value: 'C' } }

tree.isBalanced();
//=> false
```

## API

#### tree.`insert(key, value)`

- Return Type: `Tree`

Mutates the tree by inserting a new node at the appropriate location.

##### **`key`**

- Type: `Number`

Can be any number that will correspond to the `key` of the created node. 
Each node has its own unique `key`.

##### **`value`**

- Type: `Any`

Can be any value that will stored in the created node.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A');
// => Tree { root: Node { key: 10, value: 'A', left: null, right: null } }
```

#### tree.`root`

- Return Type: `Node | null`

Returns the root node of the tree.
If the tree is empty `null` is returned.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A');
// => Tree { root: Node { key: 10, value: 'A', left: null, right: null } }
tree.root;
// => Node { key: 10, value: 'A', left: null, right: null }
```

#### tree.`isEmpty()`

- Return Type: `Boolean`

Determines whether the tree is empty, returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A');
tree.isEmpty();
// => false
```

#### tree.`remove(key)`

- Return Type: `Tree`

Mutates the tree by removing the node corresponding to the `key` argument.

##### **`key`**

- Type: `Number`

Can be any number that corresponds to the `key` of an existing node. 

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A');
tree.remove(10);
//=> Tree { root: null }
```

#### tree.`includes(key)`

- Return Type: `Boolean`

Determines whether the tree includes a node with a certain `key`, returning `true` or `false` as appropriate.

##### **`key`**

- Type: `Number`

Node `key` to search for.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B');
tree.includes(10);
// => true
tree.includes(25);
// => false
tree.includes(5);
// => true
```

#### tree.`search(key)`

- Return Type: `Node | null`

Determines whether the tree includes a node with a certain `key`, returning the targeted node or `null` as appropriate.

##### **`key`**

- Type: `Number`

Node `key` to search for.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B');
tree.search(10);
// => Node { key: 10, value: 'A', left: [Node], right: null }
tree.search(25);
// => null
tree.search(5);
// => Node { key: 5, value: 'B', left: null, right: null }
```

#### tree.`min()`

- Return Type: `Node | null`

Returns the left-most node in the tree, thus the node corresponding to the minimum `key`.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(0, 'C');
tree.min();
// => Node { key: 0, value: 'C', left: null, right: null }
```

#### tree.`max()`

- Return Type: `Node | null`

Returns the right-most node in the tree, thus the node corresponding to the maximum `key`.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(15, 'B').insert(25, 'C');
tree.max();
// => Node { key: 25, value: 'C', left: null, right: null }
```

#### tree.`size()`

- Return Type: `Number`

Returns the total number of nodes residing in the tree.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(15, 'B').insert(25, 'C');
tree.size();
// => 3
```

#### tree.`height()`

- Return Type: `Number`

Returns the maximum distance of any leaf node from the root. 
If the tree is empty `-1` is returned.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A');
tree.height();
// => 0
tree.insert(15, 'B').insert(25, 'C').insert(35, 'D');
tree.height();
//=> 3
```

#### tree.`inOrder(fn)`

- Return Type: `Tree`

Applies in-order traversal (depth-first traversal - LNR) to the tree and executes the provided `fn` function on each traversed node without mutating the tree itself.

##### **`fn`**

- Type: `Function`

Function to execute on each node.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.inOrder(node => console.log(node.key));
// => 5
// 10
// 15
```

#### tree.`preOrder(fn)`

- Return Type: `Tree`

Applies pre-order traversal (depth-first traversal - NLR) to the tree and executes the provided `fn` function on each traversed node without mutating the tree itself.

##### **`fn`**

- Type: `Function`

Function to execute on each node.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.preOrder(node => console.log(node.key));
// => 10
// 5
// 15
```

#### tree.`postOrder(fn)`

- Return Type: `Tree`

Applies post-order traversal (depth-first traversal - LRN) to the tree and executes the provided `fn` function on each traversed node without mutating the tree itself.

##### **`fn`**

- Type: `Function`

Function to execute on each node.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.postOrder(node => console.log(node.key));
// => 5
// 15
// 10
```

#### tree.`outOrder(fn)`

- Return Type: `Tree`

Applies out-order traversal (depth-first traversal - RNL) to the tree and executes the provided `fn` function on each traversed node without mutating the tree itself.

##### **`fn`**

- Type: `Function`

Function to execute on each node.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.outOrder(node => console.log(node.key));
// => 15
// 10
// 5
```

#### tree.`levelOrder(fn)`

- Return Type: `Tree`

Applies level-order traversal (breadth-first traversal) to the tree and executes the provided `fn` function on each traversed node without mutating the tree itself.

##### **`fn`**

- Type: `Function`

Function to execute on each node.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.levelOrder(node => console.log(node.key));
// => 10
// 5
// 15
```

#### tree.`clear()`

- Return Type: `Tree`

Mutates the tree by removing all residing nodes and returns it empty.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
//=> Tree { root: Node { left: [Node], right: [Node], key: 3, value: 'A' } }
tree.size();
//=> 3
tree.clear();
//=> Tree { root: null } }
tree.size();
//=> 0
```

#### tree.`toArray()`

- Return Type: `Array<Node>`

Applies in-order traversal to the tree and stores each traversed node in an array.
The array is returned at the end of the traversal.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C').insert(3, 'D').insert(20, 'F');
tree.toArray();
//=> [ 
//  Node { left: null, right: null, key: 3, value: 'D' },
//  Node { left: [Node], right: null, key: 5, value: 'B' },
//  Node { left: [Node], right: [Node], key: 10, value: 'A' },
//  Node { left: null, right: [Node], key: 15, value: 'C' },
//  Node { left: null, right: null, key: 20, value: 'F' }
// ]
```

#### tree.`toPairs()`

- Return Type: `Array<[Number, Any]>`

Applies in-order traversal to the tree and for each traversed node stores in an `n`-tuple, where `n` the size of the tree, an ordered-pair/2-tuple, where the first element is a `number` corresponding to the `key` of the traversed node, and the last one is a value of type `any`, corresponding to the `value` stored in the traversed node.
The `n`-tuple is returned at the end of the traversal.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C').insert(3, 'D').insert(20, 'F');
tree.toPairs();
//=> [ [3, 'D'], [5, 'B'], [10, 'A'], [15, 'C'], [20, 'F'] ]
```

#### tree.`leafNodes()`

- Return Type: `Array<Node>`

Applies in-order traversal to the tree and stores each traversed leaf node (node without children) in an array.
The array is returned at the end of the traversal.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.leafNodes();
//=> [ 
//  Node { left: null, right: null, key: 5, value: 'B' },
//  Node { left: null, right: null, key: 15, value: 'C' } 
// ]
```

#### tree.`fullNodes()`

- Return Type: `Array<Node>`

Applies in-order traversal to the tree and stores each traversed full node (node with two non-null children) in an array.
The array is returned at the end of the traversal.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.fullNodes();
//=> [ 
//  Node { left: [Node], right: [Node], key: 10, value: 'A' } 
// ]
```

#### tree.`partialNodes()`

- Return Type: `Array<Node>`

Applies in-order traversal to the tree and stores each partial node (node with one non-null child) in an array.
The array is returned at the end of the traversal.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C').insert(20, 'D').insert(3, 'E');
tree.partialNodes();
//=> [ 
//  Node { left: [Node], right: null, key: 5, value: 'B' },
//  Node { left: null, right: [Node], key: 15, value: 'C' }
// ]
```

#### tree.`isBalanced()`

- Return Type: `Boolean`

Returns `true` if the tree is height-balanced, which implies that its left sub-tree is balanced, its right sub-tree is balanced and the difference between heights of left sub-tree and right sub-tree is not greater than 1.
In any other case, the method returns `false`.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.isBalanced();
//=> true
tree.insert(20, 'D').insert(30, 'E');
tree.isBalanced();
//=> false
```

#### tree.`isComplete()`

- Return Type: `Boolean`

The method returns `true` if the tree is a complete binary search tree, which implies that every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
In any other case, the method returns false.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.isComplete();
//=> true
tree.insert(3, 'D');
tree.isComplete();
//=> true
tree.insert(20, 'E');
tree.isComplete();
//=> false
```

#### tree.`isFull()`

- Return Type: `Boolean`

The method returns `true` if all the nodes residing in the tree are either leaf nodes or full nodes.
In any other case (node degree equal to 1) the method returns `false`.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.isFull();
//=> true
tree.insert(8, 'D');
tree.isFull();
//=> false
```

#### tree.`isPerfect()`

- Return Type: `Boolean`

The method returns `true` if all the internal nodes residing in the tree are full nodes (node degree equal to 2) and all leaf nodes are at the same height level. In any other case (node degree equal to 1 or leaf and full nodes are found on the same height level) the method returns `false`.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
tree.isPerfect();
//=> true
tree.insert(3, 'D').insert(7, 'E').insert(12, 'F').insert(20, 'G');
tree.isPerfect();
//=> true
tree.insert(1, 'H');
tree.isPerfect();
//=> false
```

Also available, along with the `Tree` exposed class, is the `Node` class, mainly useful for testing purposes, since it can be utilized to compare tree nodes. The class has a binary constructor method, with a `key` and a `value` parameter, corresponding to the key and the value stored in the created instance, respectively.

#### node.`key`

- Return Type: `Number`

The `key` corresponding to the node instance.

```js
const {Node} = require('binstree');

const node = new Node(10, 'A');
// => { key:10, value: 'A', left: null, right: null }
node.key;
//=> 10
```

#### node.`value`

- Return Type: `Any`

The value that the node contains.

```js
const {Node} = require('binstree');

const node = new Node(10, 'A');

// => { key: 10, value: 'A', left: null, right: null }
node.value;
//=> 'A'
node.value = 'B'
// => { key: 10, value: 'B', left: null, right: null }
```

#### node.`left`

- Return Type: `Node | null`

The left sub-tree that the node points to.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root;
// => { key: 10, value: 'A', left: null, right: null }
tree.root.left;
//=> null
tree.insert(5, 'B').root;
// => { key: 10, value: 'A', left: { key: 5, value: 'B', left: null, right: null } , right: null }
tree.root.left;
//=> { key: 5, value: 'B', left: null, right: null }
```

#### node.`right`

- Return Type: `Node | null`

The right sub-tree that the node points to.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root;
// => { key: 10, value: 'A', left: null, right: null }
tree.root.right;
//=> null
tree.insert(15, 'B').root;
// => { key: 10, value: 'A', left: null , right: { key: 15, value: 'B', left: null, right: null } }
tree.root.right;
//=> { key: 15, value: 'B', left: null, right: null }
```

#### node.`children`

- Return Type: `Array<Node>`

Returns an array contacting the children of the instance, where the left child, if present, is the first element of the array, and the right child, if present, is the last element of the array.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.children;
//=> []
tree.insert(5, 'B').insert(15, 'C').root.children;
// => [
//  { key: 5, value: 'B', left: null , right: null }, 
//  { key: 15, value: 'C', left: null, right: null }
// ]
```

#### node.`degree`

- Return Type: `Number`

Returns the number of sub-trees that the node points to.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.degree;
//=> 0
tree.insert(5, 'B').root.degree;
//=> 1
tree.insert(15, 'C').root.degree;
//=> 2
```

#### node.`height()`

- Return Type: `Number`

Returns the maximum distance of any leaf node from the node instance.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').insert(15, 'B').insert(25, 'C').insert(35, 'D');
tree.root.height();
//=> 3
tree.root.right.height();
//=> 2
```

#### node.`isFull()`

- Return Type: `Boolean`

Determines whether a node is a full node (has two non-null children), returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.isFull();
//=> false
tree.insert(5, 'B').insert(15, 'C').root.isFull();
//=> true
```

#### node.`isInternal()`

- Return Type: `Boolean`

Determines whether a node is an internal node (has at least one non-null child), returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.isInternal();
//=> false
tree.insert(5, 'B').root.isInternal();
//=> true
```

#### node.`isLeaf()`

- Return Type: `Boolean`

Determines whether a node is a leaf node (has no children), returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.isLeaf();
//=> true
tree.insert(5, 'B').root.isLeaf();
//=> false
```

#### node.`isLeftPartial()`

- Return Type: `Boolean`

Determines whether a node is a left partial node (has ony one left non-null child), returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.isLeftPartial();
//=> false
tree.insert(5, 'B').root.isLeftPartial();
//=> true
```

#### node.`isPartial()`

- Return Type: `Boolean`

Determines whether a node is a partial node (has ony one non-null child), returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.isPartial();
//=> false
tree.insert(15, 'B').root.isPartial();
//=> true
```

#### node.`isRightPartial()`

- Return Type: `Boolean`

Determines whether a node is a right partial node (has ony one right non-null child), returning `true` or `false` as appropriate.

```js
const {Tree} = require('binstree');

const tree = new Tree();

tree.insert(10, 'A').root.isRightPartial();
//=> false
tree.insert(15, 'B').root.isRightPartial();
//=> true
```

#### node.`toPair()`

- Return Type: `[Number, Any]`

Returns an ordered-pair/2-tuple, where the first element is a number corresponding to the `key` of the node, and the last one is a value, that can be of any type, corresponding to the `value` stored in the node.

```js
const {Node, Tree} = require('binstree');

const tree = new Tree();
const node = new Node(5, 'B');

node.toPair();
//=> [5, 'B']
tree.insert(10, 'A').root.toPair();
//=> [10, 'A']
```

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klaussinani/binstree/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd binstree`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Related

- [doublie](https://github.com/klaussinani/doublie) - Doubly circular & linear linked lists for ES6
- [singlie](https://github.com/klaussinani/singlie) - Singly circular & linear linked lists for ES6

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/binstree/blob/master/license.md)
