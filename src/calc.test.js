var add = require('./add');

describe('add', () => {
    it('Ele deve somar num1 e num2 e dar num3', () => {
        // Dado que (setup):
        const sut = add
        const expectativa = 3

        // Quando (ação):
        const retorno = sut(1, 2)

        // Então (expectativa):
        expect(retorno).toEqual(expectativa)
    })
})