
function getPropertyValues(objectsArray, propertyName) {
    const result = [];
    for (let i = 0; i < objectsArray.length; i++) {
        if (propertyName in objectsArray[i]) {
      result.push(objectsArray[i][propertyName]);
    }
}
return result;
}

const footballPlayers = [
    { name: "Player 1", position: "Forward", team: "Team A" },
    { namex: "Player 2", position: "Midfielder", team: "Team B" },
    { name: "Player 3", position: "Defender", team: "Team C" },
    { name: "Player 4", position: "Goalkeeper", team: "Team D" },
    { name: "Player 5", position: "Forward", team: "Team E" },
    { name: "Player 6", position: "Midfielder", team: "Team F" },
    { name: "Player 7", position: "Defender", team: "Team G" },
    { name: "Player 8", position: "Goalkeeper", team: "Team H" },
    { name: "Player 9", position: "Forward", team: "Team I" },
    { name: "Player 10", position: "Midfielder", team: "Team J" }
  ];
  
const names = getPropertyValues(footballPlayers, 'name');
console.log(names);

const positions = getPropertyValues(footballPlayers, 'position');
console.log(positions);

const teams = getPropertyValues(footballPlayers, 'team');
console.log(teams);

