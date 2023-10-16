#include <bits/stdc++.h>

using namespace std;

int main()
{
  int arr[] = {1, 3, 3, 5, 1, 2, 5, 6};

  // output: [1,3,5,2,6]

  set<int> s;
  int n = 8;
  int count = 0;

  for (int i = 0; i < n; i++)
  {
    if (s.find(arr[i]) == s.end())
    {
      s.insert(arr[i]);
      if (count != i)
      {
        arr[count] = arr[i];
      }
      count++;
    }
  }

  for (int i = 0; i < count; i++)
  {
    cout << arr[i] << " ";
  }

  cout << endl;
}
