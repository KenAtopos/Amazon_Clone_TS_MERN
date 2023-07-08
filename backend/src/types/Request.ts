/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Express {
  export interface Request {
    user: {
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      token: string;
    };
  }
}

// namespace is a group related to code entities like interface, class, function and variable into a named scope.

// by doing this, it just add an extra definition to the Express namespace which is pre-declared in Express

// extend the Request interface, which is built by express.
// by doing this, when making the request, an user object will be attached, so that the middleware and route handlers can use that user object
