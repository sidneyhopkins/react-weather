import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 2%;
  color: white;
`;
const Destination = styled.h2`

`;

const DateInfo = styled.h2`

`;

const WeatherBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Temperature = styled.h2`

`;

const Weather = styled.h2`

`;



function Forecast () {


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month}, ${year}`;
  }

    return (
      <Container>
        <Destination>
          Charleston, South Carolina, USA
        </Destination>
        <DateInfo>{dateBuilder(new Date())}</DateInfo>
        <WeatherBox>
          <Temperature>50 degrees</Temperature>
          <Weather>Rainy</Weather>
        </WeatherBox>

      </Container>
  
    );
  }
  
  export default Forecast;
  