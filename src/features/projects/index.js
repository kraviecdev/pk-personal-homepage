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
  const Status = () => ({
    loading: <Loading/>,
    error: <Error/>,
    success: <Repos projects={projects}/>
  }[status]);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch])
  return (
    <Section portfolioSection>
      <GitHubIcon sectionIcon/>
      <SectionTitle portfolio>Portfolio</SectionTitle>
      <SectionSubtitle> My recent projects</SectionSubtitle>
      <Status />
    </Section>
  )
}

export default Projects;