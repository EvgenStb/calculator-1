var a="",b="",sign="",finish=!1,digit=["0","1","2","3","4","5","6","7","8","9","."],actions=["-","+","X","/","%"],screen=document.querySelector(".calc-screen p");function clearAll(){a="",b="",sign="",finish=!1,screen.textContent=0}document.querySelector(".ac").onclick=clearAll,document.querySelector(".buttons").onclick=function(e){if(e.target.classList.contains("btn")&&!e.target.classList.contains("ac")){screen.textContent="";var n=e.target.textContent;if(digit.includes(n))return""===b&&""===sign?(a+=n,screen.textContent=parseInt(a)):""!==a&&""!==b&finish?(b=n,finish=!1,screen.textContent=parseInt(b)):(b+=n,screen.textContent=parseInt(b)),void console.log(a,b,sign);if(actions.includes(n))return sign=n,void(screen.textContent=sign);if("="===n){switch(""===b&&(b=a),sign){case"+":a=+a+ +b;break;case"-":a-=b;break;case"X":a*=b;break;case"/":if("0"===b)return screen.textContent="Error",a="",b="",void(sign="");a/=b;break;case"%":a=a/100*b}finish=!0,screen.textContent=a,console.log(a,b,sign)}}};
//# sourceMappingURL=index.6800baad.js.map