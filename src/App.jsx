import React, {useState} from 'react';
import styled from 'styled-components';
import sunny from './assets/sunny.jpg';
import rainy from './assets/rainy.jpg';
import Forecast from './Forecast';
import Search from './Search';

const api = {
  // API key removed for security. Add your own inside the quotes below.
  key: "",
  base: "https://api.openweathermap.org/data/2.5/"
}

const Wrapper = styled.div`
`;

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.rainy ? rainy : sunny });
  background-size: cover;
  background-position: bottom;
  transition: 2.0s ease-in;
  margin: -8px;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2.0s ease-in;
`;

function App() {
  const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState({});

  const search = (evt) => { 
    if (evt.key === "Enter") {
      const url = `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`;
      fetch(url)
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
    {
      (typeof weather.main != 'undefined') ? (    
        <Container rainy={(weather.weather[0].main === "Rain" || weather.weather[0].main === "Snow") ? true : false } >
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
      )
    }
    </Wrapper>
  );
}

export default App;
