import db from '../config/db'

const manageModel = '../schema/management.js'
const ManagementDb = db.Management
const management = ManagementDb.import(manageModel)

const getList = async function(params) {
  const result = await management.findAndCountAll({
    offset: (params.current - 1) * params.pageSize,
    limit: params.pageSize
  })
  
  return result
}

const add = async function(params) {
  const result = await management.create({
    username: params.username
  })
  return result
}

const del = async function(params) {
  const result = await management.destroy({
    where: {
      id: params.id
    }
  })
  return result
}

export default {
  getList,
  add,
  del
}