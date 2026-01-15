function Card() {
    return(
        <div className="row">
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src="http://picsum.photos/400/400" />
                    </div>
                    <div className="card-content">
                        <p>React from the Beginning</p>
                        <p>Robert Bunch</p>
                    </div>
                    <div className="card-action">
                        <a href="#">$9.99</a>
                    </div>
                </div>
            </div>
        </div>
    ) 
}