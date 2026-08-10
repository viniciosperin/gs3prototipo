# GS3 Fintech Paraguay — protótipo estático

Site completo em HTML, CSS e JavaScript puro. Todos os estilos, fontes, imagens e scripts usados pela interface estão dentro desta pasta.

## Abrir localmente

Abra `index.html` no navegador. Para testar como hospedagem, execute um servidor estático na raiz da pasta, por exemplo:

```bash
python3 -m http.server 8080
```

## GitHub Pages

1. Envie o conteúdo desta pasta para um repositório.
2. Em **Settings → Pages**, escolha **Deploy from a branch**.
3. Selecione a branch principal e a pasta `/ (root)`.

Os links são relativos e funcionam tanto no domínio principal quanto em uma subpasta de projeto.

## Formulários

O modal, campos e animações funcionam no navegador. Para enviar os dados de verdade, conecte o evento `submit` em `js/interactions.js` ao serviço de formulários ou backend escolhido.
