import {sum} from '../core/sum'

test('Deberia sumar dos numeros', () => {
    //Preparación
    const a = 1;
    const b = 2;
    const esperamos = 3;

    //Actuación
    const result = sum(a,b);

    //Aserción
    expect(result).toBe(esperamos);
    // expect(result).not.toBe(4);
    // expect(a).toEqual(b);
   /* mas ejemplos de assetrs:
    - toBeNull
    - toBeGraterThan
    - toMatch
    - toContain
    - toThrow*/
});