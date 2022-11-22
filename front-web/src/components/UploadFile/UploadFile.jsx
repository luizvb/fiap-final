import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import FormData from 'form-data'
import { Wrapper, Button } from './UploadFileElements'

function UploadFile () {
  const [isLoading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState()
  const [send, setSend] = useState(false)

  const changeHandler = (event) => {
    setSend(false)
    setSelectedFile(event.target.files[0])
  }

  const handleClick = async () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('image', selectedFile)
    await axios.post('http://ec2-54-175-45-141.compute-1.amazonaws.com:8080/api/v1/images', formData)
    setLoading(false)
    setSend(true)
  }
  return (
    <Wrapper id='upload'>
      <div className='Container'>
        <div className='SectionTitle'>Envie as fotos que você tirou tbm... :)</div>
        <div className='BigCard'>
          <Form.Group controlId='formFile' className='mb-3'>
            <Form.Control type='file' onChange={changeHandler} />
            <Button disabled={send} primary onClick={!isLoading ? handleClick : null}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </Form.Group>
          {send ? <h1 style={{ color: 'black', float: 'right', 'font-weight': '400' }}>Sua foto foi enviada com sucesso. Aguarde a aprovação para ve-la na galeria</h1>
            : ''}
        </div>
      </div>
    </Wrapper>
  )
}

export default UploadFile
