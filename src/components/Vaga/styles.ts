import styled from 'styled-components'
import { Props } from '../../styles'

export const VagaContainer = styled.li`
  border: 1px solid ${Props.corPrincipal};
  background-color: ${Props.corSecundaria};
  color: ${Props.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${Props.corPrincipal};
    color: ${Props.corSecundaria};
  }

  &:hover a {
    border-color: ${Props.corPrincipal};
    background-color: ${Props.corSecundaria};
    color: ${Props.corPrincipal};
  }
`
export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${Props.corSecundaria};
  background-color: ${Props.corPrincipal};
  color: ${Props.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
