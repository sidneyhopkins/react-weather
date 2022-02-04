import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 2%;
  color: white;
  transition: all 0.5s ease-out;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Destination = styled.h2`
  font-size: 2em;
`;

const DateInfo = styled.h2`
  font-size: 1em;
`;

const WeatherBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Temperature = styled.h2`
  font-size: 2em;
`;

const Weather = styled.h2`
  font-size: 2em;
`;

const TempMax = styled.div`
  font-size: 1em;
  margin-right: 12px;
`;

const TempMin = styled.div`
  font-size: 1em;
  margin-right: 12px;
`;

const Humidity = styled.div`
  font-size: 1em;
`;

function Forecast ( props ) {
const { weather } = props;

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${month} ${date}, ${year}`;
  }

    return (
      <Container>
        {(typeof weather.main != "undefined") ? (
          <Wrapper>

            <Destination>{weather.name}, {weather.sys.country}</Destination>
            <DateInfo>{dateBuilder(new Date())}</DateInfo>

            <WeatherBox>
              <Temperature>{Math.round(weather.main.temp)} °F</Temperature>
              <Weather>{weather.weather[0].main}</Weather>
            </WeatherBox>

            <WeatherBox>
              <TempMin>Min {Math.round(weather.main.temp_min)}</TempMin>
              <TempMax>Max {Math.round(weather.main.temp_max)}</TempMax>
              <Humidity>Humidity {Math.round(weather.main.humidity)}</Humidity>
            </WeatherBox>

          </Wrapper>

        ) : <Wrapper>Type in a city to get live local weather.</Wrapper>}
      </Container>
  
    );
  }
  
  export default Forecast;
  