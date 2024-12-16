// const number = +prompt("Enter the number!")

// for(let i = 1; i <= 10; i = i + 1){
//     console.log(`${i} x ${number} = ${number * i}`);
// }

// const text = "Hello world. How are you? Good Night. Nice to meet you!";

// for(let i = 0; i < text.length; i++){
//     if(text[i].toLocaleLowerCase() == "a"){
//         console.log(1);
//     }
// }





// HOMEWORK
// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR
// For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
let k = 10;
let n = 5;

for(let i = 0; i < n; i++){
    console.log(k);
}



// For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
let kg = 10000;

for(let i = 1; i <= 10; i++){
    let amount = i / 10;
    let price = amount * kg
    console.log(price);
}


// For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. 
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

let nn = 5;
let result = 0;
for(let i = 0; i <= nn; i++){
    result += (n + i) ** 2
}
console.log(result);



// For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. 
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

let N = 5;
let K = n;
let counter = 0;
for(let i = 1; i <= N; i++){
    counter += i ** K
    K -= 1
}
console.log(counter);

 

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.
let a = 4;
let b = 9;
let text = ''

for(let i = a; i <= b; i++){
    for(let j = 0; j < i; j++){
        text+= i
    }
    console.log(text);
    text += ''
}


// For6. Sonning bo’luvchilarini topish
let son = 24;
for(let i = 1; i <= son; i++){
    if(son % i === 0){
        console.log(i);
    }
}


// UYGA VAZIFA
// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

let p = 5;
let q = 9;
let count = 0;
for(let i = b - 1; i > a; i--){
    count++
    console.log(i);
}






