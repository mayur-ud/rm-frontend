import { Box, Button, Text, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import AiForm from './AiForm'

import './Form.css'




const Form = () => {

    const handleClick = () => {
        console.log(`Searching for Text ${inpRef.current?.value}`)
        setShowForm(true)
    }
    
    const inpRef = useRef<HTMLInputElement>(null)
    const [showForm , setShowForm] = useState<Boolean>(false)


  return (
    <div>
        { showForm ? <Box className='box'>
                    <Text mx='md' sx={{display : 'inline-block'}}>Application ID : {inpRef.current?.value}</Text>
                    <Button mx='lg' color='green'>Check Result</Button>
                    </Box> 
        
        :
        <>
            <TextInput withAsterisk label='Application ID'
                    placeholder='Enter Your Application ID' 
                    size='md'
                    sx={{maxWidth : '40%'}}
                    ref={inpRef}>

            </TextInput>
            <Button my='md' onClick={handleClick}>Search</Button>
        </>}

        {showForm && <AiForm/>}
    </div>
  )
}

export default Form