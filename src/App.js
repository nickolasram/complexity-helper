import './index.css';
import Stack  from './components/Stack'
import On2 from './images/On2.png'
import On2g from './images/On2.gif'

function App() {
  return (
    <div id="wrapper">
      <section className="banner">
        <h1>Complexity Helper</h1>
      </section>
      <section className="sidebar-area">
        <p>Slow</p>
        <section className='sidebar'>
          <Stack />
        </section>
        <p>Fast</p>
      </section>
      <section className='main'>
        <section className='graph-wrapper'>
          <img src={On2} />
          <p className='graph-wrapper'><em>On^2</em></p>
        </section>
        <section className='gif-wrapper'>
          <img src={On2g}/>
          <p className='algorithm-desc'>
            <em>Bubble Sort:</em> is the simplest sorting algorithm 
            that works by repeatedly 
            swapping the adjacent 
            elements if they are in the wrong order. 
            This algorithm is not suitable for large data 
            sets as its average and worst-case time complexity is quite high.
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;