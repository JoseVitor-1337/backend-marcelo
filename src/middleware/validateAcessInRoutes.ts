import { Request, Response, NextFunction } from "express";
import { ValidadeUserAcess } from "@usecases/validate-acess-in-routes";

async function validateAcessInRoutes(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = String(request.headers.token);

  try {
    const decodedToken = await ValidadeUserAcess.hasAcessToRoutes(token);

    request.headers.id = decodedToken.id;

    next();
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
}

export default validateAcessInRoutes;
