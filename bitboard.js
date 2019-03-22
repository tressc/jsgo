class BitBoard {
  constructor(state=0) {
    this.board = state;
  }

  add(idx) {
    this.board |= 1 << idx;
  }

  remove(idx) {
    this.board &= ~(1 << idx);
  }

  check (idx) {
    return (this.board >> idx & 1) > 0;
  }

  printBinary() {
    let idx = Math.floor(Math.log2(this.board));
    let result = [];

    while (idx > -1) {
      result.push(((this.board >> idx) & 1));
      idx--;
    }

    console.log(result.join(''));
  }

  printGrid() {
    const row = new Array(5);

    for (let i = 0; i < 5; i++) {

      for (let j = 0; j < 5; j++) {
        row[j] = (this.board >> (5 * i + j) & 1) ? '*' : '-';
      }
      console.log(row.join(' '));
    }
  }
}
