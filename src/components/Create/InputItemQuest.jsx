import { FormItem, Input, Radio, RadioGroup } from "@vkontakte/vkui"
import { useEffect, useState } from "react"
import { AnswersInputs } from "./AnswersInputs"

export const InputItemQuest = ({
    id,
    updateQuest = () => {},
    setQuestState = () => {},
    otherQuest
}) => {
    const [state, setState] = useState('')
    const [answers, setAnswers] = useState({})

    
    const onAllAnswers = (object) => {
        setAnswers(object)
    }
    console.log("answaers", answers)
    

    return <FormItem>
        <Input value={state} placeholder="Вопрос" name={`field`} onChange={(e,index) => {
            setState(e.target.value)
            updateQuest(e.target.name, e.target.value, id)
        }} />
        <AnswersInputs onChangeAnswers={onAllAnswers} id={id} otherQuest={otherQuest} setQuestState={items => {
            console.log(items)
            setQuestState(items)
        }} />
    </FormItem>
}
