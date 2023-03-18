import { Button, Div, FormItem, FormLayout, FormLayoutGroup, Input } from "@vkontakte/vkui"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useCallback, useState } from "react"
import './index.css'
import { InputItemQuest } from "./InputItemQuest"

const quese = {
    name: '',
    description: '',
    questions: [
        {
            title: '',
            answers: [
                {
                    answerName: '',
                    correct: Boolean
                },
                {
                    answerName: '',
                    correct: Boolean
                },
                {
                    answerName: '',
                    correct: Boolean
                },
                {
                    answerName: '',
                    correct: Boolean
                },
            ]
        }
    ]
}

function isNumber(str) {
    if (str.trim() === '') {
      return false;
    }
  
    return !isNaN(str);
  }

export const Create = () => {
    const [titleQuese, setTitleQuese] = useState('')
    const [questionCount, setQuestionCount] = useState('')
    const [activeCount, setActiveCount] = useState(false)

    const [otherQuest, setOtherQuest] = useState([])
    const onChangeOtherQuest = useCallback((name, value, id, answers) => {
        const newItems = [...otherQuest]
        newItems[id] = {...newItems[id], [name]: value, answers}
        setOtherQuest(newItems)
    }, [])

    const collectionRef = collection(db, 'queses')
    const createQuese = async () => {
        const createdAt = serverTimestamp()
        let data;
        if(titleQuese.length > 5 && titleQuese.length < 40 && otherQuest) {
            data = {
                title: titleQuese,
                questions: otherQuest,
                createdAt,
            }
            await addDoc(collectionRef, data)
        }
        
    }

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
    
        const setStateAction = {
          title: setTitleQuese,
          questionCount: setQuestionCount
        }[name];
    
        setStateAction && setStateAction(value);
    };

    console.log("number", typeof(questionCount), typeof(Number(questionCount)))

    const handleChange = event => {
        setQuestionCount(event.target.value);
    
        if (isNumber(event.target.value)) {
          console.log('✅ It is a valid number');
        } else {
          console.log('⛔️ It is NOT a valid number');
        }
      };

    const condition = !(titleQuese.length > 5 && titleQuese.length < 40 && isNumber(questionCount))
    const createTotalQuestions = (e) => {
        setActiveCount(currState => !currState)
    }
    console.log(Array.from({ length: 3 }))

    const components = Array.from({ length: Number(questionCount) }).map((_, i) => {
        return <InputItemQuest 
            key={i} 
            name={`field${i}`} 
            otherQuest={otherQuest} 
            setQuestState={item => {
                setOtherQuest(item)
                console.log("PARENT", item)
            }} 
            id={i} 
            updateQuest={onChangeOtherQuest} 
        />
      });

    return <FormLayout>
        <FormItem 
            top="Название вопроса"

        >
            <Input className="nameOneQuestion" placeholder="Название квиза" type="text" name="title" value={titleQuese} onChange={onChange}/>
        </FormItem>
        <FormLayoutGroup mode="horizontal">
            <FormItem 
                top="Количество вопросов"
                status={isNumber(questionCount) ? 'valid' : 'error'}
                bottom={
                    isNumber(questionCount) ? 'It is a valid number' : 'It is NOT a valid number'
                }
            >
                <Input className="" type="text" name="questionLength" value={questionCount} onChange={handleChange} />
            </FormItem>
            <FormItem>
                <Button onClick={createTotalQuestions} disabled={!isNumber(questionCount)}>Сохранить</Button>
            </FormItem>
        </FormLayoutGroup>
        {activeCount && 
            components
        }
        <FormItem>
            <Button disabled={condition} size="l" style={{
                marginBottom: '3rem'
            }} stretched onClick={createQuese}>
                Создать
            </Button>
        </FormItem>
    </FormLayout>
}