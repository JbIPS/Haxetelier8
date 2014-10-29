

class Main
{
	public static inline function main():Void
	{
	    new Main();
	}

	public function new(){
		setMood();
		useSuperString();
		operatorOverloading();
		arrayAccess();
		selectiveFunctions();
		macroTest();
	}

	private function setMood():Void
	{
		var input: js.html.InputElement = cast js.Browser.document.getElementById("mood");
		var mood: Mood = HAPPY;
		input.value = mood;
	}

	private function useSuperString():Void
	{
	    var p = js.Browser.document.getElementById("sandbox");
	    var man = "man";
	    p.textContent = "Hello, I'm a "+man+". ";
	    var superString: SuperString = man;
	    p.textContent += "Now, I'm "+superString;
	    /*var num: Int = superString;
	    p.textContent += "Now, I'm "+num;*/
	}

	private function operatorOverloading():Void
	{
	    var ol = js.Browser.document.getElementById("slice");
	    var man: SuperString = "man";
	    for(i in 0...6){
	    	var li = js.Browser.document.createLIElement();
	    	li.textContent = "I'm "+(man/i);
	    	ol.appendChild(li);
	    }
	}

	private function arrayAccess():Void
	{
		var p = js.Browser.document.getElementById("sandboxArray");
		var position = 3;
		var sString: SuperString = "Haxetelier";
		p.textContent = "A la position n°"+3+", il y a un "+sString[position-1];
	}

	private function selectiveFunctions():Void
	{
	    var p = js.Browser.document.getElementById("sandboxSelective");
		var sString: SuperString = "haxetelier";
		p.textContent = "I'm doing a F**KING GREAT "+sString.yell()+"!!";
	}

	private function macroTest():Void
	{
	    var sString: SuperString = "macro";
	    var b = Macro.add(sString);

	    var p = js.Browser.document.getElementById("sandboxMacro");
		p.textContent = "I'm doing a double "+b+"!!";
	}
}

@:enum
abstract Mood(String) to String{
  var HAPPY = "Very Happy!";
  var MEH = "Bof";
  var GRUMPY = ":(";
}

@:forward(toUpperCase)
abstract SuperString(String){
	inline function new(s: String){
		this = s;
	}

	@:from
	public static function fromString(s: String):SuperString
	{
	    return new SuperString(s);
	}

	@:to
	public function toString()
	{
	    return "Super"+this;
	}

	/*@:to
	public function toInt()
	{
	    return this.length;
	}*/

	@:op(A / B)
	public function slice(time: Int): SuperString
	{
		return switch(time) {
			case 0 | 1: this;
			case 2: new SuperString("half-"+this);
			case 3: new SuperString("third-"+this);
			case 4: new SuperString("quarter-"+this);
			default: new SuperString("not a whole "+this);
		}
	}

	@:op(A + A)
	public function add(s: SuperString): SuperString
	{
	    return "bigger "+s;
	}

	// TODO ++ op

	@:arrayAccess
	public function getChar(pos: Int)
	{
	    return this.charAt(pos);
	}

	public static function yell(s: SuperString):SuperString
	{
		// Activer le forwarding
	    return s.toUpperCase();
	}
}