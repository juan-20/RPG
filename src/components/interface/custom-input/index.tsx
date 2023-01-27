import Link from 'next/link';
import { useState } from 'react';
import { SearchInputContainer, SearchInputField, Suggestion, SuggestionsList } from './styled'

interface Props {
    suggestions: string[];
    onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ suggestions, onChange }) => {
    const [value, setValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions.slice(0,5));
    const [highlighted, setHighlighted] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
        setFilteredSuggestions(suggestions.filter(s => s.toLowerCase().startsWith(value.toLowerCase())).slice(0,5));
    };

    const handleClick = (suggestion: string) => {
        setValue(suggestion);
        onChange(suggestion);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.keyCode) {
            case 13: // enter key
                if (highlighted >= 0) {
                    setValue(filteredSuggestions[highlighted]);
                    onChange(filteredSuggestions[highlighted]);
                    window.location.href=`/spells/${filteredSuggestions[highlighted]}`;
                }
                break;
            case 38: // up arrow
                if (highlighted > 0) {
                    setHighlighted(highlighted - 1);
                }
                break;
            case 40: // down arrow
                if (highlighted < filteredSuggestions.length - 1) {
                    setHighlighted(highlighted + 1);
                }
                break;
            default:
                break;
        }
    };

    return (
        <SearchInputContainer className="search-input-container">
            <SearchInputField
                className="search-input"
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Ex.: Ajuda"
            />
            {filteredSuggestions.length > 0 && (
                <SuggestionsList className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => (
                        <Link href={`/spells/${suggestion}`} key={suggestion} >
                            <Suggestion
                                className={`suggestion ${
                                    index === highlighted ? 'highlighted' : ''
                                }`}
                                onClick={() => handleClick(suggestion)}
                            >
                                {suggestion.toLowerCase()}
                            </Suggestion>
                        </Link>
                    ))}
                </SuggestionsList>
            )}
        </SearchInputContainer>
    );
};

export default SearchInput;
