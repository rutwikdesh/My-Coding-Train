#include <bits/stdc++.h>

using namespace std;

class TreeNode
{
public:
  int val;
  TreeNode *left, *right;
  TreeNode()
  {
    left = NULL;
    right = NULL;
  }
};

vector<int> getInorder(TreeNode *root)
{
  vector<int> ans;

  TreeNode *curr = root;

  while (curr != NULL)
  {
    if (curr->left == NULL)
    {
      ans.push_back(curr->val);
      curr = curr->right;
    }
    else
    {
      TreeNode *prev = curr->left;
      while (prev->right && prev->right != curr)
      {
        prev = prev->right;
      }
      if (prev->right == NULL)
      {
        prev->right = curr;
        curr = curr->left;
      }
      else
      {
        prev->right = NULL;
        ans.push_back(curr->val);
        curr = curr->right;
      }
    }
  }
}

int main()
{
}
