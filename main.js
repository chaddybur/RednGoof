// red needs starting attributes to start. Health 100? Damage 10? 
// red needs to move closer to the house
//before she can move she needs to roll for a random encounter
//less than 10 = random encounter
// random encounter will have random health and damage. 10-100 for health, 2-10 for damage.
//during random encounter she has to fight goofy



// create a simple d20 to use for various things 
function roll(){
    return Math.floor(Math.random() * 20) + 1
}

// make a class constructor to create characters on the fly
// if the game is extended then have ways for Red to gain life. Finding cakes? Killing random Goofys?

class Character{
    constructor(name, health, attack){
        this.name = name
        this.health = health
        this.attack = attack

    }
   
    takeDamage(x){
        let solidBlock = roll()
        if(solidBlock > 10){
            this.health -= x/2
        }else{
            this.health -= x
        }
    }
    
    
}
//Create Red
red = new Character("Red", 100, 10)


// add randomness to game with different strengths for Goofy 
//Perhaps have random images and characters show up to attack? 
function randomHealth(){
    return Math.floor(Math.random() * 100) + 1
}
function randomDamage(){
 return Math.floor(Math.random() * 10) + 1
}

// function to create a Goofy with random health and damage 
function randomMonster(){
    goofy = new Character("Goofy", randomHealth(), randomDamage())
} 
// global varibal to keep track of Red's progress. Definitely not best practice. Think on fixes.
let i = 0;
let dayNumber = 1
// clicking on red allows her to move forward if she rolls high enough to not have a random encounter. 
// if she has a random encounter then Goofy shows up and she can either run or fight
function turnGo(){
    document.querySelector("#red").addEventListener("click", function(){
    let value = roll()
    document.querySelector("#dice").innerText = `You rolled a ${value}`
    
    if(value > 10){
        document.querySelector(`#box${i}`).innerHTML = ""
        document.querySelector(`#box${i+1}`).innerHTML = `<img src="red.png" id = "red" alt=""></img>`
        i += 1
        turnGo()
    }else{
        randomMonster()
       fightOrFlight()
    }
})}
// globale function to get the party started 
turnGo()
// creating two options for the user to either fight the random goofy or run the away. Should running away take damage
// and move back one space? Or should Red have to restart her quest for another day?
// need to set up fight conditions. Should it be a fight to the death? or should Goofy run away if he is below a certain health? 
// is there one Goofy or a whole murder of Goofus?

function fightOrFlight() {
        //adding a picture of evil goofy
        document.querySelector(`#box${i + 1}`).innerHTML = `<img src="goofy.png" id = "goofy" alt=""></img>`
        // highlighting who showed up on the trail
        document.querySelector("h2").innerText = `A Wild Goofy Appears`
        //letting the user know how strong this particular Goofy is
        document.querySelector("h3").innerText = `Health: ${goofy.health}, Attack: ${goofy.attack}`

        // creating the fight and run away buttons. Appending and adding ids and classes
        let fight = document.createElement("button")
        fight.id = "fight"
        fight.className = "buttons"
        fight.innerText = "FIGHT"
        let flight = document. createElement("button")
        flight.innerText = "RUN AWAY"
        flight.id = "flight"
        flight.className = "buttons"
        let buttons = document.querySelector("#dice")
        buttons.appendChild(fight)
        buttons. appendChild(flight)

        // setting up the Battle. Probably need a different function for sparring? Is it ok to pop it all in an event listener?
        // should we count the days it takes Red to get to Grandma? Maybe force her to complete the task in a certain number of tries?
        // add a pop up that says what the rules/ goal is?

        fight.addEventListener("click", function(){

        })
        flight.addEventListener("click", function(){
            document.querySelector(`#box${i}`).innerHTML = ""
            document.querySelector(`#box${i + 1}`).innerHTML = ""
            i = 0
        document.querySelector(`#box${i}`).innerHTML = `<img src="red.png" id = "red" alt=""></img>`
        document.querySelector("h3").innerText = ""
        document.querySelector("h2").innerText = ""
        fight.remove()
        flight.remove()
        dayNumber++ 
        document.querySelector(".day").innerText = `Day ${dayNumber}`
        if(dayNumber > 5){
            document.querySelector("body").innerHTML = `<img src= "goof.png" class = "goofwins">`

        }
       turnGo()
        })

}

// win screen if Red ever reaches her Grandma's house? Or should Goofy be there and it's a boss fight? 

// if goofy wins (meaning Red is Dead), Giant picture of Goofy with the picture "I'll fuckin do it again"


// use D20 for now. This can open up options for stronger attacks. Perhaps stronger bad guys? More options for failures and successes.
alert("You have 5 days to get to Grandma's House before the Evil Goofy will murder her to death. If you encounter a wild Goofy on the way to Grandma's house, you can fight or run away. Running away is going to cost you though. All options are 20 sided die rolls. Anything above a 10 is a success.")

