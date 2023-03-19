import { useParams, useRouter } from "@happysanta/router"
import { 
    Panel,
    PanelHeader, 
    PanelHeaderBack, 
    ScreenSpinner,
    Gallery,
    Group, 
    FormItem,
    Button,
    Div, 
    Title,
    Card
} from "@vkontakte/vkui"
import {useState } from "react"
import { useQuese } from "../../hooks/useQuese"
import QueseContainerList from './QueseContainerList'
import bridge from '@vkontakte/vk-bridge';
import { Icon16Share } from '@vkontakte/icons';

const QueseContainer = ({
    ids
}) => {
    const router = useRouter()
    const {id} = useParams()
    const [slideIndex, setSlideIndex] = useState(0);
	const [isDraggable, setIsDraggable] = useState(false);
	const [showArrows, setShowArrows] = useState(false);
    const [endFulTest, setEndFulTest] = useState(false)    
    const [resultTest, setResultTest] = useState(null)
    const {docs} = useQuese(id)
    console.log(docs)

    const [storageAns, setStorageAns] = useState([])
    console.log("storage", storageAns)


    const shareTest = async () => {
        const share = bridge.send('VKWebAppShare', {
            link: `https://vk.com/app51584206#product/${id}`
            })
            .then((data) => {
            console.log(data) 
              if (data.result) {
                // Запись размещена
              }
            })
            .catch((error) => {
              // Ошибка
              console.log(error);
            });
    }
    let trueAnswer;
    if(docs.questions) {

        trueAnswer = docs.questions.map(e => e.answer)
    }

    const endQuiz = () => {
        setResultTest(trueAnswer.filter(x => storageAns.includes(x)))
        setEndFulTest(true)
        
    }
    return <Panel id={ids}>
        {!docs ? <ScreenSpinner state="loading" /> : <>
            <PanelHeader 
                before={<PanelHeaderBack onClick={() => router.popPage()} />}
            >
                {docs.title}
            </PanelHeader>
            <Group style={{
                width: '100%'
            }}>
                <Gallery
                    slideWidth="100%"
                    align="center"
                    style={{ height: 500 }}
                    slideIndex={slideIndex}
                    onChange={setSlideIndex}
                    isDraggable={isDraggable}
                    showArrows={showArrows}
                >
                    {docs.questions && docs.questions.map((e,key) => <QueseContainerList 
                        storageAns={storageAns}
                        length={docs.questions.length} 
                        setStorageAns={item => setStorageAns(item)} 
                        key={key} 
                        id={key} 
                        {...e} 
                        step={slideIndex} 
                    />)}
                    <Div>Результаты</Div>
                    

                </Gallery>
                <FormItem style={{
                }}>
                    <Div style={{width:'70%', margin: 'auto'}}>
                        <Button  size="l" stretched onClick={() => setSlideIndex(slideIndex - 1)}>
                            Предыдущий вопрос
                        </Button>
                    </Div>
                    {docs.questions ? !(slideIndex + 1 === docs.questions.length) ? <Div style={{width:'70%', margin: 'auto'}}>
                        <Button size="l" stretched onClick={() => setSlideIndex(slideIndex + 1)}>
                            Следующий вопрос
                        </Button>
                    </Div>
                    : <Div style={{width:'70%', margin: 'auto'}}>
                        <Button size="l" stretched style={{background: 'yellow', color: 'blue'}} onClick={endQuiz}>Закончить</Button>
                    </Div> : <></>}
                </FormItem>
                    {endFulTest && <Div style={{
                        marginBottom: '3rem',
                        marginTop: '1em',
                    }}>
                        <Card style={{
                            padding: '1.5rem',
                            marginBottom: '1rem'
                        }}>

                            <h1>Результаты: </h1>
                            <p>У вас {resultTest.length} правильный ответ</p>
                        </Card>
                            <Title>Поделись своим результатом с друзьями!</Title>
                        <Div>
                            <Button 
                                before={<Icon16Share onClick={shareTest} />}
                            >Поделиться</Button>
                        </Div>
                    </Div>
                    }
            </Group></>
        }
    </Panel>
}

export default QueseContainer