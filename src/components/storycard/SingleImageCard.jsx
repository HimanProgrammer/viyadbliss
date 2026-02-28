"use client";
import Image from "next/image";

export default function SingleImageCard() {
  return (
    <section className="section">
      <div className="card">

        {/* Single Image */}
        <div className="imageWrapper">
          <Image
            src="/img/storycard.png"   // put your image in public folder
            alt="Elegant Card"
            fill
            className="image"
          />
          <div className="overlay"></div>
        </div>

        {/* Content */}
        {/* <div className="content">
          <h3>Premium Living Experience</h3>
          <p>
            Discover elegant design, modern comfort, and timeless beauty crafted
            for a refined lifestyle.
          </p>
        </div> */}
      </div>

      <style jsx>{`
        .section {
          display: flex;
          justify-content: center;
          padding: 100px 20px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
        }

        .card {
          width:800px;
          height:500px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          transition: 0.5s ease;
        }

        .card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          height: 800px;
          overflow: hidden;
        }

        .image {
          object-fit: cover;
          transition: 0.6s ease;
        }

        .card:hover .image {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.1),
            rgba(0,0,0,0.6)
          );
        }

        .content {
          padding: 30px;
          color: #ffffff;
          text-align: center;
        }

        h3 {
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        p {
          font-size: 14px;
          opacity: 0.85;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}