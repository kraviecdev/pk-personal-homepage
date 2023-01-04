import jsonData from "../skills.json";
import {Section, SectionTitle} from "../../../components/Section";
import SkillsList from "../SkillsList";

const inProgress = () => {
  const skillsInProgress = jsonData.inProgress;

  return (
    <Section>
      <SectionTitle>What I want to learn next &#127891;</SectionTitle>
      <SkillsList
        data={skillsInProgress}
      />
    </Section>
  )
};

export default inProgress;