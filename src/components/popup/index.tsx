// components/ConsentBanner.js
import React, { useState, useEffect } from 'react';

const ConsentBanner = () => {
    const [isAskCookies, setIsAskCookies] = useState(false);

    useEffect(() => {
        // Check localStorage only when running on client-side
        if (typeof window !== 'undefined') {
            const isAskCookiesStored = localStorage.getItem("is-ask-cookie");
            setIsAskCookies(isAskCookiesStored === "true");
        }
    }, []);

    const handleConsent = () => {
        gtag('consent', 'update', {
            'ad_storage': 'granted'
        });

        // Save consent status to localStorage
        setIsAskCookies(true);
        localStorage.setItem("is-ask-cookie", "true");
    };

    return (
        <div>
            {!isAskCookies && (
                <div className="consent-banner">
                    <p>We use cookies for analytics. Do you consent?</p>
                    <button onClick={handleConsent}>Yes</button>
                </div>
            )}
        </div>
    );
};

export default ConsentBanner;
