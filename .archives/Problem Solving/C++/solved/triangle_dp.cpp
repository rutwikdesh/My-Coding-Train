#include <bits/stdc++.h>

using namespace std;

// Problem Link: https://leetcode.com/problems/triangle/?envType=study-plan-v2&envId=top-interview-150

int fun(vector<vector<int>> &triangle, int x, int y)
{
  if (x == triangle.size() || y == triangle[x].size())
    return 0;

  int a = fun(triangle, x + 1, y);
  int b = fun(triangle, x + 1, y + 1);

  int currMin = triangle[x][y] + min(a, b);

  return currMin;
}

int funMemo(vector<vector<int>> &triangle, int x, int y, vector<vector<int>> &dp)
{
  if (x == triangle.size() || y == triangle[x].size())
    return 0;

  if (dp[x][y] != -1)
    return dp[x][y];

  int a = funMemo(triangle, x + 1, y, dp);
  int b = funMemo(triangle, x + 1, y + 1, dp);

  int currMin = triangle[x][y] + min(a, b);

  return dp[x][y] = currMin;
}

int funTab(vector<vector<int>> &triangle)
{
  int n = triangle.size();
  vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));

  for (int i = n - 1; i >= 0; i--)
  {
    for (int j = i; j >= 0; j--)
    {
      dp[i][j] = triangle[i][j] + min(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

int minimumTotal(vector<vector<int>> &triangle)
{
  // vector<vector<int>> dp(triangle.size(), vector<int>(triangle[triangle.size()-1].size(), -1));
  return funTab(triangle);
}

int main()
{
  vector<vector<int>> triangle = {{2}, {3, 4}, {6, 5, 7}, {4, 1, 8, 3}};
  cout << minimumTotal(triangle) << endl;
}
