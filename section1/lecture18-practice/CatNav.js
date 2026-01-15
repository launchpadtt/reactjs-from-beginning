// function CatNav(props) {
//     return (
//         <div>
//             {/* Your Code Here */}
//         </div>
//     )
// }

class CatNav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li className="cat-link left valign-wrapper">
                <i className="material-icons">{this.props.item.icon}</i>{this.props.item.title}
            </li>
        );
    }
}

// class Card extends React.Component {
//     constructor() {
//         super();
//         console.log("Constructor Ran")
//     }
 
//     render() {
//         return (
//             <div className="col s2">
//                 <div className="card hoverable small">
//                     <div className="card-image">
//                         <img src={this.props.data.image} />
//                     </div>
//                     <div className="card-content">
//                         <p>{this.props.data.course}</p>
//                         <p>{this.props.data.instructor}</p>
//                     </div>
//                     <div className="card-action">
//                         <a href="#">$9.99</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }