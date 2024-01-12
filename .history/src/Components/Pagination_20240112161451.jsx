/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
function Pagination({ setPage, allProduct }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <ReactPaginate
      className="flex items-center justify-center my-5"
      breakLabel="..."
      nextLabel={
        <MdArrowForwardIos className="w-7 h-7 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
      }
      activeClassName="text-green"
      pageClassName="px-2 text-lg text-gray-800 hover:text-gray-500"
      onPageChange={(e) => {
        setPage(e.selected + 1);
        window.scrollTo(0, 0);
      }}
      pageRangeDisplayed={5}
      pageCount={5}
      //  pageCount={allProduct && Math.ceil(allProduct?.allLength / 9)}
      previousLabel={
        <MdArrowBackIos className="w-7 h-7 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
      }
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
