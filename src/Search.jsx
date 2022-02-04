import styled from "styled-components";
import { SearchOutlined } from '@material-ui/icons';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: white;
  font-size: 0.9em;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 2px white;
    color: white;
  }

  &::placeholder {
    color: white;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  color: white;
`;

function Search( props ) {
  const { search, query, setQuery } = props;

    return (
        <SearchBox>
          <Icon onClick={search} >
            <SearchOutlined/>
          </Icon>
          <Input 
            type='text' 
            placeholder='Search...' 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            onKeyPress={search} 
            />
        </SearchBox>
    );
}

export default Search;