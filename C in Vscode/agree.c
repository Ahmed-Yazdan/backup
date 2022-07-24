#include <stdio.h>

int main(void)
{
    char a;
    printf("Do you agree?");
    scanf("%c", &a);
    if (a == 'y' || a == 'Y')
    {
        printf("agreed\n");
    }
    else if (a == 'n' || a == 'N')
    {
        printf("disagreed\n");
    }
}