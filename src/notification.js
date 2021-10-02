module.exports = class Notification {
    constructor(method, params) {
        this.method = method;
        this.params = params;
        this.type = 'notification';
    }
    static isNotification(req) {
        if(!req) {
            return false;
        }
        return !!(req.jsonrpc && req.method && req.params && this._isValidNotification());
    }
    static _isValidNotification(req){
        return req.jsonrpc === '2.0' && typeof req.method === 'string' && typeof req.params === 'object';
    }
}