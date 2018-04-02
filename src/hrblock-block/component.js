mbrApp.loadComponents(
	"hrblock",
	{"hrblock-block":{
			_group:"Article",
			_onParamsShow: function(e,$params,$block) {
				this._params.hrAnchor = this._anchor;							
			},
			_params:{
				group1: {type:'separator',title: 'Horizontal Rule'},
				hrColor:{type:"color",title:"Color",default:"#000"},
                hrThickness:{type:"range",title:"Thickness(px)",min:0,max:15,step:1,default:3},
				hrFullWidth:{type:"switch",title:"Fullscreen",default:false},
				hrWidth:{type:"range",title:"Width(%)",min:0,max:100,step:1,default:100,condition:["!hrFullWidth"]},
				hrStyleSolid:{type:"radio",title:"Solid",name:"hrstyle",default:!1},
				hrStyleDotted:{type:"radio",title:"Dotted",name:"hrstyle",default:!1},
                hrStyleDashed:{type:"radio",title:"Dashed",name:"hrstyle",default:!0},
                hrPaddingBlock:{type:"range",title:"Padding(px)",min:0,max:80,step:10,default:10},
                bgColor:{type:"color",title:"Background Color",default:"#fff"},
                hrAnchor:{type:"text",title:"anchor",default:this._anchor},

			},
			
			hrColor:".hrcolor {border-color:#000;}",
			hrThickness:".hrthickness {border-top-width:3px;}",
            hrFullWidth:".hrfullwidth {min-width:0;}",
			hrWidth:"hr.hrblock {width:100%;padding:0;}",
			hrStyle:".hrstyle {border-style:dotted;}",
			hrPaddingBlock:".block {padding-bottom:10px; padding-top:10px;}",
			
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
				"hrPaddingBlock"==a&&(
					this.hrPaddingBlock=".block {padding-bottom:"+b+"px; padding-top:"+b+"px;}"
				);
			},
			_styles: {
				'hr': {
					'margin': '0'
				}
			}
		}
	}
);