export default class ReviewsController {
  constructor(router) {
    router.get('/favorable', this.getMostFavReviews)
  }

  async getMostFavReviews(req, res) {
    const reviews = [
      'Best freaking site ever',
      'I would give them all my money'
    ]
    const index = Math.floor(Math.random() * reviews.length - 1)
    console.log("Index", index)
    res.send({ message: reviews[index]})
  }
}