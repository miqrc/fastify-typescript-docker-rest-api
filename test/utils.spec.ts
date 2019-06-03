import * as utils from '../src/helpers/utils';

describe('Utils', () => {
    test('getDate_yyyy_mm_dd return correct format', () => {
        const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        expect(utils.getDate_yyyy_mm_dd(new Date())).toMatch(dateRegex);
        expect(utils.getDate_yyyy_mm_dd()).toMatch(dateRegex);
        expect(utils.getDate_yyyy_mm_dd(new Date(2018, 11, 1, 10, 33, 30, 0))).toMatch(dateRegex);
    });


    test('getDate_yyyy_mm_dd return correct format', () => {
        const dateRegex = /([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/;
        expect(utils.getDate_yyyymmdd(new Date())).toMatch(dateRegex);
        expect(utils.getDate_yyyymmdd()).toMatch(dateRegex);
        expect(utils.getDate_yyyymmdd(new Date(2018, 11, 1, 10, 33, 30, 0))).toMatch(dateRegex);
    });

    test('getRandomNumberBetween return correct number', () => {
        expect(utils.getRandomNumberBetween(1, 3)).toBeGreaterThanOrEqual(1);
        expect(utils.getRandomNumberBetween(1, 3)).toBeLessThanOrEqual(3);
    });

    test('validEmail returns false if invalid email', () => {
        expect(utils.validEmail('.a@.a.es')).toEqual(false);
        expect(utils.validEmail('@gmail.com')).toEqual(false);
        expect(utils.validEmail('aaagmail.com')).toEqual(false);
        expect(utils.validEmail('aaa@gmailcom')).toEqual(false);
        expect(utils.validEmail('aaa@gmail_com')).toEqual(false);
        expect(utils.validEmail('aaa@gm_ail.com')).toEqual(false);
    });

    test('validEmail returns true if valid email', () => {
        expect(utils.validEmail('aaa@gmail.com')).toEqual(true);
        expect(utils.validEmail('a@g.es')).toEqual(true);
        expect(utils.validEmail('asdAFASVDFGRhsafasdadqweQE@gasdadaWqasdavVDF.es')).toEqual(true);
    });

    test('validPassword returns false if invalid password', () => {
        expect(utils.validPassword('123456')).toEqual(false);
        expect(utils.validPassword('123456789')).toEqual(false);
    });

    test('validPassword returns true if valid password', () => {
        expect(utils.validPassword('1234567R')).toEqual(true);
        expect(utils.validPassword('1234567r')).toEqual(true);
        expect(utils.validPassword('123456rR')).toEqual(true);
        expect(utils.validPassword('123456r.-#rRRrr131dR')).toEqual(true);
    });
});
