const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/exhibition';
const secret = process.env.SECRET || 'indimee';

module.exports = {
  dbUri: dbUri,
  port: port,
  secret: secret
};
