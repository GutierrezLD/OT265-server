const router = require('express').Router();

//-------------------Middlewares----------------------//

const { isAdmin } = require('../middlewares/isAdmin');
const isAuthenticated = require('../middlewares/isAuthenticated');

//-------------------Controllers----------------------//
const { listarSlides, deleteSlide, slideDetails, editSlide } = require('../controllers/slides_controllers');

router.put('/:id', [
    isAuthenticated,
    isAdmin
], editSlide);




router.get('/', [
    isAuthenticated,
    isAdmin
], listarSlides);


router.get('/:id', slideDetails);



module.exports = router;