const mongoose = require('mongoose')

const EthnicityArray = new mongoose.Schema({
  value: {
    type: String,
    enum: ['ambiguous', 'asian', 'black', 'eastIndian', 'latinxHispanic', 'middleEastern', 'multiEthnic', 'nativeAmerican', 'pacificIslander', 'white']
  }
})

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'nonBinary']
  },
  transgender: {
    type: Boolean
  },
  ageFrom: Number,
  ageTo: Number,
  ethnicity: [EthnicityArray],
  height: Number,
  weight: Number,
  hairColor: {
    type: String,
    enum: ['brown', 'blonde', 'black', 'red', 'gray', 'bald', 'other']
  },
  hairLength: {
    type: String,
    enum: ['short', 'medium', 'long']
  },
  eyes: {
    type: String,
    enum: ['black', 'blue', 'brown', 'gray', 'green', 'hazel', 'other']
  },
  unionStatus: {
    type: String,
    enum: ['sag', 'nonUnion']
  },
  coat: Number,
  coatLength: {
    type: String,
    enum: ['S', 'R', 'L']
  },
  sleeve: Number,
  waist: Number,
  inseam: Number,
  bust: Number,
  cupSize: {
    type: String,
    enum: ['AA','A', 'B', 'C', 'D', 'DD/E', 'DDD/F', 'G']
  },
  hips: Number,
  dress: Number,
  shoes: Number,
  phoneNumber: String
})

module.exports = mongoose.model('User', UserSchema)