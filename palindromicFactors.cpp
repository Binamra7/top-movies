#include <bits/stdc++.h>
#define ulld unsigned long long int

using namespace std;

bool checkPali(int x)
{
    string s = to_string(x);
    for (int i = 0, j = s.length() - 1; i <= j; i++, j--)
    {
        if (s[i] != s[j])
            return false;
    }
    return true;
}

int main()
{
    ios::sync_with_stdio(false);
    int t, ans[105];
    ulld a, n;
    cin >> t;
    for (int cases = 0; cases < t; cases++)
    {
        cin >> a;
        n = 1;
        ans[cases] = 0;
        while (n <= sqrt(a))
        {
            if (a % n == 0)
            {
                if (checkPali(n))
                    ans[cases]++;
                if (a / n != n)
                    if (checkPali(a / n))
                        ans[cases]++;
            }
            n++;
        }
    }
    for (int i = 0; i < t; i++)
        printf("Case #%d: %d\n", i + 1, ans[i]);
    return 0;
}