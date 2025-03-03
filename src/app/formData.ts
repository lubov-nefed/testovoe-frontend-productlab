const formData = {
  ok: "HardTask created successfully.",
  task: {
    title: "Сделать дизайн баннера",
    description: "Сделать дизайн карточки товара с нашими фото для вб",
    tags: ["вб", " дизайн", " фигма"],
    budget_from: 1000,
    budget_to: 5000,
    deadline_days: 1,
    number_of_reminders: 3,
    private_content: null,
    is_hard: true,
    all_auto_responses: false,
    rules: {
      budget_from: 5000,
      budget_to: 8000,
      deadline_days: 5,
      qty_freelancers: 1,
      task_id: 2254,
    },
  },
};

export { formData };
