import {ListItem, UnorderedList} from "./styled";

const SkillsList = ({data}) => (
  <UnorderedList>
    {data.sort((a, b) => a.name.localeCompare(b.name)).map(item => (
      <ListItem key={item.id}>
        {item.name}
      </ListItem>
    ))}
  </UnorderedList>
);

export default SkillsList;