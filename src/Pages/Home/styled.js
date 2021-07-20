import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flexbox;
  align-items: center;
  justify-content: center;
  background-color: grey;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2.8rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  background-color: black;
  color: #03e9f4;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 1rem 0.5rem;
  border-radius: 4px;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin: 0.5rem;
  font-family: 'Roboto', sans-serif;
  filter: hue-rotate(0deg);
  border: 2px solid #d2bdff;
  transition: all 0.1s linear;
  background-color: black;

  &:hover {
    border: 1px solid transparent;
    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #3a86ff);
        animation: animate1 1s linear infinite;
      }
      @keyframes animate1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }

      &:nth-child(2) {
        filter: hue-rotate(60deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #3a86ff);
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }

      @keyframes animate2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }
      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;

        background: linear-gradient(270deg, transparent, #3a86ff);
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }
      @keyframes animate3 {
        0% {
          right: -100%;
          height: 3px;
        }
        50%,
        100% {
          height: 2px;
          right: 100%;
        }
      }

      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #3a86ff);
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
      @keyframes animate4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
      &:focus,
      &:active {
        outline: none;
        box-shadow: none;
      }
    }
  }
`
