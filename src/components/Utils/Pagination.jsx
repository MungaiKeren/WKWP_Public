import React, { useState } from "react";
import { useEffect } from "react";

const Pagination = ({
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pages = Math.ceil(totalItems / 12);
  const totalPages =
    Math.ceil(totalItems / 12) < 5 ? Math.ceil(totalItems / 12) : 5;
  let pn = Array.from({ length: totalPages }, (_, index) => index + 1);
  const [pageNumbers, setPageNumbers] = useState(pn);

  useEffect(() => {
    if (currentPage % 5 === 0 && currentPage < pages) {
      const totalPages = pages - currentPage < 5 ? pages - currentPage : 5;
      let pn = Array.from(
        { length: totalPages },
        (_, index) => index + currentPage
      );
      console.log(pn);
      setPageNumbers(pn);
    } else {
      if (!pageNumbers.includes(currentPage)) {
        const totalPages =
          pages - (currentPage - 5) < 5 ? pages - currentPage - 5 : 5;
        let pn = Array.from(
          { length: totalPages },
          (_, index) => index + currentPage - 4
        );
        console.log(pn);
        setPageNumbers(pn);
      }
    }
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div
      className="pagination"
      style={{
        gridTemplateColumns:
          pageNumbers === 5 ? "repeat(9,1fr)" : "repeat(3,1fr)",
      }}
    >
      <i
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        className="fa fa-arrow-left"
      ></i>
      {pageNumbers.map((pageNumber) => (
        <p
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
        >
          {pageNumber}
        </p>
      ))}
      {pageNumbers === 5 && <p>...</p>}
      {pageNumbers === 5 && (
        <p
          onClick={() => {
            handlePageChange(pages);
          }}
        >
          {pages}
        </p>
      )}
      <i
        onClick={() => {
          if (currentPage <= pages) {
            onPageChange(currentPage + 1);
          }
        }}
        className="fa fa-arrow-right"
      ></i>
    </div>
  );
};

export default Pagination;
