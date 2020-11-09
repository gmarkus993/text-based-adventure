const getName = function() {
  prompt('          LETS PLAY THE ROOM...          ')
  let name = prompt('\n\n\nYou awaken in a room \n\nunsure of why or how...\n\nbut most importantly who you even are???\n\n  (enter your name)')

  if (name.length > 0) {
    console.log('\n\nOf course you are: ' + name +"!")
  }
  else if (name.length == 0) {
    prompt("Certainly you must remember YOUR name!\n\n  (enter your name)")
  }
  
}
getName()

const raxe = function(){
  random1 = confirm("The ground below you gives way, you fall to your death so many unanswered questions...\n\nDo you reincarnate?")
  

}


const confirmLeverIsFalse = function() {
  let leverPulled =prompt("\n  Which lever do you pull?\n\n")
}

const leverPull = function() {

let leverPulled = prompt('\n\nYou get off the floor and\n move to a wall accross the room, where you see\n three levers, below each is some writing\n\n    [raxë]\n\n    [hróva]\n\n    [londë]\n\nWith nothing else to do\n  you must pull a lever,  right?...\n\n  Which lever do you pull?\n\n')
let confirmLever = confirm("\nYou are sure you want to pull " + leverPulled)
const lp = leverPulled
switch (lp){
  case 'raxe':
  console.log('\nyou pulled raxe...\n')
  raxe()
  break;
  case 'hrova':
  console.log('\nyou pulled hrova...\n')
  break;
  case 'londe':
  console.log('\nyou pulled londe...\n')
  break;
}

}
leverPull()


















