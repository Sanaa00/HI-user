/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
function Pagination({
  setPage,
  allData,
  itemsPerPage,
  setItemOffset,
  handlePageClick,
  pageCount,
}) {
  return (
    <ReactPaginate
      className="flex items-center text-lg  justify-center my-5"
      pageClassName="m-2 text-lg"
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      activeClassName="text-blue-500"
      nextLabel={
        <MdArrowForwardIos className="w-7 h-7 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
      }
      previousLabel={
        <MdArrowBackIos className="w-7 h-7 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
      }
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
