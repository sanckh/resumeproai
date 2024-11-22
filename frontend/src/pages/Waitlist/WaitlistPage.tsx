import React from "react";
import WaitlistWidget from "../../components/WaitlistWidget";
import "./WaitlistPage.css";

const WaitlistPage: React.FC = () => {
  return (
    <div className="waitlist-container">
      <header className="waitlist-header">
        <h1>Transform Your Career with AI-Powered Resumes</h1>
        <p>
          Join the future of resume building. Our AI-powered platform helps you create
          stunning, ATS-optimized resumes that get you noticed. Be among the first to
          experience the next generation of career tools.
        </p>
      </header>

      <section className="waitlist-features">
        <h2>Powerful Features Coming Soon</h2>
        <ul>
          <li>
            <strong>🤖 AI-Powered Resume Builder</strong>
            Create stunning resumes in minutes with smart content suggestions and
            real-time optimization tips.
          </li>
          <li>
            <strong>📊 ATS Score Optimization</strong>
            Get instant feedback on your resume's ATS compatibility and
            suggestions for improvement.
          </li>
          <li>
            <strong>🎯 Smart Job Matching</strong>
            Automatically tailor your resume to specific job descriptions with
            AI-powered keyword optimization.
          </li>
          <li>
            <strong>🔗 Portfolio Integration</strong>
            Seamlessly showcase your work by integrating your portfolio, GitHub,
            or personal website.
          </li>
          <li>
            <strong>✍️ AI Cover Letter Generator</strong>
            Create compelling cover letters that perfectly complement your resume
            and match job requirements.
          </li>
          <li>
            <strong>👥 Expert Feedback</strong>
            Share your resume securely and get valuable feedback from industry
            professionals.
          </li>
        </ul>
      </section>

      <WaitlistWidget />

      <footer className="waitlist-footer">
        <p>
          Have questions? We'd love to help!{" "}
          <a href="mailto:corey@thetechtalentblueprint.com">
            corey@thetechtalentblueprint.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default WaitlistPage;
