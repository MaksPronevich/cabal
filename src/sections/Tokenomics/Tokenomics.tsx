import { FC } from "react";
import { configuration } from "@/config";
import tokenomicsImg from "@/assets/img/tokenomics.png";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export const Tokenomics: FC = () => {
  const { nftEthPrice, mintNftCount } = configuration;

  return (
    <section
      id="tokenomics"
      className="section relative flex min-h-screen items-center border-b px-4 [box-shadow:0_-110px_110px_#000]"
    >
      <MouseParallaxContainer
        className="flex w-full flex-col items-center gap-4 py-5 lg:flex-row lg:gap-0"
        globalFactorX={0.1}
        globalFactorY={0.1}
      >
        <div className="flex items-center justify-center lg:flex-[0_1_50%] lg:pr-4">
          <div className="relative z-10 w-full max-w-[552px] text-center lg:text-left">
            <MouseParallaxChild factorX={-0.05} factorY={0.05}>
              <img
                className="mb-6 inline-flex h-12 w-12"
                src="/icons/tokenomics.svg"
                height={48}
                width={48}
                alt="Icon"
              />
            </MouseParallaxChild>
            <h2 className="mb-6 text-2xl uppercase lg:text-4xl 2xl:text-5xl">Tokenomics</h2>
            <div className="mb-6 text-left font-plex text-xs text-gray-200 lg:text-sm 2xl:text-base">
              <p>Proof of Membership is done </p>
              <p>Through Acquiring CABAL DAO NFTs</p>
            </div>
            <div className="flex flex-col gap-6 sm:inline-flex">
              <div className="flex flex-col items-center border px-8 py-3 uppercase">
                <span className="text-xl font-medium">Initial Mint:</span>
                <span className="font-eczar text-[40px]">{mintNftCount} NFT’s</span>
              </div>
              <div className="flex flex-col items-center border px-8 py-3 uppercase">
                <span className="text-xl font-medium">Entry Price:</span>
                <span className="font-eczar text-[40px]">{nftEthPrice} ETH</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:flex-[0_1_50%] lg:pl-4">
          <MouseParallaxChild factorX={0.15} factorY={0.1}>
            <img src={tokenomicsImg} alt="Tokenomics" />
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
      <div className="absolute bottom-[60px] left-1/2 top-[60px] hidden -translate-x-1/2 lg:block">
        <div className="relative h-full w-[1px] bg-gray-100 before:absolute before:-left-[2px] before:-top-[2px] before:h-[5px] before:w-[5px] before:rotate-45 before:bg-gray-100 after:absolute after:-bottom-[2px] after:-left-[2px] after:h-[5px] after:w-[5px] after:rotate-45 after:bg-gray-100" />
      </div>
    </section>
  );
};
