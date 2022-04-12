import React, { useState } from 'react';
import styled from 'styled-components';
import sunny from './assets/sunny.jpg';
import rainy from './assets/rainy.jpg';
import Forecast from './Forecast';
import Search from './Search';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';

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

const Loading = styled.div`
  visibility: hidden;
  z-index: 2;
  background-color: black;
  padding: 10px;
  height: 20px;
  color: white;
`

function App() {
  const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState({});
  const [loading, setLoading] = useState({});

  const search = () => {
    if (query !== '') {
      setQuery('')
      setLoading({visibility:'visible'})
      fetch(`https://weatherdbi.herokuapp.com/data/weather/${query}`)
      .then((res) => res.json())
      .then((result) => {
        setLoading({visibility:'hidden'})
        console.log(result)
        setWeather(result)
      })
    }
  }

  return (
    <Wrapper>
      {(weather.currentConditions !== undefined) ? 
        (    
          <Container rainy={(weather.currentConditions.comment === "Mostly sunny" || weather.currentConditions.comment === "Sunny" ) ? false : true } >
            <Main>
              <Search search={search} query={query} setQuery={setQuery} />
              <Loading style={loading}><HourglassBottomRoundedIcon/></Loading>
              <Forecast weather={weather} />
            </Main>
          </Container> 
        ) : (
          <Container>
            <Main>
              <Search search={search} query={query} setQuery={setQuery} />
              <Loading style={loading}><HourglassBottomRoundedIcon/></Loading>
              <Forecast weather={weather} />
            </Main>
          </Container>
        )}
    </Wrapper>
  )
}

export default App;