import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

const HeaderInput = () => {
   const [expertName, setExpertName] = useState("");

   return (
      <form noValidate autoComplete="off" margin="dense">
         <TextField borderRadius="50%" label="Cari Expert" variant="outlined" />
      </form>
   );
};

export default HeaderInput;
