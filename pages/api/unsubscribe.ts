import { NextApiRequest, NextApiResponse } from "next";
import mailchimp, { Status } from "@mailchimp/mailchimp_marketing";
import md5 from "md5";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const listId = process.env.LIST_ID;
  const { email } = req.body;
  const subscriberHash = md5(email.toLowerCase());

  try {
    await mailchimp.lists.updateListMember(listId, subscriberHash, {
      status: Status.unsubscribed,
    });

    return res
      .status(200)
      .json({ messages: [{ msg: `Successfully unsubscribed news-letter` }] });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

export default handler;
