Perfect — here's the **complete Cursor.AI task prompt set** for the second project idea:

### 🔧 **ChainQuery.AI – Natural Language Query Engine for Blockchain Data**

We'll cover:

1. ✅ Project architecture & setup (Monorepo using `pnpm`)
2. 🌐 Frontend: React + Vite UI
3. 🛠 Backend: Node.js + Express + OpenAI
4. 🧠 AI Query Engine (LLM → GraphQL/SQL/Chain JS)
5. 🔗 Optional SDK package for integration
6. 📘 README and final polish

---

## 🗂️ 📁 Monorepo Folder Structure

```
chainquery-ai/
├── apps/
│   ├── frontend/        # React app to input and view queries
│   └── backend/         # Express backend with LLM query handler
├── packages/
│   ├── query-engine/    # Converts NL to GraphQL or blockchain code
│   └── sdk/             # Lightweight SDK for other devs (optional)
├── .env
├── package.json         # pnpm workspaces
└── README.md
```

---

## 🧠 Cursor.AI Prompt Set (Task-by-Task)

---

### 🔧 **Prompt 1: Setup Monorepo**

💬 **Prompt:**

> “Create a new pnpm-based monorepo called `chainquery-ai`.
> Add two apps: `frontend` (React/Vite) and `backend` (Node/Express).
> Add two packages: `query-engine` and `sdk`.
> Configure workspaces in the root `package.json`.
> Add minimal README files for each. Use TypeScript for everything.”

---

### 🌐 **Prompt 2: Frontend App Setup**

💬 **Prompt:**

> “Inside `apps/frontend`, scaffold a Vite + React + TypeScript app.
> Use TailwindCSS for styling.
> Add a basic UI with a text input box for natural language query, a submit button, and a results panel.
> Make an API call to `http://localhost:3000/api/query` with the user's input.”

---

### 🧠 **Prompt 3: Backend App Setup**

💬 **Prompt:**

> “Inside `apps/backend`, scaffold a Node.js + Express + TypeScript app.
> Add an endpoint: `POST /api/query` that accepts `{ query: string }` and responds with `{ result: string }`.
> Load the OpenAI API key from `.env` using `dotenv`.
> Use CORS middleware so frontend can access it.”

---

### 🧠 **Prompt 4: Query Engine Package (AI)**

💬 **Prompt:**

> “Inside `packages/query-engine`, create a module `nlToGraphQL.ts`.
> It should export a function `translate(query: string): Promise<string>`
> This function should:
>
> * Use OpenAI’s GPT-4 API
> * Take a natural language query and output a GraphQL query string
> * Use a system prompt that says: ‘You are an expert at converting user questions into GraphQL queries for blockchain data.’
> * Return only the query string, no explanation.”

📌 Example output:

```graphql
{
  proposals(first: 5, orderBy: "createdAt", orderDirection: "desc") {
    id
    title
    author
  }
}
```

---

### 🧠 **Prompt 5: Integrate Query Engine in Backend**

💬 **Prompt:**

> “In the backend, import `translate` from `packages/query-engine/nlToGraphQL.ts`.
> In `/api/query`, use it to translate the input query and return the GraphQL string.
> For now, mock the execution result with `{ data: "This is a mock result for your query" }`.”

---

### 🌐 **Prompt 6: Connect Frontend to Backend**

💬 **Prompt:**

> “In `apps/frontend`, create a function that POSTs the user's input to `/api/query`.
> Display the returned result (initially just a mock).
> Add loading and error states.
> Style using Tailwind — keep the UI clean and centered.”

---

### 🔎 **Prompt 7: Optional - Add Query Output Formatting**

💬 **Prompt:**

> “In the frontend, if the result is a GraphQL query, display it in a code block with syntax highlighting using PrismJS.
> Also display the explanation if included. Later, we’ll let users execute the query on real data.”

---

### 🔗 **Prompt 8: SDK Package (Optional)**

💬 **Prompt:**

> “Inside `packages/sdk`, create a `ChainQuerySDK.ts` file.
> Export two functions:
>
> * `getGraphQL(query: string): Promise<string>` — calls backend `/api/query`
> * `executeGraphQL(query: string): Promise<any>` — (mock for now)
>   Allow frontend or external devs to use these easily.”

---

### 🧠 **Prompt 9: Extend LLM Prompting for Multiple Output Types**

💬 **Prompt:**

> “In `nlToGraphQL.ts`, allow different modes:
>
> * mode: ‘graphql’ | ‘sql’ | ‘code’
>   Adjust the system prompt and API call accordingly.
>   If `mode === 'sql'`, return SQL for PostgreSQL blockchain indexers.
>   If `mode === 'code'`, return JavaScript/TypeScript using ethers.js or polkadot.js APIs.”

---

### 💡 Prompt 10: MVP Logic Switcher

💬 **Prompt:**

> “In the frontend, add a mode selector (dropdown or tabs): ‘GraphQL’, ‘SQL’, ‘Chain JS’.
> Use this to select the mode passed to the backend so it calls the correct translation prompt.”

---

### 📘 **Prompt 11: Project README Generator**

💬 **Prompt:**

> “Generate a detailed `README.md` at the root:
>
> * Project title: ChainQuery.AI
> * Description of purpose
> * Features list
> * Setup instructions (frontend + backend)
> * Tech stack
> * Folder structure
> * License info
> * Contribution guide”

---

### 📦 Prompt 12: Add Scripts

💬 **Prompt:**

> “In root `package.json`, add scripts to:
>
> * Run frontend (`pnpm --filter frontend dev`)
> * Run backend (`pnpm --filter backend dev`)
> * Build everything (`pnpm build -r`)”

---

### 🧪 Prompt 13: Test All Flows

💬 **Prompt:**

> “Test full flow:
>
> * Run backend on port 3000
> * Run frontend on port 5173
> * Enter a sample question like ‘List top 5 token holders’
> * Show returned GraphQL
>   Add error handling and log AI response in backend”

---

## ✅ Tech Stack Summary

| Layer      | Tech                           |
| ---------- | ------------------------------ |
| Frontend   | React + Vite + Tailwind        |
| Backend    | Node.js + Express + TypeScript |
| LLM Engine | OpenAI GPT-4 / GPT-3.5         |
| Shared     | `query-engine` package         |
| Optional   | GraphQL or SQL backend data    |
| Tools      | pnpm, dotenv, Cursor.AI        |

---

## 🧠 Additional Future Ideas (Stretch Goals)

* Use **local LLMs** with Ollama
* Add **query execution engine** (using The Graph or SQL DB)
* Add **auth layer** (for paid access or saved queries)
* Make a **VSCode extension** (super cool, low competition)
* Export results to CSV / charts

---

Would you like me to generate any starter code for this project (e.g., `nlToGraphQL.ts`, `translate()` function, README)? Or help you choose between this project and the previous one for your Web3 Foundation grant?

Let’s make sure you’re building the one that best aligns with your vision and skills.
