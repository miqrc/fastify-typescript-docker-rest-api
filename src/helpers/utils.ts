import {CCOLORS} from '../constants';

export function getDate_yyyy_mm_dd(now ?: Date) {
    if (!now) {
        now = new Date();
    }
    const year = '' + now.getFullYear();
    let month = '' + (now.getMonth() + 1); if (month.length == 1) { month = '0' + month; }
    let day = '' + now.getDate(); if (day.length == 1) { day = '0' + day; }
    return year + '-' + month + '-' + day;
}

export function getDate_yyyymmdd(now ?: Date) {
    if (!now) {
        now = new Date();
    }
    const year = '' + now.getFullYear();
    let month = '' + (now.getMonth() + 1); if (month.length == 1) { month = '0' + month; }
    let day = '' + now.getDate(); if (day.length == 1) { day = '0' + day; }
    return year + '' + month + '' + day;
}

export function getRandomNumberBetween(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

export function validEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validPassword(password: string) {
    const re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-zA-Z]).*$/;  // characters, numbers
    return re.test(password);
}

export function sleep(ms: number) {
    return new Promise( (resolve: any) => {
        setTimeout(resolve, ms);
    });
}

export function consoleError(message: string) {
    console.log(CCOLORS.Bright, CCOLORS.FgWhite, CCOLORS.BgRed, 'ERROR --- ' + message, CCOLORS.Reset);
}

export function consoleInfo(message: string) {
    console.log(CCOLORS.Bright, CCOLORS.FgWhite, CCOLORS.BgBlue, 'INFO --- ' + message, CCOLORS.Reset);
}
