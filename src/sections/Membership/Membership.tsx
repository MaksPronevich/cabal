import { FC } from "react";
import { useChangeIcon } from "@/hooks";
import membershipImg from "@/assets/img/membership.png";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export const Membership: FC = () => {
  const { iconIndex } = useChangeIcon(25, 1000);

  return (
    <section className="section relative flex min-h-screen border-b px-4 [box-shadow:0_-110px_110px_#000]">
      <MouseParallaxContainer
        className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0"
        globalFactorX={0.1}
        globalFactorY={0.1}
      >
        <div className="flex items-center justify-center lg:flex-[0_1_50%] lg:pr-4">
          <div className="relative z-10 max-w-[560px] pt-5 text-center lg:pt-0 lg:text-left">
            <MouseParallaxChild factorX={-0.05} factorY={0.05}>
              <img
                className="mb-6 inline-flex h-12 w-12"
                src={`/icons/${iconIndex}.svg`}
                height={48}
                width={48}
                alt="Icon"
              />
            </MouseParallaxChild>
            <h2 className="mb-6 text-2xl uppercase lg:text-4xl 2xl:text-5xl">Membership Perks</h2>
            <ul className="flex flex-col gap-4 text-left font-plex lg:gap-8">
              <li className="inline-flex items-center gap-6">
                <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center border text-base font-medium lg:h-[65px] lg:w-[65px] lg:text-lg 2xl:h-[89px] 2xl:w-[89px] 2xl:text-xl">
                  01
                </span>
                <span className="text-sm lg:text-xl 2xl:text-2xl">
                  <span className="font-semibold">Alpha Chat:</span> Exclusive access to industry insights.
                </span>
              </li>
              <li className="inline-flex items-center gap-6">
                <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center border text-base font-medium lg:h-[65px] lg:w-[65px] lg:text-lg 2xl:h-[89px] 2xl:w-[89px] 2xl:text-xl">
                  02
                </span>
                <span className="text-sm lg:text-xl 2xl:text-2xl">
                  <span className="font-semibold">Network Room:</span> Connect with influential leaders.
                </span>
              </li>
              <li className="inline-flex items-center gap-6">
                <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center border text-base font-medium lg:h-[65px] lg:w-[65px] lg:text-lg 2xl:h-[89px] 2xl:w-[89px] 2xl:text-xl">
                  03
                </span>
                <span className="text-sm lg:text-xl 2xl:text-2xl">
                  <span className="font-semibold">Deal Flow:</span> Gain access to prime investment opportunities.
                </span>
              </li>
              <li className="inline-flex items-center gap-6">
                <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center border text-base font-medium lg:h-[65px] lg:w-[65px] lg:text-lg 2xl:h-[89px] 2xl:w-[89px] 2xl:text-xl">
                  04
                </span>
                <span className="text-sm lg:text-xl 2xl:text-2xl">
                  <span className="font-semibold">USDT Airdrops:</span> Monthly rewards from trading profits.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-end justify-center self-end lg:flex-[0_1_50%] lg:pl-4">
          <MouseParallaxChild factorX={0.15} factorY={0}>
            <img src={membershipImg} alt="Membership" />
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
      <div className="absolute bottom-[60px] left-1/2 top-[60px] hidden -translate-x-1/2 lg:block">
        <div className="relative h-full w-[1px] bg-gray-100 before:absolute before:-left-[2px] before:-top-[2px] before:h-[5px] before:w-[5px] before:rotate-45 before:bg-gray-100 after:absolute after:-bottom-[2px] after:-left-[2px] after:h-[5px] after:w-[5px] after:rotate-45 after:bg-gray-100" />
      </div>
    </section>
  );
};
