mbrApp.loadComponents(
	"hrblock",
	{"hrblock-block":{
			_group:"Article",
			_params:{
				group1: {type:'separator',title: 'Horizontal Rule'},
				hrColor:{type:"color",title:"Color",default:"#000"},
                hrThickness:{type:"range",title:"Thickness(px)",min:0,max:10,step:1,default:1},
				hrFullWidth:{type:"switch",title:"Fullscreen",default:false},
				hrWidth:{type:"range",title:"Width(%)",min:0,max:100,step:1,default:100,condition:["!hrFullWidth"]},
				hrStyleSolid:{type:"radio",title:"Solid",name:"hrstyle",default:!0},
				hrStyleDotted:{type:"radio",title:"Dotted",name:"hrstyle",default:!1},
                hrStyleDashed:{type:"radio",title:"Dashed",name:"hrstyle",default:!1},
                paddingTop:{type:"range",title:"Padding(px)",min:0,max:80,step:10,default:10},
                bgColor:{type:"color",title:"Background Color",default:"#fff"},
			},
            hrFullWidth:".hrfullwidth {min-width:0;}",
			hrWidth:".hrblock {width:100%}",
			paddingTop:".block {padding-bottom:0; padding-top:0;}",
			_onParamsChange:function(c,a,b){
				
				"hrFullWidth"==a&&b==true&&(
					this.hrFullWidth=".hrfullwidth {min-width:100%;}"
				);
				"hrFullWidth"==a&&b==false&&(
					this.hrFullWidth=".hrfullwidth {min-width:0%;}"
				);
				"hrWidth"==a&&(
					this.hrWidth=".hrblock {width:"+b+"%;}"
				);
				
				"hrColor"==a&&(
					this.hrColor=".hrcolor {border-color:"+b+";}"
				);
				"hrStyleSolid"==a&&(
					this.hrStyle=".hrstyle {border-style:solid;}"
				);
				"hrStyleDotted"==a&&(
					this.hrStyle=".hrstyle {border-style:dotted;}"
				);
				"hrStyleDashed"==a&&(
					this.hrStyle=".hrstyle {border-style:dashed;}"
				);
				"hrThickness"==a&&(
					this.hrThickness=".hrthickness {border-top-width:"+b+"px;}"
				);
				"paddingTop"==a&&(
					this.paddingTop=".block {padding-bottom:"+b+"px; padding-top:"+b+"px;}"
				);
			}
		}
	}
);
