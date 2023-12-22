import './index.css';
import MainContentPanel from './components/MainContentPanel';


function App() {
  return (
    <div id="wrapper">
      <section className="banner">
        <h1>Complexity Helper</h1>
        <a>Exercises</a>
        <a>Flash Cards</a>
      </section>
      <MainContentPanel />
    </div>
  );
}

export default App;
