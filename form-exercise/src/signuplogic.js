export default function signupFunction(prevState, formData) {
    "use server";
    const userName = formData.get("username").trim();
    const password = formData.get("pw");
    const confirmPassword = formData.get("confirmpw");

    const errors = {};

    if (!userName) {
        errors.userName = "Username is required";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    return { success: true };
}