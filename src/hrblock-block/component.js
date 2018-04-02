mbrApp.loadComponents(
	"hrblock",
	{"hrblock-block":{
			_group:"Article",
			
			_onLoadFromProject : function(originalComponent){
                //alert(this._params.divtag);
                this.col = '#f0f';
            },
			
			hrColor:"border-color:#000;",
			hrThickness:"border-top-width:3px;",
            hrFullWidth:"min-width:0;",
			hrWidth:"width:100%;",
			hrStyle:"border-style:dashed;",
			hrPaddingBlock:"padding-bottom:10px; padding-top:10px;",
			hrDrawStyle:"",

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
                hrAnchor:{type:"text",title:"anchor",default:this._anchor}
			},
			
			_onParamsShow: function(e,$params,$block) {
			},
					
			_onParamsChange:function(c,a,b){
				
				"hrFullWidth"==a&&b==true&&(
					this.hrFullWidth="min-width:100%;"
				);
				"hrFullWidth"==a&&b==false&&(
					this.hrFullWidth="min-width:0%;"
				);
				"hrWidth"==a&&(
					this.hrWidth="width:"+b+"%;"
				);
				"hrColor"==a&&(
					this.hrColor="border-color:"+b+";"
				);
				"hrStyleSolid"==a&&(
					this.hrStyle="border-style:solid;"
				);
				"hrStyleDotted"==a&&(
					this.hrStyle="border-style:dotted;"
				);
				"hrStyleDashed"==a&&(
					this.hrStyle="border-style:dashed;"
				);
				"hrThickness"==a&&(
					this.hrThickness="border-top-width:"+b+"px;"
				);
				"hrPaddingBlock"==a&&(
					this.hrPaddingBlock="padding-bottom:"+b+"px; padding-top:"+b+"px;"
				);
				this.hrDrawStyle=this.hrFullWidth+this.hrWidth+this.hrColor+this.hrStyle+this.hrThickness;
			},
			
			_styles: {
				'hr': {
					'margin': '0'
				}
			}
		}
	}
);