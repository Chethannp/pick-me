import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Div, FlexBox } from "../../styledComponents/layout";
import { CardHeader, Paragraph } from "../../styledComponents/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import InlineLoaderComp from "../InlineLoader";
import CustomToast from "../toast";
import { useHistory } from "react-router";

const Deck = props => {
    let history = useHistory();
    const {
        updateJob,
        loginStatus,
        id,
        title,
        company,
        location,
        description,
        time_of_post
    } = props;

    const [saveJobStatus, setSaveJobStatus] = useState(false);
    const [showInlineLoader, setShowInlineLoader] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginReminderToast, setLoginReminderToast] = useState(false);

    useEffect(() => {
        if (loginStatus) {
            setIsLoggedIn(loginStatus);
        }
    }, [loginStatus]);

    const saveJob = () => {
        setShowInlineLoader(true);
        setTimeout(() => {
            setSaveJobStatus(true);
            updateJob(props, "add");
            setShowInlineLoader(false);
        }, 1000);
    };

    const removedSavedJob = () => {
        setShowInlineLoader(true);
        setTimeout(() => {
            setSaveJobStatus(false);
            updateJob(props, "remove");
            setShowInlineLoader(false);
        }, 2000);
    };

    function handleRouteClick() {
        if (isLoggedIn) {
            history.push(`/details/${id}`, props);
        } else {
            setLoginReminderToast(true);
            setTimeout(() => {
                setLoginReminderToast(false);
            }, 2000);
        }
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

            <Div onClick={handleRouteClick} style={{ cursor: "pointer" }}>
                <Paragraph>{description}</Paragraph>
                <Div marT10 fontSize="xxs">
                    {time_of_post}
                </Div>
            </Div>

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
    time_of_post: PropTypes.string
};
