#include <bits/stdc++.h>

using namespace std;

int main()
{
  unordered_set<int> s;

  s.insert(1);
  s.insert(2);
  s.insert(3);
  s.insert(4);

  for (auto i : s)
  {
    cout << i << " ";
  }

  cout << endl;

  unordered_map<int, int> m;

  m[1] = 11;
  m[2] = 12;
  m[3] = 13;

  for (auto i : m)
  {
    cout << m[i.first] << " ";
  }
}