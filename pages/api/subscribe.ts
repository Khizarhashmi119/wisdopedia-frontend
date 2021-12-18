import { NextApiRequest, NextApiResponse } from "next";
import mailchimp, { Status } from "@mailchimp/mailchimp_marketing";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const listId = process.env.LIST_ID;
  const apiKey = process.env.API_KEY;

  const subscribingUser = {
    email,
  };

  mailchimp.setConfig({
    apiKey,
    server: "us6",
  });

  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: Status.subscribed,
    });

    return res.status(200).json({
      msg: `Successfully subscribed news-letter`,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

export default handler;
