'use strict';
const test = require('ava');
const {Node, Tree} = require('../.');

const tree = new Tree();

test('insert', t => {
  const node = new Node(10, 'A');
  tree.insert(10, 'A');
  t.deepEqual(tree.root, node);
  t.is(tree.root.key, 10);
  t.is(tree.root.value, 'A');
  t.is(tree.root.left, null);
  t.is(tree.root.right, null);
});

test('root', t => {
  t.deepEqual(tree.root, new Node(10, 'A'));
});

test('clear', t => {
  t.deepEqual(tree.clear(), new Tree());
  t.is(tree.root, null);
});

test('fullNodes', t => {
  tree.insert(10, 'A');
  t.deepEqual(tree.fullNodes(), []);
});

test('height', t => {
  t.is(tree.height(), 0);
});

test('includes', t => {
  t.false(tree.includes(5));
  t.true(tree.includes(10));
});

test('inOrder', t => {
  const array = [];
  const node = new Node(10, 'A');
  t.deepEqual(tree.inOrder(x => array.push(x)), tree);
  t.deepEqual(array, [node]);
  t.deepEqual(array, [tree.root]);
});

test('internalNodes', t => {
  t.deepEqual(tree.internalNodes(), []);
});

test('isBalanced', t => {
  t.true(tree.isBalanced());
});

test('isComplete', t => {
  t.true(tree.isComplete());
});

test('isEmpty', t => {
  t.false(tree.isEmpty());
});

test('isFull', t => {
  t.true(tree.isFull());
});

test('isPerfect', t => {
  t.true(tree.isPerfect());
});

test('leafNodes', t => {
  const node = new Node(10, 'A');
  const leaves = tree.leafNodes();
  t.deepEqual(leaves, [node]);
  t.deepEqual(leaves, [tree.root]);
});

test('levelOrder', t => {
  const array = [];
  const node = new Node(10, 'A');
  t.deepEqual(tree.levelOrder(x => array.push(x)), tree);
  t.deepEqual(array, [node]);
  t.deepEqual(array, [tree.root]);
});

test('max', t => {
  const node = new Node(10, 'A');
  t.deepEqual(tree.max(), node);
  t.deepEqual(tree.max(), tree.root);
});

test('min', t => {
  const node = new Node(10, 'A');
  t.deepEqual(tree.max(), node);
  t.deepEqual(tree.max(), tree.root);
});

test('outOrder', t => {
  const array = [];
  const node = new Node(10, 'A');
  t.deepEqual(tree.outOrder(x => array.push(x)), tree);
  t.deepEqual(array, [node]);
  t.deepEqual(array, [tree.root]);
});

test('partialNodes', t => {
  t.deepEqual(tree.partialNodes(), []);
});

test('postOrder', t => {
  const array = [];
  const node = new Node(10, 'A');
  t.deepEqual(tree.postOrder(x => array.push(x)), tree);
  t.deepEqual(array, [node]);
  t.deepEqual(array, [tree.root]);
});

test('preOrder', t => {
  const array = [];
  const node = new Node(10, 'A');
  t.deepEqual(tree.preOrder(x => array.push(x)), tree);
  t.deepEqual(array, [node]);
  t.deepEqual(array, [tree.root]);
});

test('remove', t => {
  t.deepEqual(tree.remove(10), tree);
  t.deepEqual(tree.remove(10), new Tree());
  t.is(tree.root, null);
});

test('search', t => {
  tree.insert(10, 'A');
  const node = new Node(10, 'A');
  t.deepEqual(tree.search(10), tree.root);
  t.deepEqual(tree.search(10), node);
});

test('size', t => {
  t.is(tree.size(), 1);
});

test('toArray', t => {
  const node = new Node(10, 'A');
  t.deepEqual(tree.toArray(), [tree.root]);
  t.deepEqual(tree.toArray(), [node]);
});
