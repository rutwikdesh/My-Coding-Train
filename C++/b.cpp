#include <bits/stdc++.h>

using namespace std;

int minimizeTopSpeed(int n, vector<int> &spells, long long trackLength)
{
    long long ans = 1;
    long long spellsSize = spells.size();
    while (ans < trackLength)
    {
        long long maxS = 0;
        int i = 0, j = 0;
        while (maxS > 0)
        {
            i += 1;
            if (j < spellsSize && i == spells[j])
            {
                maxS = ans;
                j++;
            }
            trackLength -= maxS;
            maxS -= 1;
            if (trackLength <= 0)
                return ans;
        }
        ans++;
    }
}

class TreeNode
{
public:
    int val;
    TreeNode *left, *right;
    TreeNode()
    {
        val = 0;
        this->left = NULL;
        this->right = NULL;
    }
    TreeNode(int val)
    {
        this->val = val;
        this->left = NULL;
        this->right = NULL;
    }
};

void fun(TreeNode *root)
{
    fun(root->left);
    cout << root->val;

    fun(root->right);
}

int main()
{
    TreeNode *root = new TreeNode(3);
    root->left = new TreeNode(4);
    root->right = new TreeNode(5);
    root->left->right = new TreeNode(15);
    fun(root);

    //       3
    //    4     5
    // 15  n  n   n
}