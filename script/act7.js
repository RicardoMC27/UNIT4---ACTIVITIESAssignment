function isPalindrome(str){
    var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
}
var palim = prompt("Dime un texto");

if(isPalindrome(palim)){
    document.write("Es palindromo");
}else{
    document.write("No es palindromo");
}