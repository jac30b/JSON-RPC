const {Parser} = require('./parser');

module.exports = class JSONRpc {
    resolve(data){
        try {
            const parsed = JSON.parse(data);
            return this.parser.parse(parsed);
        } catch (e) {
            throw new Error("Invalid Request");
        }
    }
}