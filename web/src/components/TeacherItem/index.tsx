import React from 'react';

import zapIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/13474197?s=460&v=4" alt="Proffy Bear"/>
                <div>
                    <strong>Proffy Bear</strong>
                    <span>Zoologia</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/> <br/>
                Suscipit placeat perspiciatis quos, veritatis necessitatibus rerum! Odit labore, nemo provident veniam quis beatae autem culpa tenetur nihil, explicabo optio, placeat hic?
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 120,00</strong>
                </p>
                <button type="button">
                    <img src={ zapIcon } alt="Whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;