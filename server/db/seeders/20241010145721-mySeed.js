'use strict';

const { Tea } = require('../models');
const { User } = require('../models');

//
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      // { name: 'Alex', email: '111@111', password: bcrypt.hashSync('111', 10) },
      // { name: 'Sam', email: '222@222', password: bcrypt.hashSync('222', 10) },
      // { name: 'Bob', email: '333@333', password: bcrypt.hashSync('333', 10) },
      { name: 'Alex', email: '111@111', password: '111' },
      { name: 'Sam', email: '222@222', password: '222' },
      { name: 'Bob', email: '333@333', password: '333' },
    ]);
    await Tea.bulkCreate([
      {
        title: 'Чабрец и драконья кровь',
        desc: 'Экзотический чай с ароматом чабреца и нотками драконьей крови, придающими чаю магическую силу. Идеально подходит для волшебников и колдунов.',
        url: './thyme-dragon-blood-tea.jpg',
      },

      {
        title: 'Звездная пыль и мята',
        desc: 'Небесный напиток с легким вкусом мяты и звездной пылью, которая придает чаю магические свойства. Поднимает настроение и дарит чувство легкости.',
        url: './star-dust-mint-tea.jpg',
      },

      {
        title: 'Огонь и черная смородина',
        desc: 'Огненный чай с ярким вкусом черной смородины и ароматом феи-огня, который наделяет чай магической энергией. Идеально для тех, кто ищет вдохновения.',
        url: './fairy-fire-blackcurrant-tea.jpg',
      },

      {
        title: 'Ледяная королева и лимон',
        desc: 'Прохладный чай с освежающим вкусом лимона и ледяной королевы, которая наделяет чай магической прохладой. Отлично подходит для жарких дней.',
        url: './ice-queen-lemon-tea.jpg',
      },

      {
        title: 'Грифон и яблоко',
        desc: 'Могущественный чай с вкусом яблока и ароматом грифона, который наделяет чай силой и мудростью. Идеально для тех, кто ищет магическое знание.',
        url: './griffon-apple-tea.jpg',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
