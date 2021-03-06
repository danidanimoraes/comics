import React, { useState } from "react";
import "./comics.scss";
import Pagination from './pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";

const Comics = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [comicsPerPage] = useState(10);
    const indexOfLastComic = currentPage * comicsPerPage;
    const indexOfFirstComic = indexOfLastComic - comicsPerPage;
    const currentComics = props.filteredComics.slice(indexOfFirstComic, indexOfLastComic);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const executeSearch = (event) => {
        setCurrentPage(1);
        props.onSearchCharacter(event);
    }

    return (
        <div>
            <div data-testid="search" className="search">
                <button type="button" title="Search comic by character" className="btn btn-danger" onClick={props.toggleClass}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>

                <input
                    className={`form-control ${props.inputHidden ? "hide-el" : "show-el"}`}
                    type="text"
                    value={props.inputValue}
                    onChange={executeSearch}
                    placeholder="Search comic by character name"
                />
            </div>

            <div className="grid" data-testid="grid">
                {currentComics.map((comic, i) => (
                    <div className="grid-item" key={`comic-${i}`}>
                        <div>
                            <img key="{i}" alt={comic.title} src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} className="img-center" title={comic.title} />
                            <div className="title">{comic.title}</div>
                            <div className="creators">
                                Creators:{" "}
                                {comic.creators.items.length === 0 ? "Not Available"
                                    : comic.creators.items.map((creator, i) => {
                                        return i === comic.creators.items.length - 1 ? creator.name : creator.name + ", ";
                                    })}
                            </div>
                        </div>

                        <div className="bottom">
                            <div className="little-marvel">
                                <a href={comic.urls.length === 0 ? 'http://marvel.com' : 
                                    comic.urls.find((url) => url.type === 'detail') ? comic.urls.find((url) => url.type === 'detail').url : comic.urls[0].url}
                                    title="Open details on Marvel Website" target="_blank">M</a>
                            </div>
                            <div className="details">
                                <Router>
                                    <a href={`/comic/${comic.id}`} target="_blank" rel="noopener noreferrer" title="Open Comic Details">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </a>
                                </Router>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination itemsPerPage={comicsPerPage} totalItems={props.filteredComics.length} paginate={paginate} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default Comics;
