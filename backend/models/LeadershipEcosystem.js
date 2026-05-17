import mongoose from 'mongoose';

const LeadershipEcosystemSchema = new mongoose.Schema({
  chapterId: {
    type: String,
    required: true,
    default: "10X_DEV_CLUB_ALPHA"
  },
  operationalNodes: {
    ccoVisualState: { type: String, default: "VISUALS_ALIGNED_TO_BRAND" }, // Campus Creative Officer
    cmoCampaignStatus: { type: String, default: "HIGH_VISIBILITY_LAUNCHED" }, // Campus Marketing Officer
    cooOutreachMetrics: { type: Number, default: 1000000 } // Campus Outreach Officer
  },
  communityEngagement: {
    whatsappChannelSync: { type: Boolean, default: true },
    hackathonContestAlerts: { type: [String], default: ['SIH', 'ICPC', 'GSoC'] }
  },
  systemStatus: {
    layoutIntegrity: { type: String, default: "RENDERED_PERFECT_ON_TARGET_ONLY" },
    signalToNoiseRatio: { type: String, default: "SIGNAL_DOMINANT" }
  }
}, { timestamps: true });

export default mongoose.model('LeadershipEcosystem', LeadershipEcosystemSchema);