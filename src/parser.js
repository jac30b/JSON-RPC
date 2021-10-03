const {Request} = require('./request');
const {Response} = require('./response');
const {Notification} = require('./notification');

module.exports = class Parser {
    static parse(obj) {
        if (obj && typeof obj === 'string') {
            try {
                const tmp = JSON.parse(obj);
        
                    if(Request.isRequest(tmp)){
                        Request.isValidRequest(tmp);
                        return new Request({id, method, params, jsonrpc});
                    } else if (Response.isResponse(tmp)) {
                        Response.isValidResponse(tmp);
                        return new Response()
                    } else if ( Notification.isNotification(tmp)){
                        Notification.isValidNotification(tmp);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}