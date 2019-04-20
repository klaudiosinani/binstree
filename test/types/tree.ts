import {Tree, Node} from '../..';

const tree = new Tree<string>();
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
