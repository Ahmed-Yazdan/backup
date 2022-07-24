#include <stdio.h>
#include <string.h>

typedef struct
{
    char name[6];
    char number[50];
}
person;



int main(void)
{
    person people[2];
    people[0].name="Carter";


    const char *names[] = {"Bill", "Charlie"};
    const char *numbers[] = {"+8801999577330", "+8801999577330"};

    for (int i = 0; i < 2; i++)
    {
        printf("Attempt %i\n", i);
        if (names[i] = "Bill")
        {
            printf("Found\n");
            printf("%c", names[i]);
            return 0;
        }
    }
    printf("Not Found\n");
    return 1;
}