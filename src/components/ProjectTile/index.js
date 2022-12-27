import {Tile, TileLink, TileLinkContainer, TileTitle} from "./styled";
import {DescriptionParagraph} from "../Description";

const ProjectTile = () => (
  <Tile>
    <TileTitle>Example Title</TileTitle>
    <DescriptionParagraph projectDescription>
      Project description, e.g. website where you can search for favourite movies and people.
      Project description, e.g. website where you can search.
    </DescriptionParagraph>
    <TileLinkContainer>
      <DescriptionParagraph projectLink>
        Demo:
      </DescriptionParagraph>
      <TileLink href="https://example.com/">
        https://example.com/
      </TileLink>
    </TileLinkContainer>
    <TileLinkContainer>
      <DescriptionParagraph projectLink>
        Code:
      </DescriptionParagraph>
      <TileLink href="https://example.com/">
        https://example.com/
      </TileLink>
    </TileLinkContainer>
  </Tile>
);

export default ProjectTile;