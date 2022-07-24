#include <stdio.h>

float discount(int price,int percent_off);

int main(void)
{
    float regular,sale,percent_off;
    printf("Enter regular price ");
    scanf("%f", &regular);
    printf("Enter discount percentage ");
    scanf("%f", &percent_off);
    sale = discount(regular,percent_off);
    printf("Discount is: %.2f\n", sale);
    printf("Final price is: %.2f\n", regular-sale);
}






float discount(int price, int percent_off)
{
    return price * percent_off/100;
}