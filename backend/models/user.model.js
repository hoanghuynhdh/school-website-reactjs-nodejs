const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  hovaten: {type: String,required: true},
  cmnd: {type: String,required: true},
  email: {type: String,required: true},
  dienthoai: {type: String,required: true},
  diachi: {type: String,required: true},
  ngaysinh: {type: String,required: true},
  gioitinh: {type: String,required: true},
  noisinh: {type: String,required: true},
  hedaotao: {type: String,required: true},
  nganhdangky: {type: String,required: true},
  dieukienxettuyen: {type: String,required: true},
  ghichu: {type: String},
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;