const sendError = (res, message = null, code = 500) => {
  res.status(code).json({
    message
  })
}

const sendSuccess = (res, data = {}, message = null) => {
  res.status(200).json({
    data,
    message
  })
}

module.exports = {
  sendError,
  sendSuccess
}
