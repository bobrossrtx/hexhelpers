const isValidDecimal = /^.?[0-9]+$/;

export default function (decimalStr) {
    if (!isValidDecimal.exec(decimalStr)) {
        throw new Error("Unexpected value. Please input valid decimal\n");
    }

    const number = Number(decimalStr.replace(/\s/g, ''));
    if (Number.isNaN(number)) {
        throw new Error("Unexpected value. Please input valid decimal\n");
    }

    return number.toString(2);
}