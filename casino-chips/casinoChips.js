/*
    Write a function that takes in an array of 3 different integers representing
    different colored casino chips: red, blue, black. Each bet costs 2 DIFFERENT
    colored chips. Return how many bets a player can make before they run out of chips.
    
    ex: casinoChips([1, 1, 1]) => 1;
    ex: casinoChips([2, 2, 1]) => 2;
    ex: casinoChips([2, 2, 2]) => 3;
            Bet 1 Remainder: [1, 1, 2]
            Bet 2 Remainder: [0, 1, 1]
            Bet 3 Remainder: [0, 0, 0]
    ex: casinoChips([1, 100, 1]) => 2;
*/

const casinoChips = (chips) => {
    if (chips[0] > 0 && (chips[1] > 0 || chips[2] > 0)){
        chips[0]--;
        if (chips[1] > 0) {
            chips[1]--;
            return 1 + casinoChips(chips);
        } else if (chips[2] > 0) {
            chips[2]--;
            return 1 + casinoChips(chips);
        }
    } else if (chips[1] > 0 && chips[2] > 0) {
        chips[1]--, chips[2]--;
        return 1 + casinoChips(chips);
    } else {
        return 0;
    }

};

//Do not change this line or the function name
module.exports = casinoChips;

//Run this line to check your answer
//npm test ./casino-chips/casinoChips.test.js
