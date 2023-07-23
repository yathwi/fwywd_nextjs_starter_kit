import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-default-export
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, address, inquiry, details } = req.body;
  if (req.method === 'POST') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: [email, 'office@project-japan.co.jp'],
      from: 'office@project-japan.co.jp',
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

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
