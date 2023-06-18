import {
  GetProgramListRequest,
  GetProgramListResponse,
} from "../@types/program";
import { client } from "../client";

const { VITE_PROGRAM_API_KEY } = import.meta.env;

export const testRepository = {
  getProgram: (params: GetProgramListRequest) =>
    client
      .get(
        `https://api.nhk.or.jp/v2/pg/list/${params.area}/${params.service}/${params.date}.json?key=${VITE_PROGRAM_API_KEY}`
      )
      .json<GetProgramListResponse>(),
};
