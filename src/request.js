module.exports = class Request {
    constructor(id, params, method) {
        this.id = id;
        this.params = params;
        this.method = method;
        this.type = 'request';
    }
    static isRequest(req) {
        if(!req) {
            return false;
        }
        return !!(req.jsonrpc && req.method && req.id && req.params && this._isValidRequest(req));
    }
    static _isValidRequest(req){
        return !!(req.jsonrpc === '2.0' && typeof req.method === 'string' && typeof req.params === 'object'
            && typeof req.id === 'number' && req.id > 0 );
    }
}