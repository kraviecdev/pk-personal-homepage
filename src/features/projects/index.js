import {SectionTitle} from "../../components/Title";
import {Section} from "../../components/Section";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, selectProjects} from "./projectsSlice";
import {useEffect} from "react";
import ProjectTile from "../../components/ProjectTile";
import {AdditionalInfo} from "../../components/Description";
import {GitHubIcon} from "../../components/Icons";

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
      <AdditionalInfo additionalPortfolio> My recent projects</AdditionalInfo>
      <ProjectTile
        projects={projects}
      />
    </Section>
  )
}

export default Projects;