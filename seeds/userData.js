const { User } = require('../models');

const userData = [{
        username: 'ABlackmon1107',
        password: 'Aireeal.7'

    },
    {
        username: 'DEvans0322',
        password: 'Ish2018'
    },
    {
        username: 'MMiller1222',
        password: 'Maximus2221'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;