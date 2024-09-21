import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {subject, email, message} = req.body;
        console.log('subject:', subject, ', email:', email, ', message:', message);

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
            console.log('xx api xx : Email sent successfully');
            res.status(200).json({message: 'Email sent successfully'});
        } catch (error) {
            console.error('xx api xx : Failed to send email:', error);
            res.status(500).json({error: 'Failed to send email'});
        }
    } else {
        console.log('xx api xx : Method not allowed');
        res.status(405).json({error: 'Method not allowed'});
    }
}
