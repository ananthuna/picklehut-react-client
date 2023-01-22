import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { UserContext } from '../../../Context/Context';

export default function RadioButtonsGroup() {
  const { method, setMethod } = React.useContext(UserContext)

  const handleChange = (e) => {
    setMethod(e.target.value)
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Payment options</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={method}
        onChange={handleChange}
      >
        <FormControlLabel value="COD" control={<Radio />} label="COD" />
        <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
        <FormControlLabel value="Net banking" control={<Radio />} label="Net banking" />
      </RadioGroup>
    </FormControl>
  );
}