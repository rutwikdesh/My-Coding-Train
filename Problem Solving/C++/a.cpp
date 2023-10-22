#include <bits/stdc++.h>

using namespace std;

int main()
{
  string s = "erase*****";
  string temp = s;
  s.erase(1, 4);
  int n = s.size(), count = 0;
  int i = n - 1;
  int start, end;

  while (i >= 0)
  {
    if (temp[i] == '*')
    {
      if (count == 0)
      {
        start = i;
      }
      count++;
    }
    else
    {
      if (count != 0)
      {
        end = i;
        temp.erase(end + end - start, start);
        i = end + end - start;
      }
      count = 0;
    }
    i--;
  }
  cout << temp << endl;
}
