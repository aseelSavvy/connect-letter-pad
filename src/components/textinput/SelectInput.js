// Material components
import { MenuItem, TextField } from "@mui/material";

export default function SelectInput(props) {
  //props destructuring
  const { label, dropdownValue, setDropdownValue, menuItems } = props;

  const handleTextInputChange = (e) => {
    setDropdownValue(e.target.value);
  };
  return (
    <TextField
      select
      varient="contained"
      value={dropdownValue}
      label={label}
      error={dropdownValue === "" ? true : false}
      helperText={dropdownValue === "" ? `${label} is required` : null}
      color="info"
      fullWidth
      onChange={handleTextInputChange}
      InputLabelProps={{ shrink: dropdownValue }}
    >
      {menuItems.map((menuItem) => (
        <MenuItem value={menuItem}>{menuItem}</MenuItem>
      ))}
    </TextField>
  );
}