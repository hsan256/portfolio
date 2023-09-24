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
          category,
          liveLink,
          videoLink
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
        category,
        liveLink,
        videoLink
      }`
    );

    return projects;
  } catch (error) {
    console.log(error);
  }
}

export const getBlogs = async (params: GetProjectsParams) => {
  const { query, category, page } = params;

  try {
    const blogs = await readClient.fetch(
      groq`${buildQuery({
        type: 'blog',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        author,
        excerpt,
        "coverImage": coverImage.asset->url,
        publishedDate,
        platform,
        originalLink,
        slug,
        category,
        views
      }`
    );

    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export const getBlogsPlaylist = async () => {
  try {
    const blogs = await readClient.fetch(
      groq`*[_type == "blogPlaylist"]{
        _id,
        title,
        blogs[0...6]->{
          title,
          _id,
          originalLink,
          "coverImage": coverImage.asset->url,
          publishedDate,
          author,
          excerpt,
          views
        }
      }`
    );

    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export const getAboutMeDetails = async () => {
  try {
    const aboutMeDetails = await readClient.fetch(
      groq`*[_type == "aboutMe"]{
        name,
        tagline,
        "avatar": avatar.asset->url,
        description[]{
          children[]{
            text,
            "link": marks[0].externalLink.href
          }
        },
        experiences[]{
          role,
          company,
          "companyLogo": companyLogo.asset->url,
          timeframe,
          type,
          currentPosition
        },
        skills[]{
          technology,
          iconLink,
          iconWhiteBackground
        },
        strengths[]{
          title,
          description,
          "illustration": illustration.asset->url
        },
        "email": *[_type == "hero"][0].email, // Fetch the hero email
        "socialLinks": *[_type == "hero"][0].socialLinks[] // Fetch the hero social links
      }`
    );

    return aboutMeDetails[0];
  } catch (error) {
    console.error("Error fetching aboutMe details:", error);
  }
}
