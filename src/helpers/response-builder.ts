export enum ApiErrors {
    'missing_authentication' = 'The request does not have the authentication header',
    'token_expired' = 'Token expired',
    'invalid_parameters' = 'Request with missing or invalid parameters',
    'validation_error' = 'Request with invalid data',
    'authentication_error' = 'Unauthorized: Authentication error',
}

export enum ApiMessages {
    'public' = 'This is the response of the Public Method',
    'private' = 'This is the response of the Authenticated Method',
    'logged_ok' = 'Logged OK',
    'register_ok' = 'Register OK',
}

export interface ApiResponse {
    status: string;
    message: string;
    result: any;
    messageId?: any;
}

export function responseOK(message: ApiMessages, result ?: any): ApiResponse {
    return {
        'status': 'ok',
        'messageId': getEnumKeyByEnumValue(ApiMessages, message),
        'message': message,
        'result': result
    };
}

export function responseClientError(error: ApiErrors): ApiResponse {
    return {
        'status': 'error',
        'messageId': getEnumKeyByEnumValue(ApiErrors, error),
        'message': error,
        'result': null
    };
}

export function responseServerError(): ApiResponse {
    return {
        'status': 'error',
        'messageId': 'server_error',
        'message': 'Server error',
        'result': null
    };
}


function getEnumKeyByEnumValue(myEnum: any, enumValue: any) {
    const keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
}

