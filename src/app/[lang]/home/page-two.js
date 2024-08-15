import { AnimatePresence, m } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
const bounceIn = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 30 }
};
const bounceInTrans = { duration: 1, type: "spring", stiffness: 100 }

function Progress ({ children, onMouseEnter, active }) {
  return (
    <div 
      className={`duration-300 flex items-center justify-center h-[46px] rounded border border-bg_color_06 hover:bg-brand_color text-bg_color_01 hover:text-white cursor-pointer ${active ? 'bg-brand_color text-white' : ''}`}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  )
}

function Item ({ title, description, icon }) {
  return (
    <div className="duration-300 lg:basis-[430px] cursor-pointer relative group bg-bg_color_04 rounded-lg px-6 h-[220px] lg:h-[250px] hover:bg-white hover:shadow-primary overflow-hidden">
      {icon}
      <div className="relative flex flex-col justify-between h-full pt-5 pb-8 z-1">
        <p className="text-xl font-bold lg:text-2xl">{title}</p>
        <p className="text-xs lg:text-sm text-text_color_01">{description}</p>
      </div>
    </div>
  )
}



export default function PageTwo() {
  const t = useTranslations('Index')
  const [active, setActive] = useState('service')



  const data = [
    {
      key: 'service',
      title: t('prime_service'),
      description: t('prime_service_desc')
    },
    {
      key: 'platform',
      title: t('platform'),
      description: t('platform_desc'),
    },
    {
      key: 'products',
      title: t('products'),
      description: t('products_desc'),
    },
    {
      key: 'community',
      title: t('doc_community'),
      description: t('doc_community_desc'),
    }
  ]
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white lg:min-h-[1080px]">
      <div className="lg:w-[1400px] mx-auto">
        <div className="overflow-hidden duration-300 group lg:bg-bg_color_04 bg-white hover:bg-white lg:hover:shadow-primary py-[112px] lg:py-[62px] px-6 lg:px-[90px] rounded-lg flex gap-[64px] lg:gap-[80px] items-center lg:items-start flex-col lg:flex-row">
          <m.div   
            initial={{ opacity: 0, x: -60 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={bounceInTrans} 
            className="flex flex-col gap-5 lg:gap-8 w-full lg:w-[430px]"
          >
            {
              data.map(i => (
                <Progress 
                  onMouseEnter={() => setActive(i.key)}
                  key={i.key}
                  active={i.key === active}
                >
                  {i.title}
                </Progress>
              ))
            }
          </m.div>
         
          <div className='relative flex items-center justify-center w-full bg-no-repeat bg-cover bg-service-bg lg:bg-none aspect-square lg:aspect-auto lg:w-auto lg:h-auto lg:flex-1 lg:justify-start lg:items-start'>
            <svg className="hidden lg:block absolute top-0 right-0 lg:top-[83px] lg:right-[112px]" xmlns="http://www.w3.org/2000/svg" width="422" height="317" viewBox="0 0 422 317" fill="none">
              <path className="group-hover:fill-brand_color_02 fill-white" d="M20.1409 184.145C9.59091 184.145 0 175.514 0 164.005V20.1409C0 8.63182 8.63182 0 20.1409 0H164.964C175.514 0 185.105 8.63182 185.105 20.1409V164.964C185.105 175.514 176.473 185.105 164.964 185.105H20.1409V184.145ZM257.036 184.145C246.486 184.145 236.895 175.514 236.895 164.005V20.1409C236.895 9.59091 245.527 0 257.036 0H401.859C413.368 0 422 8.63182 422 20.1409V164.964C422 175.514 413.368 185.105 401.859 185.105H257.036V184.145ZM20.1409 422C8.63182 422 0 413.368 0 401.859V257.036C0 246.486 8.63182 236.895 20.1409 236.895H164.964C175.514 236.895 185.105 245.527 185.105 257.036V401.859C185.105 412.409 176.473 422 164.964 422H20.1409ZM257.036 422C246.486 422 236.895 413.368 236.895 401.859V257.036C236.895 246.486 245.527 236.895 257.036 236.895H401.859C412.409 236.895 422 245.527 422 257.036V401.859C422 412.409 413.368 422 401.859 422H257.036Z"/>
            </svg>
            <m.div   
              initial={{ opacity: 0, x: 60 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={bounceInTrans} 
              className="relative w-full z-1"
            >
              {
                data.map(i => (
                  <AnimatePresence key={i.key}>
                    {
                      i.key === active && (
                        <m.div   
                          initial={bounceIn.closed} 
                          animate={bounceIn.open} 
                          transition={{ duration: 1, type: "spring" }} 
                          className='flex flex-col items-center justify-center lg:items-start lg:justify-start'
                        >
                          <p className="mb-5 text-xl font-bold lg:text-2xl text-text_color_02">{i.title}</p>
                          <p className="w-full lg:w-[406px] text-center lg:text-left text-xs lg:text-sm text-text_color_01">{i.description}</p>
                        </m.div>
                      )
                    }
                  </AnimatePresence>
                ))
              }
            </m.div>
          </div>
        </div>
        <div className="flex lg:gap-[54px] mt-[42px] justify-center flex-col lg:flex-row px-6 gap-5">
          <Item 
            title={t('safty_guarantee')}
            description={t('safty_guarantee_desc')}
            icon={
              <svg className="absolute right-[25px] top-[94px]" xmlns="http://www.w3.org/2000/svg" width="171" height="157" viewBox="0 0 171 157" fill="none">
                <path className="group-hover:fill-brand_color_02 fill-white" d="M85.3276 0C85.3459 0 85.3455 -0.00620868 85.3612 0.00340028C85.853 0.30551 119.094 20.677 165.349 36.2638C168.403 37.2929 170.569 39.9857 170.636 43.2078C171.106 65.7815 167.565 155.064 85.8193 198.985C85.6672 199.066 85.493 199.111 85.3203 199.111C85.1476 199.111 84.9734 199.066 84.8212 198.985C3.15408 155.093 -0.432824 65.8999 0.0315973 43.2528C0.0981675 40.0065 2.29398 37.3028 5.37845 36.2886C52.0537 20.9415 84.7935 0.319143 85.293 0.00366396C85.3089 -0.00636537 85.3088 0 85.3276 0Z" />
              </svg>
            }
          /> 
          <Item 
            title={t('ultra_low')}
            description={t('ultra_low_desc')}
            icon={
              <svg className="absolute right-[25px] top-[94px]" xmlns="http://www.w3.org/2000/svg" width="190" height="156" viewBox="0 0 190 156" fill="none">
                <path className="group-hover:fill-brand_color_02 fill-white" d="M95.4024 0C43.2135 0 0.902344 42.3067 0.902344 94.5C0.902344 146.685 43.2135 189 95.4024 189C147.595 189 189.902 146.685 189.902 94.5C189.902 42.3069 147.595 0 95.4024 0ZM95.4024 156.114L58.4241 109.217H85.7806V32.8535H105.024V109.217H132.38L95.4024 156.114Z" />
              </svg>
            }
          /> 
          <Item 
            title={t('extre_fast')}
            description={t('extre_fast_desc')}
            icon={
              <svg className="absolute right-[25px] top-[94px]" xmlns="http://www.w3.org/2000/svg" width="171" height="154" viewBox="0 0 171 154" fill="none">
                <path className="group-hover:fill-brand_color_02 fill-white" d="M59.4011 204H24.088C18.891 204 14.0797 201.406 11.1974 197.06C8.33791 192.715 7.83862 187.254 9.88115 182.453L41.7219 107.825H15.4414C9.90384 107.825 4.77483 104.844 2.02877 100.021C-0.717296 95.2197 -0.671906 89.2585 2.14224 84.4805L47.3502 7.62213C50.0962 2.93509 55.2025 0 60.6493 0H155.559C161.096 0 166.225 2.98059 168.971 7.80415C171.717 12.6277 171.672 18.5661 168.858 23.3442L131.298 87.2108H141.806C148.001 87.2108 153.584 90.9195 156.013 96.6304C158.441 102.364 157.238 108.94 152.926 113.422L70.5215 199.245C67.6165 202.271 63.5769 204 59.4011 204ZM31.8043 183.409H57.2451L129.846 107.779H122.402C116.864 107.779 111.735 104.799 108.989 99.975C106.243 95.1515 106.288 89.213 109.103 84.435L146.662 20.5911H63.5542L24.3604 87.2108H49.4381C54.6352 87.2108 59.4691 89.8046 62.3287 94.1731C65.1882 98.5189 65.6875 103.979 63.645 108.78L31.8043 183.409Z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
