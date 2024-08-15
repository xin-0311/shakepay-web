import Image from "next/image";
import Logo from '@/assets/single-logo.png'
import NavArrow from '@/assets/arrow-nav.svg'
import { m } from 'framer-motion'
import LineImg from '@/assets/home/line.png'
import LineH5Img from '@/assets/home/line-mobile.png'
import { useTranslations } from "next-intl";

const bounceIn = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -60 }
};
const bounceInTrans = { duration: 0.3, type: "spring" }
const bounceInDelayTrans = {...bounceInTrans, delay: 0.4 }
function Item ({ children, index }) {
  return (
    <m.div 
      className="duration-300 px-2.5 text-sm h-[70px] bg-bg_color_04 rounded-lg text-text_color_01 hover:text-brand_color hover:shadow-shadow_color_01 hover:bg-white flex items-center justify-center hover:shadow-primary cursor-pointer"
      initial={bounceIn.closed} 
      whileInView={bounceIn.open}
      transition={{ ...bounceInTrans, ...( index && { delay: 0.1 * index }) }}
    >
      {children}
    </m.div>
  )
}
export default function PageThree() {
  const t = useTranslations('Index')


  function downloadApp(){
    const u = navigator.userAgent,
        isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        urls = {
            'android':'https://soft.apicoinex.com/ShakepayPRO.apk',
            'ios':'https://soft.apicoinex.com/ShakepayPRO.mobileconfig',
        };
    if (!isAndroid && !isiOS) return;
    window.location.href = isAndroid ? urls.android : urls.ios;
  }

  return (
    <div className="w-full lg:min-h-[1080px] bg-white px-6 flex flex-col items-center justify-center">
      <div className="items-center hidden lg:flex">
        <Image width={116} height={116} src={Logo} alt="" />
        <p className="text-6xl font-bold text-brand_color">{t('provide_top_exp')}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-[76px] lg:mt-[100px] w-full lg:w-auto">
        <div className="lg:w-[520px] w-full">
          <div className="flex flex-col gap-[30px] mb-[17px] lg:mb-[87px]">
            <Item>{t('inter_platform')}</Item>
            <Item index={1}>{t('advanced_indicator')}</Item>
            <Item index={2}>{t('oct_desc')}</Item>
            <Item index={3}>{t('multi_func')}</Item>
          </div>
          <m.button 
            className="duration-300 bg-brand_color w-full h-[70px] text-white rounded-lg hidden lg:flex items-center gap-3 justify-center hover:bg-brand_color_03"
            initial={bounceIn.closed} 
            whileInView={bounceIn.open}
            transition={bounceInTrans}
          >
            {t('download_now')}
            <Image src={NavArrow} alt="" />
          </m.button>
        </div>
        <div className="lg:block hidden w-[800px] rounded-[20px] shadow-primary p-3">
          <Image src={LineImg} alt="" />
        </div>
        <div className="inline-flex items-center justify-center lg:hidden">
          <div className="rounded-[20px] shadow-primary p-1">
            <Image src={LineH5Img} alt="" />
          </div>
        </div>
        <m.button 
          className="duration-300 mt-2.5 bg-brand_color w-full h-[70px] text-white rounded-lg lg:hidden flex items-center gap-3 justify-center hover:bg-brand_color_03"
          initial={bounceIn.closed} 
          whileInView={bounceIn.open}
          transition={bounceInTrans}
          onClick={downloadApp}
        >
          {t('download_now')}
          <Image src={NavArrow} alt="" />
        </m.button>
      </div>
    </div>
  );
}
