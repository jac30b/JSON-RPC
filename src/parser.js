const {Request} = require('./request');
const {Response} = require('./response');
const {Notification} = require('./notification');

module.exports = class Parser {
    parse(obj) {
        if (obj && typeof obj === 'string') {
            try {
                const tmp = JSON.parse(obj);
                switch (tmp) {
                    case Request.isRequest(tmp):
                        return new Request(tmp);
                    case Response.isResponse(tmp):
                        return new Response(tmp);
                    case Notification.isNotification(tmp):
                        return new Notification(tmp);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}