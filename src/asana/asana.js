// @flow
import { Client } from 'asana';

export const getTasksInWorkspace = async (accessToken, workspaceId) => {
  const client = Client.create().useAccessToken(accessToken);
  const user = await client.users.me();
  const userId = user.id;
  const workspace = await client.tasks.findAll({
    assignee: userId,
    workspace: workspaceId,
    completed_since: "now",
    opt_fields: "id,name,assignee_status,projects,modified_at,tags,completed"
  });
  const tasks = workspace.data;

  return tasks;
};

export const fn = () => {};
