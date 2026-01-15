function App() {
    ReactDOM.render(
        <div className="row">
            {data.map((item, index) => (
                <Card
                    key={index}
                    instructor={item.instructor}
                    course={item.course}
                    image={item.image}
                />
            ))}
        </div>,
        document.getElementById('root')
    );
}
