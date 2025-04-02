import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../atoms/searchBar/searchBar';
import { Icons } from '../../atoms/icons/icons';
import './_navigation.scss';

function Navigation() {
    return (
        <nav>
            <Link to="/homepage">Home</Link>
            <Link to="/music">Music</Link>
            <Link to="/tattoos">Tattoos</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <SearchBar />
            <Icons.User />
            {/* <DashboardNavLink />
        <ProfilNavLink /> */}
        </nav>
    )
}

export default Navigation
