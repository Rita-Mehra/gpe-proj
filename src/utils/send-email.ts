const aws = require('aws-sdk');

export const sendEmail = async (to: string, subject: string, html: any) => {
    try {
        aws.config.update({
            accessKeyId    : process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
            region         : 'us-east-1',
        });

        const emailData = {
            Destination     : {
                ToAddresses : [to]
            },
            Message         : {
                Body   : {
                    Html: {
                        Charset: 'UTF-8',
                        Data   : html
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data   : subject
                }
            },
            Source          : 'info@globalpeakengineering.com',
            ReplyToAddresses: ['info@globalpeakengineering.com']
        };

        // logger.log('info', 'Sending Email: ', emailData);

        const sendEmail = new aws.SES({ apiVersion: '2010-12-01' }).sendEmail(emailData).promise();

        const response = await sendEmail;

        console.log('Mail sent: ' + subject + ' - TO: ' + to, response);

        return response;
    } catch (e) {
        console.error('Error sending Single Email: ', e);
        // throw new Error('Error sending Email: ', e);
    }
};
