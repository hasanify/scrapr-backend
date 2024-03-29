import {NextFunction, Request, Response} from 'express';
import {ValidationChain, query, validationResult} from 'express-validator';

const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  }
  next();
};

const validate = {
  scrape: [
    query('url')
      .notEmpty()
      .withMessage('url is required')
      .isURL()
      .withMessage('invalid url')
      .trim(),
  ],
};

export const attachValidator = (validators: ValidationChain[]) => {
  return [...validators, handleValidationErrors];
};

export default validate;
