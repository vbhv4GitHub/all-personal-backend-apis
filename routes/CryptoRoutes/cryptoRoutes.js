import express from 'express';
import * as controller from '../../controller/CryptoController/cryptoController.js';

const router = express.Router();

router.get('/', controller.getAllCryptos);
router.get('/:id', controller.getCrypto);
router.post('/', controller.addCrypto);
router.delete('/:id', controller.deleteCrypto);
router.patch('/:id', controller.updateCrypto);

export default router;
