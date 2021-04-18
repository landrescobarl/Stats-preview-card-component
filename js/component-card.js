var card = {
    url_img: {
        desktop: '../images/image-header-desktop.jpg',
        mobile: '../images/image-header-mobile.jpg'
    },
    title: 'Get insights that help your business grow.',
    text: '  Discover the benefits of data analytics and make better decisions regarding revenue, customer \n    experience, and overall efficiency.',
    data: ['10k+', '314', '12m+']

    // 10k+ companies
    // 314 templates
    // 12m+ queries

};var Card = function Card(props) {
    console.log(props.data[0]);
    return React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
            'div',
            { className: 'card-img card-box' },
            React.createElement(
                'picture',
                null,
                React.createElement('source', { srcset: '../images/image-header-desktop.jpg', media: '(min-width: 750px)' }),
                React.createElement('img', { src: '../images/image-header-mobile.jpg', alt: 'MDNz' })
            )
        ),
        React.createElement(
            'div',
            { className: 'card-body card-box' },
            React.createElement(
                'div',
                { className: 'card-title' },
                React.createElement(
                    'h2',
                    null,
                    props.title.substring(0, 4),
                    React.createElement(
                        'span',
                        null,
                        ' ',
                        props.title.substring(4, 13)
                    ),
                    props.title.substring(13)
                )
            ),
            React.createElement(
                'div',
                { className: 'card-text' },
                React.createElement(
                    'p',
                    null,
                    props.text
                )
            ),
            React.createElement(
                'div',
                { className: 'card-dates' },
                React.createElement(
                    'div',
                    { className: 'card-date' },
                    React.createElement(
                        'p',
                        null,
                        props.data[0]
                    ),
                    React.createElement(
                        'p',
                        null,
                        'companies'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'card-date' },
                    React.createElement(
                        'p',
                        null,
                        props.data[1]
                    ),
                    React.createElement(
                        'p',
                        null,
                        'templates'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'card-date' },
                    React.createElement(
                        'p',
                        null,
                        props.data[2]
                    ),
                    React.createElement(
                        'p',
                        null,
                        'queries'
                    )
                )
            )
        )
    );
};

function App() {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Card, { title: card.title, text: card.text, data: card.data })
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));