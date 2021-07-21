import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  border: black solid 0.1rem;
  border-radius: 0.5rem;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: black;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  text-align: left;
  margin: 0.5rem 0;
  background: black;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    border: red dashed 0.1rem;
    color: black;
    background-color: rgba(254, 144, 75, 1);
  }
`

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
  border-radius: 0.5rem;
`
