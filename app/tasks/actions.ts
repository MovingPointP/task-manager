"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title || title.trim() === "") {
    return;
  }

  await prisma.task.create({
    data: {
      title: title.trim(),
    },
  });

  revalidatePath("/tasks");
}

export async function toggleTask(id: number, completed: boolean) {
  await prisma.task.update({
    where: { id },
    data: { completed: !completed },
  });

  revalidatePath("/tasks");
}

export async function deleteTask(id: number) {
  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/tasks");
}
