import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, selectProjects} from "./projectsSlice";
import {Section, SectionSubtitle, SectionTitle} from "../../components/Section";
import {GitHubIcon} from "../../components/Icons";
import Repos from "./Repos";

const Projects = () => {

  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch])


  return (
    <Section portfolioSection>
      <GitHubIcon sectionIcon/>
      <SectionTitle portfolio>Portfolio</SectionTitle>
      <SectionSubtitle> My recent projects</SectionSubtitle>
      <Repos
        projects={projects}
      />
    </Section>
  )
}

export default Projects;