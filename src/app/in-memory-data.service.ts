import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const backpacks = [
      {
        id: 0,
        title: 'Yellowstone National Park',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        locations: []
      }, {
        id: 1,
        title: 'Washington DC Monuments',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        locations: []
      }, {
        id: 2,
        title: 'Atlanta National Regional Parks',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        locations: []
      }, {
        id: 3,
        title: 'Lewis and Clark in Montana',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        locations: []
      }
    ];

    return {backpacks};
  }
}