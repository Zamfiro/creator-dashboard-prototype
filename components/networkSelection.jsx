"use client";

import React, { useEffect, useState } from "react";
import {
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoFacebookCircle,
  BiLogoSnapchat,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoTwitch,
} from "react-icons/bi";



function NetworkSelection({ connectedNetworks, selectedNetwork, setSelectedNetwork }) {

  const networks = [
    {
      platform: "instagram",
      icon: <BiLogoInstagram />,
    },
    {
      platform: "facebook",
      icon: <BiLogoFacebookCircle />,
    },
    {
      platform: "tiktok",
      icon: <BiLogoTiktok />,
    },
    {
      platform: "snapchat",
      icon: <BiLogoSnapchat />,
    },
    {
      platform: "twitter",
      icon: <BiLogoTwitter />,
    },
    {
      platform: "youtube",
      icon: <BiLogoYoutube />,
    },
    {
      platform: "twitch",
      icon: <BiLogoTwitch />,
    },
      
  ];
  
  return (
    <div>
      <div
        className={`flex pb-2 sm:pr-2 sm:flex-col gap-5 text-text text-3xl w-fit ${
          connectedNetworks.length <= 5 ? "w-full justify-center" : "w-fit"
        }`}
      >
        {networks.map((item) =>
          connectedNetworks.find((x) => x === item.platform) ? (
            <div
              key={item.platform}
              className={`${
                item.platform === selectedNetwork
                  ? "bg-accent text-secondary"
                  : "bg-transparent"
              } flex justify-center items-center align-middle w-12 h-12 rounded-md text-text ${
                item.platform !== selectedNetwork && "sm:hover:bg-secondary"
              }`}
              onClick={() => setSelectedNetwork(item.platform)}
            >
              {item.icon}
            </div>
          ) : undefined
        )}
      </div>
    </div>
  );
}

export default NetworkSelection;
