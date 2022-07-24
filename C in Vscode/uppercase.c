#include <stdio.h>
#include <string.h>

int main(void)
{
    char s[] = "nunu te betha";
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if( s[i] >= 'a' && s[i] <= 'z')
        {
            printf("%c", s[i] - 32);
        }
        else
        {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}