   /*
    A(input: number)
        converse both numbers to string 
        set {} to lookup at key and value to check  if both numbers are have same value
        loop through num1 to find key and set value 1 to lookup for counting
        if     
    B(output: boolean) 
    */
   function sameFrequency(num1, num2) {
       let numStr1 = String(num1).split('').sort().join('');
       let numStr2 = String(num2).split('').sort().join('');
       if (numStr1 === numStr2) return true;
       else return false;

   }

   // console.log('1 :', sameFrequency(182, 281)) //  true
   console.log('--:', sameFrequency(182, 281)) //  false