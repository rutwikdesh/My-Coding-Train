#include <bits/stdc++.h>

using namespace std;

bool cmp(int a, int b)
{
  long long int num1 = stoll(to_string(a) + to_string(b));
  long long int num2 = stoll(to_string(b) + to_string(a));
  return num1 > num2;
}

string largestNumber(vector<int> &nums)
{
  sort(nums.begin(), nums.end(), cmp);
  string ans = "";
  for (int i = 0; i < nums.size(); i++)
  {
    ans += to_string(nums[i]);
  }
  return ans;
}

int main()
{
  vector<int> nums = {10,2};
  cout<<largestNumber(nums);
}
