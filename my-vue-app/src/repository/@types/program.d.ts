import { ServiceValues } from "@/constants";

export type AreaElement = {
  id: string;
  name: string;
};

export type ServiceElement = {
  id: string;
  name: string;
  logo_s: LogoElement;
  logo_m: LogoElement;
  logo_l: LogoElement;
};

export type LogoElement = {
  url: string;
  width: string;
  height: string;
};

export type ProgramElement = {
  id: string;
  event_id: string;
  start_time: string;
  end_time: string;
  area: AreaElement;
  service: ServiceElement;
  title: string;
  subtitle: string;
  content: string;
  act: string;
  genres: Array<string>;
};

export type GetProgramListRequest = {
  area: string;
  service: string;
  date: string;
};

export type GetProgramListResponse = {
  list: {
    [key in ServiceValues]: Array<ProgramElement>;
  };
};
