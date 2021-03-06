macro def {

  // No parameter functions
  rule { $f:ident() => $exp:expr ; } => {
    const $f = function() {
      return $exp;
    }
  }

  // One parameter functions
  rule { $f:ident($x:ident) => $exp ; } => {
    const $f = function() {
      return ($x => $exp)(arguments[0]);
    }
  }

  rule { $f:ident($x:lit) $rest ... ;  } => {
    const $f = function() {
      def ($x) $rest ... ;
    }
  }

  rule { ($x:lit) => $exp:expr $rest ... ; } => {
    if (arguments[0] === $x) {
      return $exp
    }
    def $rest ... ;
  }

  rule {, $f:ident($x:lit) => $exp:expr $rest ... ; } => {
    else if (arguments[0] === $x) {
      return $exp
    }
    def $rest ... ;
  }

  rule {, $f:ident($x:ident) => $exp ; } => {
    else {
      return ($x => $exp)(arguments[0]);
    }
  }

  rule {, $f:ident($x:ident) => $exp:expr ; } => {
    else {
      return ($x => $exp)(arguments[0]);
    }
  }

}

export def;