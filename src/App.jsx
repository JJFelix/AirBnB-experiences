import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Text from './components/Text';
import Card2 from './components/Card2';
import data from './data';

function App(props) {

  const cards = data.map(item =>{
    return (
      <Card2 
        key = {item.id}
        // img = {item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        item = {item}
        // {... item}
      
      />
    )
  })

  return(
    <div className="App">
      <Navbar />
      <div className='card'>
        <Hero />
        <Text />
        <div className='scroll-elements'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default App;
