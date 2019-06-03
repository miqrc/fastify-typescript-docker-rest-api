import jwt from 'jwt-simple';
import moment from 'moment';
import * as constants from '../constants';
import {consoleError} from '../helpers/utils';
import {ApiErrors, responseClientError} from '../helpers/response-builder';

const secret = constants.SECRET_KEY;


export function ensureAuth(req: any, res: any, next: any) {

    if (!req.headers.authorization) {
        return res.code(400).send(responseClientError(ApiErrors.missing_authentication));
    }

    const token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        const payload = jwt.decode(token, secret);

        if (payload.exp <= moment().unix()) {
            return res.code(400).send(responseClientError(ApiErrors.token_expired));
        } else {
            console.log('USER LOGIN AUTH OK: ', payload);
            req.user = payload;

            next();
        }
    } catch (ex) {
        consoleError(ex.message);
        if (ex.message === 'Token expired') {
            return res.code(400).send(responseClientError(ApiErrors.token_expired));
        } else {
            return res.code(400).send(responseClientError(ApiErrors.authentication_error));
        }
    }

}
