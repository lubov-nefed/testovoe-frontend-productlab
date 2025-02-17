"use client";
import { useActionState } from "react";
import { formSubmit } from "../actions";
import { TaskFields } from "./Fields";
import { LeadFormRulesFields } from "./LeadFormRulesFields";

export function LeadForm({ token }: { token: string }) {
  const newToken = "317ad1fc-e0a9-11ef-a978-0242ac120007";
  const [state, action, isPending] = useActionState(formSubmit, null);

  return (
    <form action={action} className="inline-block text-center">
      {!state && !isPending && (
        <>
          <input type="hidden" name="token" defaultValue={token || newToken} />
          <h2 className="text-center">Создать задачу</h2>

          <h3>Описание задачи</h3>
          <TaskFields />
          <h3>Правила</h3>
          <LeadFormRulesFields />
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors  bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 my-5 sm:px-5"
          >
            Отправить
          </button>
        </>
      )}
      {isPending ? (
        <p className="text-center">Обработка запроса...</p>
      ) : (
        <p className="text-center">{state}</p>
      )}
    </form>
  );
}
