import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import {
  Image,
  ContactWrapper,
  Button,
  BigCardManager,
  ButtonBack
} from './ManagerElements'
import axios from 'axios'

function About () {
  const [images, SetImages] = useState(false)
  const { push } = useHistory()

  const getPhotos = async () => {
    const { data } = await axios.get('http://ec2-54-175-45-141.compute-1.amazonaws.com:8080/api/v1/images?infos=true')
    SetImages(data)
  }
  const approvePhoto = async ({ _id }) => {
    await axios.put(`http://ec2-54-175-45-141.compute-1.amazonaws.com:8080/api/v1/images/${_id}`)
    getPhotos()
  }

  const goPage = () => push('/')

  useEffect(() => {
    if (!images) {
      getPhotos()
    }
  }, [images])

  const handlePhotos = () => {
    const response = []
    for (const image of images) {
      response.push(
        <tr>
          <td><img src={image.url} /></td>
          <td>{image._id}</td>
          <td>{image.filename.substring(0, 15)}</td>
          <td>{image.date}</td>
          <td>{image.status}</td>
          <td><Button onClick={() => approvePhoto(image)}>Aprovar</Button></td>
        </tr>
      )
    }
    return response
  }
  return (
    <ContactWrapper id='about'>
      <ButtonBack onClick={goPage}>Voltar</ButtonBack>
      <div className='Container'>
        <div className='SectionTitle'>Gerenciador de Fotos</div>
        <BigCardManager>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/2726/2726544.png'
            alt='man-svgrepo'
          />
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>Nome</th>
                <th>Data</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {images ? handlePhotos() : ''}
            </tbody>
          </Table>
        </BigCardManager>
      </div>
    </ContactWrapper>
  )
}

export default About
