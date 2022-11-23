//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

 function createManager(managerName,managerAge,currentTeam,trophiesWon){ 
 return[
 managerName,
managerAge,
currentTeam,
trophiesWon

 
 ]

 }

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length==0){
    return null
  }
  return{
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(debut){
  let arr =[];
  players.forEach(function(player){
    if(player.debut===debut){
      arr.push(player)
    }
  })
  return arr;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let arr=[]
  players.forEach(function(player){
    if(player.position===position){
      arr.push(player)
    }
  })
  return arr;
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let arr=[]
  players.forEach(function(player){
    let found= false;
    player.awards.forEach(function(award)
    {
      if(award.name===awardName){
        found=true
      }
    })
    if(found){
      arr.push(player)
    }
  })
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, howmanytime){
  let arr =[];
  players.forEach(function(player){
  let count = 0
  player.awards.forEach(function(award){
    if(award.name===awardName){
      count++;
    }
  }
  
  )
  if(count===howmanytime){
    arr.push(player)
  }
  }
  )
  return arr;

}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardname, country){
  let arr=[];
  players.forEach(function(player){
    let found=false
    if(player.country===country){
      player.awards.forEach(function(award){
        if(award===awardname){
          found=true

        }
      }
      )
    }
    if(found){
      arr.push(player)
    }
  })
  return arr
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(howmanytime,team, age){
  let arr=[]
  players.forEach(function(player){
    let count=0
    player.awards.forEach(function(){
      count++

    })
    if(count>=howmanytime && player.team===team && player.age<=age){
      arr.push(player)
    }
  })
  return arr;
}



//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
