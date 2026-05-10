function isPalindrome(str) {

    let isPalindrome=1;
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[str.length-1-i]){
            isPalindrome = 0;
        }
    }
    if(!isPalindrome){
        return "Not palindrone";
    }else{
        return "Palindrone";
    }

}

console.log(isPalindrome("madam"));