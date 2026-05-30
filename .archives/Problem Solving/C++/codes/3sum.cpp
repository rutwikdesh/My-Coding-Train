#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
  vector<vector<int>> threeSum(vector<int> &nums)
  {
    sort(nums.begin(), nums.end());
    int n = nums.size();

    vector<vector<int>> ans;

    for (int i = 0; i < n; i++)
    {
      int low = i + 1;
      int high = n - 1;

      while (low < high)
      {
        if (nums[i] + nums[low] + nums[high] < 0)
        {
          low++;
        }
        else if (nums[i] + nums[low] + nums[high] > 0)
        {
          high--;
        }
        else
        {
          vector<int> ds;

          ds.push_back(nums[i]);
          ds.push_back(nums[low]);
          ds.push_back(nums[high]);

          ans.push_back(ds);

          while (low < high && nums[low] == nums[low + 1])
            low++;
          while (low < high && nums[high] == nums[high - 1])
            high--;

          low++;
          high--;
        }
      }
      while (i < n - 1 && nums[i] == nums[i + 1])
        i++;
    }
    return ans;
  }
};

int main()
{
}