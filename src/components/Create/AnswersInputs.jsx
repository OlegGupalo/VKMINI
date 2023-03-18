import { Button, FormItem, Input } from "@vkontakte/vkui"
import './index.css'
import { useState } from "react"

export const AnswersInputs = ({
    onChangeAnswers = () => {},
    id,
    otherQuest,
    setQuestState = () => {}
}) => {
    const [correctInput, setCorrectInput] = useState('')
    const [incorrectInputOne, setIncorrectInputOne] = useState('')
    const [incorrectInputTwo, setIncorrectInputTwo] = useState('')

    const condition = !(correctInput.length > 3 && correctInput.length < 40 || incorrectInputOne.length > 3 && incorrectInputOne.length < 40 || incorrectInputTwo.length > 3 && incorrectInputTwo < 40)
    console.log("condition", condition) 
    return <>
        <FormItem>
            <Input 
                className="correctInput" 
                status="valid" 
                placeholder="Правильный ответ"
                value={correctInput}
                onChange={e => setCorrectInput(e.target.value)}
            />
        </FormItem>
        <FormItem>
            <Input 
                status="error" 
                placeholder="Непавильный ответ"
                value={incorrectInputOne}
                onChange={e => setIncorrectInputOne(e.target.value)}
            />
        </FormItem>
        <FormItem>
            <Input 
                status="error" 
                placeholder="Непавильный ответ"
                value={incorrectInputTwo}
                onChange={e => setIncorrectInputTwo(e.target.value)} 
            />
        </FormItem>
        <FormItem>
            <Button
            disabled={condition} 
            onClick={() => {
                const newItems = [...otherQuest]
                newItems[id] = {...newItems[id], answers: {
                    answer1: {
                        title: correctInput,
                        correct: true
                    },
                    answer2: {
                        title: incorrectInputOne,
                        correct: false
                    },
                    answer3: {
                        title: incorrectInputTwo,
                        correct: false
                    }
                }}
                setQuestState(newItems)
            }
            }>
                Сохранить
            </Button>
        </FormItem>
    </>
}