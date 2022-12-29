import {Tile, TileLink, TileLinkContainer, TileTitle, TileWrapper} from "./styled";
import {DescriptionParagraph} from "../Description";

const ProjectTile = ({projects}) =>
  (
    <TileWrapper>
      {projects.map(project => (
        <Tile key={project.id}>
          <TileTitle>{project.name}</TileTitle>
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
          </TileLinkContainer>
          <TileLinkContainer>
            <DescriptionParagraph projectLink>
              Code:
            </DescriptionParagraph>
            <TileLink target="_blank" href={project.svn_url}>
              {project.svn_url}
            </TileLink>
          </TileLinkContainer>
        </Tile>
      ))}
    </TileWrapper>
  );

export default ProjectTile;