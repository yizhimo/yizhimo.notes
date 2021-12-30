import store from '@/store'
import { sign } from '@/utils/sign.js'

// 微信公众号授权
export function wxAuthorize() {
	// 非静默授权，第一次有弹框
	let local = window.location.href; // 获取页面url
	// console.log(local)
	let appid = 'wxc5ad81a39d653340' // 公众号appid
	let code = getUrlCode().code; // 截取code
	// 获取之前的code
	let oldCode = uni.getStorageSync('wechatCode')
	if (code == null || code === '' || code == 'undefined' || code == oldCode) {
		// 如果没有code，就去请求获取code
		console.log('当前没有code，进入授权页面')
		let uri = encodeURIComponent(local)
		// 设置旧的code为0，避免死循环
		uni.setStorageSync('wechatCode',0)
		window.location.href =
			`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
	} else {
		console.log('存在code，使用code换取用户信息')
		// 保存最新code
		uni.setStorageSync('wechatCode',code)
		var signQuery = {
			code: code
		}
		const finalObj = sign(signQuery)
		const finalUrl = finalObj.url
		const finalTime = finalObj.time
		
		this.$request.get(`/api/vote/wechat/code-get-userinfo?code=${code}&time=${finalTime}&sign=${finalUrl}`).then(res => {
			if (res.code == 200) {
				// 成功的逻辑
				// console.log(res.data.data);
				console.log('获取用户信息成功');
				const userInfo = JSON.parse(res.data)
				vuex('userInfo', userInfo)
				vuex('isLogin', true)
				console.log('已登录')
			} else {
				// 失败的逻辑
				// window.alert('获取用户信息失败')
				console.log(res)
				console.log('获取用户信息失败')
			}
		})
		
	}
}

// vuex存储
function vuex(name, value) {
	store.commit('$uStore', {
		name,
		value
	})
}


function getUrlCode() {
	// 截取url中的code方法
	var url = location.search;
	// this.winUrl = url;
	var theRequest = new Object();
	if (url.indexOf('?') != -1) {
		var str = url.substr(1);
		var strs = str.split('&');
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
		}
	}
	return theRequest;
}
