import isEquilateral from './isEquilateral.js'

describe('.isEquilateral(a, b ,c)', () => {
    test('should return true when all sides are equal', () => {
        const a = 1;
        const b = 1;
        const c = 1;

        const actual = isEquilateral(a, b, c);

        expect(actual).toEqual(true);
    });

    test('should return false when only 2 sides are equal', () => {
        const a = 3;
        const b = 1;
        const c = 1;

        const actual = isEquilateral(a, b, c);

        expect(actual).toEqual(false);
    });

    test('should return false when there are no equal sides', () => {
        const a = 3;
        const b = 2;
        const c = 1;

        const actual = isEquilateral(a, b, c);

        expect(actual).toEqual(false);
    });
});