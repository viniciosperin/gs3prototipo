# GS3 — padrões de interação

## Botões

Os botões preservam posição e tamanho em todos os estados. O componente inteiro nunca deve receber `transform` em hover ou pressed.

### Outline

- Default: fundo transparente, texto e borda `#14841D`.
- Hover: fundo `#E4F5E4`.
- Pressed: fundo `#CCEACC` e borda `#0F6F16`.

### Filled

- Default: fundo `#18C11F` e texto claro.
- Hover: fundo `#14841D`.
- Pressed: fundo `#0F6F16`.

### Movimento

- Quando houver ícone direcional, somente o ícone se move `3px` no hover.
- No pressed, o ícone retorna para `1px` e reduz para `94%`.
- Ícones de ação local, como fechar, podem girar até `5deg` no hover e reduzir para `92%` no pressed.
- Duração: `200–220ms`, easing `cubic-bezier(.22,.61,.36,1)`.
- Com `prefers-reduced-motion`, nenhum deslocamento ou escala é aplicado.
