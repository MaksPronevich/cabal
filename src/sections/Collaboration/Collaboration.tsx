import { FC } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/config";
import collaborationImg from "@/assets/img/collaboration.png";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export const Collaboration: FC = () => {
  const { showAnimation } = animationConfig;

  return (
    <motion.section className="section relative flex min-h-screen items-center border-b px-4">
      <MouseParallaxContainer
        className="flex w-full flex-col items-center gap-4 py-5 lg:flex-row lg:gap-0"
        globalFactorX={0.1}
        globalFactorY={0.1}
      >
        <div className="flex items-center justify-center lg:flex-[0_1_50%] lg:pr-4">
          <motion.div
            className="relative z-10 max-w-[552px] text-center lg:text-left"
            viewport={{ amount: 0.5, once: true }}
            variants={showAnimation}
            whileInView="visible"
            initial="hidden"
            custom={1}
          >
            <MouseParallaxChild factorX={-0.05} factorY={0.05}>
              <img className="mb-6 inline-flex h-12 w-12" src="/icons/2.svg" height={48} width={48} alt="Icon" />
            </MouseParallaxChild>
            <h2 className="mb-6 text-2xl uppercase lg:text-4xl 2xl:text-5xl">The Power of Collaboration</h2>
            <div className="text-left font-plex text-xs text-gray-200 lg:text-sm 2xl:text-base">
              <p>
                With pooled resources, the DAO functions as a powerhouse that not only discovers but also shapes the
                blockchain ecosystem.
              </p>
              <br />
              <p>
                By combining its members` expertise and resources, CABAL DAO ensures a seamless flow of value,
                benefiting the projects and people deserving of its support.
              </p>
              <br />
              <p>
                All funds raised will be used as a secondary purpose behind the alpha conversations: Fund Management
                (USDT airdrops), DAO Dealflow, LP Positions, and Sniping.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center lg:flex-[0_1_50%] lg:pl-4"
          viewport={{ amount: 0.5, once: true }}
          variants={showAnimation}
          whileInView="visible"
          initial="hidden"
          custom={1}
        >
          <MouseParallaxChild factorX={0.15} factorY={0.1}>
            <img src={collaborationImg} alt="Collaboration" />
          </MouseParallaxChild>
        </motion.div>
      </MouseParallaxContainer>
      <div className="absolute bottom-[60px] left-1/2 top-[60px] hidden -translate-x-1/2 lg:block">
        <div className="relative h-full w-[1px] bg-gray-100 before:absolute before:-left-[2px] before:-top-[2px] before:h-[5px] before:w-[5px] before:rotate-45 before:bg-gray-100 after:absolute after:-bottom-[2px] after:-left-[2px] after:h-[5px] after:w-[5px] after:rotate-45 after:bg-gray-100" />
      </div>
    </motion.section>
  );
};
