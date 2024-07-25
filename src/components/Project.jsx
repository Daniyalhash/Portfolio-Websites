import React from 'react';
import './Project.css';
import Work from '../assets/art1.jpg';
import { MdOutlineArrowOutward } from "react-icons/md";
import Work2 from '../assets/art2.png';

function Project() {
    const articles = [
        {
          id: 1,
          title: 'Full Stack Development',
          description: 'Website redesign and development of a new corporate website that increased conversion rate by 2x',
          image: Work,
          altText: 'work-1'
        },
        {
          id: 2,
          title: 'UI/UX Design',
          description: 'Redesign of the user interface for an e-commerce app leading to a 30% increase in user engagement',
          image: Work2, // Replace with actual image
          altText: 'work-2'
        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'Redesign of the user interface for an e-commerce app leading to a 30% increase in user engagement',
            image: Work, // Replace with actual image
            altText: 'work-2'
          },
        // Add more articles as needed
      ];
  return (
    <div className='project'>
      <div className='project-text'>
        <div className='text-div'>
        <div className='text-link'>
        <h1>Projects</h1>
        <div className='github-button'>
    <span className='github-text'>GitHub</span>
    <a href='https://github.com//daniyalhash' target='_blank' rel='noopener noreferrer'>
        <MdOutlineArrowOutward className='arrow-icon' />
    </a>
</div>
      
      </div>
        </div>
      </div>
      <div className='project-show'>
      {articles.map(article => (
          <article className='article-1' key={article.id}>
            <div className='article-image-div'>
              <img src={article.image} alt={article.altText} />
              <div className='work-2'>
                <h1>{article.title}</h1>
              </div>
            </div>
            <div className='article-div'>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          </article>
        ))}
        
      </div>
    </div>
  );
}

export default Project;
