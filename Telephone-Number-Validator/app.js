function telephoneCheck(str) {
    const exp = /^(1 |1|)(\d{3}|\(\d{3}\))( |-|)(\d{3})( |-|)(\d{4}$)/;
    if (str.match(exp)) {
        return true;
    }
    return false;
}