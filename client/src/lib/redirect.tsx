'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { languageDetector } from './languageDetector';

/**
 * Custom hook that redirects the user to a specified path or the current path with the detected language.
 *
 * @param [to] - The path to redirect to. If not provided, the current path will be used.
 * @returns An empty JSX element.
 */
function useRedirect(to?: string) {
  const router = useRouter();
  const pathname = usePathname();
  const redirectPath = to || pathname;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (redirectPath.startsWith('/' + detectedLng) && pathname === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + pathname);
      return;
    }
    const lngFromPath = pathname.split('/')[1];
    if (detectedLng && languageDetector.cache) {
      languageDetector.cache(detectedLng);
    }
    router.push(pathname.replace(`/${lngFromPath}`, `/${detectedLng}`));
  });

  return <></>;
}

export default useRedirect;
