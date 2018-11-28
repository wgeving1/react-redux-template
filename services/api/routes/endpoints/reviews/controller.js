import wrapAsyncFunc from '../../../common/async-wrapper'

export default class ReviewsController {
  constructor(router) {
    router.get('/favorable', wrapAsyncFunc(this.getMostFavReviews))
  }

  async getMostFavReviews(req, res) {
    const reviews = [
      'Best freaking site ever',
      'I would give them all my money'
    ]
    const index = Math.floor(Math.random() * reviews.length - 1)
    res.send({ message: reviews[index]})
  }
}
