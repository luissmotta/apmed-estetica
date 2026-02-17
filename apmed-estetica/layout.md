# Layout - Apmed Stetica

Especificacao completa e exaustiva de todas as secoes da pagina.

---

## Linguagem Visual Estabelecida (Design Aprovado)

### Paleta de Cores
- `--color-bg`: #FFFFFF (fundo principal)
- `--color-text`: #1A1A1A (texto principal)
- `--color-text-light`: #555555 (texto secundario)
- `--color-primary`: #9E7C3A (dourado principal)
- `--color-primary-dark`: #846730 (dourado escuro)
- `--color-primary-light`: #C9A55A (dourado claro)
- `--color-primary-lighter`: #DBBF7A (dourado mais claro)
- `--color-primary-glow`: rgba(158, 124, 58, 0.35) (glow dourado)
- `--color-accent`: #F5F5F0 (fundo off-white / creme)

### Tipografia
- Fonte unica: **Karla** (Google Fonts)
- Pesos: 300 (light), 400 (regular), 700 (bold)
- Italic: 300i
- Headings: weight 700, line-height 1.2, letter-spacing -0.02em
- Body: weight 400, line-height 1.6

### Estilo Visual
- Glassmorphism no header e floating card
- Botoes com shimmer effect (pseudo-element sweep)
- Border-radius variado: 4px (botoes), 50px (pills), 8px (cards)
- Sombras suaves: `0 10px 30px rgba(0, 0, 0, 0.05)`
- Gradiente dourado em textos com `-webkit-background-clip: text`
- Overlay escuro no hero com gradiente multi-stop

---

## Secao 0: Header (ja implementado - manter)

Header fixo glassmorphism pill-shaped com transicao ao scroll. Manter exatamente como esta no design aprovado.

---

## Secao 1: Hero (ja implementado - manter)

Hero fullscreen com background image, overlay escuro, headline com texto dourado em italico, tagline pill badge, floating card estilo Curevo. Manter exatamente como esta no design aprovado.

---

## Secao 2: Sobre Nos

### Arquetipo e Constraints
- Arquetipo: **Split Assimetrico** (60/40 - texto domina)
- Constraints: **Overlap Elements** (imagem invade margem), **Grain Overlay** (textura sutil no fundo da secao), **Hover Scale** (imagem reage ao hover)
- Justificativa: A secao informativa precisa de hierarquia clara. O split assimetrico dá mais peso ao texto (missao da clinica), enquanto a imagem complementa. O overlap cria tensao visual e impede que parecida uma secao generica 50/50.

### Conteudo
- Titulo: "Cuidado e **Excelencia**" (Excelencia em gradiente dourado)
- Corpo: "Na Apmed Stetica, unimos tecnologia e conhecimento para oferecer tratamentos seguros e eficazes. Nossa missao e realcar sua beleza de forma natural, em um ambiente acolhedor e profissional."
- CTA: "Conheca a Clinica" (botao outline)

