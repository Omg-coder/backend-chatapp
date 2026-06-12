const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

async function authMiddleware(req, res, next) {
  // console.log("Cookies : ", req.cookies);
  const token = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token.token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });
    req.user = user;
    next();
    // console.log("user from auth middleware", user);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}


module.exports = authMiddleware;