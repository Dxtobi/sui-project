import React from 'react';
import RobotIcon from "../components/icons/RobotIcon";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";

const Bot = () => {
    return (

        <div className="app-home-layout">

            <h1>New Chat Bot page</h1>

            <div className="app-home-tabs impact_Writing">

            <div className="app-home-tabs-logo1">
                <RobotIcon/>
            </div>

            <div className="app-home-tabs-text">
                Got any AI Chat Bot Tool ideas for a ten years old birthday?
            </div>

            <div className="app-home-tabs-logo2">
                <ArrowRightIcon />
            </div>

            </div>

        </div>
    );
};

export default Bot;