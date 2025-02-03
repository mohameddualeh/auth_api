import { Request, Response } from "express";
import { User, users } from "../models/User";
import StatusCodes, { ReasonPhrases } from "http-status-codes";

export const register = (req: Request, res: Response) => {
  // const username = req.body.username;
  // const password = req.body.password;
  // Deconstructed above, short hand below
  const { username, password } = req.body;

  const existingUser = users.find(
    function userCheck(currentUser: User): boolean {
      return currentUser.username === username;
    }
    // simplified function below
    // (currentUser) => {
    //   currentUser.username === username;
    // }
  );

  if (existingUser) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: `${ReasonPhrases.BAD_REQUEST}: User already Exists.` });
  } else {
    const newUser = new User(username, password);
    users.push(newUser);
    res
      .status(StatusCodes.OK)
      .json({ error: `${ReasonPhrases.OK}: User Registered Successfully.` });
  }
};

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Validate inputs

  if (!username || !password) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: `${ReasonPhrases.NOT_FOUND}: User not found.` });
  }

  // Check if user exists

  const existingUser = users.find(function userCheck(
    currentUser: User
  ): boolean {
    return currentUser.username === username;
  });

  const userPassword = users.find(function checkPassword(
    currentUser: User
  ): boolean {
    return currentUser.password === password;
  });

  if (existingUser) {
    if (userPassword) {
    } else {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: `${ReasonPhrases.UNAUTHORIZED}: Invalid Password.` });
    }
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: `${ReasonPhrases.NOT_FOUND}: User not Found.` });
  }
};

export const profile = (req: Request, res: Response) => {};
