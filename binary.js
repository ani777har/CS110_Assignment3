let decimal = 7;
let reverse = "";
let binary = "";
while(decimal > 0 ){
    reverse += decimal % 2;
    decimal = Math.floor(decimal/2);
}
for( let a=reverse.length-1; a>=0; a--){
    binary+= reverse[a];
}
console.log(binary);