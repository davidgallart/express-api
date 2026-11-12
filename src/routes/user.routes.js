import express from 'express'
import { logger } from '../middelwares/log.js'
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', logger, getUsers)

router.post('/', [logger], createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router
