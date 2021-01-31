import './CountryInfo.css';
import { React, useEffect } from 'react';

const CountryInfo = props => {
    
    useEffect(() => {
        console.log('[CountryInfo] id=', props.id);
      }, [props.id]);
     
    
    return (
        <div className='CountryInfo'>
            <div className="info_wrapper">
            <p className='country_name'>{props.countryName}</p>
            <img src={props.flag} alt={"flag_"+props.alt}/>
            </div>            
            <p>Capital: <span>{props.capital}</span></p>
            <p>Code: <span>{props.code}</span></p>
            <p>Currencies: <span>{props.currencies}</span></p>
            <p>Languages: <span>{props.languages}</span></p>
            <p>Population: <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Borders with: <span>{props.borders}</span></p>
        </div>
    )
}

export default CountryInfo