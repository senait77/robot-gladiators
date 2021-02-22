var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//console.log(enemyNames);
//co//nsole.log(enemyNames.length);
var fight = function(enemyName) {
  
  // "repeat and execute as long as the enemy-robot is alive "
  while(enemyHealth > 0 && playerHealth > 0 ) {
 // ask the player if they want to fight or skip
 var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

 // if player choose to fight , then fight
 if (promptFight === "fight" || promptFight === "FIGHT") {
   // remove enemy's health by subtracting the amount set in the playerAttack variable
   enemyHealth = enemyHealth - playerAttack;
   console.log(
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
   );
 
   // check enemy's health
   if (enemyHealth <= 0) {
     window.alert(enemyName + " has died!");
     break;
   } else {
     window.alert(enemyName + " still has " + enemyHealth + " health left.");
   }
 
   // remove player's health by subtracting the amount set in the enemyAttack variable
   playerHealth = playerHealth - enemyAttack;
   console.log(
     enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
   );
 
   // check player's health
   
  }
   if (playerHealth <= 0) {
     window.alert(playerName + " has died!");
     break;
   } else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
   }
   // if player picks "skip" confirm and then stop the loop
 } 
 else if (promptFight === "skip" || promptFight === "SKIP") {
   //confirm player wants to skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   // if yes (true),leave the fight
   if (confirmSkip) {
     window.alert(playerName + " has decieded to skip the fight. Goodbye!");
   // subtruct money from playerMoney for skipping
   playeMoney = playerMoney - 10;
   console.log("playerMoney", playerMoney);
   break;
   }
   // if no (false), as question agian by running fight() aagin
   else {
     fight();
   }
 } else {
   window.alert("You need to choose a valid option. Try again!");
 }
 }
 for (var i = 0; i < enemyNames.length; i++){

  if (playerHealth > 0) {
    // let player know what round they are in , remember that arrays start at 0 so it needs to have 1 added to it
     window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
  }

  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
    
     //picked new enemy to fight based on the indec of the enemyNames array
   var pickedEnemyName = enemyNames[i];

   //reset ememyHealth before stating new fight
   enemyHealth = 50;

   //use debugger to pause script from running and check what's going on at that moment in the code
   //debugger;
   
// pass the pickedNames variable's value into the fight funciton, where it will assume the value of the enemyName parameter
 fight(pickedEnemyName);
 }
 
  }




 