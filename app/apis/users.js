import _ from 'lodash';

export default {
  getUsers: function() {
    return [
      {
        id: _.uniqueId(),
        name: 'Kir Gr',
        age: 32
      },
      {
        id: _.uniqueId(),
        name: 'Olga',
        age: 30
      },
      {
        id: _.uniqueId(),
        name: 'Darya',
        age: 5
      },
      {
        id: _.uniqueId(),
        name: 'Alex',
        age: 1
      }
    ];
  }
};
