import Group from '../models/groups.js';
import { Router } from 'express';

const router = new Router();

router.get('/', async function (req, res) {
  try {
    const num = req.query?.number;
    const data = await Group.find(num ? { group_number: num } : {});
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});

router.post('/add', async function (req, res) {
  try {
    const group = new Group(req.body);
    await group.save();
    res.json({ message: 'Group has been created!' });
  } catch (err) {
    res.send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Group.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    res.send(err);
  }
});

router.delete('/:id', async function (req, res) {
  try {
    await Group.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.send(err);
  }
});

export default router;
