"use client"
import Image from "next/image";
import Logo from '@/assets/logo.png'
// import { menus } from "@/consts";
import { useEffect, useState } from "react";
import MenuIcon from '@/assets/home/mobile-menu.svg'
import { m, useScroll } from 'framer-motion'
import Lnk from "next/link";
import { useTranslations } from "next-intl";

// 节流函数
function throttle (fn, delay) {
  let timer = null
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      clearTimeout(timer);
      timer = null;
    }, delay);
  }
}

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const t = useTranslations('Index');

  const handleScroll = throttle(() => {
    const position = window.scrollY;
    setScrollHeight(position);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const handleClick = () => {
    window.open('https://app.shakepays.com', "_blank");
  }

  const onSelectChange = (param) => () => {
    location.href = `/${param}`
    
  }


  const menus = [{
    title: t('lang'),
    subMenus: [
      { title: '繁体中文', path: 'zh' },
      { title: 'English', path: 'en' },
    ]
  }]
  return (
    <div className={`z-10 top-0 flex items-center justify-between w-full h-[60px] text-white px-6 lg:px-[60px] ${ scrollHeight > 100 ? 'fixed bg-brand_color_02' : 'absolute bg-bg_color_02'}`}>
      <Image width={133} height={26} src={Logo} alt="logo" />
      <div className="items-center hidden h-full lg:flex">
        <ul className="flex items-center h-full">
          {
            menus.map(({ title, subMenus, path }) => (
              <li key={title} className={`duration-300 group w-[120px] h-full flex items-center cursor-pointer justify-center relative text-center border-b border-transparent hover:border-white ${ scrollHeight > 100 ? 'hover:bg-brand_color_02 text-text_color_01 hover:text-text_color_03' : 'hover:bg-bg_color_02' }`}>
                <a className="text-xs" href={path}>{title}</a>
                {
                  subMenus && (
                    <ul className={`duration-300 absolute left-0 w-full top-full h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden ${ scrollHeight > 100 ? 'bg-brand_color_02' : 'bg-bg_color_02' }`}>
                      {
                        subMenus.map(j => (
                          <li onClick={onSelectChange(j.path)} key={j.title} className={`text-xs duration-300 h-[50px] flex items-center justify-center text-center ${ scrollHeight > 100 ? 'hover:bg-brand_color_02 text-text_color_01 hover:text-text_color_03' : 'hover:bg-bg_color_02' }`}>
                            {j.title}
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
          }
        </ul>
        <button className="rounded w-[230px] h-8 text-xs btn-primary" onClick={handleClick}>{t('connect_wallet')}</button>
      </div>
      <div className="relative lg:hidden">
        <div className="cursor-pointer h-[60px] flex items-center" onClick={() => setIsShow(v => !v)}><Image src={MenuIcon} alt="" /></div>
        <m.ul
          initial="hidden"
          animate={ isShow ? 'visible' : 'hidden'}
          variants={{ 
            visible: { opacity: 1, height: 'auto', },
            hidden: { opacity: 0, height: 0 },
          }}
          className={`absolute right-[-20px] top-full border-t border-transparent ${ scrollHeight > 100 ? 'bg-brand_color_02' : 'bg-bg_color_02' }`}
        >
          {
            menus.map(({title, path, subMenus }) => (
              <li key={title} className={`relative group h-[50px] cursor-pointer min-w-[120px] flex items-center justify-center ${ scrollHeight > 100 ? 'hover:bg-brand_color_02 text-text_color_01 hover:text-text_color_03' : 'text-bg_color_01 hover:bg-bg_color_02' }`}>
                <a className="text-xs" href={path}>{title}</a>
                { subMenus && (
                  <ul className={`absolute top-0 hidden group-hover:block -left-full ${ scrollHeight > 100 ? 'bg-brand_color_02' : 'bg-bg_color_02' }`}>
                    {
                      subMenus.map(j => (
                        <li onClick={onSelectChange(j.path)} key={j.title} className={`min-w-[120px] cursor-pointer h-[50px] flex items-center justify-center text-xs ${ scrollHeight > 100 ? 'hover:bg-brand_color_02 text-text_color_01 hover:text-text_color_03' : 'text-bg_color_01 hover:bg-bg_color_02' }`}>
                          {j.title}
                        </li>
                      ))
                    }
                  </ul>
                )}
              </li>
            ))
          }
        </m.ul>
      </div>
      <m.div
        className="h-[1px] bg-brand_color fixed top-[60px] left-0 right-0 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}


