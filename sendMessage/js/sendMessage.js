/**
 * @Author: Created by wanzhichao on 2016/10/26.
 * vision:1.0
 */

/**================================================================
 短信验证码插件
 {
    titleTxt: String,       //必填，弹出框的头部文字
    contHeadTxt: String,    //必填，手机尾号后四位
    count: Int,             //非必填，倒计时秒数
    reSendFn: function,     //必填，重新发送的回调
    confirmFn: function,    //必填，确认后的回调
 }
 =================================================================*/

(function($){

    var timer,          //定时器
        timeCount,      //倒计时数字
        instance;       //单例模式的实例

    function SendMessage(opts) {

        if(instance) {
            return instance;    //单例模式
        }

        this.option = {
            count: 60
        };
        $.extend(this.option, opts);
        if(!timeCount) {
            timeCount = this.option.count;  //若不传倒计时，则默认60s
        }
        this.bodyNode = $(document.body);
        this.domHtml = '<div class="jm-alert">'+
                            '<div class="alert-box">'+
                                '<div class="alert-title">标题</div>'+
                                '<div class="alert-cont">'+
                                    '<p class="cont-txt">输入手机尾号未知接收的验证码</p>'+
                                    '<div class="input-box">'+
                                        '<div class="msg-input">'+
                                            '<input type="tel" maxlength="6" placeholder="短信验证码" />'+
                                        '</div>'+
                                        '<div class="send-btn">发送验证码</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="btn-box">'+
                                    '<div class="alert-btn btn-can-click border-r cancel-btn">取消</div>'+
                                    '<div class="alert-btn sure-btn">确认</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
        this.domNode = $(this.domHtml);
        this.alertTitle = this.domNode.find('.alert-title');    //顶部文字
        this.contTxt = this.domNode.find('.cont-txt');          //手机尾号等文字
        this.closeBtn = this.domNode.find('.cancel-btn');       //取消按钮
        this.confitmBtn = this.domNode.find('.sure-btn');       //确认按钮
        this.sendBtn = this.domNode.find('.send-btn');          //再次发送按钮
        this.msgInput = this.domNode.find('input');             //短信验证码输入框
        this.init();
        this.bindEvent();
        instance = this;
        return this;
    };

    SendMessage.prototype = {
        init: function() {
            this.contTxt.text(this.option.contHeadTxt);
            this.alertTitle.text(this.option.titleTxt);
            this.bodyNode.append(this.domNode);
        },
        bindEvent: function() {
            var c = "click",
                _that = this;

            //点击取消按钮
            _that.closeBtn.on(c, function() {
                _that.hideBox();
            });
            //重新发送验证码
            _that.sendBtn.on(c, function() {
                var $self = $(this);
                if($self.hasClass('can-click')) {
                    $self.removeClass('can-click');
                    _that.msgInput.val("");
                    _that.countdown();
                    _that.option.reSendFn && _that.option.reSendFn();
                }
            });
            _that.confitmBtn.on(c, function() {

                if(_that.confitmBtn.hasClass('btn-can-click')) {
                    var inputVal = _that.msgInput.val();
                    if(/^\d{6}$/.test(inputVal)) {
                        _that.msgInput.val("");     //清空输入框
                        _that.hideBox();
                        _that.option.confirmFn && _that.option.confirmFn(inputVal);
                    }else{
                        _that.contTxt.text('验证码为6位数字').addClass('txt-care');
                    }
                }
            });
            _that.msgInput.on('input', function() {
                var inputVal = $(this).val();
                if(_that.contTxt.hasClass('txt-care')){
                    _that.contTxt.text(_that.option.contHeadTxt).removeClass('txt-care');
                }
                inputVal.length === 6 ? _that.confitmBtn.addClass("btn-can-click") : _that.confitmBtn.removeClass("btn-can-click");
            });
        },
        show: function() {
            timeCount = this.option.count;
            this.sendBtn.removeClass('can-click');
            this.countdown();
            this.domNode.show();
        },
        hideBox: function() {
            this.domNode.hide();
        },
        //发送短信到时重置
        reset: function() {
            timeCount = this.option.count;
            this.sendBtn.text('重新获取').addClass('can-click');
        },
        //验证码倒计时
        countdown: function () {
            var _that = this;
            timer && clearInterval(timer);
            _that.sendBtn.text(timeCount + '秒后重发');
            timer = setInterval(
                function () {
                    if (timeCount > 1) {
                        timeCount--;
                        _that.sendBtn.text(timeCount + '秒后重发');

                    } else {
                        clearInterval(timer);
                        _that.sendBtn.text('重新获取').addClass('can-click');
                        _that.reset();
                    }
                }, 1000);
        }
    };

    if (typeof define == "function" && window.seajs != undefined) {
        define(function (require, exports, module) {

            module.exports = SendMessage;
        });
    } else {
        window.jm = window.jm || {};
        window.jm.com = window.jm.com || {};
        window.jm.com.SendMessage = SendMessage;
    }

})($);