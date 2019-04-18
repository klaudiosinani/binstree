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
