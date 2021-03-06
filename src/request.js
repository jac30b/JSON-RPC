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
        return !!(req.jsonrpc && req.method && req.id && req.params);
    }
    static isValidRequest(req){
        if(!(req.jsonrpc === '2.0' && typeof req.method === 'string' && typeof req.params === 'object'
            && typeof req.id === 'number' && req.id > 0 )){
            throw new Error("Invalid Request");
        }
    }
}