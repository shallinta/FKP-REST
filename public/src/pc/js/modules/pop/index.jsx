var libs = require('libs/libs');
var Pop = require('./_component/_pop')()
var render = React.render;



function popwin(data, cb){
    //冒泡事件 touch
    // function stopTouchendPropagationAfterScroll(){
    //     var flag = false;
    //     window.addEventListener('touchmove', function(ev){
    //         flag || (flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    //     }, false);
    //     function stopTouchendPropagation(ev){
    //         ev.stopPropagation();
    //         setTimeout(function(){
    //             window.removeEventListener('touchend', stopTouchendPropagation, true);
    //             flag = false;
    //         }, 50);
    //     }
    // }
    var container = document.getElementById('pop-box');
	if(!container)
		libs.node.append('body','div',{id:'pop-box'})

    ele = document.getElementById('pop-box');

    if(data===true)
        return Pop
    else{
        render(
            <Pop data={data} itemMethod={cb} />,
            ele
        )
    }
}

module.exports = popwin
