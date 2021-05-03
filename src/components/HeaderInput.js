import TextField from "@material-ui/core/TextField";
import React from "react";

class HeaderInput extends React.Component {
   state = {
      expertName: "",
   };

   render() {
      return (
         <form noValidate autoComplete="off" margin="dense">
            <TextField
               borderRadius="50%"
               label="Cari Expert"
               variant="outlined"
            />
         </form>
      );
   }
}

export default HeaderInput;
