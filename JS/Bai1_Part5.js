const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Muller',
    'Gnarby',
    'Lewandowski',
];

const { team1, draw, team2 } = game.odds;

const printGoals = (...players) => {
    console.log(`${players.length} goals were scored:`);
    players.forEach(player => console.log(player));
};

printGoals('Alaba', 'Davies', 'Kimmich', 'Goretzka', );

printGoals(...game.scored);

console.log(
    game.odds.team1 < game.odds.team2 && game.odds.team1 < game.odds.draw ?
    `${game.team1} is more likely to win` :
    game.odds.team2 < game.odds.team1 && game.odds.team2 < game.odds.draw ?
    `${game.team2} is more likely to win` :
    `It's a draw`
);