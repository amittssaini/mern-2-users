const router = require('express').Router();
const {getAllUsers,getUserRegister,getUserByUsername} = require('../controllers/user.controller')
const {verifyAuth} = require('../middleware/verifyauth');

router.post('/register',getUserRegister)
router.get('/all',getAllUsers);
router.get('/:username',getUserByUsername)

module.exports= router;