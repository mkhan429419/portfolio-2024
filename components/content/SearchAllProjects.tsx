'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'GreenThread',
    des: 'A platform designed to promote sustainable fashion, offering a marketplace for thrift stores and small businesses.',
    category: 'react - express - node - mongoDB - redux - javascript',
    repo: 'https://github.com/mkhan429419/GreenThread',
    link: 'https://main--green-thread.netlify.app/'
  },
  {
    id: '2',
    title: 'DataHub',
    des: 'An intuitive platform that provides file management services, with features like secure registration, personal storage, and an admin dashboard.',
    category:
      'javascript- react - tailwind - typeScript - node - mongoDB - aws',
    repo: 'https://github.com/mkhan429419/DataHub',
    link: 'https://react-project-six-nu.vercel.app/'
  },
  {
    id: '3',
    title: 'Searchify',
    des: 'An elementary search engine, tailored to harness the extensive NELA-GT 2022 dataset.',
    category: 'python - django',
    repo: 'https://github.com/tehreemahmad149/DSAProject',
    link: 'https://www.linkedin.com/posts/umair-gosal-227b54201_hi-linkedin-fam-in-collaboration-with-activity-7166074799440576512-SqmG?utm_source=share&utm_medium=member_android'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
