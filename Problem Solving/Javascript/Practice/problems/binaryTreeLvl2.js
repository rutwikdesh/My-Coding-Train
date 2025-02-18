// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */

var levelOrderBottom = function (root) {
  if (root === null) return [];
  const que = [],
    ans = [];
  que.push(root);
  while (que.length !== 0) {
    let size = que.length;
    const arr = [];
    while (size--) {
      const ele = que.shift();
      arr.push(ele.val);
      if (ele.left) que.push(ele.left);
      if (ele.right) que.push(ele.right);
    }
    ans.push(arr);
  }
  que.reverse();
  return que;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrderBottom(root));
