#include <bits/stdc++.h>

using namespace std;

int minimizeTopSpeed(int n, vector<int> &spells, long long trackLength)
{
    long long ans = 1;
    long long spellsSize = spells.size();
    long long trackL = trackLength;
    long long zero = 0;
    while (ans < trackLength)
    {
        long long maxS = 0;
        int i = spells[0]-1, j = 0;
        trackL = trackLength;
        do
        {
            i += 1;
            if (i == spells[j])
            {
                maxS = ans;
                j++;
            }

            cout << "ans= " << ans << " ";
            cout << "i= " << i << " ";
            trackL -= maxS;
            cout << "maxS= " << maxS << " ";
            cout << "trackLength= " << trackL << endl;

            maxS = max(maxS - 1, zero);
            if (trackL <= 0)
                return ans;
        } while (j < spellsSize || maxS > 0);
        ans++;
    }
}

int main()
{
    vector<int> v = {14};

    cout << minimizeTopSpeed(1, v, 29);
}