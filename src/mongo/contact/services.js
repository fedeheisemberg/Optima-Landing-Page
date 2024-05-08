"use server";
import { parseResponse } from "@/libs/parse.js";
import Contact from "./model.js";
import dbConnect from "../index.js";

export const getContacts = async () => {
  try {
    await dbConnect();
    const contacts = await Contact.find();
    return { data: parseResponse(contacts) };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
