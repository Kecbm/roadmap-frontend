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
