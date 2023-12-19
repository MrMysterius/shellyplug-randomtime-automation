import { ConfigNode, readConfig } from "./config.ts";
import { getPlugStatus, togglePlug, turnPlugOff, turnPlugOn } from "./plug.ts";

import { generateRandomTime } from "./times.ts";

const config = readConfig();
const times: { date: Date; config: ConfigNode }[] = [];

for (const cnode of config) {
  times.push({ date: generateRandomTime(cnode.time), config: cnode });
}
times.sort((a, b) => b.date.getTime() - a.date.getTime());

export function reschedule(current: { date: Date; config: ConfigNode }[], rescheduleNode: ConfigNode) {
  current.push({ date: generateRandomTime(rescheduleNode.time, true), config: rescheduleNode });
  current.sort((a, b) => b.date.getTime() - a.date.getTime());
  return current;
}

export async function performAction(cnode: ConfigNode) {
  switch (cnode.action) {
    case "on":
      await turnPlugOn(cnode.ip, cnode.shelly.username, cnode.shelly.password);
      break;
    case "off":
      await turnPlugOff(cnode.ip, cnode.shelly.username, cnode.shelly.password);
      break;
    case "toggle":
      await togglePlug(cnode.ip, cnode.shelly.username, cnode.shelly.password);
      break;
  }
}

export function schedule() {
  const next = times.pop();
  if (!next) {
    console.log("NO TIMES CONFIGURED EXITING");
    process.exit(1);
  }

  const curr = new Date();
  console.log("NEXT", next.date, next.date.getTime() - curr.getTime());

  if (next.date.getTime() > curr.getTime()) {
    setTimeout(() => {
      performAction(next.config);
      reschedule(times, next.config);
      schedule();
    }, next.date.getTime() - curr.getTime());
  } else {
    schedule();
  }
}

schedule();
