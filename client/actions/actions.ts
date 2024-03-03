"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const handleSubmit = async (formData: FormData) => {
  const website = formData.get("Website");
  const username = formData.get("Username");
  const password = formData.get("Password");

  await axios
    .post("https://password-manager-production-0987.up.railway.app/", {
      website,
      username,
      password,
    })
    .then((res) => console.log(res.data));

  revalidatePath("/");
};
