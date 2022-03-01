import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 20px;
  border-radius: 15px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: white;
  font-size: 1em;
  padding: 4px 0;
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
        <SearchIcon />
      </Icon>
      <Input 
        autoComplete="off"
        type='text' 
        placeholder='Search' 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        onKeyPress={search} 
      />
    </SearchBox>
  );
}

export default Search;