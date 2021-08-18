import React, { useState, useEffect } from 'react';
import Wiki from '../../Api/wikibediaApi';

const Search = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState('');

    useEffect(() => {
        const search = async () => {
            const { data } = await Wiki.get('/', {
                params: {
                    srsearch: term
                }
            }).catch(error => console.log(error));

            setResults(data);
        }

        const timeoutId = setTimeout(()=>{
            if (term)
                search();
        }, 500);

        

    }, [term])

    const renderedResults = results.map(item => {
        return <div key={item.pageid} className="item">
            <div className="right floated content">
                <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                >Go</a>
                <div className="header">
                    {item.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: item.snippet}} ></span>
            </div>
        </div>
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;

const mahmoud = 1301652;