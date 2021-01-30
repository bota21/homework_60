import './Main.css';
import CountryList from '../components/CountryList/CountryList';
import CountryInfo from '../components/CountryInfo/CountryInfo';

const Main = () => {
  return (
    <div className="main">
<CountryList />
<CountryInfo />
    </div>
  );
}

export default Main;
