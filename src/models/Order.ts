import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  id: Number,
  transaction_amount: Number,
  date_approved: String,
  first_six_digits: String,
  last_four_digits: String,
  display_name: String,
  email: String
})

export default mongoose.model('orders', Schema)
