import Student from '../models/students.js';
import { Router } from 'express';

const router = new Router();

router.get('/', async function (req, res) {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});

router.post('/add', async function (req, res) {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: 'Student created!' });
  } catch (err) {
    res.send(err);
  }
});

router.delete('/:id', async function (req, res) {
  try {
    await Student.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json({ message: 'Successfully deleted' });
  } catch (err) {
    res.send(err);
  }
});

export default router;
