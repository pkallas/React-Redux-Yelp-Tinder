import yelpApi from '../yelp_api';
const router = require('express').Router();

router.get('/yelpResults', (req, res) => {
  return yelpApi.search(req.query)
  .then(response => res.json(response))
  .catch(err => console.error(err));
});

export default router;
