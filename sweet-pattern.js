macro def {
  rule { $f:ident $rest ... ;  } => {
    const $f = function() {
      const arg0 = arguments[0];
      def $rest ... ;
    }
  }

  rule { ($x:lit) => $exp:expr , $rest ... ; } => {
    if (arg0 === $x) {
      return $exp
    }
    def , $rest ... ;
  }

  rule {, $f:ident($x:lit) => $exp:expr , $rest ... ; } => {
    else if (arg0 === $x) {
      return $exp
    }
    def , $rest ... ;
  }

  rule {, $f:ident($x) => $exp:expr ; } => {
    else {
      return ($x => $exp)(arg0);
    }
  }
}

def fib(1) => 1,
    fib(2) => 1,
    fib(n) => fib(n - 1) + fib(n - 2);
