import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales, localePrefix} from './config';

export const {Link, getPathname, redirect, usePathname, useRouter} =
createSharedPathnamesNavigation({
    locales,
    // pathnames,
    localePrefix
  });