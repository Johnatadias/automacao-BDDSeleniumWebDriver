$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/aprendendoSelenium.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "Como um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Deve validar regras de cadastros",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastros",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 17,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "sou notificado com a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 22,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;1"
    },
    {
      "cells": [
        "Conta teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;3"
    },
    {
      "cells": [
        "Conta teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"jhoouw_sk8board@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"oicaradeboi\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7277117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhoouw_sk8board@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 200575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oicaradeboi",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 104115500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 630122600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 40651700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 65049700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 322938400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Deve validar regras de cadastros",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 17,
  "name": "informo a conta \"Conta teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "sou notificado com a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 98755700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 340658700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 31
    }
  ],
  "location": "InserirContasSteps.souNotificadoComAMensagem(String)"
});
formatter.result({
  "duration": 36244800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"jhoouw_sk8board@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"oicaradeboi\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5938721000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhoouw_sk8board@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 198025500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oicaradeboi",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 116697000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 788450400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 53717000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 85646600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 354679400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras de cadastros",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 17,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "sou notificado com a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 69757200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 346207600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 31
    }
  ],
  "location": "InserirContasSteps.souNotificadoComAMensagem(String)"
});
formatter.result({
  "duration": 44444500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"jhoouw_sk8board@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"oicaradeboi\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6369858700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhoouw_sk8board@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 171458200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oicaradeboi",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 120687000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 853665500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 51996800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 81885600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 343659500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras de cadastros",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastros;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 17,
  "name": "informo a conta \"Conta teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "sou notificado com a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 94922000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 271868300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 31
    }
  ],
  "location": "InserirContasSteps.souNotificadoComAMensagem(String)"
});
formatter.result({
  "duration": 40013500,
  "status": "passed"
});
});