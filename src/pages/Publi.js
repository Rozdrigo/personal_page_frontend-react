import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import Posts from '../components/Publi/Post'
import axios from 'axios'

import './Publi.css'

function Publi() {
    const [ renderPosts, setRenderPosts ] = useState({})
    useEffect (() => { 
        getPosts()
      }, [])
    async function getPosts() {
        const response = await axios.get('https://serene-waters-74538.herokuapp.com?user_id=1')
        const posts = response.data
        setRenderPosts({ 
            PPost: posts.reverse().map((a) => {
                return(
                    <Posts key={a.id} image={a.image} title={a.title} description={a.description} created_at={a.created_at} />
                )
            }) 
        })
    }
    return (
        <div className="hm_pg">
            <Header/>
            <section className="sc_pp">
                <div className="pb_li">
                    {renderPosts.PPost}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Publi;