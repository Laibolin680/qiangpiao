var message = [
        ["275万购昌平邻铁三居 总价20万买一居","200万内购五环三居 140万安家东三环","北京首现零首付楼盘 53万购东5环50平","京楼盘直降5000 中信府 公园楼王现房"],
        ["40平出租屋大改造 美少女的混搭小窝","经典清新简欧爱家 90平老房焕发新生","新中式的酷色温情 66平撞色活泼家居","瓷砖就像选好老婆 卫生间烟道的设计"]
    ];    
    // JS实现选项卡切换
    window.onload = function() {
        var oUl1 = document.getElementById("ul1");
        var aLi = oUl1.getElementsByTagName("li");

        var oDiv = document.getElementById("lis");
        var aDiv = oDiv.getElementsByTagName("div");

        // var dont = getElementById("dont");
		// var done = getElementById("done");
        
        var frag = document.createDocumentFragment();
        for(var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onclick = function() {
                for(var i = 0; i < aLi.length; i++) {
                    aLi[i].className = "";
                }
                this.className = "active";
                for(var j = 0; j < aDiv.length; j++) {
                    aDiv[j].className = "hide";
                }
                aDiv[this.index].className = "show";
                }
            }        
        // for(var key in message){

        //     var itemf = document.createElement("li");

        //     itemf.innerHTML = message[key][0];

        //     frag.appendChild(itemf);
        // }
        // dont.appendChild(frag);
                    
        // for(var key in message){

        //     var itemj = document.createElement("li");

        //     itemj.innerHTML = message[key][1];

        //     frag.appendChild(itemj);
        // }
        // done.appendChild(frag);
              
    }

var bac = document.getElementById('bac');
bac.onclick = function(){
    window.history.go(-1);
}