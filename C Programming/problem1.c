#include <stdio.h>

int main()
{
    int t, students, tickets;
    scanf("%d", &t);

    for (int i = 1; i <= t; ++i)
    {
        scanf("%d%d", &students, &tickets);

        if (tickets >= students)
        {
            printf("0\n");
        }
        else
        {
            printf("%d\n", students - tickets);
        }
    }

    return 0;
}