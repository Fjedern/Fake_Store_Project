const mail = require("@sendgrid/mail");
console.log(process.env.SENDGRID_API_KEY);
mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const body = JSON.parse(req.body);

  const data = {
    to: "fakestoreec@gmail.com",
    from: "fakestoreec@gmail.com",
    subject: "Your Order from Fake Store",
    text: body,
    html: "<strong>First email!</strong>",
  };

  //res.status(200).JSON({ status: "ok" });
  mail
    .send(data)
    .then((res) => {
      console.log(res[0].statusCode);
      console.log(res[0].headers);
    })

    .catch((error) => {
      console.error(error);
    });
  res.status(200).end();
  console.log(body);
};

//getting ResponseError: Unauthorized
