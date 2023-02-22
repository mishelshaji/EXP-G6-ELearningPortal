import React from 'react'

export default function SearchBox({setSearch}) {
    return (
        <div className="d-flex justify-content-center align-items-center mt-3 mx-auto" id="search-box">
            <input type="search" className="form-input p-3 is-valid" placeholder="Search For..." onChange={(e) => setSearch(e.target.value)}/>
            <button className="btn btn-primary ms-2">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}