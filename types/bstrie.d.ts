declare namespace node {
  type Degree = 0 | 1 | 2;

  export interface Constructor {
    new <T = any>(value?: T): Instance<T>;
  }

  export interface Instance<T> {
    value: T;
    left: Instance<T> | null;
    right: Instance<T> | null;
    readonly degree: Degree;
    isInternal(): boolean;
    isLeaf(): boolean;
  }
}

declare namespace tree {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly root: node.Instance<T> | null;
    includes(value: T): boolean;
    inOrder(fn: (x: T) => void): this;
    insert(...values: T[]): this;
    isEmpty(): boolean;
    max(): node.Instance<T> | null;
    min(): node.Instance<T> | null;
    preOrder(fn: (x: T) => void): this;
    remove(value: T): this;
    search(value: T): node.Instance<T> | null;
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
