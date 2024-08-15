"use client"
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

const bounceIn = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 50 }
};
const bounceInTrans = { duration: 0.3, type: "spring", stiffness: 300, damping: 80 }
const bounceInDelayTrans = {...bounceInTrans, delay: 0.3 }

export default function PageOne() {
  const t = useTranslations('Index')

  const handleClick = () => {
    window.open('https://app.shakepays.com/#/auth', "_blank");
  }

  return (
    <div className="relative w-full h-screen px-6">
      <div className="absolute top-0 left-0 w-full h-full">
        <video loop muted autoPlay className="object-cover w-full h-full">
          <source src="/assets/top.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="h-full flex flex-col items-center justify-end pb-[66px] lg:pb-[170px] relative z-1">
        <m.p 
          className="px-10 text-4xl font-bold text-center text-white lg:text-6xl"
          initial={bounceIn.closed} 
          animate={bounceIn.open} 
          transition={bounceInTrans}
        >
          {t('one_stop')}
        </m.p>
        <m.div 
          className="flex flex-col gap-2.5 mt-8 lg:flex-row lg:gap-8 w-full lg:w-auto"
          initial={bounceIn.closed} 
          animate={bounceIn.open} 
          transition={bounceInDelayTrans}
        >
          <button className="duration-300 text-white rounded-lg text-xs border border-border_color_01 lg:w-[380px] h-[60px] hover:bg-bg_color_04" onClick={handleClick}>{t('open_account')}</button>
          <button className="duration-300 text-white rounded-lg text-xs border border-border_color_01 lg:w-[380px] h-[60px] hover:bg-bg_color_04" onClick={handleClick}>{t('user_center')}</button>
        </m.div>
      </div>
    </div>
  );
}
