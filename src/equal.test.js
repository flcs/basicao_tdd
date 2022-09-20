describe('equality' , () => {
    it('Ele deve testar a igualdade (toEqual)', () => {
        // Dado que (setup):
        // const sut = 
        const expectativa = 3

        // Quando (ação):
        const retorno = 1+2

        // Então (expectativa):
        expect(retorno).toEqual(expectativa)
        expect('developer').toEqual('developer');
        expect({name: 'Fernando'}).toEqual({name: 'Fernando'})
    })
})