const {Request} = require('./request');
const {Response} = require('./response');
const {Notification} = require('./notification');

module.exports = class Parser {
    constructor(){}
    static parse(obj) {
        if (obj && typeof obj === 'string') {
            try {
                const tmp = JSON.parse(obj);
                switch (tmp) {
                    case Request.isRequest(tmp):
                        Request.isValidRequest(tmp);
                        return new Request(tmp);
                    case Response.isResponse(tmp):
                        Response.isValidResponse(tmp);
                        return new Response(tmp);
                    case Notification.isNotification(tmp):
                        Notification.isValidNotification(tmp);
                        return new Notification(tmp);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}