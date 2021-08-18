import React, {useState} from 'react';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map( (item, index) =>{
        const active = activeIndex === index? 'active': '';
        return (
            <React.Fragment key={index} >
                <div 
                    className={"title" + active}
                    onClick={()=> onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={"content" + active}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
            {activeIndex}
        </div>
    )
}

export default Accordion;

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming