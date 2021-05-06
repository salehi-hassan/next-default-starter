import { BASE_URL } from "constants/network";
import { rest } from "msw";

export const handlers = [
  rest.get(`${BASE_URL}/api/whatever`, (req, res, ctx) => {
    console.log(`req ${req.url}`);
    let sth = req.url.searchParams.get("sth");
    if (sth) {
    }
    return res(
      ctx.delay(Math.random() * 2000),
      ctx.status(200),
      ctx.json({ value: [sth] })
    );
  }),
];
