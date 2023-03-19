import { Button, FormItem, Input } from "@vkontakte/vkui"
import './index.css'
import { useState } from "react"

export const AnswersInputs = ({
    id,
    otherQuest,
    setQuestState = () => {}
}) => {
    const [correctInput, setCorrectInput] = useState('')
    const [incorrectInputOne, setIncorrectInputOne] = useState('')
    const [incorrectInputTwo, setIncorrectInputTwo] = useState('')

    
    const condition = !(correctInput.length > 0 && incorrectInputOne.length > 0 && incorrectInputTwo.length > 0)

    const [saveOneTask, setSaveOneTask] = useState(false)

    return (<> 
        <FormItem>
            <Input 
                disabled={saveOneTask}
                className="correctInput" 
                status="valid" 
                placeholder="Правильный ответ"
                value={correctInput}
                onChange={e => setCorrectInput(e.target.value)}
            />
        </FormItem>
        <FormItem>
            <Input 
                disabled={saveOneTask}
                status="error" 
                placeholder="Непавильный ответ"
                value={incorrectInputOne}
                onChange={e => setIncorrectInputOne(e.target.value)}
            />
        </FormItem>
        <FormItem>
            <Input 
                disabled={saveOneTask}
                status="error" 
                placeholder="Непавильный ответ"
                value={incorrectInputTwo}
                onChange={e => setIncorrectInputTwo(e.target.value)} 
            />
        </FormItem>
        <FormItem>
            {!saveOneTask && <Button
                disabled={condition} 
                onClick={() => {
                    const newItems = [...otherQuest]
                    newItems[id] = {...newItems[id], 
                        options: [correctInput, incorrectInputOne, incorrectInputTwo],
                        answer: correctInput
                    }
                    setQuestState(newItems)
                    setSaveOneTask(currState => !currState)
                }
                }>
                    Сохранить
            </Button>}
            {saveOneTask && <Button style={{
                background: 'red',
                color: 'white'
            }} onClick={() => setSaveOneTask(currState => !currState)}>
                Назад    
            </Button>}
        </FormItem>
    </>)
}