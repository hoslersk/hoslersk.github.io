import React, { Fragment, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import BackgroundGrid from './background-grid';
import BackgroundShadow from './background-shadow';
import BackgroundSvg from './background-svg';
import BackgroundTrim from './background-trim';
import Heading from './heading';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';

const SITE_FOOTER_HEIGHT = 40;

const useResizeObserver = () => {
  const ref = useRef(null),
        [windowHeight, setWindowHeight] = useState(0),
        [elementHeight, setElementHeight] = useState(0);

  const handleResize = () => {
    window.requestAnimationFrame(() => {
      setElementHeight(ref.current.clientHeight);
      setWindowHeight(window.innerHeight);
    });
  };

  useEffect(() => {
    if (!ref.current) return;
    let ro = new ResizeObserver(handleResize);
    ro.observe(ref.current);
    return () => {
      ro.disconnect();
      ro = null;
    }
  }, []);

  return [ref, windowHeight, elementHeight];
}

export default function Page({ children }) {
  const [ref, windowHeight, elementHeight] = useResizeObserver(),
        mainElementHeight = windowHeight - elementHeight - SITE_FOOTER_HEIGHT;

  return (
    <Fragment>
      <SiteHeader ref={ref} />
      <main className="container" style={{ height: mainElementHeight + 'px' }}>
        {children}
      </main>
      <SiteFooter />

      <BackgroundSvg position="top" />
      <BackgroundGrid />
      <BackgroundShadow />
      <BackgroundSvg position="bottom" />
    </Fragment>
  );
}
