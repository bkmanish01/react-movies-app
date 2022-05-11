import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import {Row, Pagination, message, Spin} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
    getMovies,
    getMoviesSuccess,
    getMoviesFailure
} from "./../slice/MovieSlice";
import styled from 'styled-components';



const baseUrl = `https://www.omdbapi.com/?`;


// styled-component
const StyledDiv = styled.div`
    background-color: #FF7E00; 
    padding-top: 20px; 
    text-align: center; 
    justify-content: center;
`;

const StyledRow = styled(Row)`
    background-color:#1B1B1B; 
    margin-top:20px; 
    padding:"0 100px;
`;



const MovieList = (props) => {

    const [totalPage, setTotalPage] = useState();
     
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();

    const { movies: newMovies, loading: newLoading } = useSelector(state => state.movies);
    const movies = newMovies?.Search || []
   

    const fetchMoviesList = (page, searchValue) => {
        dispatch(getMovies())
        axios
            .get(`${baseUrl}s=${searchValue}&apikey=805e9a51&page=${page}`)
            .then((response) => {
                dispatch(getMoviesSuccess(response?.data))
                setTotalPage(response?.data?.totalResults);
            })
            .catch((error) => {
                dispatch(getMoviesFailure());
                message.error(error);
            });
    };

    const handlePageChange = (value) => {
        setCurrentPage(value);
    }

    useEffect(() => {
        fetchMoviesList(currentPage, props.searchText);
    }, [currentPage, props.searchText]);


    return (
        <StyledDiv className="movie-list">
            <Spin spinning={newLoading} delay={200}>
                <Pagination showSizeChanger={false} defaultCurrent={currentPage} total={totalPage} onChange={handlePageChange}/>
                <StyledRow >
                    {movies && 
                        movies?.length && 
                            movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} /> )}
                </StyledRow>
            </Spin>
        </StyledDiv>
    );
};

export default MovieList;

