import fadd from './fadd';
import Calculator from './calculator';

// const add = require('./add');

describe('add', () => {
    let options = {
        precision: 2
    }
    let calc = new Calculator(options);

    beforeEach(() => {
        const options = {
            precision: 2
        }
        calc = new Calculator(options);
    });

    it('Ele deve somar num1 e num2 e dar num3', () => {
        // Dado que (setup):
        const sut = fadd
        const expectativa = 3

        // Quando (ação):
        const retorno = sut(1, 2)

        // Então (expectativa):
        expect(retorno).toEqual(expectativa)
    })

    it('Ele deve somar num1 e num2 e dar num3', () => {
        // Dado que (setup):
        const sut = calc.add

        // Quando (ação):
        const retorno = sut(1.3334, 4.5)
        const expectativa = 5.8334

        // Então (expectativa):
        expect(retorno).toEqual(expectativa)
    })
})
