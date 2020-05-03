/*
Given   two   integers,   write   a   function   to   sum   the   numbers   without   using  
any arithmetic operators.

Approach:

similar to normal addition ... but do with binary.

   1 4 5
 +   3 6
 --------
   2 8 1


    1 0 1 1
    0 0 1 0
    --------

1, 0 => 1
0, 1 => 1
0, 0 => 0
1, 1 => 1 
this is XOR truth table. 

but we hv to take care of carry bits also. 

for carry, 0,0 =>0 
           1, 0=>0
           0, 1=>0
           1, 1=>1
this is AND truth table. 

carry for 1 0 1 1
          0 0 1 1
          ---------
          (0 0 1 1) << 1; (becase carry is added to next bit. so we hv to right shift by 1);

          11 + 3 = 14 
          1 0 1 1
          0 0 1 1
          --------
     xor: 1 0 0 0
and << 1: 0 1 1 0
          --------
          1 1 1 0
          0 0 0 0
          --------
          1 1 1 0  => 14.
          --------
*/

function add(a, b) {                
    let carry = (a & b) << 1;       
    let sum = a ^ b;   
    let i = 100;            
    while(carry != 0 && i > 0) {
        const temp = sum;
        sum = sum ^ carry;
        carry = (temp & carry) << 1;
        i--;
    }
    return sum;
}