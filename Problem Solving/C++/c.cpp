#include <bits/stdc++.h>

using namespace std;
class Solution
{
public:
  pair<int, int> findLongestSequence(vector<int> const &str, int k)
  {
    int i = 0, j = 0;

    unordered_set<char> s;
    unordered_map<char, int> m;

    int k_temp = k;

    for (int a = 0; a < k_temp; a++)
    {
      if (s.find(str[a]) == s.end())
      {
        s.insert(str[a]);
        --k;
      }
      m[str[a]] += 1;
    }

    j = k_temp;

    while (j < str.size())
    {
      if (s.find(str[j]) == s.end())
      {
        k--;
        m[str[j]] = 1;
        s.insert(str[j]);
      }
      else
      {
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
    return make_pair(i, j);
  }
};

int main()
{
}