import {ApiMessages, responseOK, responseServerError} from '../helpers/response-builder';
import {consoleInfo} from '../helpers/utils';

export function getPublic(req: any, res: any) {
    consoleInfo('CALLING SERVICE: getPublic');

    return res.code(200).send(responseOK(ApiMessages.public, {myObject: 'some things'}));

}

export function getPrivate(req: any, res: any) {
    consoleInfo('CALLING SERVICE: getPrivate');

    const successAfterDoingSomeVeryComplexServerThings = true;

    if (successAfterDoingSomeVeryComplexServerThings) {
        return res.code(200).send(responseOK(ApiMessages.private, {'requesterUser': req.user.email, myObject: 'many things'}));
    } else {
        return res.code(500).send(responseServerError());
    }

}
