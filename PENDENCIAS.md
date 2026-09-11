# Memória do projeto GS3

## Decisão do usuário — 11/09/2026

O usuário ainda não tem os documentos nem a integração para receber denúncias. Manter esses componentes nas páginas, mas NÃO ativar cliques, downloads ou envios até receber os materiais. Não substituir por links de e-mail e não simular confirmação de envio.

## Ativar posteriormente

- Documentos: inserir URLs/arquivos reais, nomes, formatos e datas em `components/document-list.tsx`. Os títulos repetidos são os exemplos do Figma; substituí-los pelos documentos oficiais. Disponibilizar downloads e filtro por ano apenas quando existirem dados reais.
- Canal de Denuncias: conectar `components/transparency-extras.tsx` ao serviço seguro que o usuário fornecer. Remover `disabled` somente após integração, validação e tratamento de erros. Permitir denúncia anônima conforme o conteúdo da página; não tornar nome/e-mail obrigatórios para esse fluxo. Nunca persistir denúncias no navegador.
- Confirmar contatos e endereço, redes sociais e destino de Trabalhe Conosco.
- História: o Figma fornecido contém apenas a primeira lâmina do storyboard. Solicitar as demais antes de ativar os três indicadores de carrossel; não inventar conteúdo.
- Ajustes do design system ficam para a próxima etapa, conforme solicitação do usuário.

## Implementação atual

- Modal de serviços: ambos os botões da home abrem o mesmo conteúdo, usando Radix Dialog, foco confinado, Escape, fechamento pelo fundo e retorno ao botão de origem. Entrada ascendente de 800 ms; degradês verde claro e verde escuro crescem em 1,1–1,35 s. Respeita movimento reduzido.
- Rotas: `/historia`, `/transparencia/riesgos`, `/transparencia/credito`, `/transparencia/privacidad`, `/transparencia/etica`, `/transparencia/pld-ft`, `/transparencia/tasas`, `/transparencia/denuncias`, `/transparencia/informes`.
