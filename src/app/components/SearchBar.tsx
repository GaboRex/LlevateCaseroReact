import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)({
  color: "#fff",
  "& .MuiSelect-root": {
    background: "#fff",
    borderRadius: "4px",
    padding: "4px 8px",
  },
});

const SearchBar = ({ filterCategory, onFilterCategoryChange }) => {
  return (
    <div>
      <FormControl>
        <StyledSelect
          value={filterCategory}
          onChange={onFilterCategoryChange}
          displayEmpty
        >
          <MenuItem value="">Todas</MenuItem>
          <MenuItem value="Entretenimiento">Entretenimiento</MenuItem>
          <MenuItem value="Comida">Comida</MenuItem>
          <MenuItem value="Porcelana">Porcelana</MenuItem>
          <MenuItem value="Fortuna">Fortuna</MenuItem>
          <MenuItem value="Miniaturas">Miniaturas</MenuItem>
          <MenuItem value="estudios">Estudios</MenuItem>
        </StyledSelect>
      </FormControl>
    </div>
  );
};

export default SearchBar;
