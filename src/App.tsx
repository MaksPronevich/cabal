import { FC } from "react";
import { Home, Header, Footer, Roadmap, Blockchain, Membership, Tokenomics, Collaboration } from "@/sections";

export const App: FC = () => {
  return (
    <div className="relative h-screen overflow-y-auto bg-black">
      <Header />
      <main>
        <Home />
        <Blockchain />
        <Collaboration />
        <Membership />
        <Roadmap />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  );
};
