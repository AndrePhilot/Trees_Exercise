/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // I was able to devise many elements of the solution
  // but ultimately the solution was provided by ChatGPT
  minDepth(node = this.root) {
    if (node === null){
      return 0;
    }

    if (node.left === null && node.right === null) {
      return 1;
    }

    if (node.left === null) {
      return 1 + this.minDepth(node.right);
    }

    if (node.right === null) {
      return 1 + this.minDepth(node.left);
    }

    return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (node === null) {
      return 0;
    }

    if (node.left === null && node.right === null) {
      return 1;
    }

    if (node.left === null) {
      return 1 + this.maxDepth(node.right);
    }

    if (node.right === null) {
      return 1 + this.maxDepth(node.left);
    }

    return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  // I had no idea how to solve this without starting
  // from the root, so solution was written by ChatGPT
  maxSum(node = this.root) {
      if (node === null) {
        return 0;
      }
      
      let maxSum = -Infinity; // Initialize maxSum to negative infinity

      // Helper function to perform DFS
      const dfs = (node) => {
        if (node === null) {
          return 0;
        }

        // Calculate sums of left and right subtrees
        const leftSum = Math.max(0, dfs(node.left)); // Ensure negative values are not considered
        const rightSum = Math.max(0, dfs(node.right)); // Ensure negative values are not considered

        // Update maxSum by considering the current node value and the sum of its subtrees
        maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

        // Return the maximum sum that can be obtained by considering the current node and one of its subtrees
        return node.val + Math.max(leftSum, rightSum);
      };

      // Start DFS traversal from the root
      dfs(node);

      // Return the maximum sum found
      return maxSum;
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    const toVisitStack = [this.root];
    let smallestValue = Infinity;

    while (toVisitStack.length) {
      const current = toVisitStack.pop();

      if (current.val > lowerBound) {
        smallestValue = Math.min(smallestValue, current.val);
      }

      if (current.left) {
        toVisitStack.push(current.left);
      }
      if (current.right) {
        toVisitStack.push(current.right);
      }
    }
    return smallestValue === Infinity ? null : smallestValue;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
