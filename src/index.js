module.exports = function zeros(expression) {
    let val = BigInt(1);
    let pos = -1;
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== '!') {
            pos < 0 ? pos = i : null;
            i++;
            if (expression[i] === '!') {
                let step = 1;
                expression[i + 1] === '!' ? step = 2 : null;
                for (let j = Number(expression.substring(pos, i)); j > 1; j -= step) {
                    val = BigInt(val) * BigInt(j);
                }
                pos = -1;
                i += step;
            } else {
                i--;
            }
        }
    }
    expression = val.toString();
    val = 0;
    for (let k = 1; k < expression.length; k++) {
        if (Number(expression[expression.length - k])) {
            break;
        } else {
            val++;
        }
    }
    return val;
}
