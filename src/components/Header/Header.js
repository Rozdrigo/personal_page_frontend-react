import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../../assets/logo.svg'
import Modal from 'react-modal'
import './Header.css'

function Header() {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    return (
        <header className="pp_cb">
                <img src={Logo} alt="Logo" height="20" />
                <div className="pp_tp">
                <Link id="pg_01" className="tt_pg" to="/">Home</Link>
                <Link id="pg_02" className="tt_pg" to="/Publicações">Publicações</Link>
                <Link id="pg_03" className="tt_pg" to="/Sobre">Sobre</Link>
            </div>
            <Modal className="Modal_page" ariaHideApp={false} isOpen={modalIsOpen}> 
                <div className="Modal_pages_options">
                    <button onClick={() => setModalIsOpen(false)} className="pp_bt"><FiX className="cl_bt"  color="White"/></button>
                    <div className="pp_tp">
                        <Link id="pg_01" className="tt_pg" to="/">Home</Link>
                        <Link id="pg_02" className="tt_pg" to="/Publicações">Publicações</Link>
                        <Link id="pg_03" className="tt_pg" to="/Sobre">Sobre</Link>
                    </div>
                </div>

            </Modal>
            <button onClick={() => setModalIsOpen(true)} className="pp_bt"><FiMenu color="White"/></button>
        </header>
    );
};

export default Header;