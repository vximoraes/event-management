# 🗓️ Gerenciamento de Eventos 
Desenvolvimento de uma aplicação em TypeScript para gerenciar eventos e usuários utilizando um banco de dados SQLite. O sistema permite o gerenciamento de eventos, usuários e logs de ações realizadas no sistema.

![Image](https://github.com/user-attachments/assets/66abf54f-17d7-4e8b-953e-5abf59de7ab6)

## 🛠️ Tecnologias
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## ✨ Features
- **Gerenciamento de Eventos:** Permite adicionar, listar, listar por ID, atualizar e deletar eventos.
- **Gerenciamento de Usuários:** Permite adicionar, listar, listar por ID, atualizar e deletar usuários.
- **Registro de Logs:** Todas as ações realizadas nos eventos (inserir, alterar, deletar) são registradas em uma tabela de logs, incluindo o usuário responsável e a data/hora da ação.
- **Validação de Dados:** Validações para garantir que os dados inseridos estejam corretos.
- **Banco de Dados SQLite:** Persistência de dados utilizando SQLite.

## 🏃‍♂️ Rodando Localmente

### Pré-requisitos

- Node.js instalado na sua máquina.
- NPM ou Yarn para gerenciar pacotes.

### Passos para rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/vximoraes/event-management.git
```

2. Acesse o diretório do projeto:
```bash
cd event-management  
```

3. Instale as dependências:
```bash
npm install  
```

4. Faça o build do TypeScript:
```bash
npm run build
```

5. Executre o projeto:
```bash
npm run start 
```

## ⌨️ Navegação na Interface
A aplicação possui uma interface interativa que permite navegar pelas opções utilizando as ```Setas do Teclado (⬆️⬇️)``` e a tecla ```Enter(↩️)``` para selecionar a opção desejada. Isso torna o uso do sistema mais intuitivo e fácil de operar.
