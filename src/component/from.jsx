import React from 'react';

export default class App extends React.Component {
    state = {
        title: 'javascript',
        text: 'that is the another thing',
        libaray: 'React',
        isawson: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // if (e.target.type === 'textarea') {
        //     this.setState({
        //         text: e.target.value
        //     })
        // } else if (e.target.type === 'text') {
        //     this.setState({
        //         title: e.target.value
        //     })
        // } else if (e.target.type === 'select-one') {
        //     this.setState({
        //         libaray: e.target.value
        //     })
        // } else if (e.target.type === 'checkbox') {
        //     this.setState({
        //         isawson: e.target.checked
        //     })
        // } else {
        //     console.log('nating have');
        //     console.log(e.target.checked);
        // }



    };

    submitHandler = (e) => {
        e.preventDefault();
        const { title, text, libaray, isawson } = this.state;
        console.log(title);
        console.log(text);
        console.log(libaray);
        console.log(isawson);
    }

    render() {
        const { title, text, libaray, isawson } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>
                        hello everybody
                    </h1>
                    <input name='title' type="text"
                        value={title}
                        onChange={this.handleChange}
                        placeholder='enter your data'></input>
                    <p>{title}</p>
                    <textarea type="textarea" name='text' value={text}
                        onChange={this.handleChange}></textarea>
                    <br />
                    <br />

                    <select value={libaray} name='libaray'
                        onChange={this.handleChange} >
                        <option value="React">React</option>
                        <option value="Anguler">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" name='isawson' checked={isawson}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )

    }
} 
