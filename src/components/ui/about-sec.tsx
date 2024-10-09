import useAppLocale from "@/hooks/useAppLocale";
import StatCard from "./stat.card";
import { AboutContent } from "@/models/api.data";

interface AboutSectionProps {
  aboutcontent: AboutContent | null;
  locale: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutcontent,
  locale,
}) => {
  const { translate } = useAppLocale({ locale });
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div className="left-sec-content">
        <h2>{translate("caption", aboutcontent)}</h2>
        <div className="count-sec">
          <StatCard
            count={`${aboutcontent?.years_of_experience}+`}
            title="Years of Experiences"
          />
          <StatCard
            count={aboutcontent?.happy_clients.toString() || ""}
            title="Happy Clients"
          />
          <StatCard
            count={aboutcontent?.service?.toString() || ""}
            title="Service"
          />
        </div>
      </div>
      <div className="why-content">
        <h4>Why Asian Health Tourism Iran?</h4>
        <article>{translate("why_us", aboutcontent)}</article>
      </div>
    </div>
  );
};

export default AboutSection;
