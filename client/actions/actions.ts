"use server";

import Entry from "@/types/Entry";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function getEntriesData(): Promise<Entry[]> {
  const response = await fetch(`${process.env.API_URL}`, {
    method: "GET",
  });

  const { entries } = await response.json();
  return entries;
}

export const handleSubmit = async (formData: FormData) => {
  const website = formData.get("Website");
  const username = formData.get("Username");
  const password = formData.get("Password");

  await axios
    .post(`${process.env.API_URL}`, {
      website,
      username,
      password,
    })
    .then((res) => console.log(res.data));

  revalidatePath("/");
};
