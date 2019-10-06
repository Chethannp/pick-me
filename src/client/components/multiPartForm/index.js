import React, { useState } from "react";
import FormUserDetails from "./formUserDetails";
import FormPersonalDetails from "./formPersonalDetails";
import Confirm from "./confirm";
import Success from "./success";

const UserForm = () => {
    const [formValues, setFormValues] = useState({
        step: 4,
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        designation: "",
        experience: ""
    });

    //Proceed to next step
    const nextStep = () => {
        setFormValues({ ...formValues, step: formValues.step + 1 });
    };

    //Go back to prev step
    const prevStep = () => {
        setFormValues({ ...formValues, step: formValues.step - 1 });
    };

    //Handle fields change
    const handleChange = input => e => {
        setFormValues({ ...formValues, [input]: e.target.value });
    };

    switch (formValues.step) {
    case 1:
        return (
            <FormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                {...formValues}
            />
        );
    case 2:
        return (
            <FormPersonalDetails
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                {...formValues}
            />
        );
    case 3:
        return (
            <Confirm
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                {...formValues}
            />
        );
    case 4:
        return <Success />;
    default:
        return "Jaffa";
    }
};

export default UserForm;
