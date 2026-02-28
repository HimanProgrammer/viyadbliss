"use client";
import { FaLeaf, FaUsers, FaBriefcase, FaSchool } from "react-icons/fa";

export default function SocialImpactSection() {
  return (
    <section className="social-impact-section">
      <div className="container">

        {/* Top Heading */}
        <div className="section-header text-center">
          <h2>Social Impact of Viyad Bliss</h2>
          <p className="subtitle">
            Our Commitment to Community & Sustainability
          </p>
          <p className="description">
            At Viyad Bliss, we believe development should uplift communities
            while preserving the environment. Our focus is on responsible
            growth, green planning, and meaningful local engagement.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="impact-grid">

          <div className="impact-card">
            <div className="icon"><FaBriefcase /></div>
            <h4>Empowering Communities Through Local Employment</h4>
            <ul>
              <li>Boosting Local Economy</li>
              <li>Supporting Small Vendors</li>
              <li>Encouraging Skilled Labor</li>
              <li>Creating Long-Term Opportunities</li>
            </ul>
          </div>

          <div className="impact-card">
            <div className="icon"><FaSchool /></div>
            <h4>Empowering Young Minds & Communities</h4>
            <ul>
              <li>Supporting Local Schools</li>
              <li>Promoting Educational Initiatives</li>
              <li>Community Development Activities</li>
              <li>CSR Activities</li>
            </ul>
          </div>

          <div className="impact-card">
            <div className="icon"><FaLeaf /></div>
            <h4>Environmental Responsibility</h4>
            <ul>
              <li>Green Planning & Landscaping</li>
              <li>Sustainable Infrastructure</li>
              <li>Eco-Friendly Development</li>
              <li>Long-Term Environmental Care</li>
            </ul>
          </div>

          <div className="impact-card">
            <div className="icon"><FaUsers /></div>
            <h4>Community Engagement</h4>
            <ul>
              <li>Local Participation</li>
              <li>Transparent Development</li>
              <li>Inclusive Growth Model</li>
              <li>Long-Term Relationship Building</li>
            </ul>
          </div>

        </div>
      </div>

      <style jsx>{`
        .social-impact-section {
          padding: 120px 20px;
          background: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .section-header {
          max-width: 800px;
          margin: 0 auto 70px auto;
        }

        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .subtitle {
          font-size: 18px;
          color: #6c757d;
          margin-bottom: 20px;
        }

        .description {
          font-size: 15px;
          color: #555;
          line-height: 1.7;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .impact-card {
          background: #ffffff;
          padding: 35px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: 0.4s ease;
        }

        .impact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .icon {
          font-size: 28px;
          color: #4caf50;
          margin-bottom: 15px;
        }

        .impact-card h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .impact-card ul {
          padding-left: 18px;
          margin: 0;
        }

        .impact-card li {
          font-size: 14px;
          margin-bottom: 8px;
          color: #555;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}