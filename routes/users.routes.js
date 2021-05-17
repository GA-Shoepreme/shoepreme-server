const { Router } = require('express');
const router = Router();

const {
  createUser,
  getUsers,
  getUser,
  loginUser,
  logoutUser,
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser)

module.exports = router;
