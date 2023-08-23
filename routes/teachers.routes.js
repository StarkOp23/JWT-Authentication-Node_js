const express = require('express')
const { registerTeacher, loginTeacher, getAllTeachers } = require("../controller/teacher.controller");
const auth = require('../services/authService');

let router = express.Router();

router.post("/addteacher", registerTeacher);
router.post("/loginteacher", loginTeacher)
router.get("/getteachers",auth, getAllTeachers)



module.exports = router;