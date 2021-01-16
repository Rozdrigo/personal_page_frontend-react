import React from 'react'
import Header from '../components/Header/Header';
import { FiTwitch, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Perfil from '../assets/Templates/Perfil_image.png'
import ImageTemplateCell from '../assets/Templates/Template_tec.png'
import ImageTemplateEmoji from '../assets/Templates/Template_emj.png'
import Tardis from '../assets/Tardis.png'
import Footer from '../components/Footer/Footer'
import Window from '../components/Window/Window'
import './Home.css'

function Home() {
    const [value, onChangeText] = React.useState('');
    function sendMessage(){
        var xmessage = value.replace(/ /g, "%20").replace(/"?"/g, "%3F")
        return `https://api.whatsapp.com/send?phone=558893350729&text=${xmessage}`
    }
    return (
        <div className="hm_pg">
            <Header/>
            <section className="sc_hp">
                <header>
                <div className="bx_su">
                    <div className="pf_if">
                        <img src={Perfil} alt="perfil" height="120" className="pf"/>
                        <div>
                            <h5 className="nn_nn">Rodrigo<br/> Silva Coelho</h5>
                            <p>Tenho 17 anos, curso o ensino médio técnico em edificações e sou apaixonado por tecnologia. 🚀</p>
                        </div>
                    </div>
                    <img className="ig_im" src={ImageTemplateCell} alt="templatecell" height="200"/>
                </div>
                    <div className="sp_am">
                        <h2>Web developer</h2>
                        <a href="https://github.com/Rozdrigo" target="_blank" rel="noreferrer" className="bt">Veja Meus Trabalhos</a>
                    </div>
                </header>
                <article>
                    <div className="cc_pp">
                        <Window/>
                    </div>
                    <div className="cc_tl">
                        <div>
                            <p>O resto é para quem está cansado, o sonho é para os mortos.</p>
                            <a href="https://g.co/kgs/hVTDLS" target="_blank" rel="noreferrer">-O Doutor</a>
                        </div>
                        <img src={Tardis} alt="tardis" height="150"></img>
                    </div>
                </article>
                <footer>
                    <div className="cc_tl">
                        <div>
                        <h2>Redes Sociais</h2>
                        <div className="ic_li">
                            <a href="https://www.twitch.tv/nickdolol_rozdrigo" target="_blank" rel="noreferrer"><FiTwitch className="icon"/></a>
                            <a href="https://github.com/Rozdrigo" target="_blank" rel="noreferrer"><FiGithub className="icon"/></a>
                            <a href="https://www.linkedin.com/in/rodrigo-coelho-4b3a3b1ab/" target="_blank" rel="noreferrer"><FiLinkedin className="icon"/></a>
                            <a href="https://www.instagram.com/nick_rozdrigo/" target="_blank" rel="noreferrer"><FiInstagram className="icon"/></a>
                        </div>
                        </div>
                        <img className="bd_ig" src={ImageTemplateEmoji} alt="emogiTamplate" height="200"/>
                    </div>
                    <div className="cc_pp">
                        <input 
                            onChange={(text) => onChangeText(text.target.value)}
                            value={value}
                            placeholder="Mande-me uma mensagem">
                        </input>
                        <a href={sendMessage()} target="_blank" rel="noreferrer" className="bt_wi">Enviar</a>
                    </div>
                </footer>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;
