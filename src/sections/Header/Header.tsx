import { FC } from "react";
import { Scroll } from "@/utils";
import { configuration } from "@/config";
import closeImg from "@/assets/img/close.svg";
import burgerImg from "@/assets/img/burger.svg";
import { Popover, Transition, PopoverPanel, PopoverButton } from "@headlessui/react";

export const Header: FC = () => {
  const { navigation } = configuration;

  return (
    <header className="flex min-h-[60px] items-center justify-center bg-white py-2.5 text-black md:min-h-[74px]">
      <nav className="hidden max-w-[840px] flex-auto px-4 md:block">
        <ul
          className="flex flex-auto flex-wrap justify-between gap-4"
          onClick={(event) => Scroll.smoothNavScroll(event)}
        >
          {navigation.map((item, index) => (
            <li key={index}>
              <a className="inline-flex uppercase transition-transform hover:scale-[0.95]" href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Popover className="md:hidden" as="div">
        {({ open, close }) => (
          <>
            <PopoverButton className="inline-flex h-9 w-9 items-center justify-center outline-none">
              {!open && <img src={burgerImg} height={24} width={24} alt="Open" />}
              {open && <img src={closeImg} height={24} alt="Close" width={24} />}
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-8"
            >
              <PopoverPanel className="w-full bg-white py-12 [--anchor-gap:13px]" anchor="bottom">
                <nav>
                  <ul onClick={(event) => Scroll.smoothNavScroll(event)} className="flex flex-col items-center">
                    {navigation.map((item, index) => (
                      <li key={index}>
                        <a
                          className="inline-flex px-3 py-4 uppercase text-black"
                          onClick={() => close()}
                          href={item.link}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
};
