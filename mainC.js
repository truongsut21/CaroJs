const board_el = document.getElementById("board")
const cell_els = document.querySelectorAll('#board .cell')
const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let currentTurn;
console.log("asd")
setup();

function setup() {
    // kiểm tra xóa những class có tồn tại săn và xóa đi
  board_el.classList.remove('turn-x', 'turn-o')

   for( let cell of cell_els){
     cell.classList.remove('x','o')
     cell.addEventListener('click', fillCell, {once: true});
   }
    // math.round: làm tròn
    currentTurn = Math.round(Math.random(0,1)) == 1 ? 'x' : 'o';
    board_el.classList.add('turn-' + currentTurn)


}

function fillCell(){
  this.classList.add(currentTurn)
  
  // hoán đổi lượt
  currentTurn = currentTurn == 'x' ? 'o' : 'x';

  if(checkForWin()) {
    const restar = confirm(currentTurn.toUpperCase() + " is the WINNER")

    if(restar){
      setup()
    }
  }

  // xóa lượt đã tồn tại
  board_el.classList.remove('turn-x', 'turn-o')
  board_el.classList.add('turn-' + currentTurn)
}

// kiểm tra chiến thắng
function checkForWin(){
  // return arrWins.some() kiểm tra từng phần tử trong mảng arrWins nếu có 1 phần tử đúng, return true ngược lại
// vidu:   [2, 5, 8, 1, 4].some(x => x > 10);  // false
//   [12, 5, 8, 1, 4].some(x => x > 10); // true
  return combinations.some(combination => {
    return combination.every( c => {

      // classList.contais kiểm tra phần tử này có chứa class đó kh
      if(cell_els[c].classList.contains(currentTurn)){
        return true;
      }

      return false;
    })
  })
}