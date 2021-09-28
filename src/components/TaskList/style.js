import styled from 'styled-components'
import { BiCheck } from 'react-icons/bi'

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: -10rem;

  @media (width:375px){
  width: 90%;
  margin: 0 auto;
  margin-top: -10rem;


        }

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      color: var(--background-light);
      letter-spacing: 0.7rem;
    }

    a  svg {
      color: ${(props) => props.theme.color.text};
    }
  }

  input {
    margin-top: 1.2rem;
    padding-left: 2rem;

    color: hsl(236, 9%, 61%);
    font-size: 1rem;

    width: 100%;
    height: 3rem;

    border-radius: 0.5rem;
    outline: none;
    border: 0;
    background:  ${(props) => props.theme.color.background  };
  }
`

export const Task = styled.main`
  width: 40%;
  margin: 0 auto;
  margin-top: 2rem;


  @media (width:375px){
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
   li.funcionalidades{
      font-size: 0.7rem;
   }
        }

  ul {
    list-style: none;
    width: 100%;
    background-color: ${(props) => props.theme.color.background  };
    border-radius: 0.5rem;

    

    li.funcionalidades {
      display: flex;
      height: 3rem;
      align-items: center;
      justify-content: space-between;
      margin-left: 1rem;
      margin-right: 1rem;
      color: hsl(236, 9%, 61%);

      a:hover {
        color: hsl(220, 98%, 61%);
        border: 1px solid hsl(220, 98%, 61%);
        border-radius: 1rem;
        padding: 0.5rem;
      }
    }
  }
`
