import { m } from 'framer-motion'
import { useTranslations } from 'next-intl';

const bounceIn = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 100 }
};
const bounceInTrans = { duration: 0.3, type: "spring", stiffness: 300, damping: 80 }

export default function PageFour() {
  const t = useTranslations('Index');
  return (
    <div className="flex flex-col items-center justify-center w-full lg:min-h-[1080px] bg-white py-[70px]">
      <m.p 
        className="text-4xl lg:text-6xl font-bold text-brand_color px-[56px] text-center"
        initial={bounceIn.closed} 
        whileInView={bounceIn.open}
        transition={bounceInTrans}
      >
        {t('our_bn_par')}
      </m.p>
      <m.p 
        className="mt-5 text-bg_color_01 px-[56px] text-center"
        initial={bounceIn.closed} 
        whileInView={bounceIn.open}
        transition={{ ...bounceInTrans, delay: 0.2 }}
      >
        {t('bn_par_desc')}
      </m.p>
      <div className="flex gap-5 lg:gap-[50px] mt-[138px] lg:w-auto flex-col lg:flex-row px-6 w-full">
        <div className="group w-full lg:w-[300px] h-[100px] rounded-xl bg-bg_color_03 hover:bg-white hover:shadow-primary flex items-center justify-center">
          <div className='bg-[position:-287px_6px] group-hover:bg-[position:-288px_-66px] w-[178px] h-[43px] bg-no-repeat bg-partner-bg' />
        </div>
        <div className="group w-full lg:w-[300px] h-[100px] rounded-xl bg-bg_color_03 hover:bg-white hover:shadow-primary flex items-center justify-center">
          <div className='bg-[position:-834px_-0px] group-hover:bg-[position:-833px_-78px] w-[178px] h-[43px] bg-no-repeat bg-partner-bg' />
        </div>
        <div className="group w-full lg:w-[300px] h-[100px] rounded-xl bg-bg_color_03 hover:bg-white hover:shadow-primary flex items-center justify-center">
          <div className='bg-[position:-4px_-166px] group-hover:bg-[position:-4px_-241px] w-[178px] h-[43px] bg-no-repeat bg-partner-bg' />
        </div>
        <div className="group w-full lg:w-[300px] h-[100px] rounded-xl bg-bg_color_03 hover:bg-white hover:shadow-primary flex items-center justify-center">
          <div className='bg-[position:-287px_-169px] group-hover:bg-[position:-293px_-246px] w-[178px] h-[43px] bg-no-repeat bg-partner-bg' />
        </div>
      </div>
    </div>
  );
}
