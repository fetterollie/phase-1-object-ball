const gameObject = {
    "home": {
        "teamName": "Brooklyn Nets",
        "colors": [
            "Black",
            "White",
        ],
        "players": {
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 1,
            },
            "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                'rebounds': 12,
                "assists": 6,
                'steals': 3,
                'blocks': 8,
                'slamDunks': 5,
            },
            "Jason Terry": {
                'number': 31,
                'shoe': 15,
                'points': 19,
                'rebounds': 2,
                'assists': 2,
                'steals': 4,
                'blocks': 11,
                'slamDunks': 1,
            }
        }
    },
    "away": {
        'teamName': "Charlotte Hornets",
        'colors': [
            "Turquiose",
            "Purple",
        ],
        'players': {
            "Jeff Adrien": {
                'number': 4,
                'shoe': 18,
                'points': 10,
                'rebounds': 1,
                'assists': 1,
                'steals': 2,
                'blocks': 7,
                'slamDunks': 2,
            },
            "Bismak Biyombo": {
                'number': 0,
                'shoe': 16,
                'points': 12,
                'rebounds': 4,
                'assists': 7,
                'steals': 7,
                'blocks': 15,
                'slamDunks': 10,
            },
            "DeSagna Diop": {
                'number': 2,
                'shoe': 14,
                'points': 24,
                'rebounds': 12,
                'assists': 12,
                'steals': 4,
                'blocks': 5,
                'slamDunks': 5,
            },
            "Ben Gordon": {
                'number': 8,
                'shoe': 15,
                'points': 33,
                'rebounds': 3,
                'assists': 2,
                'steals': 1,
                'blocks': 1,
                'slamDunks': 0,
            },
            "Brendan Haywood": {
                'number': 33,
                'shoe': 15,
                'points': 6,
                'rebounds': 12,
                'assists': 12,
                'steals': 22,
                'blocks': 5,
                'slamDunks': 12,
            },
        }
    },
}

// console.log('gameObject: ', gameObject);

// function to return number of points that player scored
function numPointsScored(playerName) {
    let game = gameObject;
    for (let gameKey in game) {
      // console.log("gameKey:", gameKey)
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        // console.log("teamKey:", teamKey)
        if (teamKey === 'players') {
          // console.log("YOOOOO:", game[gameKey][teamKey][playerName]["points"])
          let numPoints = game[gameKey][teamKey][playerName]["points"]
          // console.log(numPoints)
          return numPoints;
        }
      }
    } 
  };

// numPointsScored('Alan Anderson');

// function that returns the player's shoe size
function shoeSize(playerName) {
    let game = gameObject;
    for (let gameKey in game) {
      // console.log("gameKey:", gameKey)
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        // console.log("teamKey:", teamKey)
        if (teamKey === 'players') {
          // console.log("YOOOOO:", game[gameKey][teamKey][playerName]["shoeSize"])
          let size = game[gameKey][teamKey][playerName]["shoeSize"]
          // console.log(size)
          return size;
        }
      }
    } 
  };

// function that returns team colors given teamName
function teamColors(name) {
    let game = gameObject;
    for (gameKey in game) {
        // console.log("gameKey:", gameKey)
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            // console.log("teamKey:", teamKey)
          let nameString = teamObj[teamKey]
          if (game[gameKey][teamKey] === name) {
            // console.log(game[gameKey]["colors"])
            let colors = game[gameKey]["colors"]
            return colors
          }
        }
    }
  }

teamColors('Brooklyn Nets')

// a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames(gameObject) {
    let game = gameObject;
  
    let teams = []
    
    for (gameKey in game) {
      // console.log("gameKey:", gameKey)
      // console.log(game[gameKey]["teamName"])
      teams.push(game[gameKey]["teamName"])
    }
    // console.log(teams)
    return teams
  }
  
  teamNames(gameObject)

  // a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team
  function playerNumbers(teamName) {
    let game = gameObject;
    let jerseyNumbers = []
    for (gameKey in game) {
      // console.log("gameKey:", gameKey);
      let teamObj = game[gameKey];
      for (teamKey in teamObj) {
        // console.log("teamKey:", teamKey)
        let name = teamObj[teamKey];
        if (name === teamName) {
          // console.log('getting somewhere')
          let players = game[gameKey]['players']
          for (playerKey in players) {
            // console.log("playerKey:", playerKey)
            let playerObj = players[playerKey]
            for (playerAttr in playerObj) {
              // console.log(playerAttr)
              if (playerAttr === 'number') {
                let jerseyNum = playerObj[playerAttr]
                // console.log(jerseyNum)
                jerseyNumbers.push(jerseyNum)
              }
            }
          }
        }
      }
    }
    // console.log(jerseyNumbers)
    return jerseyNumbers
  };
  

playerNumbers("Brooklyn Nets")

// Build a function, playerStats, that takes in an argument of a player's name 
// and returns an object of that player's stats.

function playerStats(playerName) {
  let game = gameObject
  let playerStatistics = {}
  for (gameKey in game) {
    // console.log("gameKey:", gameKey);
    let teamObj = game[gameKey]
    for (teamKey in teamObj) {
      // console.log("teamKey:", teamKey);
    }
    let players = teamObj[teamKey]
    // console.log("players:", players)
    for (player in players) {
      // console.log(player)
      let playerStats = players[player]
      if (playerName === player) {
        for (stat in playerStats) {
          // console.log("stat:", stat)
          let value = playerStats[stat]
          // console.log("value:", value)
          playerStatistics[stat] = value;
          // person['height'] = 5.4;
        }
      }
    }
  }
  console.log(playerStatistics)
};

playerStats("Alan Anderson")