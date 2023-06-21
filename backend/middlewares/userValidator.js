const yup = require("yup")
const userValidationSchema = yup.object().shape({
    userName: yup
        .string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required("Username is required")
        .matches(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password is too short")
        .matches(/^[a-zA-Z0-9]+$/, "Password must contain alphabets and numbers only")
})

module.exports = {userValidationSchema}