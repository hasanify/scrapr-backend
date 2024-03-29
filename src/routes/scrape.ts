import ScrapeControllers from '@/controllers/scrape';
import validate, {attachValidator} from '@/middlewares/validator';
import express from 'express';
const router = express.Router();

router.get('/', attachValidator(validate.scrape), ScrapeControllers.get);

export default router;
