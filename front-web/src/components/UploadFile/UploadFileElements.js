import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 5rem 0;
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
    border-radius: 3px;
`

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`
