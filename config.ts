import { RandomTimeOptions } from "./times";
import fs from "fs";
import path from "path";

export interface ConfigNode {
  ip: string;
  action: "on" | "off" | "toggle";
  time: RandomTimeOptions;
  shelly: {
    username: string;
    password: string;
  };
}

export function readConfig() {
  return JSON.parse(fs.readFileSync(path.join("config.json"), "utf8")) as Array<ConfigNode>;
}
