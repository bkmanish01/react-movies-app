import React, { useState } from 'react';
import { Card, message, Tag,  Modal, Rate } from 'antd';
import {LikeOutlined} from '@ant-design/icons'
import axios from 'axios';
import styled from "styled-components";


const omdb_api = ` http://www.omdbapi.com/?`;

const { Meta } = Card;

// styled-components
const MovieListDiv = styled.div`
    display: flex;
   
`;

const StyledCard = styled(Card)`
    width: 285px;
    margin: 30px;
`;

const StyledModal = styled(Modal)`
    .modal-content {
        display: flex;
        flex-direction: row;
     
        .movie-desc {
            margin-left: 10px;

            h2 {
                color: white;
            }
        }
    }
`;




const MovieCard = (props) => {

    const {movie} = props;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [movieDetail, setMovieDetail] = useState();

    const showModal = (id) => {
        fetchMovieDetailById(id).then(() => {
            setIsModalVisible(true);
        })
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const fetchMovieDetailById = (id) => {
        return axios
        .get(`${omdb_api}i=${id}&apikey=805e9a51`)
        .then((res) => {
            setMovieDetail(res?.data)
            return res;
        })
        .catch((error) => {
            return message.error(error);
        });
    }

    const description = (
        <>
            <Tag color="black">{movie?.Year}</Tag>
            <Tag color="red">{movie?.Type}</Tag>
        </>
    );


    return (
        <>
        <StyledModal title="Movie Description" visible={isModalVisible} onOk={handleOk} centered={true} closable={false}
            width={1000} okText="Close" cancelButtonProps={{ style: { display: 'none' } }}
            bodyStyle={{backgroundColor:"#0a0806", color:"white"}}>

            <div className="modal-content">
                <img alt="example" src={movie?.Poster} />

                <div className="movie-desc">
                    <h2>{movieDetail?.Title}</h2>
                    <p><b>Genre :</b> {movieDetail?.Genre}</p>
                    <p><b>Ratings :</b> <Rate allowHalf disabled  defaultValue={movieDetail?.imdbRating/2} /></p>
                    <p><b>Released :</b> {movieDetail?.Released}</p>
                    <p><b>Director :</b> {movieDetail?.Director}</p>
                    <p><b>Writer :</b> {movieDetail?.Writer}</p>
                    <p><b>Actors :</b> {movieDetail?.Actors}</p>
                    <p><b>Description :</b> {movieDetail?.Plot}</p>
                </div>
                <div>
                    <p><LikeOutlined /> {movieDetail?.imdbVotes}</p>
                </div>
            </div>

        </StyledModal>
        <MovieListDiv className="movie-list">
            <StyledCard
                onClick={() => showModal(movie?.imdbID)}
                hoverable
                cover={<img alt="example" src={movie?.Poster} />}
            >
                <Meta title={movie?.Title} description={description} />
            </StyledCard>
        </MovieListDiv>
        </>
    );
};

export default MovieCard;
