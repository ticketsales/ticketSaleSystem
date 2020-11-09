module.exports = {    
    settings: {
      cors: {
        origin: ['http://localhost:3000','http://localhost:1337'],
      },
    },
    load: {
        before: ['responseTime', 'logger', 'cors', 'responses'],
        order: [],
        after: ['parser', 'router'],
    },
  };