(function () { "use strict";
var Macro = function() { };
var Main = function() {
	this.setMood();
	this.useSuperString();
	this.operatorOverloading();
	this.arrayAccess();
	this.selectiveFunctions();
	this.macroTest();
};
Main.main = function() {
	new Main();
};
Main.prototype = {
	setMood: function() {
		var input = window.document.getElementById("mood");
		var mood = "Very Happy!";
		input.value = mood;
	}
	,useSuperString: function() {
		var p = window.document.getElementById("sandbox");
		var man = "man";
		p.textContent = "Hello, I'm a " + man + ". ";
		var superString = _Main.SuperString_Impl_.fromString(man);
		p.textContent += "Now, I'm " + _Main.SuperString_Impl_.toString(superString);
	}
	,operatorOverloading: function() {
		var ol = window.document.getElementById("slice");
		var man = _Main.SuperString_Impl_.fromString("man");
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			var li;
			var _this = window.document;
			li = _this.createElement("li");
			li.textContent = "I'm " + _Main.SuperString_Impl_.toString(_Main.SuperString_Impl_.slice(man,i));
			ol.appendChild(li);
		}
	}
	,arrayAccess: function() {
		var p = window.document.getElementById("sandboxArray");
		var position = 3;
		var sString = _Main.SuperString_Impl_.fromString("Haxetelier");
		p.textContent = "A la position n°" + 3 + ", il y a un " + _Main.SuperString_Impl_.getChar(sString,position - 1);
	}
	,selectiveFunctions: function() {
		var p = window.document.getElementById("sandboxSelective");
		var sString = _Main.SuperString_Impl_.fromString("haxetelier");
		p.textContent = "I'm doing a F**KING GREAT " + _Main.SuperString_Impl_.toString(_Main.SuperString_Impl_.yell(sString)) + "!!";
	}
	,macroTest: function() {
		var sString = _Main.SuperString_Impl_.fromString("macro");
		var b = _Main.SuperString_Impl_.add(sString,sString);
		var p = window.document.getElementById("sandboxMacro");
		p.textContent = "I'm doing a double " + _Main.SuperString_Impl_.toString(b) + "!!";
	}
};
var _Main = {};
_Main.Mood_Impl_ = function() { };
_Main.SuperString_Impl_ = function() { };
_Main.SuperString_Impl_._new = function(s) {
	return s;
};
_Main.SuperString_Impl_.fromString = function(s) {
	return s;
};
_Main.SuperString_Impl_.toString = function(this1) {
	return "Super" + this1;
};
_Main.SuperString_Impl_.slice = function(this1,time) {
	switch(time) {
	case 0:case 1:
		return _Main.SuperString_Impl_.fromString(this1);
	case 2:
		return "half-" + this1;
	case 3:
		return "third-" + this1;
	case 4:
		return "quarter-" + this1;
	default:
		return "not a whole " + this1;
	}
};
_Main.SuperString_Impl_.add = function(this1,s) {
	return _Main.SuperString_Impl_.fromString("bigger " + _Main.SuperString_Impl_.toString(s));
};
_Main.SuperString_Impl_.getChar = function(this1,pos) {
	return this1.charAt(pos);
};
_Main.SuperString_Impl_.yell = function(s) {
	return _Main.SuperString_Impl_.fromString(s.toUpperCase());
};
_Main.Mood_Impl_.HAPPY = "Very Happy!";
_Main.Mood_Impl_.MEH = "Bof";
_Main.Mood_Impl_.GRUMPY = ":(";
Main.main();
})();
