import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-out;
  margin-top: 30px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border: none;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  color: white;
  width: 90%;
  max-width: 1000px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    grid-template-rows: 200px 1fr;
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const Placeholder = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
`;

const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Top = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Temp = styled.h1`
  display: block;
  font-size: 2em;
  margin-right: 20px;
`;

const Icon = styled.img`
  display: block;
`;

const Header = styled.div`
  font-size: 1.5em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const DateInfo = styled.h1`
  font-size: 1em;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 0.8em;
    margin-left: 14px;
  }
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Comment = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

const Weather = styled.h2`
  font-size: 1em;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const WeeklyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  border-top: 2px transparent solid;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    border-color: gray;
    padding: 20px 0;
  }
`;

const Weekly = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
  width: 100px;
  @media (max-width: 768px) {
  }
`;

const Day = styled.div`
  margin-top: 10px;
  font-size: 0.8em;
`;

function Forecast ( props ) {
  const { weather } = props;

  return (
    <Container>
      {(typeof weather.region != "undefined") ? (
        <Wrapper>
          <LocationBox>
            <Top>
              <Temp>{weather.currentConditions.temp.f}°</Temp>
              <Icon src={weather.currentConditions.iconURL} alt="" />
            </Top>
            <Header><LocationOnIcon fontSize='large'/>{weather.region}</Header>
            <DateInfo>{weather.currentConditions.dayhour}</DateInfo>
          </LocationBox>
          <WeatherBox>
            <Comment>{weather.currentConditions.comment}</Comment>
            <Weather>Wind: {weather.currentConditions.wind.mile} mph</Weather>
            <Weather>Precipitation: {weather.currentConditions.precip}</Weather>
            <Weather>Humidity: {weather.currentConditions.humidity}</Weather>
          </WeatherBox>
          <WeeklyBox>
            {weather.next_days.map((item, index) => (
              <Weekly key={index}>
                <Day>{item.day}</Day>
                <Day>{item.max_temp.f}°  {item.min_temp.f}°</Day>
                <img src={item.iconURL} alt="" />
              </Weekly>
            ))}
          </WeeklyBox>
        </Wrapper>
      ) : <Placeholder>Type a city name to get live local weather. </Placeholder>}
    </Container>
  );
}

export default Forecast;