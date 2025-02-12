import * as clc from "cli-color";

import { Command } from "../command";
import * as requireConfig from "../requireConfig";
import * as utils from "../utils";

export default new Command("target:remove <type> <resource>")
  .description("remove a resource target")
  .before(requireConfig)
  .action((type, resource, options) => {
    const name = options.rc.removeTarget(options.project, type, resource);
    if (name) {
      utils.logSuccess(`Removed ${type} target ${clc.bold(name)} from ${clc.bold(resource)}`);
    } else {
      utils.logWarning(
        `No action taken. No target found for ${type} resource ${clc.bold(resource)}`
      );
    }
    return Promise.resolve(name);
  });
