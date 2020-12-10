do { a = +prompt('Enter a:', 2);
}
while(isNaN(a));

do { b = +prompt('Enter b:', 6);
}
while(isNaN(a) && a < b);
do h = +prompt('Enter h:', 1);
while(isNaN(h)|| h<1);
console.log(a,b,h);


for (var sum = 0; a <=  b; a += h) {
    for (var j = 1, factorial = 1; j <= a; j++){
        factorial = factorial * j;
    }
    console.log(`${a}! = ${factorial}`);
    sum = sum + factorial;
}
console.log('Сумма факториалов = ' + sum);
