#include <bits/stdc++.h>

using namespace std;

int fact(int n)
{
  if (n <= 1)
    return 1;

  return fact(n - 1) * n;
}

int factDp(int n, vector<int> &dp)
{
  if (n <= 1)
    return 1;

  if (dp[n] != -1)
    return dp[n];

  int ans = factDp(n - 1, dp) * n;

  return dp[n] = ans;
}

int fibo(int n)
{
  if (n == 0 || n == 1)
  {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

int fiboDp(int n, vector<int> &dp)
{
  if (n == 0 || n == 1)
  {
    return dp[n] = n;
  }

  if (dp[n] != -1)
  {
    return dp[n];
  }

  int ans = 0;

  ans = fiboDp(n - 1, dp) + fiboDp(n - 2, dp);
  return dp[n] = ans;
}

int lcs(string s1, string s2, int i, int j, int l, int m)
{
  if (i == l || j == m)
  {
    return 0;
  }

  if (s1[i] == s2[j])
  {
    return 1 + lcs(s1, s2, i + 1, j + 1, l, m);
  }
  else
  {
    return max(lcs(s1, s2, i + 1, j, l, m), lcs(s1, s2, i, j + 1, l, m));
  }
}

int lcsDp(string s1, string s2, int i, int j, int l, int m, vector<vector<int>> dp)
{
  if (i == l || j == m)
  {
    return dp[l][m] = 0;
  }

  if (dp[i][j] != -1)
    return dp[i][j];

  int res = 0;

  if (s1[i] == s2[j])
  {
    res = 1 + lcsDp(s1, s2, i + 1, j + 1, l, m, dp);
  }
  else
  {
    res = max(lcsDp(s1, s2, i + 1, j, l, m, dp), lcsDp(s1, s2, i, j + 1, l, m, dp));
  }

  return dp[i][j] = res;
}

int main()
{
  // vector<int> dp(4 + 1, -1);
  // cout << fibo(4) << endl;
  // cout << fiboDp(4, dp) << endl;

  vector<vector<int>> dp(4 + 1, vector<int>(3 + 1, -1));
  cout << lcsDp("AXYZ", "BAZ", 0, 0, 4, 3, dp) << endl;
}