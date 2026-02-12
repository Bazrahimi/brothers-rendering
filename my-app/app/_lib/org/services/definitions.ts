import { SERVICES } from "./services";

export type ServiceKey = keyof typeof SERVICES;
export type Service = (typeof SERVICES)[ServiceKey];
export type ServiceTitle = Service["title"];
