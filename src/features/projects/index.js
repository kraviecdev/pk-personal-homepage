import {SectionTitle} from "../../components/Title";
import {ProjectsWrapper} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, selectProjects} from "./projectsSlice";
import {useEffect} from "react";
import ProjectTile from "../../components/ProjectTile";

const Projects = () => {

  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch])


  return (
    <ProjectsWrapper>
      <SectionTitle>Portfolio</SectionTitle>
      <p>My recent projects</p>
      <ProjectTile
        projects={projects}
      />
    </ProjectsWrapper>
  )
}

export default Projects;