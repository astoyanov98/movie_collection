import React, { useState } from 'react'
import './style.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [value, setValue] = useState('')

    function handleClick(e) {
        e.preventDefault();
        localStorage.setItem("search", value)
        window.location.href = "/search";
    }

    return (
        <div className="headerContainer">
            <span className="collection">My movie collection</span>
            <div>
                <TextField placeholder="Search by movie title... " className="inputHeader" value={value} onChange={(e) => { setValue(e.target.value) }} />
                <Button className="buttonHeader" endIcon={<SearchIcon />} variant="outlined" onClick={(e) => handleClick(e)}>Search</Button>
            </div>
        </div>
    )
}

export default Header;