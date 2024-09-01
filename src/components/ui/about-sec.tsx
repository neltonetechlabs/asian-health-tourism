import StatCard from "./stat.card";

const AboutSection: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="left-sec-content">
        <h2>
          25 Years of doing <br />
          the impossible
        </h2>
        <div className="count-sec">
          <StatCard count="14+" title="Years of Experiences" />
          <StatCard count="648" title="Happy Clients" />
          <StatCard count="24/7" title="Service" />
        </div>
      </div>
      <div className="why-content">
        <h4>Why Asian Health Tourism Iran?</h4>
        <article>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing It was popularised in the
          1960s with the release of Letraset sheets containing containing It was
          popularised in the 1960s with
        </article>
      </div>
    </div>
  );
};

export default AboutSection;
