import haxe.macro.Expr;

class Macro {

  macro public static function add(e:Expr) {
    return macro $e + $e;
  }
}