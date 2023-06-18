import ky from "ky";

export const client = ky.create({
  timeout: 5000, // milliseconds
});
