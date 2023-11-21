#include <bits/stdc++.h>

using namespace std;

// Problem Link: https://leetcode.com/problems/course-schedule/description/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

bool DFS(int node, vector<vector<int>> &adj, vector<int> &vis, vector<int> &path_vis)
{
  vis[node] = 1;
  path_vis[node] = 1;

  for (int nbr : adj[node])
  {
    if (vis[nbr] != 1)
    {
      if (DFS(nbr, adj, vis, path_vis))
        return true;
    }
    else if (path_vis[nbr] == 1)
    {
      return true;
    }
  }

  path_vis[node] = 0;

  return false;
}

bool findCycle(vector<vector<int>> &adj, int n)
{
  vector<int> vis(n, 0);
  vector<int> path_vis(n, 0);

  for (int i = 0; i < n; i++)
  {
    if (vis[i] != 1)
    {
      if (DFS(i, adj, vis, path_vis))
        return true;
    }
  }
  return false;
}

bool canFinish(int numCourses, vector<vector<int>> &prerequisites)
{
  vector<vector<int>> adj(numCourses);

  for (int i = 0; i < prerequisites.size(); i++)
  {
    adj[prerequisites[i][1]].push_back(prerequisites[i][0]);
  }

  return !findCycle(adj, numCourses);
}

int main()
{
  vector<vector<int>> prerequisites = {{1, 0}};
  cout << canFinish(2, prerequisites);
}
