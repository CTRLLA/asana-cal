// @flow

type TaskCustomField = {
  id: number,
  gid: string,
  name: string,
  resource_subtype: string,
  resource_type: string,
  text_value: string,
  type: string
};

export type Task = {
  id: number,
  name: string,
  assignee_status: string,
  custom_fields: Array<TaskCustomField>,
  modified_at: string,
  completed: boolean,
  start: string,
  end: string
};
