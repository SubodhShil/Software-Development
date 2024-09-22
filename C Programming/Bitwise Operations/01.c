#include <stdio.h>
#include <stdbool.h>

int main()
{
    int a = 10, b = 0;

    // falsy values: 0, false, null, nullptr
    // any value that is not falsy is eventually a truthy value
    bool isTrue = NULL;

    /* if (isTrue)
    {
        printf("True\n");
    }
    else
    {
        printf("False\n");
    } */

    // a && b = true && false = false
    if (a && b)
    {
        printf("ja iccha\n");
    }
    else
    {
        printf("ja iccha 2\n");
    }

    return 0;
}