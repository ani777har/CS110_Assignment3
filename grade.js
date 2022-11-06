let score = 69;
let curstat="passed";
let curgrad="A";
if(score < 70){
    curstat = "failed";
}
if(score<=100 && score>=97) {
    curgrad="A+";
} else if(score<=96 && score>=93){
    curgrad="A";
} else if(score<=92 && score>=90){
    curgrad="A-";
} else if(score<=89 && score>=87){
    curgrad="B+";
} else if(score<=86 && score>=83){
    curgrad="B";
} else if(score<=82 && score>=80){
    curgrad="B-";
} else if(score<=79 && score>=77){
    curgrad="C+";
} else if(score<=76 && score>=73){
    curgrad="C";
} else if(score<=72 && score>=70){
    curgrad="C-";
} else if(score<=69 && score>=67){
    curgrad="D+";
} else if(score<=66 && score>=63){
    curgrad="D";
} else if(score<=62 && score>=60){
    curgrad="D-";
} else if (score<=59 && score>=0){
    curgrad="F";
}

console.log("Your grade is " + score + ", which corresponds to " + curgrad + ". You " + curstat + "!") ;
