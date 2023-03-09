import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yanna Lin</h2>
        <p><a href="mailto:linyanna@yahoo.com">linyanna@yahoo.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey everyone, I&apos;m Yanna! I do indeed enjoy building things.
        I&apos;m a student at the <a href="https://icme.stanford.edu/">University of Florida</a> and undergraduate researcher at the <a href="https://www.cise.ufl.edu/~eragan/indie.html">INDIE Lab</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yanna Lin <Link to="/">yannalin.dev</Link>.</p>
    </section>
  </section>
);

export default SideBar;
