import './components/components.index'

import {BreathTrainerApplet} from './BreathTrainerApplet'

let trainer = new BreathTrainerApplet();

console.log(trainer);

trainer.init();

window.addEventListener('resize',(ev)=>{
    trainer.responsive();
})