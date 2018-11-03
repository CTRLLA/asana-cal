// @flow
import { Date } from "sugar";

const startDateFieldName = "Start";
const endDateFieldName = "End";

export const filterAndReturnTasksWithDate = (tasks: Array<Task>): Array<Task> =>
  tasks.filter(task => {
    let hasStart = false;
    let hasEnd = false;

    task.custom_fields.forEach(field => {
      if (field.name === startDateFieldName) {
        hasStart = true;
      } else if (field.name === endDateFieldName) {
        hasEnd = true;
      }
    });

    return hasStart && hasEnd;
  });

export const formatTasks = (tasks: Array<Task>): Array<Task> =>
  tasks.map(task => {
    const updatedTask = { ...task };

    updatedTask.custom_fields.forEach(field => {
      if (field.name === startDateFieldName) {
        const start = Date.create(field.text_value);
        updatedTask.start = start;
      } else if (field.name === endDateFieldName) {
        const end = Date.create(field.text_value);
        updatedTask.end = end;
      }
    });

    return updatedTask;
  });
