import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function CategorySelect() {
   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <FormControl>
         <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            className="px-2 mt-3"
            inputProps={{}}
         >
            <MenuItem value="">Semua Kategori</MenuItem>
            <MenuItem value={10}>UI/UX</MenuItem>
            <MenuItem value={20}>Software Developer</MenuItem>
            <MenuItem value={30}>Product Management</MenuItem>
         </Select>
      </FormControl>
   );
}
