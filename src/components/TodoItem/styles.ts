/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

type ContainerProps = {
  done:boolean,
}

export const Container = styled.div(({done}:ContainerProps) =>(
  `

  width: 460px;
  height: 60px;
  position: relative;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  background:var(--rectangle);
  border-radius: 1.2rem;
  margin-top: 0.7rem;

  .task{
  li{
    height:50px ;
    width: 330px;
    font-size:1.5rem;
    font-family: 'Oswald',sans-serif;
    font-weight: 400;
    background: var(--rectangle);
    color: var(--background);
    display: flex;
    position: relative;
    align-items: center; 
    padding-left:0.7rem ;
    text-decoration-color: var(--background);
    text-decoration: ${done ? 'line-through' : 'initial'}  ;
    }
    input{
    height:50px ;
    width: 330px;
    font-size:1.5rem;
    font-family: 'Oswald',sans-serif;
    font-weight: 400;
    background: var(--rectangle);
    color: var(--background);
    display: flex;
    position: relative;
    align-items: center; 
    padding-left:0.7rem ;
    margin-top: 2px;
    border: 1px solid var(--rectangle);
    }
  }

  .btn-check{
    height: 40px;
    width: 20px;
    position: relative;
    align-items: center;
    display:flex;
    margin-top: 305px;
    margin-left: 10px;
  }

  .btn-edit{
   button{
     height:35px;
     width: 50px;
     border: 1px solid var(--rectangle);
   }

  }
  .btn-delete{
   button{
     height:35px;
     width: 50px;
     border: 1px solid var(--rectangle)
   }

  }
  `
  ));