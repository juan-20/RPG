import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { Container } from './styles';
import { CircleWavy } from 'phosphor-react';
import Script from 'next/script';

type ToggleProps = {
    text: string | number
    type: 'Level' | 'Word' 
    icon?: string
}

const ToggleComponent = (props: ToggleProps) => (
  <Container isAllowed='true' aria-label="Toggle italic">
    {props.type != 'Word' ?
    <div className='toggle-level'>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
        <text className='number' width="32" height="32" x="95" y="150" fontSize="90">{props.text}</text>
        <path d="M54.5,201.5c-9.2-9.2-3.1-28.5-7.8-39.8S24,140.5,24,128s17.8-22,22.7-33.7-1.4-30.6,7.8-39.8S83,51.4,94.3,46.7,115.5,24,128,24s22,17.8,33.7,22.7,30.6-1.4,39.8,7.8,3.1,28.5,7.8,39.8S232,115.5,232,128s-17.8,22-22.7,33.7,1.4,30.6-7.8,39.8-28.5,3.1-39.8,7.8S140.5,232,128,232s-22-17.8-33.7-22.7S63.7,210.7,54.5,201.5Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16">
        </path>
        </svg>
    </div>
    : 
    <div className="toggle-icon">
        {props.icon ? (  
        <>
          <Script src="https://unpkg.com/phosphor-icons"></Script><i className={props.icon}></i>
        </> ) : null}
        <p>{props.text}</p>
    </div>
    }
  </Container>
);



export default ToggleComponent;