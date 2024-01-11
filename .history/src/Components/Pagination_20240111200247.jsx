/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function Pagination({ setPage, allProduct }) {
  return (
    <ReactPaginate
      className="flex items-center justify-center "
      breakLabel="..."
      nextLabel={
        <IoIosArrowDropright className="w-8 h-8 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
      }
      activeClassName="text-green"
      pageClassName="px-2 text-lg text-gray-800 hover:text-gray-500"
      onPageChange={(e) => {
        setPage(e.selected + 1);
        window.scrollTo(0, 0);
      }}
      pageRangeDisplayed={5}
      pageCount={allProduct && Math.ceil(allProduct?.allLength / 9)}
      previousLabel={
        <IoIosArrowDropleft className="w-8 h-8 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
      }
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
