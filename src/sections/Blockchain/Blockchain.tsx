import { FC } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/config";
import daoLeftImg from "@/assets/img/dao-left.png";
import daoRightImg from "@/assets/img/dao-right.png";
import { useChangeIcon, useSectionVisibility } from "@/hooks";

export const Blockchain: FC = () => {
  const { iconIndex } = useChangeIcon(25, 1000);
  const { ref, visibilityPercentage } = useSectionVisibility();
  const { showAnimation } = animationConfig;

  return (
    <motion.section id="about" className="relative flex justify-center overflow-x-hidden border-y" ref={ref}>
      <motion.div
        className="px-4 pb-[120px] pt-8 text-center sm:max-w-[650px] lg:max-w-[974px] lg:py-[250px]"
        viewport={{ amount: 0.5, once: true }}
        variants={showAnimation}
        whileInView="visible"
        initial="hidden"
        custom={1}
      >
        <img className="mb-6 inline-flex h-12 w-12" src={`/icons/${iconIndex}.svg`} height={48} width={48} alt="Icon" />
        <h2 className="mb-6 text-2xl uppercase lg:text-4xl 2xl:text-5xl">Shaping the Blockchain Landscape</h2>
        <div className="font-plex text-xs text-gray-200 lg:text-sm 2xl:text-base">
          <p>
            CABAL DAO`s influence extends beyond its members. The collective resources and insights ensure that the best
            projects receive support, making membership highly desirable for founders seeking both investment and
            strategic backing.
          </p>
        </div>
      </motion.div>
      <div
        style={{ transform: `translateX(-${visibilityPercentage * 4}px)` }}
        className="absolute bottom-0 left-0 w-[80%]"
      >
        <img className="bg-black [box-shadow:50px_0_50px_#090909]" src={daoLeftImg} alt="DAO" />
      </div>
      <div
        style={{ transform: `translateX(${visibilityPercentage * 4}px)` }}
        className="absolute bottom-0 right-0 flex w-[80%] justify-end"
      >
        <img className="bg-black [box-shadow:-50px_0_50px_#090909]" src={daoRightImg} alt="DAO" />
      </div>
    </motion.section>
  );
};
