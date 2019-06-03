import {createToken} from './jwt';
import bcrypt from 'bcrypt';
import {consoleError, consoleInfo, getRandomNumberBetween, validEmail, validPassword} from '../helpers/utils';
import {
    ApiErrors,
    ApiMessages,
    responseClientError,
    responseOK,
    responseServerError
} from '../helpers/response-builder';


export function registerUser(req: any, res: any) {
    consoleInfo('CALLING SERVICE: registerUser');

    try {
        const user = req.body;

        if (!validEmail(user.email) || !validPassword(user.password)) {
            return res.code(400).send(responseClientError(ApiErrors.validation_error));
        } else {
            // cypher pass
            const saltRounds = 10;
            bcrypt.hash(user.password, saltRounds, function (err: any, hash: any) {
                if (err) {
                    consoleError(err);
                    return res.code(500).send(responseServerError());
                } else {
                    user.password = hash;

                    console.log('Registered OK with email: ' + user.email);

                    const userRes = {
                        userId: getRandomNumberBetween(1000000000, 9999999999),
                        email: user.email,
                        password: 'CYPHR',
                        accountToken: createToken(user.userId, user.email),
                    };

                    return res.code(200).send(responseOK(ApiMessages.register_ok, {user: userRes}));

                }
            });
        }
    } catch (err) {
        consoleError(err);
        return res.code(500).send(responseServerError());
    }

}
