# language: pt

Funcionalidade: Lista de tarefas Ebytr ToDo

  Eu quero ver um título e uma lista de tarefas quando abrir o app, juntamente
  com o campo de digitar tarefas e um botão que adicione a tarefa na lista.
  Eu quero poder adicionar uma tarefa na lista e ver suas informações.

  Cenário: Entrando na aplicação pela primeira vez
    Dado que eu entro no app
    Então eu vejo o título "Ebytr ToDo" na aba do navegador
    E eu vejo uma lista de tarefas vazia
    E eu vejo um campo de texto para digitar uma tarefa
    E eu vejo um botão para adicionar tarefas

  Cenário: Adicionando uma tarefa
    Dado que eu entro no app
    E eu vejo uma lista de tarefas vazia
    Quando eu digito uma tarefa com o texto "Estudar testes unitários"
    E eu clico no botão de adicionar tarefa
    Então eu vejo uma tarefa com o texto "Estudar testes unitários" na lista
    E a tarefa 1 tem o status "A fazer"
    E o campo de texto para digitar uma tarefa está vazio

  Cenário: Removendo uma tarefa
    Dado que eu entro no app
    E eu adiciono 3 tarefas
    Quando eu removo a tarefa 2
    Então devem existir 2 tarefas
    E existe a tarefa 1
    E existe a tarefa 3
    E não existe a tarefa 2
  
  # Cenário: Editando uma tarefa
  #   Dado que eu entro no app
  #   Quando eu adiciono uma tarefa com o texto "Estudar testes de integração"
  #   E eu edito a tarefa 1 para ter o texto "Estudar testes E2E"
  #   Então eu vejo uma tarefa com o texto "Estudar testes E2E" na lista
  #   E eu não vejo uma tarefa com o texto "Estudar testes de integração" na lista

  # Cenário: Alterando o status da tarefa
  #   Dado que eu entro no app
  #   E eu adiciono 2 tarefas
  #   E todas as tarefas tem o status "A fazer"
  #   Quando eu clico no status da tarefa 2
  #   Então a tarefa 2 tem o status "Em andamento"
  #   E a tarefa 1 tem o status "A fazer"
