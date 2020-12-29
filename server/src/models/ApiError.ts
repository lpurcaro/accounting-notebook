export default class ApiError extends Error {
    type: string;

    constructor (message: string, type: string) {
        super(message);
        this.type = type;
    }
}
