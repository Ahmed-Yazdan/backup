"use strict";
const salary = 500;
const friendSalaries = [121212, 696969, 69420];
const friends = ['Number one sakib khan', 'Number two sakib al hasan',];
friendSalaries[0] = 10500;
friendSalaries.push(12109);
friendSalaries[2] = 213232133213123123123;
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
    ;
}
;
