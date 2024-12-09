import { supabase } from "./client";

export async function getUser() {
  const { data, error } = await supabase.from("user").select("*");
  if (error) {
    throw new Error("user could not be loaded");
  }

  return data;
}
