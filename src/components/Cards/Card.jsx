/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const Card = ({title,descripcion,linkgit = false,link = false,tecnologia,tecnologia2,img}) => {
    return (
        <>
            <div className="cards">
                <div className="title-description-card">
                    <h5>{title}</h5>
                    <p>{descripcion}</p>
                </div>
                <div className="code-link">
                    {
                        linkgit ? (<a href={linkgit} target="__blank"> <i className="fa-solid fa-code"></i></a>) : ''
                    }
                    {
                        link ? (<a href={link} target="__blank"><i className="fa-solid fa-link"></i></a>) : ''
                    }
                </div>
                <div className="tecnologias-card">
                    <div className="tecnologia-item">
                        {tecnologia}
                    </div>
                    <div className="tecnologia-item">
                        {tecnologia2}
                    </div>
                </div>
                <div className="imagen-card" style={{ background: `url(${img}) lightgray 100% / cover no-repeat`, borderRadius: '8px' }}>
                    
                </div>
            </div>
        </>
    )
}
