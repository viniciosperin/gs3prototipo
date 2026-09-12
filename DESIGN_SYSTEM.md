# GS3 — padrões de interação

## Botões

Os botões preservam posição e tamanho em todos os estados. O componente inteiro nunca deve receber `transform` em hover ou pressed.

### Outline

- Default: fundo transparente, texto e borda `#14841D`.
- Hover: fundo e borda `#14A31A`, com texto e ícone claros.
- Pressed: fundo e borda `#0F6316`, com texto e ícone claros.

### Filled

- Default: fundo `#18C11F` e texto claro.
- Hover: fundo `#14841D`.
- Pressed: fundo `#063708`.

### Movimento

- Quando houver ícone direcional diagonal, somente o ícone gira `45deg` no hover para apontar lateralmente; permanece nessa direção no pressed.
- O contêiner do botão não recebe `transform`.
- Ícones de ação local, como fechar, podem girar até `5deg` no hover e reduzir para `92%` no pressed.
- Duração: `200–220ms`, easing `cubic-bezier(.22,.61,.36,1)`.
- Com `prefers-reduced-motion`, nenhum deslocamento ou escala é aplicado.
