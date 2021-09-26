[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/rbondoc96/sudoku">
    <img src="images/logo.svg" alt="Logo">
  </a>

  <h3 align="center">Sudoku</h3>

  <p align="center">
    A web app to play everyone's favorite 9x9 game, Sudoku!
    <br />
    <a href="https://github.com/rbondoc96/sudoku"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/rbondoc96/sudoku/issues">Report Bug</a>
    ·
    <a href="https://github.com/rbondoc96/sudoku/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the Project

A simple web app that generates a solvable Sudoku grid.

### Built With
The app was built using React and TypeScript:
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)


## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
The following items are required to begin installation and correctly run the code

* Node.js v16.6.0
* npm


### Installation
1. Clone the repo
    ```bash
    git clone https://github.com/rbondoc96/sudoku
    ```

2. Install npm packages

    In the `src` folder, run `npm install` to install dependencies

    ```bash
    /src $ npm install
    ```

## Usage
To start the frontend dev server, use `npm run dev-server`
```bash
/src $ npm run dev-server
```

Given a certain number of clues, the app generates a Sudoku grid. 

As an aiding feature, the grid will highlight all cells (rows, columns, and subgrid) that the current input cell is affecting.

If the user is stuck, they have the option to reveal a hint. The grid chooses a random, empty cell and reveals the value that belongs in that cell.

To solve the grid, the app will either:
* Check every cell in the grid and compare it with the solution grid
* Validate that the entire grid is a valid Sudoku

A true Sudoku game has a single unique solution. In the event that the generated Sudoku grid has more than 1 solution, the app validates the entire grid.



## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. 

Any contributions you make are **greatly appreciated!**

1. Fork the project
2. Create a new branch (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'Added MyFeature'`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a pull request


## License

Distributed under the MIT License. See `LICENSE` for more information.


## Contact

Rodrigo Bondoc - rbondoc96@gmail.com

Project Link - [https://github.com/rbondoc96/sudoku](https://github.com/rbondoc96/sudoku)

[contributors-shield]: https://img.shields.io/github/contributors/rbondoc96/sudoku?style=for-the-badge
[contributors-url]: https://github.com/rbondoc96/sudoku/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rbondoc96/sudoku.svg?style=for-the-badge
[forks-url]: https://github.com/rbondoc96/sudoku/network/members
[stars-shield]: https://img.shields.io/github/stars/rbondoc96/sudoku.svg?style=for-the-badge
[stars-url]: https://github.com/rbondoc96/sudoku/stargazers
[issues-shield]: https://img.shields.io/github/issues/rbondoc96/sudoku.svg?style=for-the-badge
[issues-url]: https://github.com/rbondoc96/sudoku/issues
[license-shield]: https://img.shields.io/github/license/rbondoc96/sudoku.svg?style=for-the-badge
[license-url]: https://github.com/rbondoc96/sudoku/blob/dev/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rbondoc96/