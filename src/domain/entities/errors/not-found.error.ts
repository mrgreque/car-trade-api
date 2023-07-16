export class NotFoundError extends Error {
    constructor(entity: string, identificatorType: string, identificator: string) {
        super(`Not found ${entity} with ${identificatorType}: ${identificator}`);
        this.name = 'NotFoundError';
    }
}
