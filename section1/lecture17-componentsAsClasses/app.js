let cards = data.map((course, index) => {
    return(
        <Card key={index} data={course} />
    )
})
ReactDOM.render(
    <div className="row">
        {data.map((data, index) => (
            <Card data={data} />
        ))}
    </div>,
    document.getElementById('root')
);

