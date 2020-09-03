const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const hovaten = req.body.hovaten;
  const cmnd = req.body.cmnd;
  const email = req.body.email;
  const dienthoai = req.body.dienthoai;
  const diachi = req.body.diachi;
  const ngaysinh = req.body.ngaysinh;
  const gioitinh = req.body.gioitinh;
  const noisinh = req.body.noisinh;
  const hedaotao = req.body.hedaotao;
  const nganhdangky = req.body.nganhdangky;
  const dieukienxettuyen = req.body.dieukienxettuyen;
  const ghichu = req.body.ghichu;
  
  const newUser = new User({
    hovaten,
    cmnd,
    email,
    dienthoai,
    diachi,
    ngaysinh,
    gioitinh,
    noisinh,
    hedaotao,
    nganhdangky,
    dieukienxettuyen,
    ghichu
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;