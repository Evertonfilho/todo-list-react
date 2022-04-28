/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.header` 

    width: 600px;
    height: 680px;
    background: var(--background);
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 20px;
    border-radius: 1.2rem;
    

  input{
    height: 70px;
    width: 500px;
    display:flex;
    justify-content: center;
    margin-top: -300px;
    background: var(--rectangle);
    font-size: 1.5rem;
    border: 2px solid var(--background);
    padding-left: 0.7rem;
    border-radius: 1.2rem;
  }

  button{
    height: 40px;
    width: 350px;
    background: var(--rectangle);
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px auto;
    border: 2px solid var(--background);
    border-radius: 1.2rem;
    color: var(--background);
    font-size: 1rem;
    font-weight: bold;
  }


`;
