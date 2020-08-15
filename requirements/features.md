# Backend-Requirimentos-Marcelo

## Administrador

- [x] Criação da conta do administrador
  - [x] Validando email
  - [x] Validando os dados

## Participantes

- [x] Criação da conta do participante
  - [x] Validando email
    - [x] Por participante
    - [x] Por pesquisador
  - [x] Validando os dados
- [x] Pegar dados do participante logado
  - [x] Validar acesso a rota
- [x] Pegar todos os participantes para colocar em uma pesquisa
  - [x] Validar acesso a rota
  - [x] Filtrar os participantes por:
    1. Nome
    2. Escola ou universidade
    3. Escolaridade

## Pesquisadores

- [x] Criação da conta do pesquisador
  - [x] Validando os dados
  - [x] Validando email
    - [x] Por participante
    - [x] Por pesquisador
- [x] Pegar dados do pesquisador logado
  - [x] Validar acesso a rota

## Perguntas

- [x] Criar uma rota para uploads de imagens para as perguntas também poderem usar imagens
- [x] Criação de uma pergunta
  - [x] Os dados da pergunta podem ser imagens ou strings, permitir flexibilidade.
  - [x] Validando os dados
  - [x] Acesso apenas ao pesquisador
  - [x] Deve está atrelado a uma pesquisa
  - [] Pergunta deve ter uma resposta certa
- [] Editar uma pergunta
  - [] Validando os dados
  - [] Acesso apenas ao pesquisador
  - [] Deve está atrelado a uma pesquisa
  - [] A tipologia de pergunta deve ser de acordo com a resposta
  - [] Pergunta deve ter uma resposta certa

## Pesquisa

- [] Criação de uma pesquisa
  - [] Apenas um pesquisador
  - [] Validando Dados
  - [] Pesquisa ainda não deve ter sua sessão iniciada
- [] Adicionar participante a pesquisa
  - [] Apenas um pesquisador
  - [] Adicionar os status do participante
  - [] Deve haver um participante
- [] Pegar dados básicos da pesquisa para o pesquisador
  - [] Apenas pesquisadores
  - [] Filtragem por:
    1. Tipo
    2. Conteúdo
- [] Pegar dados básicos da pesquisa para o participante (deve estar atrelado a pesquisa
  - [] Apenas participantes
  - [] Pesquisas concluídas
  - [] Pesquisas pendentes
  - [] Filtragem por:
    1. Tipo
    2. Conteúdo
- [] Pegar TODOS os dados básicos da pesquisa para o administrador
  - [] Apenas adiministradores
  - [] Filtragem por:
    1. Tipo
    2. Conteúdo
- [] Gerar CSV dos dados de uma pesquisa.
  - [] Apenas adiministradores
  - [] Deve haver uma pesquisa atrelada a rota
  - [] Fazer os tratamentos de dados de JSON para Matriz dos dados do Banco de dado
