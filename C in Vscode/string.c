#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[] = "Hello World!";
    for (int i = 0, n = strlen(str); i < n; i++)
    {
        printf("%c", str[i]);
    }
    printf("\n");
}