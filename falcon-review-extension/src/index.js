const { resolve } = require('path');
const typeDefs = require('fs').readFileSync(resolve(__dirname, 'schema.graphql'), 'utf8');
const { Extension } = require('@deity/falcon-server-env');

/**
 * Review extension
 *
 * Returns :
 * - list of reviews
 */
module.exports = class ReviewExtension extends Extension {
  async getGraphQLConfig() {
    return {
      schemas: [typeDefs],
      resolvers: {
        Query: {
          getReviews: (obj, args, context, info) => {
            return context.dataSources[this.api().name].getReviews(obj, args, context, info);
          }
        }
      }
    };
  }
};
