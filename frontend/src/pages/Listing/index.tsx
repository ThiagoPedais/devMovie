import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movieCard';

import Pagination from '../../components/pagination';
import { MoviePage } from '../../types/movie';
import { BASE_URL } from '../../utils/requests';

export default function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies`)
      .then(res => {
        const data = res.data as MoviePage;
        setPageNumber(data.number);
        console.log(res.data);
      });
  }, []);





  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>

    </>
  )
}
