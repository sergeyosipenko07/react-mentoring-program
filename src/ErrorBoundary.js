import React from "react";

export const ErrorBoundary = (props) => {
    const OopsText = () => {
        return <h2>Oops... Something went wrong</h2>
    }

    let isEverythingOk = true;

    return <>{isEverythingOk ? props.children : <OopsText />}</>
}