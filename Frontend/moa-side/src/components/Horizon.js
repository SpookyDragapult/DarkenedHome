import React from 'react';
import logo from 'D:/MOA-new/Frontend/moa-side/src/logo.svg';


export const Horizon = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top dark15" style={{paddingBottom: "20px", paddingTop: "20px"}}>
    <div className="container-fluid d-flex justify-content-between">
        <a className='navbar-brand' href="#"></a>
        <div className='d-flex align-item-center'>
        <form className="d-flex w-10">
            <input className="form-control me-2" type="search" placeholder="Search for movies" aria-label="Search" />
            <button className="btn custom-button me-2" type="submit">Search</button>
            <div>
                <a className='nav-link' href="profile">
                    <i className='bi bi-person-circle' style={{ fontSize: '2rem', color: '#a91d3a' }}></i>
                </a>
            </div>
        </form>
        </div>
    </div>
</nav>
  )
}

export default Horizon;