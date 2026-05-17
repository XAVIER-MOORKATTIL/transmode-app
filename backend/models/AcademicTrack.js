import mongoose from 'mongoose';

const AcademicTrackSchema = new mongoose.Schema({
  learnerName: {
    type: String,
    required: true,
    default: "Xavier"
  },
  universityCredentials: {
    degree: { type: String, default: "B.E. EXTC Engineering" },
    institution: { type: String, default: "Mumbai University" }
  },
  curriculumProgress: {
    dsaCompleted: { type: Boolean, default: true },
    systemDesignProficiency: { type: String, enum: ['LLD', 'HLD', 'Expert'], default: 'Expert' },
    generativeAIModules: [{ type: String, default: ['Prompt Engineering', 'LLM Alignment', 'Neural Networks'] }]
  },
  executionTelemetry: {
    timeComplexityScore: { type: String, default: "O(N log N)" },
    replicatedLinesCount: { type: Number, default: 10000 },
    methodologyUsed: { type: String, default: "Blind Copy/Paste Engine" }
  }
}, { timestamps: true });

export default mongoose.model('AcademicTrack', AcademicTrackSchema);