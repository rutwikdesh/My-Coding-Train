#include <bits/stdc++.h>
using namespace std;

int main()
{
  vector<pair<int, int>> v = {{1, 3}};
  v[1] = {2, 3};

  cout << v[1].first << "\n";
}