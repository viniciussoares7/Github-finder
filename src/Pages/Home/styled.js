import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: grey;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
`

export const Content = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Display = styled.h1`
  box-shadow: 5px 5px 1px black;
  padding: 2rem;
  text-align: center;
  font-family: sans-Georgia, 'Times New Roman', Times, serif;
  font-size: 5rem;
`
export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const ErrorMsg = styled.span`
  display: block;
  font-size: 1rem;
  color: rgba(254, 144, 75, 1);
  font-weight: 600;
  margin-top: 1rem;
`
