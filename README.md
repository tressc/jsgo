## JSGo

The goal of this project is to develop an API which can be used to better understand the various operations needed for a competitive computer player.

The first phase will be implemented in JavaScript using a reduced board size (5x5). When the design takes shape, phase two will re-implement the API in python using a 9x9 board and apply machine learning.

Phase three involves hosting the game and using real matches to further train the computer player.

### Bit-boards:
  To increase search speed and reduce memory usage, the board will be represented by two bit-arrays, each storing the positions of all black or white stones respectively. It may be useful to keep a third bit-board of all available positions.

  Players can add a stone of their color to any legal position*.

  **Considerations:**

    - Add stones at a given position.
    - Remove stones at a given position.
    - Check for presence of stone at a given position.
    - Print board as grid (for debugging).
    - Print board as binary string (for debugging).

### Game:
  The game should allow two players to compete.

  **Considerations:**

    - Determine if a stone belongs to a group of connected stones.
      - Union-find algorithm
      - Bitwise parallel reduction
    - Count liberties for all groups (groups contain >= 1 stones).
    - If a play removes the last liberty of one or more opponent groups, remove all stones belonging to those groups.
    - If a play would remove the last liberty of one or more of the current player's groups, reject the play (no suicide).
    - If a play would result in the same board state as the current player's previous turn, reject the play (no ko).

    - Render board state when there is at least one human player.
    - Allow for handicap and komi at game start.
    - Alternate current player, allowing for passes.
    - End game when both players pass consecutively.
    - Estimate current score and or current influence.
      - Wave front analysis
    - Track captured number of black and white stones.
    - Persist previous board states for replay and ko checking.
    - Allow players to mark dead stones at end of game.
    - Allow players to correct territory estimates at end of game.

### Search:
  The search should allow for efficient tree exploration in order to find a competitive move for the computer player.

  **Considerations:**

    - Evaluate potential moves and choose the one most likely to result in a higher score for the current player.
      -
    - Use pruning to reduce search space.
      - Alpha beta pruning / Null window search
    - Eliminate duplicate board states / overlapping subtrees.
      - Zobrist Hashing
    - Change search constraints depending on board state
      - e.g. Influence early, points later
    - Detect live groups in order to reduce search space
      - Bensons algorithm
    - Allow for easy integration of libraries of standard openings, joseki, etc.

### Machine Learning:
  API design should be easy to modify in order to optimize for ML. For example, different search constraints should be easily toggled on and off. One of the chief concerns is speed of play and evaluation.

  **Considerations:**

    - Design the training to deliver useful results.
    - Have a way of measuring performance.
    - Create game records for each match:
      - Hosted human vs. human games
      - Hosted human vs. AI games
      - AI vs. AI games
