import React, { useState } from 'react';
import { Layout } from 'antd';
import {
    FacebookFilled, 
    YoutubeFilled, 
    TwitterCircleFilled, 
    InstagramFilled
} from '@ant-design/icons';
import MovieList from '../movies/MovieList';
import './appLayout.css';




const { Footer } = Layout;


const AppLayout = (props) => {

    const [searchText, setSearchText] = useState("yatra");

    const onSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand me-5 fs-2" href="#home">Moviesmandu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-self-center">
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#romance">Romance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#thirller">Thirller</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#comedy">Comedy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#action">Action</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#drama">Drama</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#horror">Horror</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Enter Movie Name" aria-label="Search" value={searchText} onChange={onSearch}/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="site-layout-content">
                <MovieList searchText={searchText}/>
            </div>
            <Footer style={{ textAlign: 'center' }}>
                <div className="link">
                    <FacebookFilled  className="link-item"/>
                    <InstagramFilled  className="link-item"/>
                    <TwitterCircleFilled  className="link-item"/>
                    <YoutubeFilled  className="link-item"/>
                </div>
                Copyright &copy; 2022 Moviesmandu Inc | All Rights Reserved.
            </Footer>
        </>
    );
};

export default AppLayout;

