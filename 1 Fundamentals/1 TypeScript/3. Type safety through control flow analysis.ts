// 🚀 Type Safety through Control Flow Analysis

// 👩🏾‍🚀 Type guards
/*
  São expressões que verificam o tipo de uma variável em tempo de execução
*/
// ✨ Nativos: `typeof`, `instanceof` e `in`

// ✨ Customizados
// Encapsulamento de uma lógica em uma função
interface Passaro { voar: () => void }
interface Peixe { nadar: () => void }

function ehPassaro(animal: Passaro | Peixe): animal is Passaro {
    return (animal as Passaro).voar !== undefined;
}

if (ehPassaro(pet)) {
    pet.voar();
}

// 👩🏾‍🚀 Discriminated unions

// 👩🏾‍🚀 Type narrowing