/** 
 * reducer function
 * 
 */

const initstate = {
    value:'defaut value'
};

const reducer = (state = initstate, action)=>{
    console.log("reducer:",state,action);
    switch(action.type){
        case 'send-type':
            return Object.assign({},state,action);
        default:
            return state;


    }


};

module.exports={
    reducer

}