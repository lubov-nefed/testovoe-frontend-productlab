import { formData } from "../formData";

export function LeadFormRulesFields() {
  const taskRulesKeys = Object.keys(formData.task.rules).slice(0, -1);
  const rulesFields = taskRulesKeys.map((key) => (
    <label key={key} htmlFor={key} className="grid grid-cols-2 p-2 text-left">
      {key}
      <input
        type="number"
        defaultValue={formData.task.rules[key]}
        className=" border border-solid border-indigo-800 rounded-md p-2"
      />
    </label>
  ));
  return rulesFields;
}
