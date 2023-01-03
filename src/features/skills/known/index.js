import {Section} from "../../../components/Section";
import {SectionTitle} from "../../../components/Title";
import List from "../../../components/SkillsList";
import jsonData from "../skills.json";

const Known = () => {
  const knownSkills = jsonData.known;

  return (
    <Section>
      <SectionTitle>My skillset includes &#128640;</SectionTitle>
      <List
        data={knownSkills}
      />
    </Section>
  )
};

export default Known;