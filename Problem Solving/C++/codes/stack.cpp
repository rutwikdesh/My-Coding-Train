#include <bits/stdc++.h>
using namespace std;

class SortedStack
{
public:
  stack<int> s;
  void sort();
};

void sorted(stack<int> &s)
{
  if (!s.empty())
  {
    int topEle = s.top();
    s.pop();
    sort();
    sortAndInsert(topEle, s);
  }
}

void SortedStack ::sort()
{
  if (!s.empty())
  {
    int topEle = s.top();
    s.pop();
    sort();
    sortAndInsert(topEle, s);
  }
}

void sortAndInsert(int topEle, stack<int> s)
{

  if (s.empty() || topEle > s.top())
  {
    s.push(topEle);
  }
  else
  {
    int currTop = s.top();
    s.pop();
    sortAndInsert(topEle, s);
    s.push(currTop);
  }
}
