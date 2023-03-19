import { Button, Div, Group, Panel, PanelHeader, PanelHeaderBack, Paragraph } from "@vkontakte/vkui";
import { useEffect, useState } from "react"
import bridge from '@vkontakte/vk-bridge';  
import { useRouter } from "@happysanta/router";

const Result = ({id}) => {
    return <>
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => router.popPage()} />}>Результаты</PanelHeader>
            <Group>
                <Div>
                    Resultsasdsa
                </Div>
            </Group>
        </Panel>
    </>
}

export default Result