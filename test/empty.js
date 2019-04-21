'use strict';
const test = require('ava');
const {Tree} = require('../.');

const tree = new Tree();

test('root', t => {
  t.is(tree.root, null);
});

test('clear', t => {
  t.deepEqual(tree.clear(), new Tree());
});

test('fullNodes', t => {
  t.deepEqual(tree.fullNodes(), []);
});

test('height', t => {
  t.is(tree.height(), -1);
});

test('includes', t => {
  t.false(tree.includes(10));
});

test('inOrder', t => {
  const array = [];
  t.deepEqual(tree.inOrder(x => array.push(x)), tree);
  t.deepEqual(array, []);
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
  t.true(tree.isEmpty());
});

test('isFull', t => {
  t.true(tree.isFull());
});

test('isPerfect', t => {
  t.true(tree.isPerfect());
});

test('leafNodes', t => {
  t.deepEqual(tree.leafNodes(), []);
});

test('levelOrder', t => {
  const array = [];
  t.deepEqual(tree.levelOrder(x => array.push(x)), tree);
  t.deepEqual(array, []);
});

test('max', t => {
  t.is(tree.max(), null);
});

test('min', t => {
  t.is(tree.min(), null);
});

test('outOrder', t => {
  const array = [];
  t.deepEqual(tree.outOrder(x => array.push(x)), tree);
  t.deepEqual(array, []);
});

test('partialNodes', t => {
  t.deepEqual(tree.partialNodes(), []);
});

test('postOrder', t => {
  const array = [];
  t.deepEqual(tree.postOrder(x => array.push(x)), tree);
  t.deepEqual(array, []);
});

test('preOrder', t => {
  const array = [];
  t.deepEqual(tree.preOrder(x => array.push(x)), tree);
  t.deepEqual(array, []);
});

test('remove', t => {
  t.deepEqual(tree.remove(10), tree);
});

test('search', t => {
  t.is(tree.search(10), null);
});

test('size', t => {
  t.is(tree.size(), 0);
});

test('toArray', t => {
  t.deepEqual(tree.toArray(), []);
});

test('toPairs', t => {
  t.deepEqual(tree.toPairs(), []);
});
