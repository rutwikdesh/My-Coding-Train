#include <bits/stdc++.h>

using namespace std;

int fun()
{
}

class Solution
{
public:
    int findPS(vector<int> &v, int ind, int n)
    {
        if (ind == 0)
        {
            if (n % v[ind] == 0)
            {
                return n / v[ind];
            }
            return 1e8;
        }
        int take = INT_MAX, dontTake = INT_MAX;

        if (n >= v[ind])
        {
            take = 1 + findPS(v, ind, n - v[ind]);
        }
        dontTake = findPS(v, ind + 1, n);

        return min(take, dontTake);
    }
    int numSquares(int n)
    {
        vector<bool> v(100000001, true);

        for (int i = 2; i <= n; i++)
        {
            if (v[i] == true)
            {
                for (int j = i * i; j <= n; j += i)
                {
                    v[j] = false;
                }
            }
        }
        vector<int> v1;
        for (int i = 2; i <= n; i++)
        {
            if (v[i] == true)
            {
                v1.push_back(i);
            }
        }
        return findPS(v1, 0, n);
    }
};

int main()
{
}
