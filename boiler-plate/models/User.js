const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // 빈칸 space 없애줌
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: { // 유효성검증위한
    type: String
  },
  tokenExp: { // 토큰 유효기간
    type: Number
  }
})


const User = mongoose.model('User', userSchema)

module.exports = {User} // 이 파일을 다른데서도 쓸수 있게 