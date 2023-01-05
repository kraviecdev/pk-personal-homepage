import {Tile, TileDescription, TileLink, TileLinkContainer, TileTitle, TileWrapper} from "./styled";

const Repos = ({projects}) =>
  (
    <TileWrapper>
      {projects.map(project => (
        project.homepage &&
        <Tile key={project.id}>
          <TileTitle>{project.name.replaceAll("-", " ")}</TileTitle>
          <TileDescription>
            {project.description}
          </TileDescription>
          <TileLinkContainer>
            <TileDescription>
              Demo:
            </TileDescription>
            <TileLink target="_blank" href={project.homepage}>
              {project.homepage}
            </TileLink>
            <TileDescription>
              Code:
            </TileDescription>
            <TileLink target="_blank" href={project.html_url}>
              {project.html_url}
            </TileLink>
          </TileLinkContainer>
        </Tile>
      ))}
    </TileWrapper>
  );

export default Repos;