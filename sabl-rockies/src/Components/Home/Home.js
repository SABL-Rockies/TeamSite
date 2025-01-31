import Logo from '../../Logo.jpeg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ScheduleData from '../../Data/schedule.json';
import LocationsData from '../../Data/locations.json';

export default function Home() {
  const nextGame = ScheduleData.find(game => new Date(game.Date) > new Date() && game.Time);
  const nextGameDirections = LocationsData.find(location => location.Name === nextGame?.Location);

  return (
    <div style={{backgroundColor: "#333366"}}>
      <Container style={{backgroundColor: "white", paddingBottom: "15px"}}>
        <Container style={{textAlign: "center", paddingTop: "15px"}}>
          <Image src={Logo} className="d-inline-block align-top" alt="SABL Rockies Logo" fluid />
        </Container>
        <Container>
          <h1>About</h1>
          <p>
            The Rockies are a passionate group of players who love the game of baseball. They compete in the Sioux Amateur Baseball League, striving for victory and camaraderie on the field. Whether it's a sunny day or under the stadium lights, the Rockies give their all, representing Sioux Falls with pride. Feel free to catch a game and cheer them on! <br />
            Manager: Andrew Halling<br />
            Assistant Manager: Joshua Pompa <br />
            Team Captain: Javier Gomez <br />
            Team Song: <a href="https://www.youtube.com/watch?v=4Fz-mHGXgzs" target="_blank">Rocky Mountain Way</a>
          </p>
        </Container>
        { nextGame && nextGameDirections &&
          <Container>
            <h1>Next Game</h1>
            <p>{`${nextGame.Date} ${nextGame.Time}`} {nextGame.Home ? "vs. " : "@ "}{nextGame.Team}</p>
            <p>{nextGame.Location}, <a href={nextGameDirections.MapsLink} target="_blank" rel="noopener noreferrer">Directions</a></p>
            {nextGame.Stream && <p>Live Stream: <a href={nextGame.Stream} target="_blank" rel="noopener noreferrer">{nextGame.Stream}</a></p>}
          </Container>
        }
        <Container>
            <h1>2024 All-Star Voting</h1>
            <p>2024 All-Star Voting is now open. You can vote for up to 3 players to make the 2024 All-Star game. <a href="#/allstar">Vote Now!</a></p>
          </Container>
      </Container>
    </div>
  );
}
  