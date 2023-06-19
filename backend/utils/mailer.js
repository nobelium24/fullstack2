const nodemailer = require("nodemailer")

const sendMail = async (email, userName) => {
    const contactTemplate = `
    <div>
        <div>
            <h2 style="color:#2036ea ;">Message Title:-Welcome message</h2>
        </div>
        <ul>
            <li>Name : ${userName}</li>
            <li>Email: ${email}</li>
        </ul>
        <div>
            <h2 style="color:#2036ea ;">Message :-</h2>
            <p>
                Dear ${userName}, welcome to Ram. 
            </p>
        </div>
        <p style="color:#2036ea ;"><i>The RAM Team.</i></p>
    </div>`;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: process.env.Gmail,
        to: email,
        subject: "RAM —— Welcome Message",
        text: "RAM",
        html: contactTemplate,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

module.exports = {sendMail}
