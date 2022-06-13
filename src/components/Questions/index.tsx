import { ReactNode } from 'react'; //reactnode é qualquer conteudo JSX, qualquer coisa aceitável dentro de um return, um texto, uma div, um button...

import './styles.scss'

type QuestionProps = {
    content: string,
    author: {
        name: string,
        avatar: string;
    };
    children?: ReactNode;
}

export function Question({
    content,
    author,
    children
}: QuestionProps) {
    return (
        <div className="question">
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