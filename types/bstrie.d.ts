declare namespace node {
  type Degree = 0 | 1 | 2;

  export interface Constructor {
    new <T = any>(value?: T): Instance<T>;
  }

  export interface Instance<T> {
    value: T;
    left: Instance<T> | null;
    right: Instance<T> | null;
    readonly children: Instance<T>[];
    readonly degree: Degree;
    height(): number;
    isFull(): boolean;
    isInternal(): boolean;
    isLeaf(): boolean;
    isLeftPartial(): boolean;
    isPartial(): boolean;
    isRightPartial(): boolean;
  }
}

declare namespace tree {
  type UnaryCallback<T> = (x: T) => void;

  interface Node<T> extends node.Instance<T> {}

  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly root: Node<T> | null;
    height(): number;
    includes(value: T): boolean;
    inOrder(fn: UnaryCallback<Node<T>>): this;
    insert(...values: T[]): this;
    isComplete(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    isPerfect(): boolean;
    leaves(): number;
    levelOrder(fn: UnaryCallback<Node<T>>): this;
    max(): Node<T> | null;
    min(): Node<T> | null;
    outOrder(fn: UnaryCallback<Node<T>>): this;
    postOrder(fn: UnaryCallback<Node<T>>): this;
    preOrder(fn: UnaryCallback<Node<T>>): this;
    remove(value: T): this;
    search(value: T): Node<T> | null;
    size(): number;
    toArray(): T[];
  }
}

declare namespace bstrie {
  export interface Node<T = any> extends node.Instance<T> {}
  export interface Tree<T = any> extends tree.Instance<T> {}
}

declare const bstrie: {
  Node: node.Constructor;
  Tree: tree.Constructor;
};

export = bstrie;
