import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link} target="_blank" rel="noreferrer noopener">{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className="post-content">
        <div className="image">
          {
            data.image ? (
              <a href={data.link} target="_blank" rel="noreferrer noopener" className="image">
                <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} className="pixelImage" />
              </a>
            ) : ''
          }
        </div>
        <div className="description">
          <p>{data.desc}</p>
          <p>Skills: <i>{data.skills}</i></p>
        </div>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.string,
  }).isRequired,
};

export default Cell;
