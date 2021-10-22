import React from 'react';
import classNames from 'classnames';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function RichText({ children, className, ...etc }) {
  return (
    <div className={classNames('rich-text', className)} {...etc}>
      {documentToReactComponents(children)}
    </div>
  )
}
