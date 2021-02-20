var playerName = window.prompt("What is yuour robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple value at once like this
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
var promptFight = function() {
  window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");  
} 
// if player chose to fight, then fight
if (promptFight === "fight" || promptFIGHT === "FIGHT") {

   // remove enemy's health by subtracting the amount set in the playerAttack variable
 enemyHealth = ememyHealth - playerAttack ;
console.log(
     playerName + "attaked " + enemyName + "." + enemyName + "has now" + enemyHealth + " health remaining."
 )
}

 // check enemy's halth
 if (enemyHealth <=0) {
   window.alert(enemyName + " has died");
 } else {
   Window.alert(enemyName + " still has " + ememyHealth + " health left.");
 }
 // remove player's healthby subtacting the amount set in the enemyAttack varible.
playerHealth = playerHealth - enemyAttack
  // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyName + "attacked" + playerName + "." + plyerNmae + "now has" + playerHealth + "health remaining."
  );

  // check player's health
  if (playerHealth <=0) {
    window.alert(playerName + " has died!");
 } else {
   window.alert(playerName + " still has " + playerHealth + " health left.");
 }

 // if the player choses to skip

  if  (promptFight === "skip" || promptFight === "SKIP") {
   // confir, player wants to skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

   //if yes(true), leave fight
   if (confirmSkip) {
     window.alert(playerName + " has decided to skip this fight. Goodbye!");
     // subtract money from pladyer Money for skipping 
     playerMoney = playerMoney - 2;

   }
   // if no (false, ask question again by running fight() again.
   else {
     fight();
   }
  
 
 


//fight();
// check enemy's haelth
//if (enemyHealth <= 0) {
  // window.alert(enemyName + " has died!");
  
//}
//else {
 // window.alert(enemyName + " still has ") + enemyHealth + "health left."
//}

