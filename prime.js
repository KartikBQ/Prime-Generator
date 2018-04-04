var numbers=30,i=4,j=2;
if(numbers >= 1){
    console.log(2);
}
if(numbers >= 2){
    console.log(3);
}
function primeGen(n){
    if(n>2) {
        if(i%j===0){
        i++;
        j=2;
        primeGen(n);
        }
        else if(i%j!==0){
            if(j===parseInt(i/2)){
                console.log(i);
                i++;
                j=2;
                primeGen(n-1);
            }
            else if(j!==parseInt(i/2)) {
                j++;
                primeGen(n);
            }
        }
    }
    }
    primeGen(numbers);