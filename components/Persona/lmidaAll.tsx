"use client";
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';

const Lmida = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      {page === 1 && (
        <section
          id="Restaurant"
          className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-left"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    L&apos;Mida San Francisco
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === 2 && (
        <section
          id="Restaurant"
          className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-left"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    L&apos;Mida San Francisco22222
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === 3 && (
        <section
          id="Restaurant"
          className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-left"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    L&apos;Mida San Francisco333
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="-mx-3 flex flex-wrap items-center justify-center mb-8">
        <Pagination
          count={3}
          variant="outlined"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Lmida;
