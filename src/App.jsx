import React, {useState} from 'react';
import styled from 'styled-components';
import sunny from './assets/sunny.jpg';
// import rainy from './assets/rainy.jpg';
import Forecast from './Forecast';
import Search from './Search';
const api = {
  key: "bcbe0323b1d19ab6ef26617df5116068",
  base: "api.openweathermap.org/data/2.5/"
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${sunny});
  background-size: cover;
  background-position: bottom;
  transition: 0.4 ease-out;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState({});

  const search = (evt) => { 
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&APPID=${api.key}`)
        .then((res) => res.json()) 
        .then((json) => {
          setQuery('');
          setWeather(json);
          console.log(json);
        });
    }
  }

  return (
    <Container>
      <Main>
        <Search search={search} query={query} setQuery={setQuery} />
        <Forecast weather={weather} />
      </Main>
    </Container>
  );
}

export default App;
