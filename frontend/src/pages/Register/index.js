import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    
    return(
        <div className="register-container">
            <div className="content">
                <section>

                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>
                        Cadastro
                    </h1>
                    <p>Faça seu cadastro e tudo mais</p>
               
                    <Link className="back-link" to='/'>
                        <FiArrowLeft size={16} color="#E02041"/>
                        Home
                    </Link>
                
                </section>
                
                    <form>
                        <input placeholder="Nome da Ong" />
                        <input type="email" placeholder="E-mail" />
                        <input placeholder="Whatsapp" />

                        <div className="input-group">

                            <input placeholder="Cidade"/>
                            <input placeholder="UF" style={{width : 80}} />

                        </div>

                        <button className="button" type="submit">Cadastrar</button>

                    </form>
                
            </div>
        </div>


    );

}