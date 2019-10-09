/**
 * React Imports
 */
import { useState } from "react";

/**
 * @function - useModal - Custom Hook
 * @returns {component}
 */
const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    //Function that adds/removes a class called 'no-scroll' to the body to block overflow when the modal is open and also to set the isShowing state to toggle the view
    function toggle() {
        if (isShowing) {
            document.querySelector("body").classList.remove("no-scroll");
        } else {
            document.querySelector("body").classList.add("no-scroll");
        }

        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle
    };
};

export default useModal;
