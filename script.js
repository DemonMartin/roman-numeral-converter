function convertToRoman(num) {
    if (num < 1) return "Please enter a number greater than or equal to 1";
    if (num >= 4000) return "Please enter a number less than or equal to 3999";

    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';

    for (let key in roman) {
        while (num >= roman[key]) {
            result += key;
            num -= roman[key];
        }
    }
    return result;
}

document.getElementById('convert-btn').addEventListener('click', function () {
    const number = document.getElementById('number').value;
    if (!number) {
        document.getElementById('output').innerText = "Please enter a valid number";
        return;
    }
    const result = convertToRoman(parseInt(number));
    document.getElementById('output').innerText = result;
});
