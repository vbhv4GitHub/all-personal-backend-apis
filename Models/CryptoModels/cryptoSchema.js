import mongoose from 'mongoose';

const cryptoSchema = mongoose.Schema({
   coinName: String,
   symbol: String,
   current_price: String,
   market_cap: String,
});

const cryptoModel = mongoose.model('cryptoData', cryptoSchema);
export default cryptoModel;
