const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.COMPANY_EMAIL,
		pass: process.env.COMPANY_EMAIL_PASSWORD,
	},
});

// const mailOptions = {
// 	from: "brianwu20020303@gmail.com",
// 	to: "brianwu20020303@gmail.com",
// 	subject: "Sending Email using Node.js",
// 	text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log("Email sent: " + info.response);
// 	}
// });

const sendWelcomeEmail = (email, name) => {
	const mailOptions = {
		from: process.env.COMPANY_EMAIL,
		to: email,
		subject: "Welcome to the Task App",
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const sendCancelationEmail = (email, name) => {
	const mailOptions = {
		from: process.env.COMPANY_EMAIL,
		to: email,
		subject: "Sorry to see you go",
		text: `Goodbye, ${name}. I hope to see you back sometimes soon.`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
};
