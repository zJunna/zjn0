function Eject() {
	var _this = this;
	var qback = $('<div class="qback"></div>')
	_this.Ealert = function(obj) {
		var alertBox = $('<div class="alertBox"></div>')
		var alertMes = $('<div class="alertMes">' + obj.message + '</div>')
		var alertBtn = $('<span class="alertBtn">确定</span>').on('click', function() {
			qback.remove();
			alertBox.remove();
			setTimeout(function() {
				obj.define()
			}, 100)
		})
		alertBox.append(alertMes);
		alertBox.append(alertBtn);
		qback.append(alertBox);
		$('body').append(qback);
		alertBox.css({
			'marginTop': -alertBox.outerHeight() / 2 + 'px'
		});
	}
	_this.Econfirm = function(obj) {
		var confirmBox = $('<div class="alertBox"></div>')
		var confirmMes = $('<div class="alertMes">' + obj.message + '</div>')
		var confirmBtn = $('<span class="ConBtn">确定</span>').on('click', function() {
			qback.remove()
			confirmBox.remove()
			setTimeout(function() {
				obj.define()
			}, 100)
		})
		var confirmcancel = $('<span class="cancel">取消</span>').on('click', function() {
			qback.remove()
			confirmBox.remove()
			setTimeout(function() {
				obj.cancel()
			}, 100)
		})
		confirmBox.append(confirmMes);
		confirmBox.append(confirmBtn);
		confirmBox.append(confirmcancel);
		qback.append(confirmBox);
		$('body').append(qback);
		confirmBox.css({
			'marginTop': -confirmBox.outerHeight() / 2 + 'px'
		});
	}, _this.Etoast = function(mes, time) {
		var timer = null;
		var ToastBox = $('<div class="ToastBox">' + mes + '</div>')
		qback.append(ToastBox);
		$('body').append(qback);
		ToastBox.css({
			'marginTop': -ToastBox.outerHeight() / 2 + 'px'
		});
		clearInterval(timer)
		timer = setInterval(function() {
			time--
			if(time <= 0) {
				clearInterval(timer)
				qback.remove()
				ToastBox.remove()
			}
		}, 1000)
	}
}