#include <bits/stdc++.h>

using namespace std;

// Question Link: https://www.techiedelight.com/find-longest-substring-containing-k-distinct-characters/

int main()
{
  string str = "aabcbdbdbbdcdabd";

  int k = 0;

  cout << "ENTER K: ";
  cin >> k;

  int i = 0, j = 0;

  unordered_set<char> s;
  unordered_map<char, int> m;

  int first = 0, last = 0;

  while (j < str.size())
  {
    if (s.find(str[j]) != s.end())
    {
      m[str[j]]++;
    }
    else
    {
      m[str[j]] = 1;
      s.insert(str[j]);
      while (s.size() > k)
      {
        m[str[i]] -= 1;
        if (m[str[i]] == 0)
        {
          s.erase(str[i]);
        }
        i++;
      }
    }

    if (j - i > last - first)
    {
      last = j;
      first = i;
    }

    j++;
  }

  cout << last << " - " << first << endl;
  cout << str.substr(first, last - first) << endl;
}
