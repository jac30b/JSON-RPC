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
        return !!(req.jsonrpc && req.method && req.params);
    }
    static isValidNotification(req){
        if(!(req.jsonrpc === '2.0' && typeof req.method === 'string' && typeof req.params === 'object')){
            throw new Error("Invalid Notification");
        }
    }
}