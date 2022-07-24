#include <stdio.h>

int main(void)
{
    const long x, y;
    printf("Enter an integer: ");
    scanf("%li", &x);
    printf("Enter an integer: ");
    scanf("%li", &y);
    if (x < y)
    {
        printf("x is less than y");
    }
    else if (x > y)
    {
        printf("x is greater than y");
    }
    else
    {
        printf("x is equal to y");
    }
    // printf("Number = %li",x+y);
};
