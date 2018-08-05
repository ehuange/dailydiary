const sequelize = require('./index.js');
const { Post } = require('./schema.js');

const buildTables = async () => {
  try {
    await sequelize.authenticate();
    await Post.sync({ force: false });
    console.log('----All tables have been created----');
    process.exit();
  } catch (error) {
    console.log('Error with buildTables', error);
    return;
  }
}

buildTables();