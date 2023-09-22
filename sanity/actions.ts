import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetProjectsParams {
  query: string;
  category: string;
  page: string;
}

// Get all the hero details when the page loads
export const getHeroDetails = async () => {
  try {
    const heroDetails = await readClient.fetch(
      groq`*[_type == "hero"]{
        title,
        name,
        words,
        description,
        socialLinks[]{
          type,
          url
        },
        email,
        resumeLink,
        "image": image.asset->url
      }`
    );

    // Considering there's only one hero document, we return the first item
    return heroDetails[0];
  } catch (error) {
    console.error("Error fetching hero details:", error);
  }
}


// Get all the projects when the page loads
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

// Get all the projects when you search or filter
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