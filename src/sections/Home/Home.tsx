import { FC } from "react";
import { motion } from "framer-motion";
import { LinkButton } from "@/components";
import daoImg from "@/assets/img/dao-sm.png";
import buildImg from "@/assets/img/build.png";
import { TypeAnimation } from "react-type-animation";
import { configuration, animationConfig } from "@/config";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export const Home: FC = () => {
  const { mintCabalLinkUrl, buyCabalNftLinkUrl } = configuration;
  const { showAnimation } = animationConfig;

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0}>
      <motion.section className="flex min-h-screen px-4 pt-10 lg:px-12">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:justify-center lg:gap-1">
          <div className="min-h-[500px] max-w-[696px] text-center lg:my-[65px] lg:flex-[0_1_696px] lg:text-left">
            <motion.h2
              className="mb-6 text-2xl uppercase lg:text-4xl 2xl:text-5xl"
              viewport={{ amount: 0.2, once: true }}
              variants={showAnimation}
              whileInView="visible"
              initial="hidden"
              custom={1}
            >
              <span className="inline-block lg:mb-2">CABAL DAO:</span>
              <br /> The Vanguard of Blockchain Influence
            </motion.h2>
            <motion.div
              className="mb-6 whitespace-pre-line font-plex text-xs text-gray-200 lg:text-sm 2xl:text-base"
              viewport={{ amount: 0.2, once: true }}
              variants={showAnimation}
              whileInView="visible"
              initial="hidden"
              custom={2}
            >
              <TypeAnimation
                sequence={[
                  "This is an exclusive collective for industry titans.\n\n You will be in an exclusive DAO with active capital participants, including project founders, exchange magnates, fund managers, NFT aficionados, influencers, whales, and those whose influence  ripples across the blockchain—the real market movers.\n\n To join, one must hold a CABAL NFT, of which only 250 will initially be minted.",
                ]}
                cursor={false}
                wrapper="p"
                speed={80}
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start lg:gap-6"
              viewport={{ amount: 0.2, once: true }}
              variants={showAnimation}
              whileInView="visible"
              initial="hidden"
              custom={28}
            >
              <LinkButton
                className="w-full sm:max-w-[265px]"
                href={mintCabalLinkUrl}
                openInNewTab={true}
                variant="ghost"
              >
                MINT CABAL
              </LinkButton>
              <LinkButton className="w-full sm:max-w-[265px]" href={buyCabalNftLinkUrl} openInNewTab={true}>
                BUY CABAL NFT
              </LinkButton>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-end self-end"
            viewport={{ amount: 0.2, once: true }}
            variants={showAnimation}
            whileInView="visible"
            initial="hidden"
            custom={1}
          >
            <img alt="CABAL DAO" src={buildImg} />
            <MouseParallaxChild className="absolute bottom-0 left-0 w-full" factorX={0.15} factorY={0}>
              <img alt="CABAL DAO" src={daoImg} />
            </MouseParallaxChild>
          </motion.div>
        </div>
      </motion.section>
    </MouseParallaxContainer>
  );
};
