import Logo from '@/assets/logo.png'
import Image from 'next/image'
import ServiceIcon from '@/assets/footer/service.svg'
import FinanceIcon from '@/assets/footer/finance.svg'
import { footerMenus } from '@/consts'
import FooterL from '@/assets/footer/footerL.png'
import FooterR from '@/assets/footer/footerR.png'
import Download1 from '@/assets/footer/download-1.png'
import Download2 from '@/assets/footer/download-2.png'
import { useTranslations } from 'next-intl'

export default function Footer () {
  const t = useTranslations('Index');
  const handleClick = () => {
    window.open('https://cus.kumetastar.com/?Y3VzdG9tZXI9U2hha2VwYXlQUk8%3D', '_blank')
  }
  
  return (
    <div className="bg-bg_color_04 px-6 lg:px-[75px] py-[62px] flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-[157px]">
      <div className="flex flex-col justify-between shrink-0">
        <div className='flex flex-col items-start gap-5 lg:gap-10 lg:flex-row'>
          <Image width={133} height={26} src={Logo} alt="logo" />
          <div className='flex flex-row items-center gap-5 lg:flex-col lg:items-start'>
            <div className='flex items-center gap-5 cursor-pointer' onClick={handleClick}>
              <Image src={ServiceIcon} alt="" />
              <p className='text-sm'>{t('online_service')}</p>
            </div>
            <div className='flex items-center gap-5'>
              <Image src={FinanceIcon} alt="" />
              <p className='text-sm'>{t('shakepay_finance')}</p>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex gap-[40px]'>
          <div className='w-[130px] h-[111px] bg-foot-bg bg-[position:-364px_0] hover:bg-[position:-365px_-115px]' />
          <div className='w-[130px] h-[111px] bg-foot-bg bg-[position:-127px_0] hover:bg-[position:-127px_-115px]' />
          <div className='w-[130px] h-[111px] bg-foot-bg bg-[position:0_0] hover:bg-[position:0_-112px]' />
        </div>
      </div>
      <div className=''>
        {/* <ul className='flex justify-between pr-[53px]'>
          {
            footerMenus.map(({title, subMenus}) => (
              <li key={title}>
                <span className='text-sm'>{title}</span>
                { subMenus && (
                  <ul className='flex flex-col gap-5 mt-5 text-xs'>
                    {
                      subMenus.map(i => (
                        <li className='duration-300 cursor-pointer text-text_color_01 hover:text-brand_color' key={i.title}>{i.title}</li>
                      ))
                    }
                  </ul>
                )}
              </li>
            ))
          }
        </ul>
        <div className="custom-h-divider my-[60px]" /> */}
        <p className='text-xs text-text_color_01 pr-[53px]'>
          {t('risk_warning')}
        </p>
        <div className="custom-h-divider my-2.5 lg:my-[60px]" />
        <p className='mb-5 text-xs text-text_color_01 lg:mb-0'>COPYRIGHT © 2019 shakepayPRO Finance Ltd All rights reserved</p>
        <div className='flex flex-col gap-5 lg:items-end lg:justify-between lg:flex-row'>
          <div className='flex lg:hidden gap-[40px]'>
            <div className='w-[130px] h-[111px] bg-foot-bg bg-[position:-364px_0] hover:bg-[position:-365px_-115px]' />
            <div className='w-[130px] h-[111px] bg-foot-bg bg-[position:-127px_0] hover:bg-[position:-127px_-115px]' />
            <div className='w-[130px] h-[111px] bg-foot-bg bg-[position:0_0] hover:bg-[position:0_-112px]' />
          </div>
          <div className='flex gap-5'>
            <Image src={FooterL} alt="" />
            <Image src={FooterR} alt="" />
          </div>
          <div className='hidden gap-5 lg:flex'>
            <Image src={Download1} alt="" />
            <Image src={Download2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}