import React, { Component } from 'react';
import axios from 'axios';
import './TabbedComponent.css';

const API_KEY = '9wur7sdh84azzazdt3ye54k4';
const URL = 'http://content.guardianapis.com/search';

class TabbedComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            options: ['UK News', 'Football', 'Travel'],
            results: []
        }
        this.fetchNews = this.fetchNews.bind(this);
    }

    getUrl() {
        const { selected, options } = this.state;
        return `${URL}?q=${options[selected]}&api-key=${API_KEY}`
    }

    fetchNews() {
        console.log('fetchong news')
        console.log(this.getUrl());
        axios.get(this.getUrl())
            .then(({ data }) => this.setState({ results: data.response.results.slice(0, 5)}));
    }

    componentDidMount() {
        this.fetchNews();
    }

    selectOption(selected) {
        this.setState({ selected }, () => this.fetchNews());
    }

    render() {
        const { options, selected, results } = this.state;
        return (
            <div className="TabbedComponent">
                <div className="Options">
                    {
                        options.map((option, i) => {
                            const optionClasses = i === selected ? 'Option Selected' : 'Option';
                            return <div className={optionClasses} onClick={this.selectOption.bind(this, i)} key={`option-${i}`}>{option}</div>
                        })
                    }
                </div>
                <div className="Results">
                {
                    results.map(({ webTitle, webUrl }, i) => {
                        return (
                            <div className="Result">
                                <div className="Number">{ i + 1 }</div>
                                <a className="Title" href={webUrl}>{ webTitle }</a>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default TabbedComponent;
