export const registrationValidation = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = "Name is Required."
    }
    if (!data.email) {
        errors.email = "Email Is Required."
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid Email"
    }
    if (!data.password) {
        errors.password = "Password is required."
    }
    else if (data.password.length < 6) {
        errors.password = "Password Must be more than Six Characters"
    }
    return errors;

}