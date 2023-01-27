import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    suggestions: string[];
    onChange: (value: string) => void;
}

export const SearchInputContainer = styled.div`
    position: relative;
    color: #333;
    min-width: 315px;
`;

export const SearchInputField = styled.input`
    padding: 0.5rem;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 0.25rem;
    width: 100%;
    font-size: 1rem;
`;

export const SearchIcon = styled.i`
    position: absolute;
    right: 0.5rem;
    /* top: 30px; */
    transform: translateY(15%);
    color: gray;
`;

export const SuggestionsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    border: 1px solid ${props => props.theme.colors.text};
    border-top: none;
    background-color: white;
`;

export const Suggestion = styled.li`
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.titleDark};
    }
    &.highlighted {
        background-color: ${props => props.theme.colors.titleLight};
    }
`;