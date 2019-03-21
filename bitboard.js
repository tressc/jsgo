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
    return ((this.board >> idx) & 1) > 0;
  }

  print() {
    let num = Math.floor(Math.log2(this.board));
    let result = [];

    while (num > -1) {
      result.push(((this.board >> num) & 1));
      num--;
    }

    console.log(result.join(''));
  }
}
