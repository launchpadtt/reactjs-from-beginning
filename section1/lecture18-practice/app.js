const data = [
    {
        icon: "code",
        title: "Development"
    },
    {
        icon: "business",
        title: "Business"
    },
    {
        icon: "computer",
        title: "IT & Software"
    },
    {
        icon: "library_books",
        title: "Office Productivity"
    },
    {
        icon: "person",
        title: "Personal Development"
    },
    {
        icon: "mode_edit",
        title: "Personal Development"
    },
    {
        icon: "track_changes",
        title: "Marketing"
    },
    {
        icon: "directions_bike",
        title: "Health & Fitness"
    },
    {
        icon: "music_note",
        title: "Music"
    }
]
// function App() {
//     ReactDOM.render (
//         <div class="row">
//             <ul class="cat-nav center-align">
//             {data.map((item, index) => (
//                 <CatNav item={item} key={index} />
//             ))}
//             </ul>
//         </div>,
//         document.getElementById('root')
//     );
// }
ReactDOM.render (
    <div class="row">
        <ul class="cat-nav center-align">
        {data.map((item, index) => (
            <CatNav item={item} key={index} />
        ))}
        </ul>
    </div>,
    document.getElementById('root')
);

