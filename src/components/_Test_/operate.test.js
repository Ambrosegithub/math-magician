import operate from "../../logic/operate";

describe('Test on operate.js arithmetic operation',  ()=>{
 test('Test multiply 20 * 5 to get 100', ()=>{
    const product = operate(20, 5, 'x');
    expect(product).toBe('100')
 })

 test('Test sum 20 & 80 to get 100', ()=>{
    const sum = operate(20, 80, '+');
    expect(sum).toBe('100')
 })

 test('Test division 100 by 5 to get 20', ()=>{
    const divide = operate(100, 5, '÷');
    expect(divide).toBe('20')
 })

 test('Test subtration 100 by 80 to get 20', ()=>{
    const minus = operate(100, 80, '-');
    expect(minus).toBe('20')
 })

 test('Test remainder of 18 by 5 to get 20', ()=>{
    const modulus = operate(18, 5, '%');
    expect(modulus).toBe('3')
 })

})