import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movieCard';

import Pagination from '../../components/pagination';
import { MoviePage } from '../../types/movie';
import { BASE_URL } from '../../utils/requests';

export default function Listing() {

  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
      .then(res => {
        const data = res.data as MoviePage;
        setPage(data);

      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber : number) => {
    setPageNumber(newPageNumber);
  };





  return (
    <>
      <Pagination page={page} onChange= {handlePageChange}/>
      <div className="container">
        <div className="row">
          {
            page.content.map(movie => {
              return (
                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard movie={movie} />
                </div>
              );
            })
          }
        </div>
      </div>

    </>
  )
}
