module.exports = {
    isAdmin: (req, res, next) => {
      if (req.user && req.user.isAdmin) {
        return next();
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
    },
  
    isAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
    },
  };