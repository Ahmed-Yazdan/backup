#include <stdio.h>
#include <string.h>

int main(void)
{
    char *i;
    char *j;
    printf("I: ");
    scanf("%s", &i);
    printf("J: ");
    scanf("%s", &j);

    if (strcmp(i, j) == 0)
    {
        printf("Same\n");
    }
    else
    {
        printf("Different\n");
    }
    return 0;
}