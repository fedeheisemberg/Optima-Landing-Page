"use server";
import { parseResponse } from "@/libs/parse";
import Contact from "../../mongo/contact/model";
import dbConnect from "@/mongo";

export async function saveContactInfo(contactData) {
  try {
    await dbConnect();
    const contact = await Contact.create(contactData);
    return {
      success: true,
      message: "Contact saved",
      data: parseResponse(contact),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error saving contact",
      error: error.message,
    };
  }
}

export async function getContacts() {
  try {
    await connectToDatabase();
    const contacts = await Contact.find();
    return {
      success: true,
      message: "Contacts found",
      data: parseResponse(contacts),
    };
  } catch (error) {
    return {
      success: false,
      message: "Error getting contacts",
      error: error.message,
    };
  }
}
