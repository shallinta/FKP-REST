var libs = require('libs/libs');
var Uls = require('modules/tabs/_component/uls')('Fours');
var Pt = require('widgets/itemView/pic_title');
var ItemMixin = require('mixins/item')
var List = require('widgets/listView/list')


var mycar_service_order = [
    {
        body:[
            '机油',
            '1',
            '￥380'
        ]
    },
    {
      body:[
          '机油滤清器',
          '1',
          '￥38'
      ]
    },
    {
      body:[
          '工时',
          '1',
          '￥68'
      ]
    },
    {
      body:[
          '全车检测',
          '1',
          '￥0'
      ]
    }
]
mycar_service_order.unshift(
  {
    body:[
        '保养项目',
        '单位',
        '价格'
    ]
  }
)
mycar_service_order.push(
  {
    body:[
        '合计',
        '4',
        '￥1000'
    ]
  }
)

var index = {
    mixins: [ItemMixin],
    render: function () {
        return(
            <div className={'wrapper'}>
              <div className={'row'}>
                <div className={'service_mycar'}>
                  <h2>{'个人信息'}</h2>
                </div>
                <div className={'srvice_myorder'}>
                    <div id="name"></div>
                    <div id="phone"></div>
                    <div id="verify" className="layout">
                        <label></label>
                        <div className="box">
                            <div id="code"></div>
                            <div id="verify_btn">获取验证码</div>
                        </div>
                    </div>
                    <div id="area" className="layout">
                        <label>地址</label>
                        <div className="box">
                            <div id="city"></div>
                            <div id="district"></div>
                            <div id="address"></div>
                        </div>
                    </div>
                    <div id="timer" className="layout">
                        <label>预约时间</label>
                        <div className="box">
                            <div id="date"></div>
                            <div id="ampm"></div>
                        </div>
                    </div>
                </div>
                <div className={'service_mycar srvice_myservice'}>
                  <h2>我的订单</h2>
                  <div className={'order_table_mycar'}>
                    <List data={mycar_service_order}  listClass={'foot_order_table_mycar'}  itemClass={'wid-12'} itemView={Pt}/>
                  </div>
                </div>
                <div className={'service_mycar pay_mycar'}>
                  <div className={'title_pay_mycar'}>
                    <h2>选择支付方式</h2>
                    <ul className={'pay_icon_mycar'}>
                      <li>
                        <input type='radio'/>
                        <i className={'ifont icon-roundcheckfill'}></i>
                        <span>微信</span>
                      </li>
                      <li>
                        <input type='radio'/>
                        <i className={'ifont icon-roundcheck'}></i>
                        <span>支付宝</span>
                      </li>
                    </ul>
                  </div>
                  <a id="now" className={'btn-link'}>{'支付'}</a>
                </div>
              </div>
            </div>
        )
    }
}


var bindIndex = function(){
    var Select = require('modules/form/select');
    var Text = require('modules/form/text');

    //电话
    new Text({label:'姓名'}, 'name',function(){
        $(this).click(function(){

        })
    });

    //电话
    new Text({label:'手机号码'}, 'phone',function(){
        $(this).click(function(){

        })
    });

    //验证码
    new Text({}, 'code',function(){
        $(this).click(function(){

        })
    });

    //城市
    new Select({}, 'city',function(){
        $(this).click(function(){
            SA.setter('Pop',{data:{body:'明天就会下雨',display:'block'}})
        })
    });

    //地区
    new Select({}, 'district',function(){
        // $(this).click(function(){
        //     $(this).find('.dot').toggle()
        // })
    });

    //详细地址
    new Text({placeholder:'请输入您的详细地址'}, 'address',function(){
        $(this).click(function(){

        })
    });

    //预约时间 年月日
    new Select({}, 'date',function(){
        // $(this).click(function(){
        //     $(this).find('.dot').toggle()
        // })
    });

    //预约时间 上午下午
    new Select({}, 'ampm',function(){
        // $(this).click(function(){
        //     $(this).find('.dot').toggle()
        // })
    });
}


var Index = React.createClass(index)

function renderDom(ele, cb){
    var element;
    if(typeof ele==='string')
        element = document.getElementById(ele)
    else
        if(typeof ele === 'object')
            if(ele.nodeType)
                element = ele
    else
        return;

    React.render(
        <Index itemMethod={cb} itemDefaultMethod={bindIndex}/>,
        element
    )
}

module.exports = renderDom;
