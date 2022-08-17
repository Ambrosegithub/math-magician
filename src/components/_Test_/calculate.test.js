import calculate from '../../logic/Calculate';

describe('Tests on calculator.js calculate function', ()=>{
    test('Test AC button on calculator', ()=>{
        const result = calculate({ total: '777', next: '75', operation: '' }, 'AC');
        expect(result).toStrictEqual({ total: null, next: null, operation: null });
    })

    test('Test = button on calculator', ()=>{
        const result = calculate({ total: '70', next: '75', operation: 'x'  }, '=');
        expect(result).toStrictEqual({ total: '5250', next: null, operation: null });
    })

    test('Test +/- button on calculator', ()=>{
        const plusMinus = calculate({ total: '70', next: null, operation: null  }, '+/-');
        expect(plusMinus).toStrictEqual({ total: '-70', next: null, operation: null });
    })

    test('Test dot button on calculator', ()=>{
        let dotSsign = calculate({ total: null, next: null, operation: null  }, '5');
        dotSsign = calculate(dotSsign, '.')
        dotSsign = calculate(dotSsign, '70')
        expect(dotSsign).toStrictEqual({ total: null, next: '5.70', });
    })

    test('Test - button on calculator', ()=>{
        const Minus = calculate({ total: '70', next: '90', operation: '-'  },  'x');
        expect(Minus).toStrictEqual({ total: '-20', next: null, operation: 'x' });
    })

    test('Test + button on calculator', ()=>{
        const plus = calculate({ total: '70', next: '90', operation: '+'  },  '+');
        expect(plus).toStrictEqual({ total: '160', next: null, operation: '+' });
    })

    test('Test ÷ button on calculator', ()=>{
        const plus = calculate({ total: '100', next: '50', operation: '÷'  },  '=');
        expect(plus).toStrictEqual({ total: '2', next: null, operation: null });
    })

    test('Test % button on calculator', ()=>{
        const result = calculate({ total: null, next: '1200', operation: null }, '%');
    expect(result).toStrictEqual({ total: '1200', next: null, operation: '%' });
    })
})
