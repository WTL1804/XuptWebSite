function checkString(str) {
	for (var i in str) {
        var asc = str.charCodeAt(i);
        if (!(asc >= 48 && asc <= 57)) {
            return false;
        }
    }
    return true;
}
function checkPassWord() {
for (var i in str) {
        var asc = str.charCodeAt(i);
        if (!((asc >= 48 && asc <= 57)||(asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122))) {
            return false;
        }
    }
    return true;
}
function check() {
	var form = document.getElementById('loginForm');

	var account = form.inputAccount.value;
	var password = form.inputPassword.value;
	if (account.length != 8) {
		alert("学号长度为8位，格式有误");
	} else if (!checkString(account)) {
		alert("学号只包含数字");
	} else if (password.length < 6 ) {
		alert("密码必须大于5位");
	} else if (!checkPassWord(password)) {
		alert("密码由数字和字母组合");
	} else {
		return true;
	}

}
