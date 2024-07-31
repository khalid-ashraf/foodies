"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (isInvalidInput(meal)) {
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
};

const isInvalidInput = ({
  title,
  summary,
  instructions,
  image,
  creator,
  creator_email,
}) => {
  if (!title || title.trim() === "") return true;

  if (!summary || summary.trim() === "") return true;

  if (!instructions || instructions.trim() === "") return true;

  if (!creator || creator.trim() === "") return true;

  if (
    !creator_email ||
    creator_email.trim() === "" ||
    !creator_email.includes("@")
  )
    return true;

  if (!image || image.size === 0) return true;
};
