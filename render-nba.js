export function renderNbaEl(teamObject) {
    const nbaEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const coachEl = document.createElement('p');
    const arenaEl = document.createElement('p');
    const championshipsEl = document.createElement('p');
    const startersDiv = document.createElement('div');
    const lineupEl = document.createElement('h3');


    nbaEl.classList.add('team');
    startersDiv.classList.add('starters');

    nameEl.textContent = teamObject.team.city + ' ' + teamObject.team.name;
    coachEl.textContent = `Coached by ${teamObject.coach}`;
    arenaEl.textContent = `Home games played at ${teamObject.arena}`;
    championshipsEl.textContent = 'Championships: ';

    for (let championships of teamObject.championships) {
        championshipsEl.append(championships + ' ');
    }

    lineupEl.textContent = 'Starting Lineup';
    startersDiv.append(lineupEl);

    for (let player of teamObject.starters) {
        const playerDiv = document.createElement('div');
        const playerNameEl = document.createElement('h4');
        const playerPositionEl = document.createElement('p');
        const playerAgeEl = document.createElement('p');

        playerDiv.classList.add('player');

        playerNameEl.textContent = player.name;
        playerPositionEl.textContent = `Position: ${player.position}`;
        playerAgeEl.textContent = `Age: ${player.age}`;

        playerDiv.append(playerNameEl, playerPositionEl, playerAgeEl);
        startersDiv.append(playerDiv);
        return startersDiv;
    }

    nbaEl.append(nameEl, coachEl, championshipsEl, startersDiv);

    return nbaEl;
}