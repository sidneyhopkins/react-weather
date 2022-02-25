import React, {useState} from 'react';
import styled from 'styled-components';
import sunny from './assets/sunny.jpg';
import rainy from './assets/rainy.jpg';
import Forecast from './Forecast';
import Search from './Search';


const Wrapper = styled.div`
  font-family: 'Spartan';
  font-weight: 400;
`;

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.rainy ? rainy : sunny });
  background-size: cover;
  background-position: bottom;
  margin: -8px;

  /* @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
    

  } */
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function App() {
  const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState({});

  const search = (evt) => { 
    if (evt.key === "Enter") {
      fetch(`https://weatherdbi.herokuapp.com/data/weather/${query}`)
      .then((res) => res.json())
      .then((result) => {
        setQuery('');
        setWeather(result);
        console.log(result);
      });
    }
  }

  return (
    <Wrapper>
      {(typeof weather.main != 'undefined') ? (    
        <Container rainy={(weather.currentConditions.comment === "Light snow" ) ? true : false } >
          <Main>
            <Search search={search} query={query} setQuery={setQuery} />
            <Forecast weather={weather} />
          </Main>
        </Container> 
      ) : (
        <Container>
          <Main>
            <Search search={search} query={query} setQuery={setQuery} />
            <Forecast weather={weather} />
          </Main>
        </Container>
      )}
    </Wrapper>
  )
}

export default App;