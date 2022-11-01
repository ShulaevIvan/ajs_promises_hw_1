import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoaderAsyncAwait {
  constructor(data) {
    this.data = data;
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points,
    };
  }

  static async load() {
    const data = await read();
    const value = await json(data);
    return new this(JSON.parse(value));
  }
}
