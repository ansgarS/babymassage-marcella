var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'eu-central-1' });

const sendEmail = (email, nameParent, nameChild, ageChild, courseName, comment) => {
  var params = {
    Destination: {
      ToAddresses: [
        'ansgar.sa@gmail.com',
      ],
    },
    Message: {
      Body: {
        Text: { Data: `
            Hallo Marcella,
            
            ich habe eine Kursanfrage an dich gestellt:

            Name des Erziehungsberechtigten: ${nameParent}
            Name der Kindes:                 ${nameChild}
            Alter des Kindes:                ${ageChild}
            Kursname:                        ${courseName}
            
            Anmerkungen:
            ${comment}

            Du kannst auf meine Anfrage antworten, indem du eine E-Mail an folgende 
            Addresse sendest: ${email}

            Liebe Grüße,

            ${nameParent}
        ` },
      },

      Subject: { Data: `Kursanfrage von ${nameParent}` },
    },
    Source: 'support@zwergenstube-lahnstein.de',
  };

  return ses.sendEmail(params).promise();
};

exports.main = async (event) => {
  try {
    // eslint-disable-next-line no-console
    console.log('About to request support', event.body);
    const body = JSON.parse(event.body);

    switch (event.httpMethod) {
      case 'POST':
      case 'GET':
        await sendEmail(
          body.email,
          body.nameParent,
          body.nameChild,
          body.ageChild,
          body.courseName,
          body.comment,
        );
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ msg: 'Success' })
        };

      default:
        throw new Error('Unauthorized');
    }
  } catch (error) {
    console.error('Failed to send support request', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};