/*
The ExpressError class is defined to create custom error objects that can be used to handle specific error scenarios within the application.
*/

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

module.exports = ExpressError;