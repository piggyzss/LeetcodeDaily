function f(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return 1 + Math.max(f(root.left), f(root.right));
}

const btree = {
  node: 3,
  left: {node: 9, left: null, right: null},
  right: {
    node: 20,
    left: {
      node: 15,
      left: null,
      right: null
    },
    right: {
      node: 17,
      left: null,
      right: null
    }
  }
}

f(btree)