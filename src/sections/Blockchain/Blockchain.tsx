import { FC } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/config";
import daoLeftImg from "@/assets/img/dao-left.png";
import daoRightImg from "@/assets/img/dao-right.png";
import { useChangeIcon, useSectionVisibility } from "@/hooks";

export const Blockchain: FC = () => {
  const { iconIndex } = useChangeIcon(25, 500);
  const { ref, visibilityPercentage } = useSectionVisibility();
  const { showAnimation } = animationConfig;

  return (
    <motion.section id="about" className="relative flex justify-center overflow-x-hidden border-y" ref={ref}>
      <motion.div
        className="max-w-[400px] px-4 pb-[120px] pt-8 text-center lg:max-w-[650px] lg:py-[250px] xl:max-w-[974px]"
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
        className="absolute bottom-0 w-[65%] sm:w-[45%] lg:w-full 3xl:left-[10%] 5xl:left-[16%]"
        style={{ transform: `translateX(-${visibilityPercentage * 4}px)` }}
      >
        <img className="rounded-tr-3xl bg-black [box-shadow:50px_-60px_50px_#090909]" src={daoLeftImg} alt="DAO" />
      </div>
      <div
        className="absolute bottom-0 flex w-[65%] justify-end sm:w-[45%] lg:w-full 3xl:right-[10%] 5xl:right-[16%]"
        style={{ transform: `translateX(${visibilityPercentage * 4}px)` }}
      >
        <img className="rounded-tl-3xl bg-black [box-shadow:-50px_-60px_50px_#090909]" src={daoRightImg} alt="DAO" />
      </div>
    </motion.section>
  );
};
