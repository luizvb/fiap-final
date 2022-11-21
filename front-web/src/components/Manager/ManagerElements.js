import styled from 'styled-components'

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`

export const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    float: right;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;`

export const ButtonBack = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    float: left;
    position: absolute;
    top: 1px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;`

export const BigCardManager = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  /* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); */
`

// left: -100px;
// width: fit-content;
// position: relative;
