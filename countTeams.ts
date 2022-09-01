function countTeams(
  skills: number[],
  minPlayers: number,
  minLevel: number,
  maxLevel: number
): number {
  const teams = [];
  const players: any = [];
  let teamCount = 0;

  const skillsFilter: any = skills.filter(
    (skill) => skill >= minLevel && skill <= maxLevel
  );

  const skillsSubs = skillsFilter.reduce(
    (players: any, levels: any) =>
      players.concat(players.map((set: any) => [levels, ...set])),
    [[]]
  );
  skillsSubs.forEach((player: any) => {
    if (player.length >= minPlayers) {
      teams.push(player);
      teamCount++;
    }
  });
  return teamCount;
}

console.log(countTeams([4, 8, 5, 6], 1, 5, 7));
