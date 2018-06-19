const    Command = require('command')

module.exports = function defs(dispatch) {
    const command = Command(dispatch);
    
    let enabled = true;
    command.add('dmg', () => {
        enabled = !enabled;
        command.message(`Hide damage: ${enabled}`);
    });
    
    dispatch.hook('S_EACH_SKILL_RESULT', dispatch.base.majorPatchVersion < 74 ? 7 : 9, {order: 10000}, event => { 
        if(enabled){
            if(event.type != 0){
                event.type = 0;
                return true;
            }
        }
    });
}
