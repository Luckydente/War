let p1 = [];
let p2 = [];

let deck = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13,
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // Random number
}

let t1 = 0;

while (deck.length >= 1) { // Splitting the deck equally.
  let r1 = 0;

  r1 = getRndInteger(0, deck.length);

  if (t1 == 1) {
    p2.push(deck[r1]);
    t1--;
  } else {
    p1.push(deck[r1]);
    t1++;
  }
  deck.splice(r1, 1);
}

console.log('WAR')


let point1 = 0
let point2 =0

for( let roundcounter= 0; roundcounter<=26;roundcounter++){
if( p1[roundcounter] > p2[roundcounter]){
point1++

console.log("P1 Win")
} else if (p1[roundcounter] < p2[roundcounter]) {
    console.log("P2 Win")
   point2++

} else if (p1[roundcounter] = p2[roundcounter]){
    console.log( "Tie")
    roundcounter++}
}

console.log("Player 1 = "+ point1 + " Player 2 = "+point2)

