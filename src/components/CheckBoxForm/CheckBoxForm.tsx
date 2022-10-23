import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import State from "../../state/State";
import React, {useEffect, useState} from "react";
import CheckBoxSingle from "./CheckBoxSingle/CheckBoxSingle";

interface answers {
    id: number,
    answer: number
}

interface variantIc{
    id: number,
    variant: string
}

interface props {
    state: variantIc[],
    id: number,
    AnswerList: answers[],
    setAnswerList:  React.Dispatch<React.SetStateAction<answers[]>>
}

const CheckBoxForm = ({state, AnswerList, setAnswerList, id}:props) =>{
    const [checked, setChecked] = useState<number>(-1)

    useEffect(() => {
        for (let i = 0; i< AnswerList.length; i++){
            if(AnswerList[i].id === id){
                setChecked(AnswerList[i].answer)
            }
        }
    }, [])

    useEffect(() => {
        let answer: answers = {
            id : id,
            answer: checked
        }

        setAnswerList(oldArr => [...oldArr, answer])
    }, [checked])

    const CheckList = state.map(variant => <CheckBoxSingle key={variant.id} checked={checked} setChecked={setChecked} label={variant.variant} variant_id={variant.id}/>)
    return (
        <FormGroup>
            {CheckList}
        </FormGroup>
    );

}

export default CheckBoxForm