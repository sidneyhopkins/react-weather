import styled from "styled-components";
import { SearchOutlined } from '@material-ui/icons';


const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 3%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 60px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: white;
  
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
  background-color: steelblue;
  padding: 3px;
  color: white;
  transition: all 0.5s ease;


  &:hover {
    background-color: blue;
  }
`;

function Search( props ) {
  const { search, query, setQuery } = props;

    return (
        <SearchBox>
            <Input 
              type='text' 
              placeholder='Search...' 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              onKeyPress={search} 
              />
            <Icon onClick={search} >
                <SearchOutlined/>
            </Icon>
        </SearchBox>
    );
}

export default Search;