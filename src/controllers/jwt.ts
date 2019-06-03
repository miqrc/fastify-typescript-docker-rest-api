import jwt from 'jwt-simple';
import moment from 'moment';
import {SECRET_KEY} from '../constants';

const secret = SECRET_KEY;

export function createToken(userId: number, email: string) {
    const payload = {
        userId: userId,
        email: email,
        iat: moment().unix(), // current date timestamp
        exp: moment().add(365, 'days').unix() // expiration date. TODO manage expiration to improve security
    };

    return jwt.encode(payload, secret);
}
