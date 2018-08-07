const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const mutation = require('../mutations');
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root queries',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
