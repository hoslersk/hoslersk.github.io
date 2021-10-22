import axios from 'axios';
import useSwr from 'swr';
import { find, isArray as _isArray, map, reduce } from 'lodash';

const {
  REACT_APP_CONTENT_API_BASE_URL,
  REACT_APP_TOKORO,
  REACT_APP_RYOKEN,
} = process.env;


function kiss(toad) {
	return Buffer.from(toad, 'base64').toString();
}

const baseUrl = kiss(REACT_APP_CONTENT_API_BASE_URL);
const tokoro = kiss(REACT_APP_TOKORO);
const ryoken = kiss(REACT_APP_RYOKEN);

const CONTENT_URL = `${baseUrl}${tokoro}/entries`


function findLinkedEntry({ data, linkType, id }) {
	return find(data?.includes?.[linkType], entry => entry?.sys?.id === id)?.fields || {};
}


function transformData(data) {
	return map(data?.items, item => {
		return reduce(item.fields, (result, value, key) => {
			const linkType = value?.sys?.linkType;
			const isArray = _isArray(value);

			let _value = value;

			if (linkType) {
				const linkedEntry = findLinkedEntry({ data, linkType, id: value?.sys?.id });
				_value = linkedEntry;
			}

			if (isArray) {
				_value = map(value, item => {
					if (item?.sys?.linkType) {
						return findLinkedEntry({ data, linkType: item?.sys?.linkType, id: item?.sys?.id });
					}
					return item;
				});
			}

			return {
				...result,
				[key]: _value,
			};
		}, {});
	});
}


export async function getContent(content_type, params = {}) {
  const content = await axios({
    method: 'get',
    url: CONTENT_URL,
		params: {
			access_token: ryoken,
			content_type,
			select: 'fields',
			...params,
		},
  });

  return content?.data;
}


export function useProjects() {
  const { data, error } = useSwr('project', getContent);

  const projects = transformData(data);

  return {
    projects,
    isLoading: !error && !data,
    hasError: !!error,
  }
}


export function getFragment(slug) {
	return getContent('fragment', { 'fields.slug': slug });
}


export function useFragment(slug) {
  const { data, error } = useSwr(slug, getFragment);

	const fragment = transformData(data)?.[0];

  return {
    fragment,
    isLoading: !error && !data,
    hasError: !!error,
  }
}
