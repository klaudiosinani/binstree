declare namespace node {
  export interface Constructor {
    new <T = any>(value?: T): Instance<T>;
  }

  export interface Instance<T> {
    value: T;
    left: Instance<T> | null;
    right: Instance<T> | null;
  }
}

declare namespace tree {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly root: node.Instance<T> | null;
    includes(value: T): boolean;
    insert(...values: T[]): this;
    isEmpty(): boolean;
    max(): node.Instance<T> | null;
    min(): node.Instance<T> | null;
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
