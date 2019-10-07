import { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

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
