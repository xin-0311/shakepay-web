import dynamic from 'next/dynamic'
import {unstable_setRequestLocale} from 'next-intl/server';

const HomePage = dynamic(() => import('./home'))

export default function Home({params: {locale}}) {
  unstable_setRequestLocale(locale);
  return <HomePage />
}
