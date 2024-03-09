"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { gtagUpdate } from "@/lib/gtagHelper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";
    gtagUpdate(newValue);
    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <>
      {!cookieConsent ? (
        <div className={`cookie-banner`}>
          <div className="text-center">
            <Link href="/info/cookies">
              <p className="cookie-title">
                We use <span className="font-bold text-sky-400">cookies</span>{" "}
                on our site.
              </p>
            </Link>
          </div>

          <div className="cookie-action">
            <button
              className="button-action"
              onClick={() => setCookieConsent(false)}
            >
              Decline
            </button>
            <button
              className="button-action"
              onClick={() => setCookieConsent(true)}
            >
              Allow Cookies
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
