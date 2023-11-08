#include <bits/stdc++.h>

using namespace std;

int main()
{
  string str = "aabcbdbdbbdcdabd";

  int k = 3;

  int i = 0, j = 0;

  unordered_set<char> s;
  unordered_map<char, int> m;

  for (j; j < k; j++)
  {
    if (m.find(str[j]) != m.end())
    {
      m[str[j]]++;
    }
    else
    {
      m[str[j]] = 1;
      k--;
      s.insert(str[j]);
    }
  }

  while (j < str.size())
  {
    if (s.find(str[j]) != s.end())
    {
      m[str[j]] += 1;
      j++;
    }
    else
    {
      if (k <= 0)
      {
        m[str[i]] -= 1;
        if (m[str[i]] == 0)
        {
          s.erase(str[i]);
          k++;
        }
        i++;
      }
      else{
        k--;
      }
      m[str[j]] = 1;
      s.insert(str[j]);
    }
    j++;
  }

  cout<<j-i;
}
