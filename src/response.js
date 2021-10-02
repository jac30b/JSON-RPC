module.exports = class Response {
    constructor(id, result, error = null) {
        this.id = id;
        this.result = result;
        this.error = error;
        this.type = 'response';

    }
    static isResponse(req){
        if(!req) {
            return false;
        }
        return !!(req.jsonrpc && req.id && (req.error || req.result) && this._isValidResponse(req));
    }

    static _isValidResponse(req) {
        if(req.jsonrpc === '2.0' && typeof req.id === 'number' && req.id > 0) {
            if(req.result) {
                return true;
            } else if (req.error) {
                const {code, message} = req.error;
                if(code && message && typeof code === 'number' && typeof message === 'string'){
                    return  true;
                }
            }
            return  false;
        }
        return false;
    }
}