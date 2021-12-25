#include <stdio.h>
int main()
{
    char str[10][10];
    int i;
    for (i = 0; i < 5; i++)
    {
        printf("Enter name%d : ", i + 1);
        gets(str[i]);
    }

    for (i = 0; i < 5; i++)
    {
        printf("\n%d name : ", i);
        puts(str[i]);
    }
}
// int doSum(int x, int y) //parameter
// {                       //Funciton
//     return x + y;       //Defination
// }
// int main()
// {
//     int sum;
//     int doSum(int, int); //function declaration
//     sum = doSum(10, 20); //Argument//function call
//     printf("%d", sum);
//     return 0;
// }
