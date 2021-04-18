const card = {
    url_img: {
        desktop: '../images/image-header-desktop.jpg',
        mobile: '../images/image-header-mobile.jpg'
    },
    title: 'Get insights that help your business grow.',
    text: `  Discover the benefits of data analytics and make better decisions regarding revenue, customer 
    experience, and overall efficiency.`,
    data: ['10k+', '314', '12m+']
}

// 10k+ companies
// 314 templates
// 12m+ queries

const Card = (props) => {
    console.log(props.data[0])
    return (
        <div className="card">

            <div className="card-img card-box">
                <picture>
                    <source srcset="../images/image-header-desktop.jpg" media="(min-width: 750px)" />
                    <img src="../images/image-header-mobile.jpg" alt="MDNz" />
                </picture>
            </div>

            <div className="card-body card-box">
                <div className="card-title">
                    <h2>{props.title.substring(0, 4)}
                        <span> {props.title.substring(4, 13)}</span>
                        {props.title.substring(13)}</h2>
                </div>
                <div className="card-text">
                    <p>{props.text}</p>
                </div>
                <div className="card-dates">
                    <div className="card-date">
                        <p>{props.data[0]}</p>
                        <p>companies</p>
                    </div>
                    <div className="card-date">
                        <p>{props.data[1]}</p>
                        <p>templates</p>
                    </div>
                    <div className="card-date">
                        <p>{props.data[2]}</p>
                        <p>queries</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

function App() {

    return (
        <React.Fragment>

            <Card title={card.title} text={card.text} data={card.data} />

        </React.Fragment>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);