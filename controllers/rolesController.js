const db = require("./../db/queries");

const rolesGet = (req, res) => {
  if (req.session.memberAuthErr) {
    res.render("roles", { memberAuthErr: req.session.memberAuthErr });
    delete req.session.memberAuthErr;
    return;
  }
  if (req.session.adminAuthErr) {
    res.render("roles", { adminAuthErr: req.session.adminAuthErr });
    delete req.session.adminAuthErr;
    return;
  }
  res.render("roles");
};

const rolesApplyPost = async (req, res, next) => {
  try {
    const role = req.params.role;
    // key is input value by user for auth key
    const key = req.body.key;

    if (role === "member") {
      console.log("member");
      console.log(key, typeof key);
      if (key === "20") {
        await db.grantMembership(req.user.id);
        res.redirect("/roles");
        return;
      }
      req.session.memberAuthErr = `Are you kidding ? You typed ${key}`;
    } else if (role === "admin") {
      if (key === "cat") {
        await db.grantAdminRole(req.user.id);
        res.redirect("/roles");
        return;
      }
      req.session.adminAuthErr = `Wrong answer. You typed "${key}". Hint: Passcode contains  3 letters`;
    }
    console.log("none");
    res.redirect("/roles");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  rolesGet,
  rolesApplyPost,
};
