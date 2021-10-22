import React from 'react';

import RichText from './rich-text';
import { useFragment } from '../lib/api';

export default function Fragment({ slug }) {
	const { fragment, isLoading, hasError } = useFragment(slug);
  if (!fragment && isLoading) return '...';
  if (hasError) return 'An error occurred. Please try again later.'
  return (
		<RichText>{fragment?.body}</RichText>
  );
}
