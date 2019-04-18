<h1 align="center">
  Bstrie
</h1>

<h4 align="center">
  🌲 Binary search trees for ES6
</h4>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/bstrie">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/bstrie.svg?branch=master">
  </a>
  <a href='https://coveralls.io/github/klaussinani/bstrie?branch=master'>
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/klaussinani/bstrie/badge.svg?branch=master">
  </a>
</p>

## Description

ES6 implementation of the binary search tree data structure with TypeScript support.

Come over to [Twitter](https://twitter.com/klaussinani) to share your thoughts on the project.

Visit the [contributing guidelines](https://github.com/klaussinani/bstrie/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

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
yarn add bstrie
```

### NPM

```bash
npm install bstrie
```

## In Depth

A binary search tree is a rooted binary tree data structure, whose nodes store a `key`, an associated `value`, and two distinguished `left` and `right` sub-trees. The tree satisfies the binary search property, thus the key in each node is greater than any key stored in the left sub-tree, and less than any key stored in the right sub-tree. As an imminent result of this principle, tree operations are greatly benefited, since each key comparison allows the operations to skip about half of the tree, so that each insertion, deletion or lookup takes time proportional to the logarithm of the number of nodes stored in the tree.

## Usage

Bstrie exposes a chainable API, that can be utilized through a simple and minimal syntax, allowing you to combine methods effectively.

Usage examples can be also found at the [`test`](https://github.com/klaussinani/bstrie/tree/master/test) directory.

```js
'use strict';
const {Tree} = require('bstrie');

const tree = new Tree();
//=> Tree { root: null }
tree.insert(10, 'A');
// => Tree { root: Node { left: null, right: null, key: 10, value: 'A' } }
tree.root;
//=> Node { left: null, right: null, key: 10, value: 'A' }
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

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klaussinani/bstrie/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd bstrie`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Related

- [doublie](https://github.com/klaussinani/doublie) - Doubly circular & linear linked lists for ES6
- [singlie](https://github.com/klaussinani/singlie) - Singly circular & linear linked lists for ES6

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/bstrie/blob/master/license.md)
