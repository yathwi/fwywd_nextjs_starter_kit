import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-default-export
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, address, inquiry, details } = req.body;
  if (req.method === 'POST') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: 'yasui-kaito@outlook.jp',
      subject: 'お問合せありがとうございました。',
      text: `お問合せを受け付けました。回答をお待ちください。${name}, ${email}, ${phone}, ${address}, ${inquiry}, ${details}`,
      html: `お問合せを受け付けました。回答をお待ちください。
      氏名：${name}, 
      メールアドレス：${email}, 
      電話番号：${phone}, 
      住所：${address}, 
      お問い合わせ内容：${inquiry}, 
      お問い合わせ詳細：${details}`,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error) {
          console.error(error);
        }
      }
    })();
  }

  res.status(200);
}
