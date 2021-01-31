import './CountryList.css';
import { React } from 'react';

const CountryList = props => {
    return (
        <h5 tabIndex='1' className='CountryList' onClick={props.onClick}>
        {props.countryName}
        </h5>   
        )
    }
    
    export default CountryList