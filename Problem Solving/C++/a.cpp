#include <bits/stdc++.h>

using namespace std;

int main()
{
  vector<int> q;
  // vector<int> col;
  q.push_back(1);
  q.push_back(2);
  q.push_back(3);
  q.push_back(4);
  vector<int> q2;
  q2.push_back(1);
  q2.push_back(2);
  vector<int> col(q.begin(), q.end());

  col.insert(col.end(), q.begin(), q.end());
  for (int i = 0; i < 8; i++)
  {
    cout << col[i] << " ";
  }
}
