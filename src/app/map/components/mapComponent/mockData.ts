import { EntityEnum, IEntity, MiscEntity } from '../../interfaces/entity.inteface';

export const MockBb: MiscEntity[] = [
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

export const MockPoints: MiscEntity[] = [
  { 'point': { name: EntityEnum.point, 'position': [30.27500161597942, 0.671004121125236] } },
  { 'point': { name: EntityEnum.point, 'position': [15.798996495640267, 40.642002130098206] } },
  { 'point': { name: EntityEnum.point, 'position': [14.655996558921856, 41.56299911864397] } }
];

export const MockPolygon: MiscEntity[] = [
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

export const MockPolyline: MiscEntity[] = [
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

export const MockPointBb: MiscEntity[] = [
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

// const pointsArr: IEntity[] = [];
// for (let i = 0; i < 1000; i++) {
//   let longitude = Math.floor(Math.random() * Math.floor(180));
//   longitude *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
//   let latitude = Math.floor(Math.random() * Math.floor(90));
//   latitude *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
//   const misc = { 'misc': { name: EntityEnum.misc, 'position': [longitude, latitude] } };
//   pointsArr.push(misc);
//   console.log(pointsArr);
// }


// const pointsArr: IEntity[] = [];
// for (let i = 0; i < 1; i++) {
//   let longitude = Math.floor(Math.random() * Math.floor(180));
//   longitude *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
//   let latitude = Math.floor(Math.random() * Math.floor(90));
//   latitude *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
//
//   for (let j = 0; j < 5; j++) {
//     let misc = { 'misc': { name: EntityEnum.misc, 'position': [longitude, latitude] } };
//     misc.misc.position = [longitude++, latitude++];
//     misc.misc.id = j;
//     pointsArr.push(misc);
//   }
//   console.log(pointsArr);
// }

export const MockPointsLarge = [

  {
    'point': {
      'name': 'point',
      'position': [
        44,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 44,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -95,
        -48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -95,
      'y': -48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -40,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -40,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -158,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -158,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -104,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -104,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -144,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -144,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -108,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -108,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        9,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 9,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        129,
        -25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 129,
      'y': -25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -160,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -160,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -49,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -49,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        77,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 77,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -162,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -162,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        177,
        -46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 177,
      'y': -46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -101,
        16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -101,
      'y': 16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -147,
        -12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -147,
      'y': -12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': 74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        3,
        -68
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 3,
      'y': -68
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        56,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 56,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -142,
        -8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -142,
      'y': -8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -155,
        -44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -155,
      'y': -44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -118,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -118,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -176,
        -39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -176,
      'y': -39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -70,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -70,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        4,
        46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 4,
      'y': 46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -48,
        -73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -48,
      'y': -73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -123,
        65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -123,
      'y': 65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        138,
        73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 138,
      'y': 73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        118,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 118,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        137,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 137,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -149,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -149,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -73,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -73,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        138,
        -67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 138,
      'y': -67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        109,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 109,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -65,
        -47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -65,
      'y': -47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -135,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -135,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -130,
        31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -130,
      'y': 31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        28,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 28,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        157,
        64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 157,
      'y': 64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -95,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -95,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        77,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 77,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        106,
        -69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 106,
      'y': -69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        179,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 179,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -153,
        -65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -153,
      'y': -65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -112,
        50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -112,
      'y': 50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        111,
        -37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 111,
      'y': -37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        62,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 62,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -133,
        -48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -133,
      'y': -48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        91,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 91,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        20,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 20,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        117,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 117,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -23,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -23,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -78,
        85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -78,
      'y': 85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        56,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 56,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -166,
        -26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -166,
      'y': -26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -178,
        -55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -178,
      'y': -55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        174,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 174,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -176,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -176,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -160,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -160,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        104,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 104,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        142,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 142,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        82,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 82,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        48,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 48,
      'y': -11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        162,
        78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 162,
      'y': 78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        56,
        -72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 56,
      'y': -72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        139,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 139,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        163,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 163,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        139,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 139,
      'y': -11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -50,
        -12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -50,
      'y': -12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        150,
        -29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 150,
      'y': -29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        59,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 59,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -67,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -67,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -121,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -121,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -11,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -11,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        128,
        -36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 128,
      'y': -36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        135,
        46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 135,
      'y': 46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -121,
        41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -121,
      'y': 41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -135,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -135,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -117,
        47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -117,
      'y': 47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -57,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -57,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        95,
        -26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 95,
      'y': -26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -70,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -70,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        45,
        -12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 45,
      'y': -12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        75,
        -73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 75,
      'y': -73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        129,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 129,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -27,
        -85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -27,
      'y': -85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -90,
        -64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -90,
      'y': -64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        51,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 51,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -29,
        -78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -29,
      'y': -78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -136,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -136,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -67,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -67,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        10,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 10,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -169,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -169,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -23,
        -67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -23,
      'y': -67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        5,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 5,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        49,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 49,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -169,
        -31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -169,
      'y': -31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -162,
        -41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -162,
      'y': -41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        110,
        -88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 110,
      'y': -88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        48,
        88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 48,
      'y': 88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        123,
        -27
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 123,
      'y': -27
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        39,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 39,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -164,
        -61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -164,
      'y': -61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -62,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -62,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        87,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 87,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        32,
        78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 32,
      'y': 78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -76,
        41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -76,
      'y': 41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -137,
        37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -137,
      'y': 37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        116,
        -47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 116,
      'y': -47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -5,
        85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -5,
      'y': 85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        148,
        73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 148,
      'y': 73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -174,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -174,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        -12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': -12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -158,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -158,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        107,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 107,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        137,
        36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 137,
      'y': 36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        154,
        68
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 154,
      'y': 68
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -39,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -39,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        141,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 141,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -135,
        -78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -135,
      'y': -78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -125,
        -61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -125,
      'y': -61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        12,
        21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 12,
      'y': 21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -129,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -129,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        125,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 125,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        80,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 80,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        158,
        45
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 158,
      'y': 45
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -138,
        -27
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -138,
      'y': -27
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -49,
        39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -49,
      'y': 39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        79,
        3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 79,
      'y': 3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -12,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -12,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -11,
        77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -11,
      'y': 77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        10,
        -31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 10,
      'y': -31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -52,
        -30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -52,
      'y': -30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        136,
        -64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 136,
      'y': -64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        89,
        76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 89,
      'y': 76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        165,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 165,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -105,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -105,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -127,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -127,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        83,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 83,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -98,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -98,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        42,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 42,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        81,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 81,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -6,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -6,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        154,
        10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 154,
      'y': 10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        3,
        -72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 3,
      'y': -72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -124,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -124,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        149,
        44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 149,
      'y': 44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -165,
        71
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -165,
      'y': 71
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -130,
        50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -130,
      'y': 50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -1,
        -9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -1,
      'y': -9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -126,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -126,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        162,
        -72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 162,
      'y': -72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        91,
        -47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 91,
      'y': -47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        107,
        -64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 107,
      'y': -64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -128,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -128,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        24,
        89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 24,
      'y': 89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -157,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -157,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        134,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 134,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -78,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -78,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -25,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -25,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        136,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 136,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -120,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -120,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        11,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 11,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        65,
        44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 65,
      'y': 44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        118,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 118,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -52,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -52,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -113,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -113,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -153,
        -2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -153,
      'y': -2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -65,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -65,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -145,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -145,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        58,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 58,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -84,
        -23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -84,
      'y': -23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -146,
        86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -146,
      'y': 86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': 2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -151,
        60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -151,
      'y': 60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        145,
        50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 145,
      'y': 50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -7,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -7,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        121,
        23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 121,
      'y': 23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -82,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -82,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        -57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': -57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -175,
        89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -175,
      'y': 89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        49,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 49,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        126,
        78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 126,
      'y': 78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -41,
        87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -41,
      'y': 87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -174,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -174,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        0,
        -70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 0,
      'y': -70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        104,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 104,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        174,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 174,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        150,
        18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 150,
      'y': 18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        11,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 11,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        74,
        -85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 74,
      'y': -85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        94,
        -9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 94,
      'y': -9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -37,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -37,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -17,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -17,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -72,
        -83
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -72,
      'y': -83
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -100,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -100,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        147,
        -83
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 147,
      'y': -83
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -174,
        65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -174,
      'y': 65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -119,
        10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -119,
      'y': 10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -156,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -156,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        117,
        72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 117,
      'y': 72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        105,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 105,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -89,
        59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -89,
      'y': 59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -121,
        65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -121,
      'y': 65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -3,
        -67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -3,
      'y': -67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -106,
        -23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -106,
      'y': -23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -150,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -150,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -73,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -73,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': 46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -175,
        -64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -175,
      'y': -64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -19,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -19,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        94,
        -17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 94,
      'y': -17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        142,
        21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 142,
      'y': 21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        12,
        -3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 12,
      'y': -3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -19,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -19,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -138,
        -31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -138,
      'y': -31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        152,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 152,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        165,
        -35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 165,
      'y': -35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -24,
        85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -24,
      'y': 85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        134,
        -1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 134,
      'y': -1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        1,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 1,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        38,
        -72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 38,
      'y': -72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        69,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 69,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -103,
        -73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -103,
      'y': -73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        132,
        -57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 132,
      'y': -57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        71
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': 71
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        138,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 138,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -49,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -49,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        120,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 120,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -44,
        4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -44,
      'y': 4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        39,
        -80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 39,
      'y': -80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -165,
        -55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -165,
      'y': -55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        121,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 121,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -125,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -125,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -9,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -9,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        46,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 46,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -152,
        2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -152,
      'y': 2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        17,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 17,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -158,
        24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -158,
      'y': 24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        7,
        23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 7,
      'y': 23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -46,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -46,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        124,
        -44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 124,
      'y': -44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -91,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -91,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -43,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -43,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        83
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': 83
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -109,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -109,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -147,
        -25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -147,
      'y': -25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        69,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 69,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -178,
        60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -178,
      'y': 60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -169,
        50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -169,
      'y': 50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -84,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -84,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        30,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 30,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -123,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -123,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -65,
        62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -65,
      'y': 62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -156,
        13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -156,
      'y': 13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        94,
        -22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 94,
      'y': -22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        -8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': -8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -167,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -167,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        95,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 95,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -80,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -80,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        90,
        31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 90,
      'y': 31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -152,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -152,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        166,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 166,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -77,
        66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -77,
      'y': 66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        19,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 19,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        126,
        58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 126,
      'y': 58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        28,
        -44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 28,
      'y': -44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -39,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -39,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        98,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 98,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        -42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': -42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -73,
        -73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -73,
      'y': -73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        17,
        -42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 17,
      'y': -42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        71,
        18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 71,
      'y': 18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        179,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 179,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -3,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -3,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        68,
        1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 68,
      'y': 1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        0,
        44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 0,
      'y': 44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -174,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -174,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -17,
        -6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -17,
      'y': -6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -97,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -97,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        32,
        -42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 32,
      'y': -42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        78,
        -19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 78,
      'y': -19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        64,
        16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 64,
      'y': 16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -24,
        -69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -24,
      'y': -69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -65,
        13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -65,
      'y': 13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -173,
        -9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -173,
      'y': -9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        137,
        32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 137,
      'y': 32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        94,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 94,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -29,
        -37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -29,
      'y': -37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        162,
        -54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 162,
      'y': -54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        158,
        41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 158,
      'y': 41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -109,
        -26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -109,
      'y': -26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        171,
        36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 171,
      'y': 36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -99,
        38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -99,
      'y': 38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -148,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -148,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -33,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -33,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        38,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 38,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        37,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 37,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        63,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 63,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -138,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -138,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -118,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -118,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -23,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -23,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -37,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -37,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        85,
        -74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 85,
      'y': -74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -24,
        64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -24,
      'y': 64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -11,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -11,
      'y': -11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -117,
        -89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -117,
      'y': -89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        46,
        -70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 46,
      'y': -70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        172,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 172,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -161,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -161,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        6,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 6,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -69,
        36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -69,
      'y': 36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        168,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 168,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -144,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -144,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        95,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 95,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        98,
        -84
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 98,
      'y': -84
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        74,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 74,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -151,
        85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -151,
      'y': 85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -123,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -123,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        62,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 62,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        149,
        -81
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 149,
      'y': -81
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -144,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -144,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        0,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 0,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -7,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -7,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -51,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -51,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -133,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -133,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': 31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        21,
        -38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 21,
      'y': -38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -126,
        -61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -126,
      'y': -61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        45
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': 45
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        104,
        -1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 104,
      'y': -1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -44,
        71
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -44,
      'y': 71
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -87,
        -70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -87,
      'y': -70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -147,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -147,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -157,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -157,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -60,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -60,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        91,
        50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 91,
      'y': 50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -162,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -162,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -176,
        73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -176,
      'y': 73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -47,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -47,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        90,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 90,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        11,
        -58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 11,
      'y': -58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        2,
        24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 2,
      'y': 24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        57,
        63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 57,
      'y': 63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        147,
        -14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 147,
      'y': -14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        103,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 103,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -40,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -40,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -143,
        -17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -143,
      'y': -17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        72,
        8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 72,
      'y': 8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        162,
        23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 162,
      'y': 23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -57,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -57,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        89,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 89,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        49,
        -42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 49,
      'y': -42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -53,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -53,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -153,
        14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -153,
      'y': 14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': 32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -66,
        71
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -66,
      'y': 71
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -23,
        49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -23,
      'y': 49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        103,
        74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 103,
      'y': 74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -81,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -81,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -12,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -12,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        -89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': -89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        18,
        65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 18,
      'y': 65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        3,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 3,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -96,
        -53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -96,
      'y': -53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        -19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': -19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        96,
        24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 96,
      'y': 24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -87,
        58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -87,
      'y': 58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        32,
        -26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 32,
      'y': -26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -142,
        -39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -142,
      'y': -39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -147,
        46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -147,
      'y': 46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -71,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -71,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        32,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 32,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -147,
        11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -147,
      'y': 11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        81,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 81,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        82,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 82,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': 16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        9,
        -68
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 9,
      'y': -68
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        158,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 158,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        66,
        8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 66,
      'y': 8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        25,
        60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 25,
      'y': 60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -103,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -103,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        37,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 37,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -35,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -35,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -83,
        -57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -83,
      'y': -57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -57,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -57,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        77,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 77,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        103,
        68
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 103,
      'y': 68
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -120,
        -70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -120,
      'y': -70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        51,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 51,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        123,
        39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 123,
      'y': 39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        77,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 77,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -174,
        72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -174,
      'y': 72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        42,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 42,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        161,
        -43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 161,
      'y': -43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -94,
        -35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -94,
      'y': -35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        149,
        31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 149,
      'y': 31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -139,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -139,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': 32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        63,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 63,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -47,
        74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -47,
      'y': 74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        154,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 154,
      'y': -11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -19,
        58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -19,
      'y': 58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        121,
        -9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 121,
      'y': -9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -62,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -62,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -87,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -87,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        159,
        87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 159,
      'y': 87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -94,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -94,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -46,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -46,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        66,
        -46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 66,
      'y': -46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -25,
        -39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -25,
      'y': -39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -66,
        -20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -66,
      'y': -20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        88,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 88,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        65,
        63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 65,
      'y': 63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        85,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 85,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -153,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -153,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -42,
        4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -42,
      'y': 4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        160,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 160,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -105,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -105,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        103,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 103,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        24,
        46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 24,
      'y': 46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        100,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 100,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        139,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 139,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        149,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 149,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -67,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -67,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        39,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 39,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        21,
        -72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 21,
      'y': -72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        108,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 108,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -161,
        63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -161,
      'y': 63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        68,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 68,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -135,
        37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -135,
      'y': 37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -41,
        45
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -41,
      'y': 45
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -107,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -107,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        119,
        -75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 119,
      'y': -75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -120,
        23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -120,
      'y': 23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -114,
        77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -114,
      'y': 77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        70,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 70,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        113,
        -12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 113,
      'y': -12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -6,
        14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -6,
      'y': 14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        141,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 141,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        11,
        18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 11,
      'y': 18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        13,
        10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 13,
      'y': 10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        21,
        -27
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 21,
      'y': -27
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -72,
        -27
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -72,
      'y': -27
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        167,
        -17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 167,
      'y': -17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        20,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 20,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        81,
        63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 81,
      'y': 63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        122,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 122,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        95,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 95,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        91,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 91,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        53,
        8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 53,
      'y': 8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        156,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 156,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        114,
        -88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 114,
      'y': -88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -132,
        -2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -132,
      'y': -2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        49,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 49,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        112,
        -55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 112,
      'y': -55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        107,
        58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 107,
      'y': 58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -162,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -162,
      'y': -11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -17,
        -1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -17,
      'y': -1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        126,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 126,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -135,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -135,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -139,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -139,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        30,
        55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 30,
      'y': 55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        128,
        86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 128,
      'y': 86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        168,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 168,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -45,
        -34
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -45,
      'y': -34
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -12,
        -88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -12,
      'y': -88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        131,
        41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 131,
      'y': 41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        103,
        -41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 103,
      'y': -41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -81,
        72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -81,
      'y': 72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -59,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -59,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -79,
        -1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -79,
      'y': -1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        171,
        -69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 171,
      'y': -69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        130,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 130,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -73,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -73,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -1,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -1,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        56,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 56,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -53,
        23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -53,
      'y': 23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        44,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 44,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -121,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -121,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        85,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 85,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        113,
        -35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 113,
      'y': -35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        166,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 166,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -118,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -118,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        117,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 117,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -15,
        35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -15,
      'y': 35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        -31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': -31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        0,
        -53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 0,
      'y': -53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        55,
        -30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 55,
      'y': -30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        170,
        -23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 170,
      'y': -23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        89,
        69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 89,
      'y': 69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        63,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 63,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        136,
        -46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 136,
      'y': -46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -69,
        14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -69,
      'y': 14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        -54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': -54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -104,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -104,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -34,
        -42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -34,
      'y': -42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        141,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 141,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -116,
        86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -116,
      'y': 86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -166,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -166,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        149,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 149,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -117,
        89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -117,
      'y': 89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -23,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -23,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        -16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': -16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        179,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 179,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -152,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -152,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -162,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -162,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -167,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -167,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        148,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 148,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        129,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 129,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        25,
        -14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 25,
      'y': -14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        1,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 1,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -177,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -177,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        22,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 22,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -22,
        -22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -22,
      'y': -22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        173,
        71
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 173,
      'y': 71
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        75,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 75,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -140,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -140,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        52,
        14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 52,
      'y': 14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -70,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -70,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -147,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -147,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        122,
        66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 122,
      'y': 66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -45,
        2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -45,
      'y': 2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -71,
        36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -71,
      'y': 36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        15,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 15,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -178,
        88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -178,
      'y': 88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        38,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 38,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -18,
        -19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -18,
      'y': -19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        68,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 68,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -122,
        -22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -122,
      'y': -22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        135,
        -64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 135,
      'y': -64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -93,
        -3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -93,
      'y': -3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        51,
        58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 51,
      'y': 58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        179,
        4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 179,
      'y': 4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -25,
        -74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -25,
      'y': -74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -81,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -81,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -5,
        27
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -5,
      'y': 27
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -113,
        85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -113,
      'y': 85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -136,
        77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -136,
      'y': 77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        79,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 79,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        169,
        -9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 169,
      'y': -9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -26,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -26,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': 32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        83,
        84
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 83,
      'y': 84
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -67,
        76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -67,
      'y': 76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        75,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 75,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -117,
        -61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -117,
      'y': -61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        176,
        73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 176,
      'y': 73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        38,
        76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 38,
      'y': 76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        152,
        -36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 152,
      'y': -36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        48,
        -1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 48,
      'y': -1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -71,
        21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -71,
      'y': 21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        171,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 171,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        59,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 59,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        46,
        -41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 46,
      'y': -41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        165,
        21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 165,
      'y': 21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        -47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': -47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -118,
        -87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -118,
      'y': -87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        101,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 101,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        -38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': -38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        143,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 143,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -80,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -80,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        -53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': -53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -48,
        16
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -48,
      'y': 16
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        19,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 19,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        84,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 84,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -53,
        69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -53,
      'y': 69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -136,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -136,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        4,
        46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 4,
      'y': 46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -92,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -92,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -118,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -118,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        63,
        66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 63,
      'y': 66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        99,
        4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 99,
      'y': 4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -139,
        36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -139,
      'y': 36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -159,
        18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -159,
      'y': 18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        174,
        -64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 174,
      'y': -64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        24,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 24,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -32,
        39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -32,
      'y': 39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -127,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -127,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        34,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 34,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -104,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -104,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        111,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 111,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        40,
        -22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 40,
      'y': -22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        141,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 141,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -56,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -56,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -58,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -58,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -139,
        60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -139,
      'y': 60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        1,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 1,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -137,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -137,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        19,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 19,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        143,
        1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 143,
      'y': 1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -57,
        47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -57,
      'y': 47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        17,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 17,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -79,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -79,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -72,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -72,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -107,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -107,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        93,
        -46
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 93,
      'y': -46
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        57,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 57,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -62,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -62,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        105,
        -34
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 105,
      'y': -34
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        151,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 151,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -116,
        -84
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -116,
      'y': -84
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        129,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 129,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        48,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 48,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -42,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -42,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -140,
        84
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -140,
      'y': 84
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        80,
        42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 80,
      'y': 42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        177,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 177,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        150,
        -78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 150,
      'y': -78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        90,
        -78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 90,
      'y': -78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -11,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -11,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -154,
        -30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -154,
      'y': -30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        152,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 152,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        39,
        -6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 39,
      'y': -6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -63,
        -2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -63,
      'y': -2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -12,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -12,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -3,
        31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -3,
      'y': 31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -36,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -36,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        18,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 18,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        108,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 108,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -136,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -136,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        26,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 26,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        41,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 41,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        14,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 14,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        15,
        62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 15,
      'y': 62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        152,
        -55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 152,
      'y': -55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        29,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 29,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -76,
        58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -76,
      'y': 58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -3,
        87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -3,
      'y': 87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -125,
        68
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -125,
      'y': 68
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        150,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 150,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -35,
        -57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -35,
      'y': -57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -119,
        -74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -119,
      'y': -74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -83,
        -81
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -83,
      'y': -81
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        139,
        74
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 139,
      'y': 74
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        55,
        -15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 55,
      'y': -15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -112,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -112,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -127,
        -69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -127,
      'y': -69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -61,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -61,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        91,
        39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 91,
      'y': 39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        137,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 137,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        82,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 82,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -106,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -106,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -13,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -13,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        127,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 127,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -145,
        -43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -145,
      'y': -43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -103,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -103,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        12,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 12,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -2,
        -6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -2,
      'y': -6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        82,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 82,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        131,
        38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 131,
      'y': 38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        73,
        37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 73,
      'y': 37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -69,
        60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -69,
      'y': 60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -52,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -52,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -177,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -177,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        75,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 75,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -118,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -118,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        15,
        28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 15,
      'y': 28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -153,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -153,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -7,
        62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -7,
      'y': 62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -134,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -134,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        169,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 169,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -83,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -83,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -73,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -73,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -102,
        88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -102,
      'y': 88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -151,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -151,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -133,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -133,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        33,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 33,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        132,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 132,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -63,
        -20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -63,
      'y': -20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        77,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 77,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -135,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -135,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        60,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 60,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -78,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -78,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -177,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -177,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -82,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -82,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        31,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 31,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        43,
        -89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 43,
      'y': -89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        150,
        -24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 150,
      'y': -24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -29,
        24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -29,
      'y': 24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -114,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -114,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        160,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 160,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -44,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -44,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        108,
        -69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 108,
      'y': -69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        93,
        38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 93,
      'y': 38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -96,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -96,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -83,
        -35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -83,
      'y': -35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        0,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 0,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -14,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -14,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -48,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -48,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -44,
        -48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -44,
      'y': -48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -109,
        -55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -109,
      'y': -55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -125,
        45
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -125,
      'y': 45
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -44,
        3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -44,
      'y': 3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -51,
        -48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -51,
      'y': -48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        106,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 106,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        94,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 94,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -35,
        41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -35,
      'y': 41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -38,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -38,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        126,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 126,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -169,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -169,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -107,
        -75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -107,
      'y': -75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        39,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 39,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        162,
        -8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 162,
      'y': -8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -23,
        21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -23,
      'y': 21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        98,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 98,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -110,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -110,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -79,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -79,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': 57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        99,
        47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 99,
      'y': 47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -171,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -171,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        25,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 25,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        71,
        -3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 71,
      'y': -3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -24,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -24,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        165,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 165,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -145,
        55
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -145,
      'y': 55
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        167,
        49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 167,
      'y': 49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -53,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -53,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -155,
        -70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -155,
      'y': -70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        114,
        76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 114,
      'y': 76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -122,
        84
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -122,
      'y': 84
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        26,
        70
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 26,
      'y': 70
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -98,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -98,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -29,
        1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -29,
      'y': 1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        115,
        76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 115,
      'y': 76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        103,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 103,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        131,
        86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 131,
      'y': 86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        3,
        -53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 3,
      'y': -53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        44,
        76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 44,
      'y': 76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        72,
        -87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 72,
      'y': -87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        133,
        -31
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 133,
      'y': -31
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -150,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -150,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -162,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -162,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -99,
        4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -99,
      'y': 4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -58,
        32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -58,
      'y': 32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -145,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -145,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        81,
        44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 81,
      'y': 44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -28,
        -3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -28,
      'y': -3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -46,
        -85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -46,
      'y': -85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -73,
        40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -73,
      'y': 40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -99,
        -34
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -99,
      'y': -34
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        33,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 33,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        151,
        3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 151,
      'y': 3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -46,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -46,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -84,
        -67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -84,
      'y': -67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -42,
        62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -42,
      'y': 62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        100,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 100,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        97,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 97,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -101,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -101,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        31,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 31,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        131,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 131,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -82,
        -39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -82,
      'y': -39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -166,
        44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -166,
      'y': 44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        21,
        64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 21,
      'y': 64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        38,
        -49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 38,
      'y': -49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -22,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -22,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -148,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -148,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -85,
        -69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -85,
      'y': -69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -115,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -115,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -152,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -152,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -105,
        32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -105,
      'y': 32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        73,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 73,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -69,
        88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -69,
      'y': 88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        3,
        17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 3,
      'y': 17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -31,
        -62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -31,
      'y': -62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -9,
        80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -9,
      'y': 80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        115,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 115,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -172,
        -13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -172,
      'y': -13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -86,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -86,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -132,
        -26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -132,
      'y': -26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        34
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': 34
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -28,
        54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -28,
      'y': 54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -139,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -139,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        167,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 167,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        132,
        -36
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 132,
      'y': -36
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        96,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 96,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        95,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 95,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        109,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 109,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        88,
        -71
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 88,
      'y': -71
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -171,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -171,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -121,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -121,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        37,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 37,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        10,
        78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 10,
      'y': 78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -26,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -26,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -136,
        -38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -136,
      'y': -38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -159,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -159,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -10,
        -44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -10,
      'y': -44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        94,
        -79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 94,
      'y': -79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        23
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': 23
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -108,
        -37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -108,
      'y': -37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -129,
        -19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -129,
      'y': -19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        160,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 160,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -100,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -100,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -67,
        -27
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -67,
      'y': -27
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        24,
        50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 24,
      'y': 50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        111,
        -47
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 111,
      'y': -47
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -124,
        -65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -124,
      'y': -65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        175,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 175,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        32,
        -54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 32,
      'y': -54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -7,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -7,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': 7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        118,
        83
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 118,
      'y': 83
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -45,
        5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -45,
      'y': 5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        40,
        2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 40,
      'y': 2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        54,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 54,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        49,
        -80
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 49,
      'y': -80
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -52,
        -41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -52,
      'y': -41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -151,
        -61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -151,
      'y': -61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        44,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 44,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -156,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -156,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        106,
        63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 106,
      'y': 63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        63,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 63,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -122,
        24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -122,
      'y': 24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        140,
        59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 140,
      'y': 59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        59,
        -88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 59,
      'y': -88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -53,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -53,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -138,
        64
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -138,
      'y': 64
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        110,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 110,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        121,
        51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 121,
      'y': 51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -77,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -77,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -33,
        -22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -33,
      'y': -22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -72,
        53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -72,
      'y': 53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        38,
        -12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 38,
      'y': -12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -33,
        52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -33,
      'y': 52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        -54
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': -54
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -94,
        88
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -94,
      'y': 88
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -44,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -44,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -26,
        -68
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -26,
      'y': -68
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -20,
        69
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -20,
      'y': 69
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        1,
        -78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 1,
      'y': -78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        108,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 108,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -174,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -174,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -95,
        -22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -95,
      'y': -22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -2,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -2,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        35,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 35,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -132,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -132,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        61,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 61,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -159,
        45
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -159,
      'y': 45
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -46,
        13
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -46,
      'y': 13
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        45,
        -78
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 45,
      'y': -78
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -114,
        -32
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -114,
      'y': -32
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -79,
        8
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -79,
      'y': 8
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -75,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -75,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -116,
        -35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -116,
      'y': -35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        121,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 121,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        144,
        -26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 144,
      'y': -26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -166,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -166,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        102,
        24
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 102,
      'y': 24
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -30,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -30,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -131,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -131,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -96,
        -85
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -96,
      'y': -85
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        132,
        84
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 132,
      'y': 84
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        76,
        87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 76,
      'y': 87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        145,
        60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 145,
      'y': 60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -139,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -139,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -36,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -36,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        71,
        15
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 71,
      'y': 15
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        100,
        72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 100,
      'y': 72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        4,
        -82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 4,
      'y': -82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        31,
        66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 31,
      'y': 66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -69,
        9
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -69,
      'y': 9
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        26,
        29
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 26,
      'y': 29
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        170,
        -65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 170,
      'y': -65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        143,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 143,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -58,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -58,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -70,
        -43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -70,
      'y': -43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -68,
        -43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -68,
      'y': -43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -111,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -111,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        55,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 55,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        15,
        56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 15,
      'y': 56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -75,
        48
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -75,
      'y': 48
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        14,
        -4
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 14,
      'y': -4
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        141,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 141,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -27,
        65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -27,
      'y': 65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -86,
        11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -86,
      'y': 11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -134,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -134,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        2,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 2,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -8,
        -21
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -8,
      'y': -21
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -161,
        59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -161,
      'y': 59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        87,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 87,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        66,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 66,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        97,
        26
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 97,
      'y': 26
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        122,
        33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 122,
      'y': 33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -129,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -129,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        159,
        -39
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 159,
      'y': -39
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -2,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -2,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        48,
        -66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 48,
      'y': -66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -26,
        43
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -26,
      'y': 43
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -50,
        -87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -50,
      'y': -87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -141,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -141,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        32,
        -37
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 32,
      'y': -37
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        95,
        -5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 95,
      'y': -5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -68,
        -17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -68,
      'y': -17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        176,
        -6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 176,
      'y': -6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -159,
        -61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -159,
      'y': -61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        155,
        6
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 155,
      'y': 6
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -124,
        -20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -124,
      'y': -20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -51,
        -18
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -51,
      'y': -18
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -150,
        73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -150,
      'y': 73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        65,
        -57
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 65,
      'y': -57
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        19,
        -77
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 19,
      'y': -77
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -140,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -140,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -54,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -54,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -166,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -166,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        156,
        -53
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 156,
      'y': -53
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -80,
        22
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -80,
      'y': 22
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        86,
        -81
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 86,
      'y': -81
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        142,
        5
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 142,
      'y': 5
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -82,
        38
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -82,
      'y': 38
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -63,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -63,
      'y': -11
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        47,
        -25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 47,
      'y': -25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        21,
        -63
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 21,
      'y': -63
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -172,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -172,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        90,
        62
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 90,
      'y': 62
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        77,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 77,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        119,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 119,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        153,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 153,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        64,
        -40
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 64,
      'y': -40
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -16,
        -58
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -16,
      'y': -58
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -19,
        59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -19,
      'y': 59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        170,
        82
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 170,
      'y': 82
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        0,
        -52
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 0,
      'y': -52
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -132,
        -76
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -132,
      'y': -76
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        79,
        -42
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 79,
      'y': -42
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        106,
        -33
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 106,
      'y': -33
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        124,
        75
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 124,
      'y': 75
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -91,
        10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -91,
      'y': 10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        164,
        -10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 164,
      'y': -10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        36,
        14
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 36,
      'y': 14
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        9,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 9,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -132,
        -1
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -132,
      'y': -1
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        145,
        -41
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 145,
      'y': -41
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -39,
        25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -39,
      'y': 25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        110,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 110,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        113,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 113,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        93,
        19
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 93,
      'y': 19
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        51,
        -73
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 51,
      'y': -73
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        59,
        79
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 59,
      'y': 79
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        122,
        -56
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 122,
      'y': -56
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        16,
        0
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 16,
      'y': 0
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -4,
        -17
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -4,
      'y': -17
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        111,
        -89
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 111,
      'y': -89
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -21,
        -25
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -21,
      'y': -25
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        82,
        -60
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 82,
      'y': -60
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        29,
        -86
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 29,
      'y': -86
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        177,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 177,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        137,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 137,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -99,
        -65
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -99,
      'y': -65
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -57,
        -7
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -57,
      'y': -7
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        112,
        -28
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 112,
      'y': -28
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -99,
        20
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -99,
      'y': 20
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        148,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 148,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        75,
        -59
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 75,
      'y': -59
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        39,
        10
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 39,
      'y': 10
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -28,
        -35
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -28,
      'y': -35
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -119,
        30
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -119,
      'y': 30
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -51,
        -87
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -51,
      'y': -87
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -89,
        66
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -89,
      'y': 66
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -103,
        44
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -103,
      'y': 44
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -103,
        12
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -103,
      'y': 12
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -25,
        -50
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -25,
      'y': -50
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -151,
        67
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -151,
      'y': 67
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        135,
        -2
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 135,
      'y': -2
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        164,
        61
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 164,
      'y': 61
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        40,
        72
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 40,
      'y': 72
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -137,
        3
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -137,
      'y': 3
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -121,
        -51
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -121,
      'y': -51
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        37,
        49
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': 37,
      'y': 49
    }
  },
  {
    'point': {
      'name': 'point',
      'position': [
        -160,
        -11
      ]
    }
  },
  {
    'billboard': {
      'name': 'billboard',
      'x': -160,
      'y': -11
    }
  }
];


export const pointWithPath =
  [
    {
      'misc': {
        'name': 'misc',
        'position': [
          -84,
          47
        ],
        'id': 0
      }
    },
    {
      'misc': {
        'name': 'misc',
        'position': [
          -83,
          48
        ],
        'id': 1
      }
    },
    {
      'misc': {
        'name': 'misc',
        'position': [
          -82,
          49
        ],
        'id': 2
      }
    },
    {
      'misc': {
        'name': 'misc',
        'position': [
          -81,
          50
        ],
        'id': 3
      }
    },
    {
      'misc': {
        'name': 'misc',
        'position': [
          -80,
          51
        ],
        'id': 4
      }
    }
  ];


