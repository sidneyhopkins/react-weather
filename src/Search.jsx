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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 3px;
  color: white;
`;

function Search( props ) {
  const { search, query, setQuery } = props;

  const handlePress = (e) => {
    if (e.key ==="Enter") {
      search()
    }
  }

  return (
    <SearchBox>

      <Input 
        autoComplete="off"
        type='text' 
        placeholder='Search' 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        onKeyPress={e => handlePress(e)}
      />
      <Button onClick={search} >
        <SearchIcon />
      </Button>   
    </SearchBox>
  );
}

export default Search;