import React from "react";

function SubscriptionComponent() {
  const twitchSubscriptionLink = "https://www.twitch.tv/hp_az";

  return (
    <div className="subscription-component">
      <div className="twitch-subscription">
        sub on
        <a
          href={twitchSubscriptionLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.vectorlogo.zone/logos/twitch/twitch-horizontal.svg"
            alt="Twitch Logo"
          />
        </a>
        free with amazon prime
        <p></p>
      </div>
      <div className="stripe-subscriptions"></div>
    </div>
  );
}

export default SubscriptionComponent;
