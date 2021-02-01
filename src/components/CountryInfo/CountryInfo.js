import './CountryInfo.css';
import { React, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

const CountryInfo = props => {

    useEffect(() => {
        console.log('[CountryInfo] id=', props.id);
      }, [props.id]);

    let addBorders = props.borders.map(country => {
        return <li key={uuidv4()}>{country}</li>
    })
    return (
        <div className='CountryInfo'>
            <div className="info_wrapper">
            <p className='country_name'>{props.countryName}</p>
            <img src={props.flag} alt={"flag_"+props.alt}/>
            </div>            
            <p>Capital: <span>{props.capital}</span></p>
            <p>Code: <span>{props.code}</span></p>
            <p>Population: <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <ul>Borders with: 
            {addBorders}
            </ul>
        </div>
    )
}

export default CountryInfo