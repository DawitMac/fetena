import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  exam: [
    {
      question: String,
      choices: [
        { value: String },
        { value: String },
        { value: String },
        { value: String },
      ],
      correctAnswer: String,
      explanation: String,
    },
  ],
  result: { type: Number, default: 0, required: true },
  image: { type: String, default: '' },
}, {
  timestamps: true,
});

const Exam = mongoose.models.Exam || mongoose.model('Exam', examSchema);

export default Exam;