### Layout
- Fundo: `--color-accent` (#F5F5F0) com grain overlay (opacity 0.03)
- Padding: `100px 0` (mobile: `64px 0`)
- Container: max-width 1200px, width 90%, margin auto
- Grid: `grid-template-columns: 1.2fr 0.8fr` em desktop (>900px)
- Gap: `64px`
- Alinhamento vertical: `align-items: center`
- A imagem deve ter `margin-right: -60px` (overflow para a direita, sangrando a margem do container)
- Mobile: `grid-template-columns: 1fr` (empilhado, imagem abaixo)

### Tipografia
- Titulo: `clamp(2rem, 3vw, 3rem)`, weight 700, line-height 1.2, letter-spacing -0.02em, color #1A1A1A
- "Excelencia": gradiente dourado (`linear-gradient(135deg, #C9A55A 0%, #DBBF7A 40%, #C9A55A 60%, #9E7C3A 100%)`) com `-webkit-background-clip: text`
- Corpo: `1.1rem`, weight 400, line-height 1.7, color #555555, margin-bottom 32px
- Botao: uppercase, weight 700, `0.82rem`, letter-spacing 0.1em

### Cores
- Background secao: #F5F5F0
- Titulo: #1A1A1A
- Destaque titulo: gradiente dourado
- Corpo: #555555
- Botao normal: transparent bg, border 1.5px solid #1A1A1A, color #1A1A1A
- Botao hover: bg #9E7C3A, border #9E7C3A, color #FFFFFF, shadow `0 8px 28px rgba(158, 124, 58, 0.35)`

### Elementos Visuais
- Imagem em `image-wrapper` com border-radius 8px e overflow hidden
- Border sutil dourada sobre a imagem: `1px solid rgba(212, 175, 55, 0.3)`
- Grain overlay no fundo da secao inteira: pseudo-element `::before` com `background-image: url(data:image/svg+xml,...)` ou CSS noise pattern, opacity 0.03, pointer-events none
- Elemento decorativo: linha vertical dourada de 3px de largura e 80px de altura, posicionada absolute no canto superior esquerdo do bloco de texto, top 0, left -24px, background `linear-gradient(180deg, #C9A55A 0%, transparent 100%)`

### Animacoes
- Bloco de texto: `data-aos="fade-right"`, duration 800ms, easing ease-out, offset 50
- Bloco de imagem: `data-aos="fade-left"`, duration 800ms, easing ease-out, offset 50, delay 200ms
- Linha decorativa dourada: `data-aos="fade-down"`, duration 600ms, delay 400ms
- Imagem hover: `transform: scale(1.03)`, transition `0.5s ease`

### Interatividade
- Imagem: hover scale(1.03) com transition 0.5s ease
- Botao: hover translateY(-2px) + mudanca de cor + box-shadow dourado + shimmer sweep (pseudo-element ::before)

### Responsividade
- **Desktop (>900px)**: grid 1.2fr 0.8fr, imagem sai da margem direita
- **Tablet (768-900px)**: grid 1fr, imagem full-width dentro do container, margin-right 0
- **Mobile (<768px)**: padding 64px 0, gap 40px, imagem arredondada

---

## Secao 3: Procedimentos

### Arquetipo e Constraints
- Arquetipo: **Bento Box** (celulas de tamanhos variados, quebrando a monotonia de cards iguais)
- Constraints: **Clip Reveal** (procedimentos revelados com clip-path ao scroll), **Hover Lift** (cards levantam no hover), **Texto com Gradiente** (titulos de categoria em gradiente dourado), **Glassmorphism** (fundo translucido nos cards)
- Justificativa: A quantidade de procedimentos (16 itens em 2 categorias) exige organizacao visual que nao seja um grid generico. O Bento Box permite hierarquias visuais (cards maiores para categorias, menores para procedimentos), enquanto o glassmorphism conecta com o hero.

### Conteudo

#### Titulo da Secao
- "Nossos Procedimentos" (sem destaque dourado aqui, para variar)

#### Categoria: Faciais
Cards individuais (cada um e um card no bento):
1. **Limpeza de Pele** - Higienizacao profunda, remocao de cravos e impurezas.
2. **Dermaplaning** - Esfoliacao superficial para renovacao da pele e melhor absorcao de ativos.
3. **Microagulhamento** - Estimulo de colageno, melhora de textura, manchas e cicatrizes.
4. **Toxina Botulinica** - Suavizacao de linhas de expressao e prevencao do envelhecimento.
5. **Fios de PDO** - Sustentacao facial e estimulo de colageno.
6. **Bioestimuladores (faciais)** - Melhora da firmeza e qualidade da pele.
7. **Preenchimento Labial** - Volume, contorno e hidratacao dos labios.
8. **PRP - Terapia Regenerativa** - Rejuvenescimento com plasma rico em plaquetas.
9. **Retirada de Acrocordons (Sinais)** - Remocao de pequenas lesoes benignas da pele.

#### Categoria: Corporais
Cards individuais:
1. **Ativos Redutores de Gordura** - Auxilio na reducao de gordura localizada.
2. **Massagem Manual** - Relaxamento, ativacao circulatoria e modelagem corporal.
3. **Bioestimulador de Colageno (corporal)** - Tratamento de flacidez em areas como abdomen, gluteos e bracos.
4. **Preenchimento de Depressao Trocanterica** - Correcao do "afundamento" lateral do quadril.
5. **Harmonizacao Glutea** - Volume, contorno e projecao dos gluteos.
6. **Tratamento para Estrias e Flacidez** - Melhora da textura e firmeza da pele.
7. **PEIM (Microvasos)** - Tratamento de vasinhos aparentes.

### Layout
- Fundo: #FFFFFF (branco, contraste com a secao anterior que era off-white)
- Padding: `100px 0` (mobile: `64px 0`)
- Container: max-width 1200px
- Estrutura: duas sub-secoes (Faciais e Corporais) empilhadas verticalmente com `64px` de gap entre elas

#### Titulo da Secao
- Centralizado, margin-bottom `64px`
- Abaixo do titulo: linha decorativa horizontal dourada, 60px de largura, 3px de altura, centralizada, margin-top 16px, background `linear-gradient(90deg, transparent, #C9A55A, transparent)`

#### Sub-secao Faciais
- Label de categoria: "Faciais" acima do grid, uppercase, letter-spacing 0.2em, font-size 0.8rem, weight 700, color #9E7C3A, margin-bottom 24px
- Grid Bento: `grid-template-columns: repeat(3, 1fr)` com gap `20px`
- Primeira linha: 3 cards normais
- Segunda linha: 3 cards normais
- Terceira linha: 3 cards normais (9 procedimentos faciais encaixam em 3x3)

#### Sub-secao Corporais
- Label de categoria: "Corporais" acima do grid, mesmo estilo do label Faciais
- Grid Bento: `grid-template-columns: repeat(3, 1fr)` com gap `20px`
- Primeira linha: 3 cards normais
- Segunda linha: 2 cards normais + 1 card CTA (ver abaixo)
- Terceira linha: 2 cards normais (7 procedimentos corporais, 1 card CTA = 8 celulas, leva um card de destaque na posicao 6)

#### Card CTA Especial (no lugar do 6o card corporal)
- Background: `linear-gradient(135deg, #9E7C3A 0%, #C9A55A 100%)`
- Texto: "Quer saber qual procedimento e ideal para voce?" em branco, weight 700, font-size 1rem
- Sub-texto: "Agende sua avaliacao" em branco com opacity 0.85
- Icone: seta apontando para baixo-direita (→) em branco
- Hover: `translateY(-8px)` + sombra expandida

### Card de Procedimento (estrutura individual)
- Background: #FFFFFF
- Border: `1px solid rgba(0, 0, 0, 0.06)`
- Border-radius: `12px`
- Padding: `28px 24px`
- Min-height: `160px`
- Display: flex, flex-direction: column, justify-content: space-between

#### Conteudo do Card
- Topo: Numero do procedimento em dourado claro (#C9A55A), font-size 0.72rem, weight 700, opacity 0.6, margin-bottom 12px (ex: "01", "02", etc.)
- Nome: font-size 1.05rem, weight 700, color #1A1A1A, margin-bottom 8px, line-height 1.3
- Descricao: font-size 0.88rem, weight 400, color #555555, line-height 1.5

### Tipografia
- Titulo secao: `clamp(2rem, 3vw, 3rem)`, weight 700, color #1A1A1A, text-align center
- Label categoria: 0.8rem, weight 700, uppercase, letter-spacing 0.2em, color #9E7C3A
- Numero card: 0.72rem, weight 700, color #C9A55A, opacity 0.6
- Nome procedimento: 1.05rem, weight 700, color #1A1A1A
- Descricao procedimento: 0.88rem, weight 400, color #555555

### Cores
- Background secao: #FFFFFF
- Card normal: bg #FFFFFF, border `1px solid rgba(0,0,0,0.06)`
- Card hover: bg #FFFFFF, border `1px solid rgba(158, 124, 58, 0.3)`, shadow `0 16px 40px rgba(0, 0, 0, 0.08)`
- Card CTA: gradiente dourado (#9E7C3A → #C9A55A), texto branco
- Card CTA hover: shadow `0 20px 50px rgba(158, 124, 58, 0.4)`
- Numero do card: #C9A55A com opacity 0.6

### Elementos Visuais
- Cada card tem um detalhe sutil: borda-top de 3px dourada que aparece SOMENTE no hover, via pseudo-element `::after` com transition (height 0 → 3px, ou scaleX 0 → 1)
- Linha dourada decorativa abaixo do titulo da secao (descrita acima)
- Labels de categoria com um pequeno circulo dourado (8px x 8px, border-radius 50%, bg #C9A55A) antes do texto

### Animacoes
- Titulo da secao: `data-aos="fade-up"`, duration 800ms
- Linha decorativa: `data-aos="fade-up"`, duration 600ms, delay 200ms (com `scaleX(0)` → `scaleX(1)`, origin center)
- Cards: `data-aos="fade-up"`, duration 600ms, stagger de `100ms` por card (delay incremental: card 1 = 0ms, card 2 = 100ms, card 3 = 200ms, etc.)
- A cada nova linha do grid, o stagger recomeça (para nao ter delays de 900ms no ultimo card)

### Interatividade
- Card hover: `translateY(-8px)` + `scale(1.02)` + border muda para dourada + shadow expande + borda-top dourada aparece. Transition: `400ms cubic-bezier(0.16, 1, 0.3, 1)`
- Card CTA hover: `translateY(-8px)` + shadow dourada expandida
- Cursor pointer em todos os cards

### Responsividade
- **Desktop (>1024px)**: grid 3 colunas
- **Tablet (768-1024px)**: grid 2 colunas, cards redistribuidos
- **Mobile (<768px)**: grid 1 coluna, padding secao `64px 0`, cards full-width, gap `16px`

---

## Secao 4: A Clinica

### Arquetipo e Constraints
- Arquetipo: **Hero Dominante** (imagem da clinica ocupa 60vh com texto sobreposto)
- Constraints: **Imagem com Overlay** (gradiente escuro sobre imagem), **Parallax** (imagem se move mais lento que scroll), **Glassmorphism** (card de texto flutuante sobre imagem)
- Justificativa: Esta secao precisa mostrar a clinica visualmente. Ao inves de um split generico, a imagem domina a secao inteira com o texto em um card glassmorphism flutuante, criando drama visual e contraste com a secao anterior (que era toda branca com cards).

### Conteudo
- Titulo: "Um Espaco para **Voce**" (Voce em gradiente dourado)
- Corpo: "Conheca nossas instalacoes modernas e confortaveis, preparadas para oferecer a melhor experiencia em estetica e saude."

### Layout
- Secao ocupa 60vh (min-height: 500px, max-height: 700px)
- Position: relative, overflow: hidden
- Imagem fullbleed como background (cover, center center)
- Overlay gradiente: `linear-gradient(180deg, rgba(26,26,30,0.2) 0%, rgba(26,26,30,0.7) 100%)`
- Card de texto posicionado absolute: bottom 60px, left 50%, transform translateX(-50%), max-width 600px, width 90%
- Card: background `rgba(255, 255, 255, 0.08)`, backdrop-filter `blur(20px)`, border `1px solid rgba(255, 255, 255, 0.15)`, border-radius `16px`, padding `40px`
- Alinhamento do texto no card: text-align center

### Tipografia
- Titulo: `clamp(2rem, 3vw, 2.8rem)`, weight 700, color #FFFFFF, margin-bottom 16px
- "Voce": gradiente dourado com text-fill transparent
- Corpo: `1.05rem`, weight 400, color `rgba(255, 255, 255, 0.85)`, line-height 1.7

### Cores
- Imagem de fundo: foto da clinica ou ambiente estetico clean
- Overlay: gradiente de `rgba(26,26,30,0.2)` a `rgba(26,26,30,0.7)`
- Card: glassmorphism (bg semi-transparente branco + blur)
- Border card: `rgba(255,255,255,0.15)`
- Titulo: branco
- Destaque: gradiente dourado
- Corpo: `rgba(255,255,255,0.85)`

### Elementos Visuais
- Imagem de fundo via Netlify CDN: foto de clinica estetica moderna, clean, iluminada
- Overlay gradiente escuro (mais escuro embaixo onde fica o texto)
- Card glassmorphism com borda sutil
- Detalhe decorativo: pequeno losango dourado (rotated square de 8px) centralizado acima do titulo, background #C9A55A, transform rotate(45deg), margin-bottom 20px
- Efeito de luz sutil: radial-gradient posicionado no canto superior direito do card, `rgba(201, 165, 90, 0.1)` para `transparent`, criando um glow dourado sutil

### Animacoes
- Secao inteira com parallax na imagem de fundo: CSS `background-attachment: fixed` (ou via JS para melhor performance em mobile: translateY ajustado pelo scroll a uma taxa de 0.3x)
- Card glassmorphism: `data-aos="fade-up"`, duration 1000ms, easing ease-out
- Losango decorativo: `data-aos="zoom-in"`, duration 600ms, delay 200ms
- Texto dentro do card: `data-aos="fade-up"`, duration 800ms, delay 400ms

### Interatividade
- Card glassmorphism tem hover sutil: border muda para `rgba(201, 165, 90, 0.3)` (tom dourado), transition 400ms
- Efeito de glow dourado se intensifica no hover do card: o radial-gradient vai de opacity 0.1 para 0.2

### Responsividade
- **Desktop**: 60vh, card posicionado absolute no bottom
- **Tablet**: 50vh, card com padding 32px
- **Mobile (<768px)**: min-height 400px, height auto, card position relative (nao absolute), padding 24px, margin-top -40px (overlap sutil com a imagem)

---

## Secao 5: Contato / Entre em Contato

### Arquetipo e Constraints
- Arquetipo: **Split Vertical** (50/50 - formulario de um lado, CTAs do outro)
- Constraints: **Color Blocking** (metade esquerda fundo escuro, metade direita fundo branco), **Neon Glow** (botao WhatsApp com glow verde), **Hover Glow** (botoes brilham ao hover)
- Justificativa: A secao de contato precisa de clareza maxima. O split vertical com color blocking cria dois blocos visuais distintos: um lado escuro com os CTAs principais (WhatsApp e Instagram) e o lado claro com formulario. Isso quebra a monotonia e cria impacto visual.

### Conteudo
#### Lado Esquerdo (fundo escuro)
- Titulo: "Agende sua **Avaliacao**" (Avaliacao em gradiente dourado)
- Subtitulo: "Entre em contato conosco para tirar duvidas e agendar seu horario."
- Botao WhatsApp: "Chamar no WhatsApp" (com icone WhatsApp SVG inline)
- Botao Instagram: "Conheca nosso Instagram" (com icone Instagram SVG inline)

#### Lado Direito (formulario)
- Formulario Netlify Forms existente (usar o formulario do template)
- Campos: Nome, Email, Telefone (com intl-tel-input), Mensagem
- Botao submit: "Enviar Mensagem"

### Layout
- Padding: `100px 0` (mobile: `64px 0`)
- Container: nao usa container padrao - secao e full-width
- Grid: `grid-template-columns: 1fr 1fr` em desktop
- Sem gap (color blocking: os dois blocos se encontram)
- Lado Esquerdo: padding `80px 60px`, max-width do conteudo `480px`, margin 0 auto
- Lado Direito: padding `80px 60px`, max-width do conteudo `480px`, margin 0 auto

### Tipografia
- Titulo (lado esquerdo): `clamp(2rem, 3vw, 2.8rem)`, weight 700, color #FFFFFF, margin-bottom 16px
- "Avaliacao": gradiente dourado
- Subtitulo: `1.05rem`, weight 400, color `rgba(255,255,255,0.7)`, line-height 1.7, margin-bottom 40px
- Botao WhatsApp: weight 700, `0.9rem`, uppercase, letter-spacing 0.08em
- Botao Instagram: weight 700, `0.9rem`, uppercase, letter-spacing 0.08em
- Labels do formulario: `0.85rem`, weight 700, color #1A1A1A, uppercase, letter-spacing 0.05em
- Inputs do formulario: `1rem`, weight 400, color #1A1A1A

### Cores
#### Lado Esquerdo
- Background: #1A1A2E (azul-escuro profundo, quase preto, mas com um toque de profundidade)
- Titulo: #FFFFFF
- Subtitulo: `rgba(255,255,255,0.7)`
- Botao WhatsApp: background #25D366, color #FFFFFF, border-radius 50px, shadow `0 0 20px rgba(37, 211, 102, 0.3)`
- Botao WhatsApp hover: shadow `0 0 30px rgba(37, 211, 102, 0.5)`, translateY(-2px)
- Botao Instagram: background transparent, border `1.5px solid rgba(255,255,255,0.3)`, color #FFFFFF
- Botao Instagram hover: border `1.5px solid #C9A55A`, color #C9A55A, shadow `0 0 20px rgba(201, 165, 90, 0.2)`

#### Lado Direito
- Background: #F5F5F0
- Labels: #1A1A1A
- Input background: #FFFFFF
- Input border: `1px solid rgba(0,0,0,0.1)`
- Input focus border: `1px solid #9E7C3A`
- Input focus shadow: `0 0 0 3px rgba(158, 124, 58, 0.1)`
- Botao submit: bg #9E7C3A, color #FFFFFF, hover bg #846730

### Elementos Visuais
- Lado esquerdo: elemento decorativo - circulos concentricos dourados no canto superior direito, `opacity: 0.06`, feitos com `border: 1px solid #C9A55A` e border-radius 50%, 3 circulos de tamanhos 100px, 200px, 300px, position absolute, top -50px, right -50px
- Separacao entre os dois lados: sem borda visivel, a mudanca de cor faz a divisao
- Icones SVG nos botoes: 20px x 20px, alinhados com gap 10px
- Inputs com border-radius: 8px, padding: 14px 16px, height: 48px
- Textarea: min-height 120px

### Animacoes
- Lado esquerdo titulo: `data-aos="fade-right"`, duration 800ms
- Lado esquerdo subtitulo: `data-aos="fade-right"`, duration 800ms, delay 100ms
- Botao WhatsApp: `data-aos="fade-right"`, duration 600ms, delay 200ms
- Botao Instagram: `data-aos="fade-right"`, duration 600ms, delay 300ms
- Formulario inteiro: `data-aos="fade-left"`, duration 800ms
- Circulos decorativos: animacao CSS rotate lenta, `60s linear infinite`

### Interatividade
- Botao WhatsApp: glow verde que pulsa sutilmente (`animation: whatsapp-pulse 2s ease-in-out infinite`), no hover o glow se intensifica
- Botao Instagram: hover troca borda e cor para dourado com glow sutil
- Inputs: focus com border dourada e glow suave, transition 300ms
- Botao submit: shimmer sweep no hover (pseudo-element), translateY(-2px)
- Formulario AJAX submit (Netlify Forms) com feedback visual (loading spinner e mensagem de sucesso)

### Responsividade
- **Desktop (>900px)**: grid 2 colunas side by side
- **Tablet (768-900px)**: grid 1 coluna, lado esquerdo em cima, lado direito embaixo
- **Mobile (<768px)**: padding 48px 24px em cada bloco, botoes full-width

---

## Secao 6: Rodape

### Arquetipo e Constraints
- Arquetipo: **Minimal** (poucos elementos, maximo respiro)
- Constraints: **Dark Mode** (fundo escuro), **Selective Color** (dourado como unica cor de destaque), **Fade In** (aparecimento sutil)
- Justificativa: O rodape fecha a pagina com sobriedade. O minimalismo contrasta com a secao de contato que tinha color blocking, e o fundo escuro cria uma base solida para encerrar. O dourado seletivo mantem a identidade.

### Conteudo
#### Coluna 1: Logo + Navegacao
- Logo: "Apmed Stetica"
- Links: Inicio, Sobre, Procedimentos, A Clinica, Contato

#### Coluna 2: Contatos
- WhatsApp: (00) 00000-0000
- Instagram: @apmedstetica

#### Coluna 3: Localizacao
- Endereco: [Inserir Endereco Aqui]

#### Copyright
- "2026 Apmed Stetica. Todos os direitos reservados."

### Layout
- Background: #111118 (preto com tom azulado sutil)
- Padding: `64px 0 32px`
- Container: max-width 1200px
- Grid: `grid-template-columns: 1.5fr 1fr 1fr` em desktop
- Gap: `40px`
- Linha separadora acima do copyright: `1px solid rgba(255,255,255,0.08)`, margin-top 48px, padding-top 24px
- Copyright: text-align center

### Tipografia
- Logo: `1.35rem`, weight 700, color #FFFFFF, letter-spacing -0.03em, margin-bottom 20px
- Links de navegacao: `0.9rem`, weight 400, color `rgba(255,255,255,0.5)`, line-height 2.2 (para espaco entre links empilhados)
- Links hover: color #C9A55A
- Label colunas (opcional): `0.75rem`, weight 700, uppercase, letter-spacing 0.15em, color #C9A55A, margin-bottom 16px
- Info de contato: `0.9rem`, weight 400, color `rgba(255,255,255,0.5)`
- Copyright: `0.82rem`, weight 400, color `rgba(255,255,255,0.3)`, text-align center

### Cores
- Background: #111118
- Logo: #FFFFFF
- Labels: #C9A55A
- Links/texto: `rgba(255,255,255,0.5)`
- Links hover: #C9A55A
- Separador: `rgba(255,255,255,0.08)`
- Copyright: `rgba(255,255,255,0.3)`

### Elementos Visuais
- Separador horizontal sutil acima do copyright
- Links sem text-decoration, com underline animado no hover (pseudo-element width 0 → 100%)
- Icones de WhatsApp e Instagram inline SVG (16px) antes dos textos de contato, color #C9A55A

### Animacoes
- Todas as colunas: `data-aos="fade-up"`, duration 600ms, stagger 100ms entre colunas
- Copyright: `data-aos="fade-up"`, duration 600ms, delay 400ms

### Interatividade
- Links de navegacao: hover color #C9A55A + underline animado (width 0 → 100%, transition 300ms)
- Links de contato (WhatsApp/Instagram): hover color #C9A55A
- Logo: hover com glow sutil dourado `text-shadow: 0 0 20px rgba(201, 165, 90, 0.3)`, transition 400ms

### Responsividade
- **Desktop (>900px)**: grid 3 colunas
- **Tablet (768-900px)**: grid 2 colunas (logo + nav ocupa toda a primeira linha)
- **Mobile (<768px)**: grid 1 coluna, text-align center, gap 32px, padding 48px 0 24px

---

## Elementos Globais e Encantadores

### Scroll to Top Button
- Position: fixed, bottom 24px, right 24px
- Aparece quando scroll > 300px (opacity 0 → 1, translateY(20px) → 0)
- Background: #9E7C3A, color #FFFFFF
- Width/height: 48px, border-radius: 50%
- Icone: seta para cima (chevron SVG)
- Hover: translateY(-2px) + shadow `0 8px 24px rgba(158, 124, 58, 0.4)`
- Z-index: 999

### Menu Mobile (Hamburger)
- Icone hamburger: 3 barras de 24px, height 2px, color branco (sobre hero) / #1A1A1A (scrolled)
- Animacao: barras se transformam em X quando menu aberto (rotate + translate)
- Menu aberto: overlay fullscreen, background #111118, opacity 0.98
- Links do menu: centralizados, font-size 1.8rem, weight 700, color branco, gap 24px
- Cada link aparece com stagger animation (fade-up, delay incremental de 100ms)
- Botao CTA "Agendar Agora" no fundo do menu mobile com estilo btn-primary

### Smooth Scroll
- `html { scroll-behavior: smooth }`
- Offset para compensar header fixo: scroll-margin-top em cada secao = `calc(var(--header-height) + 20px)`

### Cursor Custom (desktop only)
- Cursor padrão customizado em toda a pagina: circulo de 8px, border 1.5px solid #9E7C3A, border-radius 50%, pointer-events none, position fixed, z-index 9999
- Ao hover em areas interativas (links, botoes, cards): cursor escala para 40px com glow dourado sutil e opacity 0.4
- Transition: `200ms cubic-bezier(0.16, 1, 0.3, 1)`
- Desabilitado em touch devices via `@media (hover: hover)` e `(pointer: fine)`

### Linha de Progresso no Topo
- Position: fixed, top 0, left 0, z-index: 1001
- Height: 3px
- Background: `linear-gradient(90deg, #9E7C3A 0%, #C9A55A 50%, #DBBF7A 100%)`
- Width: 0% → 100% conforme scroll (CSS animation-timeline: scroll() ou JS)
- Opacity: 0.8

### Transicoes entre Secoes
- Cada secao com `contain: layout paint` para performance
- Secoes com fundo diferente nao tem divisor reto -- usar `clip-path` ou `border-radius` suave para transicoes organicas:
  - Hero → Sobre (off-white): nenhum divisor (contraste claro suficiente)
  - Sobre (off-white) → Procedimentos (branco): sutil, nao precisa de divisor
  - Procedimentos (branco) → Clinica (imagem): nenhum divisor (imagem faz a transicao)
  - Clinica (imagem) → Contato (split): nenhum divisor
  - Contato → Rodape (escuro): nenhum divisor (mudanca de cor ja e suficiente)

### Micro-Animacoes de Detalhe
- Botoes com ::before shimmer sweep (ja definido no design aprovado - manter globalmente)
- Links de navegacao com underline animado (width 0 → 100%, ease-out)
- Focus visible em todos os elementos interativos: outline `2px solid #9E7C3A`, outline-offset `4px` (acessibilidade)

---

## Regras de Imagem

Todas as imagens devem usar o Netlify CDN:
```
/.netlify/images?url=[URL_DA_IMAGEM]&w=[LARGURA]&q=80
```

- Hero background: w=1920, loading="eager"
- Imagens de secao: w=800, loading="lazy"
- Thumbnails: w=400, loading="lazy"
- Todas as `<img>` devem ter `width` e `height` numericos explicitados para evitar CLS

---

## Regras de Performance

- Scripts pesados (cursor custom, scroll progress): Dynamic Import via Interaction Trigger
- AOS inicializado com `disableMutationObserver: true`
- Fontes: 3 weights maximo (300, 400, 700), carregamento assincrono
- Hero: NUNCA opacity:0, transform, ou data-aos
- Secoes com `contain: layout paint`
- Parallax da secao Clinica: `background-attachment: fixed` (fallback simples, sem JS pesado)
