
/**
 * 
 * @param {import('@vercel/node').NowRequest} req 
 * @param {import('@vercel/node').NowResponse} res 
 */
module.exports = (req, res) => {
  
  res.status(200).send(process.env.FAUNA_SERVER_SECRET);
};
