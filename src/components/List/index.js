import { ListItem, UnorderedList} from "./styled";

const List = ({data}) => (
  <UnorderedList>
    {data.map(item => (
      <ListItem key={item.id}>
        {item.name}
      </ListItem>
    ))}
  </UnorderedList>
);

export default List;