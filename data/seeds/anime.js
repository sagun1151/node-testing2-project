exports.seed = function (knex) {
    return knex('anime').truncate()
      .then(function () {
        return knex('anime').insert([
          { name: 'Fire Force', rating: 10, description: 'Guy that fight living fire with fire coming from his feet'},
          { name: 'JuJutsu Kaisen', rating: 10, description: 'Guy eats a finger and had the strongest curse living in him' },
          { name: 'Bleach', rating: 9, description: 'Guy with Orange hair get a sword thats too big', },
        ]);
      });
  };