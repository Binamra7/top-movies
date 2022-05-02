#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n, q;
    cin >> n >> q;
    vector<string> lines, queries;
    string queryName, ans;
    string extraLine;
    getline(cin, extraLine);
    for (int i = 0; i < n; i++)
    {
        string temp;
        getline(cin, temp);
        lines.push_back(temp);
    }
    for (int i = 0; i < q; i++)
    {
        string temp;
        getline(cin, temp);
        queries.push_back(temp);
    }
    // cout << "lines" << endl;
    // for (auto &line : lines)
    //     cout << line << endl;
    // cout << "queries" << endl;
    // for (auto &query : queries)
    //     cout << query << endl;
    for (auto &query : queries)
    {
        queryName = "";
        int ptr = 0, ptr2 = 0, len = query.length();
        while (query[ptr] != '~')
        {
            if (query[ptr] == '.')
                ptr2++;
            ptr++;
        }
        queryName = query.substr(++ptr, len - 1);
        int queryLen = queryName.length();
        for (int i = 0; i <= lines[ptr2].length() - queryLen; i++)
        {
            ans = "";
            if (lines[ptr2].substr(i, queryLen) == queryName)
            {
                // cout << "here" << endl;
                while (lines[ptr2][i] != '"')
                    i++;
                i++;
                while (lines[ptr2][i] != '"')
                {
                    // cout << "ans: " << ans << endl;
                    ans += lines[ptr2][i];
                    i++;
                }
                break;
            }
        }
        if (ans.length() == 0)
            ans = "Not Found!";
        cout << ans << endl;
    }
    return 0;
}
