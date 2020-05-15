'use strict';

function rot13(input) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alphabetLength = alphabet.length;
    let str = input.toUpperCase();
    let encoded = '';

    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        let characterPosition = alphabet.indexOf(character);

        if (characterPosition < 0) {
            encoded += character;
        } else {
            let newPosition = characterPosition + 13;
            if (newPosition >= alphabetLength) {
                newPosition -= alphabetLength;
            }
            encoded += alphabet[newPosition];
        }
    }

    return encoded;
}

document.getElementById('codificar').addEventListener('click', () => {

    let text = document.getElementById('texto').value;

    let encodedResult = rot13(text);

    document.getElementById('result').innerText = encodedResult;
})