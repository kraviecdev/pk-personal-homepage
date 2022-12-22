import {Section} from "../../../components/Section";
import {SectionTitle} from "../../../components/Title";
import List from "../../../components/List";
import jsonData from "../skills.json";

const inProgress = () => {
  const skillsInProgress = jsonData.inProgress;

  return (
    <Section>
      <SectionTitle>What I want to learn next &#127891;</SectionTitle>
      <List
        data={skillsInProgress}
      />
    </Section>
  )
};

export default inProgress;