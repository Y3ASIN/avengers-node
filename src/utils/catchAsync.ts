import { NextFunction } from "express";

export const costAsync =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
