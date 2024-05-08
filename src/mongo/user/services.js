"use server";
import { parseResponse } from "@/libs/parse.js";
import User from "./model.js";
import bcrypt from "bcrypt";
import dbConnect from "../index.js";

export const createUser = async (data) => {
  const { username, password } = data;
  try {
    await dbConnect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = { username, password: hashedPassword };
    const user = new User(newUser);
    await user.save();
    user.password = undefined;
    return { data: parseResponse(user) };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export const loginUser = async (data) => {
  const { username, password } = data;
  try {
    await dbConnect();
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    user.password = undefined;
    return { data: parseResponse(user) };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
