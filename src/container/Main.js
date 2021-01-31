import './Main.css';
import CountryList from '../components/CountryList/CountryList';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const MainURL = '/rest/v2';
  const allURL = '/all';
  const alphaURL = '/alpha/';
  const [countries, setCountries] =useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showInfo, setShowInfo] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      const sendRequest = await axios.get(MainURL + allURL)
      setCountries(sendRequest.data);           
    }
    fetchData().catch(console.error);
  }, [])
  
  let addCountryLists = countries.map(item => {        
    return <CountryList key={item.alpha3Code} 
    countryName={item.name}
    onClick={() => setSelectedCountry(item.alpha3Code)}
    />      
  })
  useEffect(() => {
    const fetchData = async() => {
      if(selectedCountry !== null) {
        const sendRequest = await axios.get(MainURL + alphaURL + selectedCountry);
        setShowInfo(sendRequest.data)
      }      
    }
    fetchData().catch(console.error)
  }, [selectedCountry])
  
  return (
    <div className="main">
    <div className="countryList_wrapper">
    {addCountryLists}
    </div>
    
    <CountryInfo id={selectedCountry}
    countryName={showInfo.name}
    flag={showInfo.flag} alt={showInfo.alpha3Code}
    capital={showInfo.capital}
    code={showInfo.alpha3Code}
    // currencies={showInfo.currencies}
    // languages={showInfo.languages}
    population={showInfo.population}
    region={showInfo.region}
    borders={showInfo.borders}
    />
    </div>
    );
  }
  
  export default Main;
  