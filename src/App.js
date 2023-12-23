import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardList from './components/CardList';

function YourComponent() {
  return (
    <div className='mb-20'>
      <Navbar />
      <Banner />
      <CardList />
    </div>
  );
}

export default YourComponent;
