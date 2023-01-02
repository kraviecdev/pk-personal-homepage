import {Tile, TileLink, TileLinkContainer, TileTitle, TileWrapper} from "./styled";
import {DescriptionParagraph} from "../Description";

const ProjectTile = ({projects}) =>
  (
    <TileWrapper>
      {projects.map(project => (
        project.homepage &&
        <Tile key={project.id}>
          <TileTitle>{project.name.replaceAll("-", " ")}</TileTitle>
          <DescriptionParagraph projectDescription>
            {project.description}
          </DescriptionParagraph>
          <TileLinkContainer>
            <DescriptionParagraph projectLink>
              Demo:
            </DescriptionParagraph>
            <TileLink target="_blank" href={project.homepage}>
              {project.homepage}
            </TileLink>
            <DescriptionParagraph projectLink>
              Code:
            </DescriptionParagraph>
            <TileLink target="_blank" href={project.html_url}>
              {project.html_url}
            </TileLink>
          </TileLinkContainer>
        </Tile>
      ))}
    </TileWrapper>
  );

export default ProjectTile;