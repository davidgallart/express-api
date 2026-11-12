export const log = (req, res, next) => {
  console.log('Esto es un middleware')
  next()
}
export const logger = (req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    console.log(
      `[${req.method}] ${req.originalUrl} ${res.statusCode} - ${Date.now()-start} ms`,
    )
  })
  next()
}
