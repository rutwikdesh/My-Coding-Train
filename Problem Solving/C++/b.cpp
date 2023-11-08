#include <bits/stdc++.h>

using namespace std;

int main()
{
  string str = "abcbdbdbbdcdabd";

  int k = 1;

  int i = 0, j = 0;

  unordered_set<char> s;
  unordered_map<char, int> m;

  for (int a = 0; a < 3; a++)
  {
    if (s.find(str[a]) == s.end())
    {
      s.insert(str[a]);
      --k;
    }
    m[str[a]] += 1;
  }

  j = 3;

  while (j < str.size())
  {
    if (s.find(str[j]) == s.end())
    {
      k--;
      m[str[j]] = 1;
      s.insert(str[j]);
    }
    else{
      m[str[j]]++;
    }
    if (k < 0)
    {
      m[str[i]] -= 1;
      if (m[str[i]] == 0)
      {
        s.erase(str[i]);
        k++;
      }
      i++;
    }
    
    j++;
  }

  cout << j - i;
}
