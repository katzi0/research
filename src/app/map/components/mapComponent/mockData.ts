import { EntityEnum, MiskEntity } from '../../interfaces/entity.inteface';

export const MockBb: MiskEntity[] = [
  { 'billboard': { name: EntityEnum.billboard, 'x': -75.1641667, 'y': 20.9522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -70.1641667, 'y': 21.9022222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -65.1641667, 'y': 22.6522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -55.1641667, 'y': 23.5522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -45.1641667, 'y': 24.4522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -35.1641667, 'y': 25.3522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -25.1641667, 'y': 26.2522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -15.1641667, 'y': 27.1522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -74.1641667, 'y': 28.9422222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -25.1641667, 'y': 29.2522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -55.1641667, 'y': 30.5522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -52.1641667, 'y': 31.5222222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -37.1641667, 'y': 32.3722222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -85.1641667, 'y': 33.8522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -95.1641667, 'y': 35.9522222 } },
  { 'billboard': { name: EntityEnum.billboard, 'x': -79.1641667, 'y': 40.9922222 } }
];

export const MockPoints: MiskEntity[] = [
  { 'point': { name: EntityEnum.point, 'position': [30.27500161597942, 0.671004121125236] } },
  { 'point': { name: EntityEnum.point, 'position': [15.798996495640267, 40.642002130098206] } },
  { 'point': { name: EntityEnum.point, 'position': [14.655996558921856, 41.56299911864397] } }
];

export const MockPolygon: MiskEntity[] = [
  {
    'polygon': {
      name: EntityEnum.polygon,
      'coordinates':
        [-115.0, 37.0,
          -115.0, 32.0,
          -107.0, 33.0,
          -102.0, 31.0,
          -102.0, 35.0
        ]
    }
  },
  {
    'polygon': {
      name: EntityEnum.polygon,
      'coordinates':
        [-108.0, 42.0,
          -100.0, 42.0,
          -104.0, 40.0
        ]
    }
  },
  {
    'polygon': {
      name: EntityEnum.polygon,
      'coordinates':
        [-99.0, 30.0
        - 85.0, 30.0
        - 85.0, 40.0,
          -99.0, 40.0
        ]
    }
  },
  {
    'polygon':
      {
        name: EntityEnum.polygon,
        'coordinates':
          [-115.0, 37.0,
            -115.0, 32.0,
            -107.0, 33.0,
            -102.0, 31.0,
            -102.0, 35.0
          ]
      }
  }
];

export const MockPolyline: MiskEntity[] = [
  {
    'polyline': {
      name: EntityEnum.polyline, 'coordinates': [-75, 39, 250000,
        -125, 39, 250000
      ]
    }
  },
  {
    'polyline': {
      name: EntityEnum.polyline, 'coordinates': [-75, 35,
        -125, 35
      ]
    }
  },
  {
    'polyline': {
      name: EntityEnum.polyline, 'coordinates': [-75, 37,
        -125, 37
      ]
    }
  },
  {
    'polyline': {
      name: EntityEnum.polyline, 'coordinates': [-75, 43, 500000,
        -125, 43, 500000
      ]
    }
  },
  {
    'polyline': {
      name: EntityEnum.polyline, 'coordinates': [-75, 45, 500000,
        -125, 45, 500000
      ]
    }
  }
];

export const MockPointBb: MiskEntity[] = [
  { 'billboard': { name: EntityEnum.billboard, 'x': -75.1641667, 'y': 20.9522222 } },
  { 'point': { name: EntityEnum.point, 'position': [-75.1641667, 20.9522222] } },
  {
    'polygon': {
      name: EntityEnum.polygon, 'coordinates': [-115.0, 37.0,
        -115.0, 32.0,
        -107.0, 33.0,
        -102.0, 31.0,
        -102.0, 35.0
      ]
    }
  }
];

const pointsArr = [];
for (let i = 0; i < 1000; i++) {
  let longitude = Math.floor(Math.random() * Math.floor(180));
  longitude *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  let latitude = Math.floor(Math.random() * Math.floor(90));
  latitude *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  const point = { 'point': { name: EntityEnum.point, 'position': [longitude, latitude] } };
  const bb = { 'billboard': { name: EntityEnum.billboard, 'x': longitude, 'y': latitude } };
  pointsArr.push(point);
  pointsArr.push(bb);
}

export const MockPointsLarge = [
  ...pointsArr
];
