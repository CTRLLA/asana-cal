// @flow
require('dotenv').config();
process.stdout.write('\x1Bc'); // clears the console

import asana from './asana';

// Using a PAT for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.
const { ASANA_PAT, ASANA_WORKSPACE } = process.env;

const { getTasksInWorkspace } = asana;

const run = async () => {
  const response = await getTasksInWorkspace(ASANA_PAT, ASANA_WORKSPACE);
  console.log('response', response);
};

run();
