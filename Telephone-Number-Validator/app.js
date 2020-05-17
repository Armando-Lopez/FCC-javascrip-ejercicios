function telephoneCheck(str) {
    const exp = /^(1 |1|)(\d{3}|\(\d{3}\))( |-|)(\d{3})( |-|)(\d{4}$)/;
    if (str.match(exp)) {
        return true;
    }
    return false;
}

document.getElementById('validar').addEventListener('click', () => {
    let number = document.getElementById('numero').value;
    let result = document.getElementById('result');
    let res = telephoneCheck(number);

    if (res) {
        result.innerHTML = '<h2>El numero es valido</h2>'
    }
    else {
        result.innerHTML = '<h2>El numero no es valido</h2>'
    }
})