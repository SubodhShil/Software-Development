## `app.all()`

The app.all() method in Express.js is used to define a route handler that will handle all HTTP methods for a particular route. This means it can respond to GET, POST, PUT, DELETE, and any other HTTP request method.

### To enable case sensitive routing URL: `app.enable('case sensitive routing');`

### Middleware: Interceptor which intercept and check during a request process and authorize if the request abides all cases. **Middleware is a layer of software that sits between the core application logic and the server, acting as a bridge for incoming requests and outgoing responses.**

## `next()`

next() is a function that is used in middleware to pass control to the next middleware function or route handler in the stack. If a middleware function does not call next(), the request will not proceed to the next step, and the server might hang, waiting indefinitely.

## Multiple HTTP request for a common route

By using app.route() method this can be achieved.

## Query strings: Query strings or parameters are appended to the URL after a `?` and are typically used to send non-sensitive data or optional.

## Types of middleware

1. Application level middleware
2. Router level middleware
3. Error-handling middleware
4. Built-in middleware
