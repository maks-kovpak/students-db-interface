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
    res.json({ message: 'Student has been created!' });
  } catch (err) {
    res.send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    res.send(err);
  }
});

router.delete('/:id', async function (req, res) {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.send(err);
  }
});

export default router;
