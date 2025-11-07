import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AniRobot from "./ani-robot";

export function AIToolsSection() {
  return (
    <section className="relative pt-20 px-4 bg-background overflow-hidden">
      {/* Robot illustration area */}
      <div className="flex justify-center mb-16">
        <AniRobot />
        {/* <div className="relative w-64 h-64"> */}


          {/* <AniRobot /> */}
          {/* Animated robot SVG */}
          {/* <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"> */}
            {/* Robot body */}
            {/* <rect x="70" y="80" width="60" height="70" fill="#00d4ff" rx="4" /> */}
            {/* Robot head */}
            {/* <circle cx="100" cy="60" r="20" fill="#00d4ff" /> */}
            {/* Robot eyes */}
            {/* <circle cx="92" cy="55" r="3" fill="#0a0a0a" />
            <circle cx="108" cy="55" r="3" fill="#0a0a0a" /> */}
            {/* Robot arms */}
            {/* <rect x="50" y="90" width="20" height="10" fill="#00d4ff" rx="2" />
            <rect x="130" y="90" width="20" height="10" fill="#00d4ff" rx="2" /> */}
            {/* Platform */}
            {/* <ellipse cx="100" cy="160" rx="50" ry="15" fill="none" stroke="#ff00ff" strokeWidth="2" />
            <circle cx="100" cy="160" r="40" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
          </svg> */}

          {/* Floating shapes */}
          {/* <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-cyan-400 animate-pulse" />
          <div
            className="absolute top-8 right-4 w-10 h-10 bg-magenta-500 rounded animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute bottom-12 left-8 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-16 right-12 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />*/}
         </div> 
      {/* </div> */}

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ZeaCRM: All the Tools You Need to Win</h2>
        <p className="text-muted-foreground mb-12 text-lg">Do you want more customers? Here's how we help you grow.</p>

        {/* Features list */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-foreground mt-2 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">Do you want to get more leads without spending all day chasing them?</h3>
              <p className="text-muted-foreground">
                ZeaCRM finds and organizes the right prospects for you, so you can focus on closing more deals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-foreground mt-2 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">Do you wish your customers stayed longer and happier?</h3>
              <p className="text-muted-foreground">
                Automated reminders and follow-ups help you stay in touch and build strong relationships that last.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-foreground mt-2 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">Do you want to grow your business without adding extra work?</h3>
              <p className="text-muted-foreground">
                Let AI handle the boring stuff — automate tasks, save time, and grow faster with less effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
