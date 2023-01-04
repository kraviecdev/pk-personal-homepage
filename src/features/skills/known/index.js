import jsonData from "../skills.json";
import {Section, SectionTitle} from "../../../components/Section";
import SkillsList from "../SkillsList";

const Known = () => {
  const knownSkills = jsonData.known;

  return (
    <Section>
      <SectionTitle>My skillset includes &#128640;</SectionTitle>
      <SkillsList
        data={knownSkills}
      />
    </Section>
  )
};

export default Known;