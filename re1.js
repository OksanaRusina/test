const re = /^[а-яА-ЯЇє]{2}[0-9]{6}$/;
const newArr = re.test('АЕ658974');
console.log(newArr);

function sumNum(a, b) {
    let sum = 0;
       for (let i = a; i <= b; i++) {
        if (i > 0 && i % 3 !== 0) { 
            sum += i;
        }
    }
    return sum;
}

