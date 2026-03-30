// 🚀 TS 5.9

// 👩🏾‍🚀 SATISFIES OPERATOR
/*
  Valida que um valor respeita um tipo, sem perder o tipo mais específico. Ele garante que o tipo está correto na hora da atribuição, mas não "apaga" o tipo real do valor, assim temos validação e inferência ao mesmo tempo
*/
type Cor = string | { r: number, g: number, b: number }

// O `satisfies` garante que seguimos a regra 'Cor'
// Mas o TS ainda sabe que 'primaria' é uma string específica
const paleta = {
    primaria: "red",
    secundaria: { r: 0, g: 255, b: 0 }
} satisfies Record<string, Cor>;

// O TS sabe que é string, assim podemos usar 'toUpperCase()'
paleta.primaria.toUpperCase();

// Sem o `satisfies` o TS daria erro falando que 'primária' poderia ser um objeto RGB

// 👩🏾‍🚀 CONST TYPE PARAMETERS
/*
  Tem a função de "avisar" a função para ela olhar os argumentos da forma mais específica e literal possível
*/
// O 'const' ante do T força o TS a ler os valores reais, não apenas o tipo geral
function criarUsuarios<const T extends string[]>(nomes: T) {
    return nomes;
}

const users = criarUsuarios(["Alice", "Bob"])
// O tipo de 'users' não é string[], é exatamente ["Alice", "Bob"]

// 🪐 EXEMPLO PRÁTICO
/*
  Sistema para onde o TS vai validar as rotas de uma aplicação e "decorar" o nome de cada rota para fornecer auto-complete
*/
type RouteConfig = {
    path: string;
    role: "admin" | "user"
}

// Usamos <const T> para capturar os nomes exatos das rotas
function defineRoutes<const T extends Record<string, RouteConfig>>(config: T) {
    return config;
}

const myAppRoutes = defineRoutes({
    home: { path: "/", role: "user" },
    dashboard: { path: "/admin/panel", role: "admin" }
} satisfies Record<string, RouteConfig>);

// O TS agora sabe tudo sobre as rotas
const path = myAppRoutes.dashboard.path; // O tipo é "/admin/panel"
const role = myAppRoutes.home.role; // O tipo é "user"