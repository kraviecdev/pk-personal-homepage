import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, selectProjects, selectProjectsStatus} from "./projectsSlice";
import {Section, SectionSubtitle, SectionTitle} from "../../components/Section";
import {GitHubIcon} from "../../components/Icons";
import Loading from "./Info/Loading";
import Error from "./Info/Error";
import Repos from "./Repos";

const Projects = () => {

  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const status = useSelector(selectProjectsStatus);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch])


  return (
    <Section portfolioSection>
      <GitHubIcon sectionIcon/>
      <SectionTitle portfolio>Portfolio</SectionTitle>
      <SectionSubtitle> My recent projects</SectionSubtitle>
      {status === "loading" && <Loading/>}
      {status === "error" && <Error/>}
      {status === "success" && <Repos
        projects={projects}
      />}
    </Section>
  )
}

export default Projects;