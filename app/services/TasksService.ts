interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

export const getTasks = ():TaskProps[] => {
  return [{ id: 1, title: "Despertarse", done: false }, { id: 2, title: "Hacer las compras", done: false }, { id: 3, title: "Sacar la ropa", done: true }, { id: 4, title: "Pagar renta", done: false }];
};
