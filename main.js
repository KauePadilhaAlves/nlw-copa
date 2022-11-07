function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
      <ul>
       ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = 
createCard(
  "23/11",
  "quarta-feira",
  createGame("belgium", "16:00", "canada")
  ) +
createCard(
  "24/11",
  "quinta-feira",
  createGame("brazil", "16:00", "serbia")
  ) +
createCard(
  "25/11",
  "sexta-feira",
  createGame("england", "16:00", "unitedStates")
  ) +
createCard(
  "26/11",
  "sábado",
  createGame("france", "13:00", "denmark")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("germany", "16:00", "spain")
  ) +
  createCard(
    "28/11",
    "segunda-feira",
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "30/11",
    "quarta-feira",
    createGame("argentina", "16:00", "poland")
  ) +
  createCard(
    "01/12",
    "quinta-feira",
    createGame("belgium", "12:00", "croatia")
  ) +
  createCard(
    "02/12",
    "sexta-feira",
    createGame("brazil", "16:00", "cameroon") 
  ) 

