import {
  GetProgramListRequest,
  GetProgramListResponse,
} from "../@types/program";
import { client } from "../client";

// NOTE:keyを個人入力する方針に変更したためコメントアウト
// const { VITE_PROGRAM_API_KEY } = import.meta.env;
export const testRepository = {
  getProgram: (params: GetProgramListRequest, key: string) =>
    client
      .get(
        `https://api.nhk.or.jp/v2/pg/list/${params.area}/${params.service}/${params.date}.json?key=${key}`
      )
      .json<GetProgramListResponse>(),
};
