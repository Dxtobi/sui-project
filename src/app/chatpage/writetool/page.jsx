import React from 'react';
import RobotIcon from "@/components/chat/icons/RobotIcon";
import ArrowRightIcon from "@/components/chat/icons/ArrowRightIcon";
import SearchInput from "@/components/chat/layout/SearchInput";

const WriteTool = () => {
    return (

        <>

        <div className="app-home-container">

            <div className="app-home-layout">

            AI Chat Tool Impact Writing
            <div className="app-home-tabs impact_Writing">

                <div className="app-home-tabs-logo1">
                    <RobotIcon/>
                </div>

                <div className="app-home-tabs-text">
                    Got any AI Chat Tool Impact Writing Creative ideas for a ten years old birthday?
                </div>

                <div className="app-home-tabs-logo2">
                    <ArrowRightIcon />
                </div>

            </div>

            <div className="app-home-tabs impact_Writing">

            <div className="app-home-tabs-logo1">
            <RobotIcon/>
            </div>

            <div className="app-home-tabs-text">
            Got any AI Chat Tool Impact Writing Creative ideas for a five years old birthday?
            </div>

            <div className="app-home-tabs-logo2">
            <ArrowRightIcon />
            </div>

            </div>

            <div className="app-home-tabs impact_Writing">

            <div className="app-home-tabs-logo1">
                <RobotIcon/>
            </div>

            <div className="app-home-tabs-text">
                Got any AI Chat Tool Impact Writing Creative ideas for a one years old birthday?
            </div>

            <div className="app-home-tabs-logo2">
                <ArrowRightIcon />
            </div>

            </div>

            </div>

            <div className="app-home-search-layout">
            <SearchInput />
            </div>

        </div>


        </>
    );
};

export default WriteTool;