import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetProjectsParams {
  query: string;
  category: string;
  page: string;
}

export const getProjectsPlaylist = async () => {
  try {
    const projects = await readClient.fetch(
      groq`*[_type == "projectPlaylist"]{
        _id,
        title,
        projects[0...6]->{
          title,
          _id,
          githubLink,
          "image": image.asset->url,
          views,
          category
        }
      }`
    );

    return projects;
  } catch (error) {
    console.log(error);
  }
}

export const getProjects = async (params: GetProjectsParams) => {
  const { query, category, page } = params;

  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: 'project',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        githubLink,
        "image": image.asset->url,
        views,
        slug,
        category
      }`
    );

    return projects;
  } catch (error) {
    console.log(error);
  }
}