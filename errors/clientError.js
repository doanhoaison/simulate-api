import { errorCode } from '../constants/response-code';

class ClientError extends Error {
    constructor(message, code=errorCode.SOMETHING_WENT_WRONG) {
        super();
        this.message = message;
        this.code = code;
    }
}

export default ClientError;