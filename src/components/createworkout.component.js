import React, { Component } from 'react';
import axios from 'axios';
export default class CreateWorkout extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            contactno: '',
            age: '',
            duration: 0,
            level: '',
            users: []
        }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/api/users/')
    //         .then(response => {
    //             if (response.data.length > 0) {
    //                 this.setState({
    //                     users: response.data.map(user => user.username),
    //                     username: response.data[0].username
    //                 })
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeContactno(e) {
        this.setState({
            contactno: e.target.value
        })
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeLevel(e) {
        this.setState({
            level: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const workout = {
            username: this.state.username,
            description: this.state.description,
            contactno: this.state.contactno,
            age: this.state.age,
            duration: this.state.duration,
            level: this.state.level
        }

        console.log(workout);

        axios.post('http://localhost:5000/api/workout/add', workout)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Workout Log</h3>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div> */}

                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contactno: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.contactno}
                            onChange={this.onChangeContactno}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Level: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.level}
                            onChange={this.onChangeLevel}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Workout Log" className="btn mytbtn" />
                    </div>
                </form>
            </div>
        )
    }
}