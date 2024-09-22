#include <stdio.h>

int main()
{
    int a = 5;
    printf("a = %d\n", a);

    // increment by 1
    a = a + 1; // a + 1 = 5 + 1 = 6
    // shorthand
    // a += 1;

    ++a; // a++
    printf("a = %d\n", a);

    // increment by 2
    // a = a + 2;
    a += 2;
    printf("a = %d\n", a);

    return 0;
}