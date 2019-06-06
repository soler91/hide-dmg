module.exports = function defs(mod) {
    
    let enabled = true;
    mod.command.add('dmg', () => {
        enabled = !enabled;
        mod.command.message(`Hide damage: ${enabled}`);
    });
    
    mod.hook('S_EACH_SKILL_RESULT', 13, {order: 10000}, event => { 
        if(enabled){
            if(event.type != 0){
                event.type = 0;
                return true;
            }
        }
    });
}
