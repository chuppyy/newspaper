// components/ConsentBanner.js
import React from 'react';

const ConsentBanner = () => {
    const isAskCookies = localStorage.getItem("is-assk-cookie")
    const handleConsent = () => {
        // Update consent status when user agrees
        gtag('consent', 'update', {
            'ad_storage': 'granted'
            // Update other consent parameters as needed
        });

        // save to local storage
        localStorage.setItem("is-assk-cookie", true)
    };

    return (
        <>
            {!isAskCookies && (
                <div className="consent-banner">
                    <p>We use cookies for analytics. Do you consent?</p>
                    <button onClick={handleConsent}>Yes</button>
                </div>
            )}
        </>
    );
};

export default ConsentBanner;
