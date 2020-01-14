import db from '../config/db.js'

const userModel = '../schema/user.js'
const ManagementDb = db.Management
const User = ManagementDb.import(userModel)

const getUserById = async function(id) {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  })
  return userInfo
}

const getUserByName = async function(name) {
  const userInfo = await User.findOne({
    where: {
      username: name
    }
  })
  return userInfo
}

export default {
  getUserById,
  getUserByName
}