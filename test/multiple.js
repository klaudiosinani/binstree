'use strict';
const test = require('ava');
const {Node, Tree} = require('../.');

const tree = new Tree();

test('insert', t => {
  tree.insert(10, 'A').insert(5, 'B').insert(15, 'C');
  t.is(tree.root.key, 10);
  t.is(tree.root.value, 'A');
  t.is(tree.root.left.key, 5);
  t.is(tree.root.left.value, 'B');
  t.is(tree.root.left.left, null);
  t.is(tree.root.left.right, null);
  t.is(tree.root.right.key, 15);
  t.is(tree.root.right.value, 'C');
  t.is(tree.root.right.left, null);
  t.is(tree.root.right.right, null);
  t.deepEqual(tree.insert(10, 'A'), tree);
});

test('root', t => {
  const node = new Node(10, 'A');
  node.left = new Node(5, 'B');
  node.right = new Node(15, 'C');
  t.deepEqual(tree.root, node);
});

test('clear', t => {
  t.deepEqual(tree.clear(), new Tree());
  t.is(tree.root, null);
});

test('fullNodes', t => {
  tree.insert(10, 'A')
    .insert(5, 'B')
    .insert(15, 'C')
    .insert(3, 'D')
    .insert(7, 'E');
  const nodes = tree.fullNodes();
  t.deepEqual(nodes.map(node => [node.key, node.value]), [[5, 'B'], [10, 'A']]);
});

test('height', t => {
  t.is(tree.height(), 2);
});

test('includes', t => {
  t.true(tree.includes(7));
  t.true(tree.includes(3));
  t.false(tree.includes(50));
});

test('inOrder', t => {
  const array = [];
  t.deepEqual(tree.inOrder(x => array.push(x)), tree);
  t.deepEqual(array.map(x => [x.key, x.value]), [[3, 'D'], [5, 'B'], [7, 'E'], [10, 'A'], [15, 'C']]);
});

test('internalNodes', t => {
  const nodes = tree.internalNodes();
  t.deepEqual(nodes.map(x => [x.key, x.value]), [[5, 'B'], [10, 'A']]);
});

test('isBalanced', t => {
  t.true(tree.isBalanced());
  tree.insert(1, 'F');
  t.false(tree.isBalanced());
  tree.remove(1);
});

test('isComplete', t => {
  t.true(tree.isComplete());
  tree.insert(30, 'F');
  t.false(tree.isComplete());
  tree.remove(30);
  tree.remove(15);
  t.false(tree.isComplete());
  tree.insert(15, 'C');
});

test('isEmpty', t => {
  t.false(tree.isEmpty());
  tree.clear();
  t.true(tree.isEmpty());
});

test('isFull', t => {
  tree.insert(10, 'A')
    .insert(5, 'B')
    .insert(15, 'C')
    .insert(3, 'D')
    .insert(7, 'E');
  t.true(tree.isFull());
  tree.insert(12, 'F');
  t.false(tree.isFull());
});

test('isPerfect', t => {
  t.false(tree.isPerfect());
  tree.insert(17, 'G');
  t.true(tree.isPerfect());
  tree.insert(11, 'H');
  tree.insert(13, 'I');
  t.false(tree.isPerfect());
  tree.remove(11);
  tree.remove(13);
});

test('leafNodes', t => {
  const nodes = tree.leafNodes();
  t.deepEqual(nodes.map(x => [x.key, x.value]), [[3, 'D'], [7, 'E'], [12, 'F'], [17, 'G']]);
});

test('levelOrder', t => {
  const array = [];
  t.deepEqual(tree.levelOrder(x => array.push([x.key, x.value])), tree);
  t.deepEqual(array, [[10, 'A'], [5, 'B'], [15, 'C'], [3, 'D'], [7, 'E'], [12, 'F'], [17, 'G']]);
});

test('max', t => {
  const node = new Node(17, 'G');
  t.deepEqual(tree.max(), node);
  t.deepEqual(tree.max(), tree.root.right.right);
});

test('min', t => {
  const node = new Node(3, 'D');
  t.deepEqual(tree.min(), node);
  t.deepEqual(tree.min(), tree.root.left.left);
});

test('outOrder', t => {
  const array = [];
  t.deepEqual(tree.outOrder(x => array.push([x.key, x.value])), tree);
  t.deepEqual(array, [[17, 'G'], [15, 'C'], [12, 'F'], [10, 'A'], [7, 'E'], [5, 'B'], [3, 'D']]);
});

test('partialNodes', t => {
  tree.remove(17);
  const nodes = tree.partialNodes();
  t.deepEqual(nodes.map(x => [x.key, x.value]), [[15, 'C']]);
  tree.insert(17, 'G');
});

test('postOrder', t => {
  const array = [];
  t.deepEqual(tree.postOrder(x => array.push([x.key, x.value])), tree);
  t.deepEqual(array, [[3, 'D'], [7, 'E'], [5, 'B'], [12, 'F'], [17, 'G'], [15, 'C'], [10, 'A']]);
});

test('preOrder', t => {
  const array = [];
  t.deepEqual(tree.preOrder(x => array.push([x.key, x.value])), tree);
  t.deepEqual(array, [[10, 'A'], [5, 'B'], [3, 'D'], [7, 'E'], [15, 'C'], [12, 'F'], [17, 'G']]);
});

test('remove', t => {
  tree.clear()
    .insert(10, 'A')
    .insert(5, 'B')
    .insert(15, 'C');
  tree.remove(10);
  t.is(tree.root.key, 15);
  t.is(tree.root.value, 'C');
  tree.remove(15);
  t.is(tree.root.key, 5);
  t.is(tree.root.value, 'B');
  tree.insert(2, 'E');
  tree.remove(5);
  t.is(tree.root.key, 2);
  t.is(tree.root.value, 'E');
  tree.insert(3, 'F');
  tree.remove(2);
  t.is(tree.root.key, 3);
  t.is(tree.root.value, 'F');
  tree.remove(3);
  t.is(tree.root, null);
});

test('search', t => {
  tree.clear()
    .insert(10, 'A')
    .insert(5, 'B')
    .insert(15, 'C')
    .insert(3, 'D')
    .insert(7, 'E')
    .insert(12, 'F')
    .insert(17, 'G');
  const node = tree.search(12);
  t.is(node.key, 12);
  t.is(node.value, 'F');
  t.is(node.left, null);
  t.is(node.right, null);
});

test('size', t => {
  t.is(tree.size(), 7);
});

test('toArray', t => {
  const array = tree.toArray();
  t.deepEqual(array.map(x => [x.key, x.value]), [[3, 'D'], [5, 'B'], [7, 'E'], [10, 'A'], [12, 'F'], [15, 'C'], [17, 'G']]);
});

test('toPairs', t => {
  t.deepEqual(tree.toPairs(), [[3, 'D'], [5, 'B'], [7, 'E'], [10, 'A'], [12, 'F'], [15, 'C'], [17, 'G']]);
});
