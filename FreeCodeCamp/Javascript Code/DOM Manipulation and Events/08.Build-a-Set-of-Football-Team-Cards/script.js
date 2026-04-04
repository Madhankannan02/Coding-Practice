const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
  ],
};

// Destructure values from the object
const { team, year, headCoach, players } = footballTeam;

// Display top-level team info
teamElement.textContent = team;
yearElement.textContent = year;
headCoachElement.textContent = headCoach;

// Function to render cards to the UI
const displayPlayers = (personList = players) => {
  playerCards.innerHTML = personList
    .map(({ name, position, isCaptain }) => `
      <div class="player-card">
        <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
        <p>Position: ${position}</p>
      </div>
    `)
    .join("");
};

// Event listener for filtering
playersDropdown.addEventListener("change", (e) => {
  playerCards.innerHTML = ""; // Clear existing cards

  if (e.target.value === "all") {
    displayPlayers(players);
  } else {
    const filteredPlayers = players.filter(
      (player) => player.position === e.target.value
    );
    displayPlayers(filteredPlayers);
  }
});

// Initial render
displayPlayers();