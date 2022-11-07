function createMatch(player1, hour, player2) {
  return `
    <li>
      <img
        src="./assets/icon-${player1}.svg"
        alt="Escudo do ${player1}"
        width="50"
        height="50" />
      <strong>${hour}</strong>
      <img
        src="./assets/icon-${player2}.svg"
        alt="Escudo do ${player2}"
        width="50"
        height="50" />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, matchs) {
  delay += 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>

      <ul>
        ${matchs} 
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("24/11", "quinta", createMatch("brazil", "16:00", "serbia")) +

  createCard("28/11", "segunda",
    createMatch("brazil", "13:00", "switzerland") +
    createMatch("portugal", "16:00", "uruguay")
  ) +

  createCard("02/12", "sexta", createMatch("cameroon", "16:00", "brazil"));

