import axios from 'axios';
import useSwr from 'swr';
import { get, map } from 'lodash';

const {
  REACT_APP_CONTENT_API_BASE_URL,
  REACT_APP_CONTENT_API_ID,
  REACT_APP_CONTENT_API_TOKEN,
} = process.env;

const CONTENT_URL = `${REACT_APP_CONTENT_API_BASE_URL}${REACT_APP_CONTENT_API_ID}`;


export async function getContent(query) {
  const content = await axios({
    method: 'post',
    url: CONTENT_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${REACT_APP_CONTENT_API_TOKEN}`,
    },
    data: {
      query,
    },
  });

  return content?.data;
}


export const projectsQuery = `
{
  projectCollection {
    items {
      name
      description {
        json
      }
      url {
        label
        url
      }
      repoUrlsCollection {
        items {
          label
          url
        }
      }
    }
  }
}
`;


export function getProjects() {
  return getContent({ query: projectsQuery });
}


export function transformProjectsData(data) {
  const projects = get(data, 'data.projectCollection.items', []);

  const transformedProjects = map(projects, project => ({
    links: map(get(project, 'repoUrlsCollection.items', []), ({ label, url }) => ({
      label,
      to: url,
    })),
    ...project,
  }));

  return transformedProjects;
}


export function useProjects() {
  const { data, error } = useSwr(projectsQuery, getContent);

  const projects = transformProjectsData(data);

  return {
    projects,
    isLoading: !error && !data,
    hasError: !!error,
  }
}
