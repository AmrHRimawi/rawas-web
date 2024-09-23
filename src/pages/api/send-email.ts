import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {subject, email, message} = req.body;

        const transporter = nodemailer.createTransport({
            host: 'mail.rawas.ps',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.SALES_EMAIL,
            subject: subject,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({message: 'Email sent successfully'});
        } catch (error) {
            res.status(500).json({error: 'Failed to send email'});
        }
    } else {
        res.status(405).json({error: 'Method not allowed'});
    }
}
