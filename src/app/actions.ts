"use server";
import { cookies } from "next/headers";
const url =
  "https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask?token=317ad1fc-e0a9-11ef-a978-0242ac120007&title=%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%B0&description=%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B0%20%D1%81%20%D0%BD%D0%B0%D1%88%D0%B8%D0%BC%D0%B8%20%D1%84%D0%BE%D1%82%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D0%B2%D0%B1&tags=%D0%B2%D0%B1%2C%20%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%2C%20%D1%84%D0%B8%D0%B3%D0%BC%D0%B0&budget_from=1000&budget_to=5000&deadline=1&reminds=3&all_auto_responses=false&rules=%7B%22budget_from%22%3A5000%2C%22budget_to%22%3A8000%2C%22deadline_days%22%3A5%2C%22qty_freelancers%22%3A1%7D";
const token = "317ad1fc-e0a9-11ef-a978-0242ac120007";

export async function formSubmit(formState: null | string) {
  const cookieStore = await cookies();
  cookieStore.set("form-token", token);
  await new Promise((resolve) => {
    setTimeout(resolve, 1300);
  });
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.status !== 200) {
      return `Ошибка. Статус-код ответа: ${response.status}`;
    }
    formState = "Задача успешно опубликована.";
    return formState;
  } catch (error) {
    console.log(error);
    return `Ошибка: ${error}`;
  }
}
