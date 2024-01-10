import Stack from './Stack';
import rabbit from '../images/rabbit.svg';
import tortoise from '../images/tortoise.svg';

let Sidebar =props=>{
    return (
        <section className="sidebar-area">
            <img src={tortoise} className='speed-indicator'></img>
            <section className='sidebar-checklist'>
                <Stack onSelect={props.onSelect} onSelectAlg={props.onSelectAlg} />
            </section>
            <img src={rabbit} className='speed-indicator'></img>
        </section>
    )
}

export default Sidebar;