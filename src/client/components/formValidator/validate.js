export default function validate(values) {
    const errors = {};

    switch (true) {
    case values.loginUserName != undefined &&
            (values.loginUserName || values.loginUserName.length == 0):
        errors.loginUserName = "User name is required!";
        break;

    case values.loginPassword != undefined &&
            (values.loginPassword || values.loginPassword.length == 0):
        errors.loginPassword = "Password can't be blank!";
        break;

    case values.firstName != undefined &&
            (values.firstName || values.firstName.length == 0):
        errors.firstName = "First name is required";
        break;

    case values.lastName != undefined &&
            (values.lastName || values.lastName.length == 0):
        errors.lastName = "Last name is required";
        break;

    case values.email != undefined &&
            !RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(
                values.email
            ):
        errors.email = "Email id is invalid";
        break;

    case values.userName != undefined &&
            (values.userName || values.userName.length == 0):
        errors.userName = "User name is required!";
        break;

    case values.userName != undefined && values.userName.length <= 4:
        errors.userName = "User name should be minimum of 4 characters!";
        break;

    case values.userPassword != undefined &&
            (values.userPassword || values.userPassword.length == 0):
        errors.userPassword = "Password cannot be empty!";
        break;

    case values.userPassword != undefined &&
            !RegExp(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
            ).test(values.userPassword):
        errors.userPassword =
                "Password must contain, at least 8 characters, 1 special character and 1 numeric, 1 lowercase, 1 uppercase letters";
        break;

    case values.company != undefined &&
            (values.company || values.company.length == 0):
        errors.company = "Company name is required";
        break;

    case values.designation != undefined &&
            (values.designation || values.designation.length == 0):
        errors.designation = "Current designation is required";
        break;

    case values.experience != undefined &&
            (values.experience || values.experience.length == 0):
        errors.experience = "Total years of experience is required";
        break;

    case values.noticePeriod != undefined &&
            (values.noticePeriod || values.noticePeriod.length == 0):
        errors.noticePeriod = "Current notice period duration is required";
        break;

    default:
        break;
    }

    return errors;
}
