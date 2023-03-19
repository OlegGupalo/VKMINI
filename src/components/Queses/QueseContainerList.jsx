import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {Group, FormItem,Title,CardGrid, Card, RadioGroup, Radio, Button, FormLayout} from '@vkontakte/vkui';
import QueseContainer from './QueseContainer';
import QueseContainerItem from './QueseContainerItem';
import { storage } from '../../firebase/config';


let QueseContainerList = ({
    id,
    field,
    options,
    storageAns,
    setStorageAns = () => {},
    answer,
    length,
}) => {
    return (
        <>
            <Group style={{height:500}}>
                <CardGrid size="m" style={{ justifyContent: 'center' }}> 
                    <Card style={{
                        width: '100%'
                    }} mode="shadow">
                        <div style={{height: 100, alignItems: 'center', display:'flex', justifyContent: 'center'}}>
                            <Title level="1" weight='1' style={{
                            }}>
                                {field}
                            </Title>
                        </div>
                    </Card>
                </CardGrid>
            <FormLayout>
                <RadioGroup >
                    {options.map((e, index) => {
                        return <QueseContainerItem id={id} setStorageAns={item => setStorageAns(item)} storageAns={storageAns} key={index} option={e} />
                    })}
                    
                </RadioGroup>
            </FormLayout>
        </Group>
      </>
    )
}
QueseContainerList = React.memo(QueseContainerList)
export default QueseContainerList