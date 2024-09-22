#include <stdio.h>

int main()
{
    int a = 5;
    printf("a = %d\n", a);

    // a = a + 1;
    // a += 1;

    // ++a; // pre-increment: আগে increment বা যোগ করো
    a++; // post-increment: পরে যখন same variable পাবে তখন যোগ করো ।
    printf("a = %d\n", a);

    int x = 5, y = 6;
    x = ++x + y++;

    printf("x = %d\n", x);
    printf("y = %d\n", y);

    return 0;
}