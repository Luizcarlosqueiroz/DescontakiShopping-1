import React from 'react';
import { SearchBox } from './style';

const Search = ({ handleSearch, disabled, title, ...rest }) => {
    return (
        <>
            <SearchBox type="text" placeholder={title} onChange={handleSearch} {...rest}></SearchBox>
        </>
    );
}
export default Search;