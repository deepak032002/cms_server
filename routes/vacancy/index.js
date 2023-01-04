const { Router } = require("express");
const staffSchemaValidate = require("../../middleware/staffValidation");
const Staff = require("../../model/staff");
const upload = require("../../middleware/uploadFile");
const router = Router();

// Get Staff
router.get("/", (req, res) => {
  try {
    const { error } = staffSchemaValidate.validate(req.body);
    if (error) {
      res.json({ error: error.details, success: false });
    } else {
      const data = Staff(req.body);
      if (data) {
        data.save();
        res.json({ msg: "Created Successfully", success: true });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// Create Staff
router.post("/", upload.single("image"), (req, res) => {
  try {
    req.body.image = "/" + req.file.path;
    console.log(req.body);
    const { error } = staffSchemaValidate.validate(req.body);
    if (error) {
      res.json({ error: error.details, success: false });
    } else {
      const data = Staff(req.body);
      if (data) {
        data.save();
        res.json({ msg: "Created Successfully", success: true });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
