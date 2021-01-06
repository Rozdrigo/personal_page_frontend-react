import './Post.css'

function Post(props){
    function imageAnalise(){
        if(props.image.split('.')[1] === 'youtube'){
            return (
            <div className="ca_yt"> 
                <iframe className="yt_vd" title={props.title} width="560" height="315" src={props.image} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="tx_if">
                    <h3>{props.title}</h3>
                    <p className="ct_ds">{props.description}</p>
                    <p>{props.id}</p>
                    <p className="dt_pt">{props.created_at.split('T')[0].split('-').reverse().toString().replace(/,/g, '/')}</p>
                </div>
            </div>
            )
        }else{
            return (
                <div className="ca_rd">
                <div className="im_rd" alt={props.title} style={{backgroundImage: `url(${props.image})`}} src={props.image}>
                <h4>{props.title}</h4>
                </div>
                <div className="tx_if">
                    <p className="ct_ds">{props.description}</p>
                    <p>{props.id}</p>
                    <p className="dt_pt">{props.created_at.split('T')[0].split('-').reverse().toString().replace(/,/g, '/')}</p>
                </div>
            </div>
            
            )
        }
    }
    return imageAnalise();
}

export default  Post