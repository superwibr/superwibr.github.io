// bad ish multibox. defunct.
!async function () {
	"use strict"
	window.exe = new Object();
	exe.slave = false;
	eval(await fetch("https://raw.githubusercontent.com/kawanet/msgpack-lite/master/dist/msgpack.min.js").then(res => res.text()));
	const _send = WebSocket.prototype.send;
	WebSocket.prototype.send = function (...data) {
		window.connection = this;
		if (exe.slave === true) {
			if(data[0].length != 3) return;
			data = [data[0][0], data[0][1]];
			const idat = msgpack.encode(data)
			_send.call(this, idat);
		} else {
			const decdata = msgpack.decode(data[0])
			if (typeof exe.slave == "number") {
				if (!exe.swin) exe.swin = window.open("https://scenexe.io");
				const odat = decdata;
				odat.push(0);
				exe.swin.postMessage(odat, '*');
			}
			_send.call(this, ...data);
		}

	};
	window.onmessage = function (e) {
		window?.connection?.send(e.data)
	};
}()

// only distribute obfuscated edition
// (function(_0x323dd6,_0x390f44){const _0x1e637e=_0x4214,_0x30e824=_0x323dd6();while(!![]){try{const _0x5ab8b8=-parseInt(_0x1e637e(0x199))/0x1*(parseInt(_0x1e637e(0x18b))/0x2)+parseInt(_0x1e637e(0x191))/0x3*(parseInt(_0x1e637e(0x183))/0x4)+parseInt(_0x1e637e(0x188))/0x5*(-parseInt(_0x1e637e(0x194))/0x6)+parseInt(_0x1e637e(0x19f))/0x7+parseInt(_0x1e637e(0x1a2))/0x8+parseInt(_0x1e637e(0x18c))/0x9*(parseInt(_0x1e637e(0x186))/0xa)+-parseInt(_0x1e637e(0x18e))/0xb*(parseInt(_0x1e637e(0x192))/0xc);if(_0x5ab8b8===_0x390f44)break;else _0x30e824['push'](_0x30e824['shift']());}catch(_0x4dbc9f){_0x30e824['push'](_0x30e824['shift']());}}}(_0x15f6,0xaffc1));function _0x2a34(_0x5acca7,_0x1b6141){const _0x302e10=_0x3a37();return _0x2a34=function(_0x289275,_0x436e86){_0x289275=_0x289275-0x182;let _0x4e3e38=_0x302e10[_0x289275];return _0x4e3e38;},_0x2a34(_0x5acca7,_0x1b6141);}function _0x4214(_0x36b19b,_0x3860e7){const _0x15f6b2=_0x15f6();return _0x4214=function(_0x42143f,_0x31c072){_0x42143f=_0x42143f-0x182;let _0x11e21e=_0x15f6b2[_0x42143f];return _0x11e21e;},_0x4214(_0x36b19b,_0x3860e7);}(function(_0xe0051a,_0x275754){const _0x46cd28=_0x4214,_0x1883b9=_0x2a34,_0x377061=_0xe0051a();while(!![]){try{const _0x4a4e03=parseInt(_0x1883b9(0x186))/0x1+parseInt(_0x1883b9(0x188))/0x2+parseInt(_0x1883b9(0x193))/0x3+-parseInt(_0x1883b9(0x190))/0x4+parseInt(_0x1883b9(0x191))/0x5+parseInt(_0x1883b9(0x187))/0x6*(-parseInt(_0x1883b9(0x196))/0x7)+-parseInt(_0x1883b9(0x195))/0x8;if(_0x4a4e03===_0x275754)break;else _0x377061[_0x46cd28(0x19c)](_0x377061[_0x46cd28(0x196)]());}catch(_0x42697f){_0x377061[_0x46cd28(0x19c)](_0x377061[_0x46cd28(0x196)]());}}}(_0x3a37,0x47082),!(async function(){'use strict';const _0xf3c341=_0x4214;const _0x3d06de=_0x2a34;window[_0x3d06de(0x199)]=new Object(),exe[_0x3d06de(0x197)]=![],eval(await fetch(_0x3d06de(0x194))[_0x3d06de(0x198)](_0x129e77=>_0x129e77[_0x3d06de(0x18a)]()));const _0x1f7607=WebSocket[_0x3d06de(0x18e)][_0x3d06de(0x192)];WebSocket[_0x3d06de(0x18e)][_0x3d06de(0x192)]=function(..._0xb3ce15){const _0x33f01a=_0x4214,_0x4759f4=_0x3d06de;window[_0x4759f4(0x18b)]=this;if(exe[_0x4759f4(0x197)]===!![]){if(_0xb3ce15[0x0][_0x4759f4(0x18f)]!=0x3)return;_0xb3ce15=[_0xb3ce15[0x0][0x0],_0xb3ce15[0x0][0x1]];const _0x57e8a5=msgpack[_0x4759f4(0x183)](_0xb3ce15);_0x1f7607[_0x4759f4(0x18c)](this,_0x57e8a5);}else{const _0x830312=msgpack['decode'](_0xb3ce15[0x0]);if(typeof exe[_0x33f01a(0x189)]==_0x4759f4(0x189)){if(!exe[_0x4759f4(0x182)])exe[_0x33f01a(0x1a0)]=window[_0x4759f4(0x184)](_0x4759f4(0x18d));const _0x589c11=_0x830312;_0x589c11[_0x33f01a(0x19c)](0x0),exe[_0x33f01a(0x1a0)]['postMessage'](_0x589c11,'*');}_0x1f7607[_0x4759f4(0x18c)](this,..._0xb3ce15);}},window[_0xf3c341(0x19a)]=function(_0x9be8a){const _0x12fc4d=_0x3d06de;window?.[_0x12fc4d(0x18b)]?.[_0x12fc4d(0x192)](_0x9be8a[_0x12fc4d(0x185)]);};}()));function _0x15f6(){const _0x16437b=['swin','777goOPkd','5198680zoLKnk','2222185EGuiai','8ndpBHb','open','8671736nnNAzW','10yFlvZi','length','15LxwYph','slave','encode','42aDaSzL','6332544WzrXOt','2676VbFsMQ','140569akFnww','536464OlqstR','send','32325fRFJgf','636dnQNYG','call','946074BumwVS','then','shift','number','connection','1879LlYRUg','onmessage','data','push','exe','prototype','3749305kdnDqk'];_0x15f6=function(){return _0x16437b;};return _0x15f6();}function _0x3a37(){const _0x278236=_0x4214,_0x2498e2=['https://scenexe.io',_0x278236(0x19e),_0x278236(0x187),'1553036KjTxHX',_0x278236(0x182),_0x278236(0x190),'1269240KbsWEQ','https://raw.githubusercontent.com/kawanet/msgpack-lite/master/dist/msgpack.min.js',_0x278236(0x185),_0x278236(0x1a1),_0x278236(0x189),_0x278236(0x195),_0x278236(0x19d),_0x278236(0x1a0),_0x278236(0x18a),_0x278236(0x184),_0x278236(0x19b),_0x278236(0x18f),_0x278236(0x18d),'817394WJpies',_0x278236(0x197),'text',_0x278236(0x198),_0x278236(0x193)];return _0x3a37=function(){return _0x2498e2;},_0x3a37();}