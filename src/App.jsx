import React, { useState } from 'react';
import styled from 'styled-components';
import sunny from './assets/sunny.jpg';
import rainy from './assets/rainy.jpg';
import Forecast from './Forecast';
import Search from './Search';

const Wrapper = styled.div`
  margin: 0 auto;
  font-family: 'Spartan';
  font-weight: 400;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-image: url(${props => props.rainy ? rainy : sunny });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
  background-clip: border-box;
  margin: -8px;
  transition: background-image ease 1s;
`;

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
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
      })
    }
  }

  return (
    <Wrapper>
      {(weather.currentConditions !== undefined) ? (    
        <Container rainy={(weather.currentConditions.comment === "Mostly sunny" || weather.currentConditions.comment === "Sunny" ) ? false : true } >
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