import { formData } from "../formData";

function RadioField({ title }: { title: string }) {
  return (
    <fieldset className="grid grid-cols-2 p-2 text-left">
      {title}
      <div>
        <label htmlFor={title + "true"}>
          true
          <input
            type="radio"
            id={title + "true"}
            name={title}
            value="true"
            defaultChecked
            className="m-2"
          />
        </label>
        <label htmlFor={title + "false"}>
          false
          <input
            type="radio"
            id={title + "false"}
            name={title}
            value="false"
            className="m-2"
          />
        </label>
      </div>
    </fieldset>
  );
}

function TextOrNumberField({
  title,
  type,
}: {
  title: string;
  type: "text" | "number";
}) {
  return (
    <>
      <label
        key={title}
        htmlFor={title}
        className="grid grid-cols-2 p-2 text-left"
      >
        {title}
        <input
          id={title}
          type={type}
          defaultValue={formData.task[title]}
          className="border border-solid border-indigo-800 rounded-md p-2"
        />
      </label>
    </>
  );
}

function TaskFields() {
  return (
    <>
      <TextOrNumberField title={"title"} type="text" />
      <TextOrNumberField title={"description"} type="text" />
      <TextOrNumberField title={"tags"} type="text" />
      <TextOrNumberField title={"budget_from"} type="number" />
      <TextOrNumberField title={"budget_to"} type="number" />
      <TextOrNumberField title={"deadline_days"} type="number" />
      <TextOrNumberField title={"number_of_reminders"} type="number" />
      <TextOrNumberField title={"private_content"} type="number" />
      <RadioField title={"is_hard"} />
      <RadioField title={"all_auto_responses"} />
    </>
  );
}

export { TaskFields };
