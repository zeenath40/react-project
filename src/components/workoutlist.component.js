import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Workout = props => (
    <tr>
        <td>{props.workout.username}</td>
        <td>{props.workout.description}</td>
        <td>{props.workout.contactno}</td>
        <td>{props.workout.age}</td>
        <td>{props.workout.duration}</td>
        <td>{props.workout.level}</td>

        <td>
            <Link to={"/edit/" + props.workout._id}>edit</Link> | <Link href="#" onClick={() => { props.deleteWorkout(props.workout._id) }}>delete</Link>
        </td>
    </tr>
)


export default class WorkoutList extends Component {
    constructor(props) {
        super(props);

        this.deleteWorkout = this.deleteWorkout.bind(this);

        this.state = { workout: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/workout/find')
            .then(response => {
                console.log("res", response);
                this.setState({ workout: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteWorkout(id) {
        axios.get('http://localhost:5000/api/workout/remove/?id=' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            workout: this.state.workout.filter(el => el._id !== id)
        })
    }

    WorkoutList() {
        return this.state.workout.map(currentworkout => {
            return <Workout workout={currentworkout} deleteWorkout={this.deleteWorkout} key={currentworkout._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Workout</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Contactno</th>
                            <th>Age</th>
                            <th>Duration</th>
                            <th>Level</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.WorkoutList()}
                    </tbody>
                </table>
            </div>
        )
    }
}