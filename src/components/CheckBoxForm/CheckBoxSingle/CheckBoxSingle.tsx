import {Checkbox, FormControlLabel} from "@mui/material";
import React from "react";

interface props{
    checked: number,
    setChecked:  React.Dispatch<React.SetStateAction<number>>,
    label: string,
    variant_id: number

}

const CheckBoxSingle = ({checked, setChecked, variant_id, label}:props) => {
    return(
        <FormControlLabel
            control={<Checkbox
                defaultChecked
                color="success"
                onChange={() => checked !== variant_id ? setChecked(variant_id) : setChecked(-1)}
                checked={checked === variant_id}/>}
            label={label} />
    )
}

export default CheckBoxSingle;