"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Aluno = /*#__PURE__*/_createClass(function Aluno(nome, nota) {
  _classCallCheck(this, Aluno);
  this.nome = nome;
  this.nota = nota;
});
var _alunos = /*#__PURE__*/new WeakMap();
var Turma = /*#__PURE__*/function () {
  function Turma() {
    _classCallCheck(this, Turma);
    _classPrivateFieldInitSpec(this, _alunos, void 0);
    _classPrivateFieldSet(_alunos, this, []);
  }
  return _createClass(Turma, [{
    key: "adicionarAluno",
    value: function adicionarAluno(nome, nota) {
      var novoAluno = new Aluno(nome, nota);
      _classPrivateFieldGet(_alunos, this).push(novoAluno);
    }
  }, {
    key: "filtrarAprovados",
    value: function filtrarAprovados() {
      return _classPrivateFieldGet(_alunos, this).filter(function (aluno) {
        return aluno.nota >= 6;
      });
    }
  }, {
    key: "exibirAprovados",
    value: function exibirAprovados() {
      var aprovados = this.filtrarAprovados();
      aprovados.forEach(function (aluno) {
        return console.log("Aluno: ".concat(aluno.nome, ", nota: ").concat(aluno.nota));
      });
    }
  }]);
}(); // Instanciando a turma e adicionando alunos
var minhaTurma = new Turma();
minhaTurma.adicionarAluno('Lázaro', 8);
minhaTurma.adicionarAluno('Bianca', 5);
minhaTurma.adicionarAluno('Vitória', 7);
minhaTurma.adicionarAluno('Arthur', 4);
minhaTurma.adicionarAluno('Tamires', 6);
minhaTurma.adicionarAluno('Leandro', 2);
minhaTurma.adicionarAluno('Julio', 7);
minhaTurma.adicionarAluno('Gilberto', 10);
minhaTurma.adicionarAluno('Ana', 1);

// Exibindo alunos aprovados
console.log('Alunos aprovados:');
minhaTurma.exibirAprovados();