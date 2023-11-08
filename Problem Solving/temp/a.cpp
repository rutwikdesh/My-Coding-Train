#include <bits/stdc++.h>

using namespace std;

void fun(vector<int> v, int k){
  int n = v.size();
  int temp = k;
  int ans = 0;
  for(int i=0;i<n;i++){
    int count_inner = 0;
    for(int j=i;j<n;j++){
      if(v[j]==0){
        k--;
      }
      if(k==-1){
        k = temp;
        break;
      }
      count_inner++;
    }
    ans = max(ans, count_inner);
  }

  cout<<ans<<endl;
}

int main(){
  vector<int> v = {1,1,1,0,0,0,1,1,1,1,0};
  int k = 2;

  fun(v, k);
}