const {Parser} = require('./parser');

module.exports = class JSONRpc {
    constructor() {
        this.parser = new Parser();
    }
    resolve(data){
        try {
            const parsed = JSON.parse(data);
            return this.parser.parse(data);
        } catch (e) {
            throw new Error("Invalid Request");
        }
    }
}