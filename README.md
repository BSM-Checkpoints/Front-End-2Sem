# access-control-cp

Projeto desenvolvido como parte do CheckPoint de **Autenticação com React Hook Form e JSON Server**.
A aplicação permite **cadastro e login de usuários**, com validação de dados, mensagens de erro personalizadas e simulação de autenticação utilizando `localStorage`.

---

## 🚀 Tecnologias utilizadas

* [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* [TailwindCSS](https://tailwindcss.com/) para estilização
* [React Hook Form](https://react-hook-form.com/) para validação de formulários
* [JSON Server](https://github.com/typicode/json-server) para simulação de API

---

## 📌 Funcionalidades

* Página inicial `/login` com formulário validado.
* Página `/cadastro` acessível a partir do login.
* Validação de campos com mensagens de erro personalizadas.
* Verificação de duplicidade de **nome de usuário** e **email** no cadastro.
* Autenticação no login consultando o endpoint `usuarios`.
* Armazenamento do usuário logado em `localStorage`.
* Exibição do nome e email do usuário em todas as páginas.
* Estrutura de commits seguindo boas práticas com rótulos (`feat:`, `fix:`, `issue:`, `enhancement:`).

---

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/access-control-cp.git
cd access-control-cp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a API (json-server)

```bash
npm run api
```

> O servidor rodará em `http://localhost:3001`.

### 4. Inicie o projeto React

```bash
npm run dev
```

> A aplicação rodará em `http://localhost:5173`.

---

## 📂 Mini estrutura do projeto

```
access-control-cp/
 ├── public/
 ├── src/
 │   ├── components/     
 │   ├── routes/         
 │   ├── App.tsx         
 │   └── main.tsx        
 ├── db.json             
 ├── package.json
 └── tailwind.config.js
```

---

👥 Integrantes do Projeto - 1TDSPG

📌 Moisés Barsoti Andrade de Oliveira || RM: 565049

📌 Sofia Siqueira Fontes || RM: 563829

📌 Felipe Kirschner Modesto || RM: 561810
