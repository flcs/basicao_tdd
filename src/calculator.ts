interface IOptions {

}

class Calculator {
    options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
    }

    add(num1: number, num2: number): number {
        return num1 + num2;
    }
}

export default Calculator