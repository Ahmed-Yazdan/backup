#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
typedef char *string;

int main(void)
{   
    string s = "helloaksdd!";
    string t = malloc(strlen(s) + 1);
    if (t == NULL)
        return 1;

    strcpy(t, s);
    
    if (strlen(t) > 0)
        t[0] = toupper(t[0]);

    printf("s: %s\n", s);
    printf("t: %s\n", t);





    return 0;
}