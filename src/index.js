// @flow
// clears the console

import { inspect } from "util";
import asana from "./asana";

require("dotenv").config();

process.stdout.write("\x1Bc");

// Using a PAT for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.
const { ASANA_PAT, ASANA_WORKSPACE } = process.env;

const { getTasks } = asana;

const run = async () => {
  if (!process.env.ASANA_PAT) throw new Error("ASANA_PAT missing");
  if (!process.env.ASANA_WORKSPACE) throw new Error("ASANA_WORKSPACE missing");

  const accessToken: string = ASANA_PAT || "";
  const workspaceId: string = ASANA_WORKSPACE || "";

  const response = await getTasks(accessToken, workspaceId);

  console.log(
    "response",
    inspect(response, {
      colors: true,
      depth: null
    })
  );
};

run();
