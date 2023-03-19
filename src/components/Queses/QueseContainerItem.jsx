import { Card, CardGrid, FormItem, Radio, RadioGroup } from "@vkontakte/vkui"
import { useState } from "react"

const QueseContainerItem = ({
    option,
    id,
    setStorageAns = () => {},
    storageAns
}) => {
    const [reply, setReply] = useState()
    const [step, setStep] = useState(1)
    const [answers, setAnswers] = useState('')

    const handleChangeReply = (e) => {
        setStorageAns([...storageAns, e.target.value])
    }
    
    console.log("answers", option)

    return <FormItem><RadioGroup> <CardGrid size="m" style={{justifyContent: 'center' }}> 
            <Card mode="shadow" style={{width: '100%', paddingLeft: '2.5rem'}}>
                <div style={{height: 100, alignItems: 'center', display:'flex', justifyContent: 'center'}}>
                    <Radio name={option} value={option} onChange={handleChangeReply}>
                        {option}
                    </Radio>
                </div>
            </Card>
    </CardGrid></RadioGroup></FormItem>
}

export default QueseContainerItem