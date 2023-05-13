const input = document.querySelector('.password-output');
const generateBtn = document.querySelector('.generate-password');
const copyBtn = document.querySelector('.copy-password');

const generatePassword = (length = 12) => {
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var password = "";

    var randomUppercaseIndex = Math.floor(Math.random() * uppercaseLetters.length);
    password += uppercaseLetters[randomUppercaseIndex];

    var randomLowercaseIndex = Math.floor(Math.random() * lowercaseLetters.length);
    password += lowercaseLetters[randomLowercaseIndex];

    var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
    password += symbols[randomSymbolIndex];

    var remainingLength = length - 3;

    var charset = uppercaseLetters + lowercaseLetters + symbols;
    for (var i = 0; i < remainingLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    input.value = password;

};

generatePassword();

function copyPassword() {
    var passwordOutput = document.querySelector('.password-output');
    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
};

generateBtn.addEventListener('click', ()=>{
    generatePassword();
});
copyBtn.addEventListener('click', copyPassword);