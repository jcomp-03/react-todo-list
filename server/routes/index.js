const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// catch all for any route not defined abvoe
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error! Your search URL cannot be found.</h1>');
});

module.exports = router;