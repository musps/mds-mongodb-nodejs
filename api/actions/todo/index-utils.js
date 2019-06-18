const sendError = (res, message = null) => {
  res.status(500).json({
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
