const { ApiDataSource } = require('@deity/falcon-server-env');

module.exports = class ReviewApi extends ApiDataSource {
    async getReviews(obj, args, context, info) {
      return this.get(`/comments?_page=1`)
    }
  }