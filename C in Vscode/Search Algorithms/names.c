#include <stdio.h>
#include <string.h>

int main(void)
{
    const char *names[] = {"Bill", "Charlie", "Fred", "George", "Ginny", "Percy", "Ron"};

    for (int i = 0; i < 7; i++)
    {
        printf("Attempt %i\n", i);
        if (names[i]= "Bill")
        {
            printf("Found\n");
            printf("%c", names[i]);
            return 0;
        }
    }
    printf("Not Found\n");
    return 1;
}