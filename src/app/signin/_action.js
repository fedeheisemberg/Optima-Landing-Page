"use server";
import { redirect } from "next/navigation";
import { parseResponse } from "@/libs/parse";
import { signIn } from "../../auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export default async function signInAction(credentials) {
  let success = false;
  try {
    await signIn("credentials", {
      ...credentials,
      callbackUrl: "/admin",
      redirect: false,
    });
    success = true;
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.log("in signinAction");
    console.log({ error });
    return { error: parseResponse(error.message) };
  }
  if (success) {
    redirect("/admin");
  }
}
