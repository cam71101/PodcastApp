import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

// {
//   podcastsPerPage, totalPodcasts, paginate;
// }

const Paginantion = (props) => {
  const pageNumbers = [];

  const { podcastsPerPage, totalPodcasts, paginate, currentPage } = props;

  for (let i = 1; i <= Math.ceil(totalPodcasts / podcastsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Pagination
        count={pageNumbers.length}
        page={currentPage}
        onChange={paginate}
      />
    </div>
  );
};

export default Paginantion;
