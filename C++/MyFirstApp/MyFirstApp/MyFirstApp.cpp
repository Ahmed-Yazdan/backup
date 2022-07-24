#include <iostream>
#include <iomanip>
#include <list>
using namespace std;


int main()
{    

    // accept number as n
    // result is equal to 
    // loop   = 1 2 3 4 5 6 7 8  .............
    // number = 0 1 1 2 3 5 8 13 ............
    // ........v1,v2
    
    int n, v1 = 0, v2 = 1, a = 0;

    cout << "Please enter a value" << endl;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        if (i == 1) {
            cout << v1 << endl;
            continue;
        };  
        if (i == 2) {
            cout << v2 << endl;
            continue;
        };

        // Next Part
        a = v1 + v2; // a = 2
        v1 = v2; // 1 1
        v2 = a;
        cout << a << endl; // a = 1
    };



    system("pause>0");
}