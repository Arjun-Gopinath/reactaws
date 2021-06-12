import React from 'react';
class UserInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userinput: '' };
    }

    handleChange = event => {
        this.setState({ userinput: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="userinput">User input = </label>
                    <input
                        type="text"
                        name="userinput"
                        value={this.state.userinput}
                        onChange={this.handleChange}
                    />
                </form>

                <h3>Your input is: {this.state.userinput}</h3>
            </React.Fragment>
        );
    }
}
export default UserInput;