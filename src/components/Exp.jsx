import React from 'react';
import '../pages/pagestyles.css';

function Exp(props) {
    const { title, role, dates, text } = props;
    const sentences = text.split('. ').filter(Boolean);
    
    return (
        <div>
            <div class="exp">
                <div class="exp-item">
                    <div class="exp-info">
                        <h2>{title}</h2>
                        <h3>{role}</h3>
                        <h4>{dates}</h4>
                    </div>
                    <p>
                    {sentences.map((sentence, index) => (
                            <p key={index}>{sentence}</p>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Exp;
