# tick

tick is a 3D implementation of Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

[https://petarsimonovic.github.io/tick/](https://petarsimonovic.github.io/tick/)

## How to play

Use the grid to create an initial configuration.

Click run.

Each "tick" in the game of life is a single step in which the state of the grid is updated according to the following rules.

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.

2. Any live cell with two or three live neighbours lives on to the next generation.

3. Any live cell with more than three live neighbours dies, as if by overpopulation.

4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Once all the cells are evaluated, the grid updates to the new state.

Set the interval speed between ticks using the slider.

Use the mouse to drag and zoom the 3D view.
