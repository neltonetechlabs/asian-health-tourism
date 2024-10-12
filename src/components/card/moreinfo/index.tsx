"use client";
import React from "react";
interface MoreInfoCardProps {
  title: string;
  content: string;
}
const MoreInfoCard: React.FC<MoreInfoCardProps> = ({ title, content }) => {
  return (
    <section className="more-info-sec">
      <div className="sec-padd">
        <div className="app-container">
          <div className="more-info-sec-content">
            <h4>{title}</h4>
            <div className="more-html-content">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfoCard;
