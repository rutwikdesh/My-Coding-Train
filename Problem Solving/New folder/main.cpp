#include <bits/stdc++.h>

using namespace std;

vector<pair<int,int>> findPair(vector<int> arr, int k){
  vector<pair<int,int>> ans;

  unordered_set<int> s;
  for (int i = 0; i < arr.size(); i++)
  {
    if(s.find(k - arr[i])!=s.end()) {
      ans.push_back({arr[i], k - arr[i]});
    }
    s.insert(arr[i]);
  }
  return ans;
}



int main()
{
  for l -> 0 to n
      sum = (k - arr[l]);


  vector<int> arr = {1, 3, 2, 5, 5, 6, 2};
  vector<pair<int, int>> ans = findPair(arr, 8);

  for (int i = 0; i < ans.size(); i++)
  {
    cout<<ans[i].first<<" "<<ans[i].second<<endl;
  }
  
}