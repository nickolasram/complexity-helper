import data from '../source.json'
import Header from '../components/Header';
import ExercisesHubPanel from '../components/ExercisesPanel';

let exercises = data.exercises

let Exercises =()=> {
    return (
        <div id="wrapper">
            <Header />
            <ExercisesHubPanel question={exercises[0]}/>
        </div>
    );
}
export default Exercises;