import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const backpacks = [
      {
        id: 1,
        title: 'Yellowstone National Park',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        sights: [
          {
            id: 2,
            title: 'Canterbury Mannor',
            image: '//via.placeholder.com/800x400',
            description: `Some description should be here`,
            shortDescription: `Some short description should be here`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          },
          {
            id: 4,
            title: 'Sight With Very-very-very Long Name Which Is Not Fit Into One Line',
            image: '//via.placeholder.com/800x400',
            description: `Some description should be here`,
            shortDescription: `Some short description should be here`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          },
          {
            id: 5,
            title: 'Sight #5',
            image: '//via.placeholder.com/800x400',
            description: `Some description should be here`,
            shortDescription: `Some short description should be here`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          }
        ]
      },
      {
        id: 2,
        title: 'Washington DC Monuments',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        sights: [
          {
            id: 1,
            title: 'General Oliver Otis Howard House',
            image: '//via.placeholder.com/800x400',
            description: `The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.
            <br><br>
            The house still retains many of its decorative elements such as the high mansard roof, elaborate dormer
            windows, tower, and decorative iron balustrades.
            <br><br>
            The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.
            <br><br>
            The house still retains many of its decorative elements such as the high mansard roof, elaborate dormer
            windows, tower, and decorative iron balustrades.`,
            shortDescription: `The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          },
        ]
      },
      {
        id: 3,
        title: 'Atlanta National Regional Parks',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        sights: [
          {
            id: 3,
            title: 'Another Sight',
            image: '//via.placeholder.com/800x400',
            description: `Some description should be here`,
            shortDescription: `Some short description should be here`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          },
          {
            id: 5,
            title: 'Sight #5',
            image: '//via.placeholder.com/800x400',
            description: `Some description should be here`,
            shortDescription: `Some short description should be here`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          }
        ]
      },
      {
        id: 4,
        title: 'Lewis and Clark in Montana',
        image: '//via.placeholder.com/800x400',
        description: `This backpack covers the entirely of America's first National Park. Areas include Norris, Mammoth,
            Canyon Village, and many more.`,
        sights: [
          {
            id: 1,
            title: 'General Oliver Otis Howard House',
            image: '//via.placeholder.com/800x400',
            description: `The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.
            <br><br>
            The house still retains many of its decorative elements such as the high mansard roof, elaborate dormer
            windows, tower, and decorative iron balustrades.
            <br><br>
            The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.
            <br><br>
            The house still retains many of its decorative elements such as the high mansard roof, elaborate dormer
            windows, tower, and decorative iron balustrades.`,
            shortDescription: `The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          },
          {
            id: 4,
            title: 'Sight With Very-very-very Long Name Which Is Not Fit Into One Line',
            image: '//via.placeholder.com/800x400',
            description: `Some description should be here`,
            shortDescription: `Some short description should be here`,
            coordinates: [],
            credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
          },
        ]
      }
    ];

    const sights = [
      {
        id: 1,
        title: 'General Oliver Otis Howard House',
        image: '//via.placeholder.com/800x400',
        description: `The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.
            <br><br>
            The house still retains many of its decorative elements such as the high mansard roof, elaborate dormer
            windows, tower, and decorative iron balustrades.
            <br><br>
            The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.
            <br><br>
            The house still retains many of its decorative elements such as the high mansard roof, elaborate dormer
            windows, tower, and decorative iron balustrades.`,
        shortDescription: `The General Oliver Otis Howard House is located on the campus of Howard University. Contructed between
            1867 and 1869, it was the home of Major General Oliver Otis Howard, the founder of the school and its
            first President to 1873.`,
        coordinates: [],
        credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
      },
      {
        id: 2,
        title: 'Canterbury Mannor',
        image: '//via.placeholder.com/800x400',
        description: `Some description should be here`,
        shortDescription: `Some short description should be here`,
        coordinates: [],
        credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
      },
      {
        id: 3,
        title: 'Another Sight',
        image: '//via.placeholder.com/800x400',
        description: `Some description should be here`,
        shortDescription: `Some short description should be here`,
        coordinates: [],
        credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
      },
      {
        id: 4,
        title: 'Sight With Very-very-very Long Name Which Is Not Fit Into One Line',
        image: '//via.placeholder.com/800x400',
        description: `Some description should be here`,
        shortDescription: `Some short description should be here`,
        coordinates: [],
        credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
      },
      {
        id: 5,
        title: 'Sight #5',
        image: '//via.placeholder.com/800x400',
        description: `Some description should be here`,
        shortDescription: `Some short description should be here`,
        coordinates: [],
        credits: `Some regular, <strong>bold</strong> and <em>italic</em> credit text. <a href="//google.com">Some credit link</a>`,
      }
    ];

    return { backpacks, sights };
  }
}