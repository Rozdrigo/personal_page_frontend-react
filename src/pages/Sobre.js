import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

import './Sobre.css'

function Sobre() {
    return (
        <div className="hm_pg">
            <Header/>
            <section style={{flexDirection: 'row', justifyContent:'center'}} id="pt_03">
                <div>
                    <div className="ce_nb"></div>
                    <h2>Rodrigo Silva Coelho</h2>
                    <p>Tenho 17 anos, curso o ensino médio técnico em edificações e sou apaixonado por tecnologia. 🚀</p>
                    <h5>EXPERIÊNCIA</h5>
                    <h6>Lukas Designer, Quixeramobim-CE — Estágio</h6>
                    <p>DESDE DE DEZEMBRO DE 2020</p>
                    <p>Estágio como designer e controle de estoque.</p>
                    <h5>FORMAÇÃO</h5>
                    <h6>E.E.T.I Maria Vidal Pimenta Lima, Quixeramobim-CE — Fundamental II</h6>
                    <p>JULHO DE 2014 - DEZEMBRO DE 2018</p>
                    <p>Ensino fundamental em tempo integral.</p>
                    <h6>E.E.E.P Dr. José Alves da Silveira, Quixeramobim-CE — Médio Técnico</h6>
                    <p>JANEIRO DE 2019 - DEZEMBRO DE 2021</p>
                    <p>Ensino médio técnico em edificações.</p>
                    <h5>PROJETOS</h5>
                    <h6>Scale — Aplicação Mobile</h6>
                    <p>Ferramenta de auxílio ao desenho técnico disciplina do curso técnico em edificações. O projeto foi criado para substituir o uso do escalímetro. Uma aplicação simples com o único propósito de resolver os problemas de outros alunos como eu.</p>
                </div>
                <div id="sd_00">
                    <div className="bf_lb">
                        <p>Quixeramobim, CE, 63800-000</p>
                        <p>+55 88 8108-5949</p>
                        <p>rodrigocoelho236@gmail.com</p>
                        <h5>CURSOS</h5>
                        <h6>Node.js e React.js</h6>
                        <h6>Lógica de programação básica.</h6>
                        <h6>Programação em Python.</h6>
                        <h6>Pacote Office.</h6>
                        <h6>Informática Básica.</h6>
                        <h6>Corel Draw 8x.</h6>
                        <h5>COMPETÊNCIAS</h5>
                        <h6>Programador web</h6>
                        <p>Conhecimentos em node.js e react.js.</p>
                    </div>
                   <div className="bd_lf">
                       <h6>Web Designer</h6>
                        <p>Domínio da ferramenta figma de prototipação de páginas.</p>
                        <h6>Desenvolvimento Mobile</h6>
                        <p>Conhecimento nas ferramentas de desenvolvimento multiplataforma react-native e Ionic.</p>
                        <h6>Lógica de programação</h6>
                        <p>Domínio em javascript e conhecimentos em python e C.</p>
                        <h6>Eletrônica</h6>
                        <p>Conhecimento em eletrônica embarcada.</p>
                        <h5>IDIOMAS</h5>
                        <h6>Português,  Inglês Técnico </h6>
                   </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Sobre;