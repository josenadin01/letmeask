import { ReactNode } from 'react'; //reactnode é qualquer conteudo JSX, qualquer coisa aceitável dentro de um return, um texto, uma div, um button...
import cx from 'classnames';

import './styles.scss'

type QuestionProps = {
    content: string,
    author: {
        name: string,
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

export function Question({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children
}: QuestionProps) {
    return (
        <div 
            className={cx(
                'question',
                { answered: isAnswered},
                { highlighted: isHighlighted && !isAnswered },
            )} //essa é uma dependencia instalada para poder usar objetos no classname e nao ter que fazer da maneira abaixo:
              //className=`question ${isAnswered ? 'answered': ''} ${isHighlighted} ? 'highlighted' : ''}`
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt="author.name" />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    );
}