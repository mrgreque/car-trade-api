export class AlreadyExistsError extends Error {
  constructor(field: string) {
    super(`The ${field} already exists`);
    this.name = 'AlreadyExistsError';
  }
}
