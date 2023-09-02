import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yanna Lin's personal website. Computer Science Student at the University of Florida"
    + 'aspiring software engineer.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">
              <i className="sakura">
                <i className="sakura-h2" />
              </i>
              Hello World!
            </Link>
          </h2>
        </div>
      </header>
      <p> Welcome to my website! You can read more <Link to="/about">about me</Link>, check out my {' '}
        <Link to="/resume">resume</Link>, {' view my '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me. My Github repository for the site is available <a href="https://github.com/linyanna/personal-website" target="_blank" rel="noreferrer noopener"><i>here</i></a>. Special thanks to <a href="https://mldangelo.com/" target="_blank" rel="noreferrer noopener">Michael D&apos;Angelo</a> for his design template.
      </p>
    </article>
  </Main>
);

export default Index;
