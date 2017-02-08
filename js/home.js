window.onload=function(){
	var bancontent=document.getElementById('ban-c');
	var oli=bancontent.getElementsByTagName('li');
	var banindicator=document.getElementById('ban-i');
	var oli2=banindicator.getElementsByTagName('li');
	console.log(oli.length);
	var timer;
	var i=0;
	timer=setInterval(autocut,4000);
	for(var i=0;i<oli2.length;i++){
		oli2[i].index=i;
		oli2[i].onclick=function(){
			for(var j=0;j<oli.length;j++){
			clearInterval(timer);
			cut(this.index);
			timer=setInterval(autocut,4000);
		}
		
	}
	function cut(index){//手动切图
		for(var j=0;j<oli.length;j++){
			oli[j].style.opacity=0;
			oli[j].style.zIndex=0;
			oli2[j].style.width='18px';
			oli2[j].style.backgroundColor='#fff';
		}
		oli[index].style.opacity=1;
		oli[index].style.zIndex=9;
		oli[index].style.transition='all ease-in-out 0.6s';
		oli2[index].style.width='25px';
		oli2[index].style.backgroundColor='cornflowerblue';
		oli2[index].style.transition='all ease-in-out 0.6s';
		}
	}
	function autocut(){//自动切图
		if(i==oli.length){
			i=0;
		}
		cut(i);
		i++;
	}
	var oul=document.getElementsByClassName("solution-tab")[0];
	var oa=oul.getElementsByTagName("a");
	
	var odiv=document.getElementsByClassName("solution-detail")[0];
	var odes=odiv.getElementsByClassName("solution-desc");
	for(var t=0;t<oa.length;t++){
		oa[t].index=t;
		oa[t].onclick=function(){
			var oicon=oa[this.index].getElementsByClassName("solution-icon")[0];
			for(var x=0;x<oa.length;x++){
				odes[x].style.display="none";
				var oic=oa[x].getElementsByClassName("solution-icon")[0];
				oic.style.backgroundPositionY="-10px";
				oa[x].style.color='#666';
			}
			odes[this.index].style.display="block";
			oicon.style.backgroundPositionY="-50px";
			oa[this.index].style.color='#0073eb';
			
		}
	}
}
