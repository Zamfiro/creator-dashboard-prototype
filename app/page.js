'use client'

import { useEffect, useRef, useState } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Bubble from "@/components/bubble";
import Emoji from "@/components/emoji";
import NetworkSelection from "@/components/networkSelection";
import Navigation from "@/components/navigation";
import { HiPlusSm } from "react-icons/hi";

const demoVals = {
  followers: "21.3K",
  following: "353",
  posts: "402",
  likes: "1.32M",
  shares: "323K",
  interactions: "2.2M",
};

const networks = [
  "instagram",
  "facebook",
  "tiktok",
  "twitter",
  "snapchat",
  "youtube",
  "twitch",
];

export default function Home() {
  const [selectedNetwork, setSelectedNetwork] = useState("instagram");
  const [greeting, setGreeting] = useState("");

  const greetings = [
    "Hey there",
    "We missed you",
    "What's up",
    "How's it going",
    "Welcome back",
    "Hi",
  ];

  useEffect(() => {setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);}, [])
    

  return (
    <>
      <main
        className={`min-h-screen text-text bg-background pt-28 p-12 lg:p-24 transition-colors duration-1000`}
        suppressHydrationWarning={true}
      >
        <h1 className="font-bold md:text-5xl text-3xl mb-5">
          {greeting},{" "}
          <p className="sm:inline-block text-accent">
            User <Emoji symbol="👋" />
          </p>
        </h1>

        <section className=" sm:flex">
          <section className="sm:mr-5 my-5 px-2 flex sm:flex-col items-center justify-center gap-3">
            <div className=" sm:w-full overflow-auto scrollbar-mini sm:h-56 sm:px-0">
              <NetworkSelection
                connectedNetworks={networks}
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
            </div>
            <div className={`${
                  networks.length === 0 && "w-full"
                } w-12 h-12`}>
              <div
                className={`${
                  networks.length === 0 && "w-full"
                } flex justify-center items-center align-middle w-fill h-full border-2 border-dashed border-accent text-accent text-2xl rounded-md`}
              >
                <HiPlusSm />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-2 text-xl font-bold sm:text-3xl sm:grid-cols-3 gap-4 justify-items-stretch">
            <Bubble tag={"Followers"} value={demoVals.followers} />
            <Bubble tag={"Following"} value={demoVals.following} />
            <Bubble tag={"Posts"} value={demoVals.posts} />
            <Bubble tag={"Likes"} value={demoVals.likes} />
            <Bubble tag={"Shares"} value={demoVals.shares} />
            <Bubble tag={"Interactions"} value={demoVals.interactions} />
          </div>
        </section>

        <section className="my-5">
          <div>
            Coding Practice: GeeksforGeeks offers an extensive collection of
            coding challenges and practice problems across various programming
            languages, data structures, algorithms, and other computer science
            topics. These practice exercises help individuals improve their
            problem-solving and coding skills.
            <br />
            <br />
            Technical Articles and Tutorials: GeeksforGeeks provides a vast
            repository of technical articles and tutorials on a wide range of
            topics, including programming languages (such as C++, Java, Python),
            algorithms, data structures, web development, machine learning, and
            more. These articles are written in a concise and easy-to-understand
            manner, making complex concepts accessible to learners of all
            levels.
          </div>
        </section>
      </main>
    </>
  );
}
