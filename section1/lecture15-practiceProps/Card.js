function Card(props) {
    console.log(props)
    return(
        // <div className="row">
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={props.image} />
                    </div>
                    <div className="card-content">
                        <p>{props.course}</p>
                        <p>{props.instructor}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">$9.99</a>
                    </div>
                </div>
            </div>
        // </div>
    ) 
}