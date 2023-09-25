#include <bits/stdc++.h>

using namespace std;

int fun()
{
}

int main()
{
    queue<int> q;
    q.push(10);
    q.push(11);
    q.push(12);
    q.push(13);

    cout << q.front() << endl;

    stack<int> s;
    s.push(10);
    s.push(11);
    s.push(12);
    s.push(13);

    cout << s.top() << endl;

    map<int, int> m;
    m[345] = 59;
    m[377] = 100;
    m[1000] = 300;
    m[200] = 200;
    m[100] = 400;

    sort(m.begin(), m.end());

    for (auto it : m)
    {
        cout << it.first << " " << it.second << endl;
    }
}

class Sol
{
    struct compare
    {
        bool operator()(vector<int> &a, vector<int> &b)
        {
            return a[1] > b[1];
        }
    };
    priority_queue<vector<int>, vector<vector<int>>, compare> pq;
};
