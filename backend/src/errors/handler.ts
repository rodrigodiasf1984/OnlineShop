/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, req, resp, _next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {};
    error.inner.forEach(err => {
      if (err.path) errors[err.path] = err.errors;
    });

    return resp.status(400).json({ message: 'Validation fails', errors });
  }
  console.error(error);

  return resp.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
