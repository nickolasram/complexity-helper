import Stack from './Stack';
import rabbit from '../images/rabbit.svg';
import tortoise from '../images/tortoise.svg';

let Sidebar =props=>{
    return (
        <section className="sidebar">
            <img src={tortoise} className='sidebar__speed-indicator'></img>
            <section className='sidebar__checklist'>
                <Stack onSelect={props.onSelect} onSelectAlg={props.onSelectAlg} />
            </section>
            <img src={rabbit} className='sidebar__speed-indicator'></img>
        </section>
    )
}

export default Sidebar;