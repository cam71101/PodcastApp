import React from 'react';

// {
//   podcastsPerPage, totalPodcasts, paginate;
// }

const Paginantion = (props) => {
  const pageNumbers = [];

  const { podcastsPerPage, totalPodcasts, paginate } = props;

  for (let i = 1; i <= Math.ceil(totalPodcasts / podcastsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(podcastsPerPage);
  console.log(totalPodcasts);

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              // href={props.location.pathname + '/' + number}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginantion;
