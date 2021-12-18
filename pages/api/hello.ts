import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ message: "Hello from wisdopedia." });
};

export default handler;
