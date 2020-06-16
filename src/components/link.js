import React from 'react';
import { Link as RRLink } from 'react-router-dom';


const HTTPS_REGEX = /^https?:\/\//;

function isExternalUrl(url) {
  if (HTTPS_REGEX.test(url)) return true;
  return false;
}


export default function Link({ to, ...otherProps }) {
  const isExternalLink = isExternalUrl(to);

  if (isExternalLink) return <a rel="noopener noreferrer" target="_blank" href={to} {...otherProps} />
  return <RRLink to={to} {...otherProps}  />
}
