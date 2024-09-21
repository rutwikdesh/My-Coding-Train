#include <bits/stdc++.h>
using namespace std;

struct Job
{
  int id;     // Job Id
  int dead;   // Deadline of job
  int profit; // Profit if job is over before or on deadline
};

bool cmp(Job a, Job b)
{
  return a.profit > b.profit;
}

// Input: Jobs = [[1,4,20],[2,1,1],[3,1,40],[4,1,30]]
// Output: 2 60
// Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).

class Solution
{
public:
  // Function to find the maximum profit and the number of jobs done.
  vector<int> JobScheduling(Job jobs[], int n)
  {
    int maxDeadline = -1, maxProfit = 0, count = 0;
    vector<int> ans;
    int arr[maxDeadline];

    for (int i = 0; i < n; i++)
    {
      maxDeadline = max(maxDeadline, jobs[i].dead);
    }

    sort(jobs, jobs + n, cmp);

    for (int i = 0; i < n; i++)
    {
      int j = jobs[i].dead - 1;
      while (j >= 0 && arr[j] > jobs[i].profit)
      {
        j--;
      }
      if (j >= 0)
      {
        arr[j] = jobs[i].profit;
        maxProfit = max(maxProfit, arr[j]);
        count++;
      }
    }

    ans.push_back(count);
    ans.push_back(maxProfit);

    return ans;
  }
};