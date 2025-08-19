export default function handleChange(pw){
    "use server";
    if (pw.length < 8) {
      return "Weak";
    }

    const hasUpper = /[A-Z]/.test(pw);
    const hasNum = /[0-9]/.test(pw);
    const hasSym = /[^a-zA-Z0-9]/.test(pw);

    if (hasUpper && hasNum && hasSym) {
      return "Strong";
    }

    return "Moderate";
}