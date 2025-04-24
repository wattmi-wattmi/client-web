import {Tab_Routes} from "./tabs.constants";

export type Tab_Route_Type = (typeof Tab_Routes)[keyof typeof Tab_Routes];
