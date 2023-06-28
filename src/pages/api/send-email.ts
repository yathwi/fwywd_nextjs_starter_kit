import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// eslint-disable-next-line import/no-default-export
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, address, inquiry, details } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: 'yasui-kaito@outlook.jp', // 自分のメールアドレス
        pass: 'miuit2022', // 自分のメールパスワード
      },
    });
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.project-japan.co.jp', // SMTPサーバーのホスト名
    //   port: 465, // SMTPサーバーのポート番号
    //   secure: true, // ポート番号が465の場合はtrue、それ以外の場合はfalse
    //   auth: {
    //     user: 'office@project-japan.co.jp',
    //     pass: process.env.MAIL_PASSWORD,
    //   },
    // });

    await transporter.sendMail({
      from: 'yasui-kaito@outlook.jp',
      to: 'yasui-kaito@miuit-workspace.com', // 受け取りたいメールアドレス
      subject: `新規お問い合わせ ${name} at ${email}`,
      text: `
    新規問い合わせがありました。
    名前: ${name}
    Email: ${email}
    電話番号: ${phone}
    住所: ${address}
    問い合わせ内容: ${inquiry}
    問い合わせ詳細: ${details}
  `,
    });

    res.status(200).json({ status: 'Ok' });
  } else {
    res.status(405).json({ error: 'We only support POST' });
  }
}
