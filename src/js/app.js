import GameSavingLoader from './GameSaving.js';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log('err', error.message);
  },
);
