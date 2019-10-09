/**
 * React Imports
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Styled Component Imports
 */
import { Div, FlexBox, Anchor } from "../../styledComponents/layout";
import { CardHeader, Paragraph } from "../../styledComponents/card";

/**
 * FontAwesome Imports for icons support
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

/**
 * Reusable functional components
 */
import InlineLoaderComp from "../InlineLoader";
import CustomToast from "../toast";

/**
 * @function Deck - Functional Component
 * @param {id} number
 * @param {loginStatus} boolean
 * @param {title} string - holds the title of job
 * @param {company} string - holds the company name
 * @param {location} string - holds the location of company
 * @param {description} string - description about the company
 * @param {time_of_post} string - job posted time
 * @param {is_saved} boolean - saved status
 * @param {updateJob} function - sets the status of saved jobs
 * @returns {component} - deck view that holds the job information
 */

const Deck = props => {
    /**
     * Because I want to pass the props as is when the user tries to save or remove a job
     * did not wanted to destructure it and the function level
     */
    const {
        updateJob,
        loginStatus,
        id,
        title,
        company,
        location,
        description,
        time_of_post,
        is_saved
    } = props;

    const [saveJobStatus, setSaveJobStatus] = useState(is_saved);
    const [showInlineLoader, setShowInlineLoader] = useState(false);
    const [loginReminderToast, setLoginReminderToast] = useState(false);

    //Save job widget - adds the job and updates the userSavedList array under redux store
    const saveJob = () => {
        setShowInlineLoader(true);
        setTimeout(() => {
            setSaveJobStatus(true);
            updateJob(props, "add");
            setShowInlineLoader(false);
        }, 1000);
    };

    //Save job widget - removes the job and updates the userSavedList array under redux store
    const removedSavedJob = () => {
        setShowInlineLoader(true);
        setTimeout(() => {
            setSaveJobStatus(false);
            updateJob(props, "remove");
            setShowInlineLoader(false);
        }, 2000);
    };

    //Triggers a toast when the user is not logged in
    function handleRouteClick() {
        setLoginReminderToast(true);
        setTimeout(() => {
            setLoginReminderToast(false);
        }, 2000);
    }

    return (
        <CardHeader pad10>
            <FlexBox jcSpaceBetween>
                <Div width="100%">
                    <Div fontWeight="bold" fontsize="lg">
                        {title}
                    </Div>
                    <Div fontSize="xs">{company}</Div>
                    <Div fontSize="xxs">{location}</Div>
                </Div>
                {loginStatus && (
                    <Div style={{ cursor: "pointer" }}>
                        {!showInlineLoader &&
                            (saveJobStatus ? (
                                <FlexBox
                                    width="50px"
                                    jcSpaceBetween
                                    alignCenter
                                    fontSize="xxs"
                                    onClick={removedSavedJob}
                                >
                                    <FontAwesomeIcon
                                        icon={faCheckSquare}
                                        style={{ marginRight: 5 }}
                                        color="rgba(197,71,127,1.00)"
                                    />
                                    <span> saved</span>
                                </FlexBox>
                            ) : (
                                <FlexBox
                                    width="45px"
                                    jcEnd
                                    alignCenter
                                    fontSize="xxs"
                                    onClick={saveJob}
                                >
                                    <FontAwesomeIcon
                                        style={{ marginRight: 5 }}
                                        icon={faClock}
                                        color="#dfdfdf"
                                    />
                                    <span> save</span>
                                </FlexBox>
                            ))}

                        {showInlineLoader && (
                            <InlineLoaderComp width="80px" height="80px" />
                        )}
                    </Div>
                )}
            </FlexBox>

            {loginStatus ? (
                <Anchor
                    color="black"
                    textDecoration="none"
                    to={{ pathname: `/details/${id}`, query: { props } }}
                >
                    <Paragraph>{description}</Paragraph>
                    <Div marT10 fontSize="xxs">
                        {time_of_post}
                    </Div>
                </Anchor>
            ) : (
                <Div onClick={handleRouteClick} style={{ cursor: "pointer" }}>
                    <Paragraph>{description}</Paragraph>
                    <Div marT10 fontSize="xxs">
                        {time_of_post}
                    </Div>
                </Div>
            )}

            {loginReminderToast && (
                <CustomToast toastMessage="Please login to see the details!" />
            )}
        </CardHeader>
    );
};

export default Deck;

Deck.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    company: PropTypes.string,
    company_info: PropTypes.object,
    description: PropTypes.string,
    employment_type: PropTypes.string,
    skills: PropTypes.array,
    location: PropTypes.string,
    loginStatus: PropTypes.bool,
    save: PropTypes.func,
    updateJob: PropTypes.func,
    time_of_post: PropTypes.string,
    is_saved: PropTypes.bool
};
