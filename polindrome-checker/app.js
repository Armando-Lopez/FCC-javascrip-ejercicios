function palindrome(entrada) {

    let str = entrada.toLowerCase()
        .trim()
        .replace(/\s+/g, '')
        .replace(/[^a-zA-Z0-9+]/g, "");

    let strTamano = str.length;

    let alreves = new Array();

    for (let i = strTamano; i >= 0; i--) {
        alreves[i] = str[strTamano - i];
    }

    console.log(alreves.join(''))

    if (str === alreves.join('')) {
        return true;
    } else {
        return false;
    }
}

document.getElementById("comprobar").addEventListener('click', () => {
    let texto = document.getElementById('texto').value.trim();
    if (texto != "") {
        if (palindrome(texto)) {
            alert("El texto es Palindromo :)");
        } else {
            alert("El no texto es Palindromo :(");
        }
    }

})