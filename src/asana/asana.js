// @flow
import { Client } from "asana";
import { filterAndReturnTasksWithDate, formatTasks } from "./util";

export const getTasksInWorkspace = async (
  accessToken: string,
  workspaceId: string
): Promise<Array<Task>> => {
  const client = Client.create().useAccessToken(accessToken);
  const user = await client.users.me();
  const userId = user.id;
  const workspace = await client.tasks.findAll({
    assignee: userId,
    workspace: workspaceId,
    completed_since: "now",
    opt_fields: [
      "id",
      "name",
      "assignee_status",
      "projects",
      "modified_at",
      // "tags",
      "completed",
      // "due_on",
      // "due_at",
      "custom_fields"
    ].join(",")
  });
  const tasks = workspace.data;

  return tasks;
};

export const getTasksWithDateInWorkspace = async (
  accessToken: string,
  workspaceId: string
): Promise<Array<Task>> => {
  const tasks = await getTasksInWorkspace(accessToken, workspaceId);
  const filteredTasks = filterAndReturnTasksWithDate(tasks);
  return filteredTasks;
};

export const getTasks = async (
  accessToken: string,
  workspaceId: string
): Promise<Array<Task>> => {
  const tasks = await getTasksWithDateInWorkspace(accessToken, workspaceId);
  const formattedTasks = formatTasks(tasks);
  return formattedTasks;
};

export const fn = () => {};
