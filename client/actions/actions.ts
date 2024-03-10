"use server";

import Entry from "@/types/Entry";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function getEntriesData(): Promise<Entry[]> {
  const response = await axios.get(`${process.env.API_URL}`).then((res) => {
    revalidatePath("/");
    return res;
  });

  const { entries } = await response.data;
  return entries;
}

export const createEntry = async (formData: FormData) => {
  const website = formData.get("Website");
  const username = formData.get("Username");
  const password = formData.get("Password");

  await axios
    .post(`${process.env.API_URL}`, {
      website,
      username,
      password,
    })
    .then(() => {
      revalidatePath("/");
    });
};

export const deleteEntry = async (id: number) => {
  console.log("eee");
  await axios
    .delete(`${process.env.API_URL}`, {
      data: { id },
    })
    .then(() => {
      revalidatePath("/");
    });
};
