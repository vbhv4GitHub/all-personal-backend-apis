import mongoose from 'mongoose';

const cryptoSchema = mongoose.Schema({
   coinName: String,
   symbol: String,
   current_price: Number,
   market_cap: Number,
});

const cryptoModel = mongoose.model('cryptoData', cryptoSchema);
export default cryptoModel;
