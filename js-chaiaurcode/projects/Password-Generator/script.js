const input_field = document.getElementById("Password");
const btn = document.getElementById("button");
let pass_len = 6;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";  // Fixed typo here
const digits = "0123456789";
const symbols = "@&|_-$~";

btn.addEventListener('click', createPassword);

function createPassword() {
    let allchar = uppercase + lowercase + digits + symbols;
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = password.length; i < pass_len; i++) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

  
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    input_field.value = password;
}
