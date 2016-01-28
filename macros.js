macro def {

  // No parameter functions
  rule { $f:ident() => $exp:expr ; } => {
    const $f = function() {
      return $exp;
    }
  }

  // One parameter functions
  rule { $f:ident($x:lit) $rest ... ;  } => {
    const $f = function() {
      const arg0 = arguments[0];
      def ($x) $rest ... ;
    }
  }

  rule { $f:ident($x:ident) => $exp:expr ; } => {
    const $f = function($x) {
      return $exp;
    }
  }

  rule { ($x:lit) => $exp:expr $rest ... ; } => {
    if (arg0 === $x) {
      return $exp
    }
    def $rest ... ;
  }

  rule {, $f:ident($x:lit) => $exp:expr $rest ... ; } => {
    else if (arg0 === $x) {
      return $exp
    }
    def $rest ... ;
  }

  rule {, $f:ident($x) => $exp:expr ; } => {
    else {
      return ($x => $exp)(arg0);
    }
  }

}

export def;
