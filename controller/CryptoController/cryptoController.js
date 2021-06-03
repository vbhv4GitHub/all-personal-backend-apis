import mongoose from 'mongoose';
import cryptoModel from '../../Models/CryptoModels/cryptoSchema.js';

export const getAllCryptos = async (req, res) => {
   try {
      const allCryptos = await cryptoModel.find();
      res.status(200).json(allCryptos);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const getCrypto = async (req, res) => {
   const { id } = req.params;
   try {
      const Crypto = await cryptoModel.findById(id);
      res.status(200).json(Crypto);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const addCrypto = async (req, res) => {
   const Crypto = req.body;

   const newCrypto = new cryptoModel(Crypto);

   try {
      await newCrypto.save();
      res.status(201).json(newCrypto);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateCrypto = async (req, res) => {
   const { id } = req.params;
   const { coinName, symbol, current_price, market_cap } = req.body;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Crypto with id: ${id}`);

   const updatedCrypto = {
      coinName,
      symbol,
      current_price,
      market_cap,
      _id: id,
   };

   await cryptoModel.findByIdAndUpdate(id, updatedCrypto, {
      new: true,
   });
   res.json(updatedCrypto);
};

export const deleteCrypto = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send('No Crypto with that id');

   await cryptoModel.findByIdAndDelete(id);

   res.json({ message: 'Post deleted successfully.' });
};
