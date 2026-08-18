# Guia de Integração SEO e Analytics - Agostinho BIKES

Este guia contém as instruções passo a passo para configurar e ativar os códigos reais de análise, monitorização e contacto no site da **Agostinho BIKES**.

---

## 1. Google Search Console (GSC)

O Search Console permite monitorizar o tráfego de pesquisa do seu site e identificar erros de indexação.

### Como configurar:
1. Aceda ao [Google Search Console](https://search.google.com/search-console).
2. Adicione a sua propriedade (ex: `https://www.agostinhobikes.com` ou o seu domínio final).
3. Escolha o método de verificação **"Tag HTML"**.
4. Copie a chave fornecida na tag meta (a parte dentro de `content="XXXXXXXX"`).
5. Abra o ficheiro [index.html](file:///e:/Takos/Agostinho/index.html) e substitua a linha:
   ```html
   <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_KEY" />
   ```
   pelo código completo copiado do Google.

---

## 2. Google Analytics 4 (GA4)

O Google Analytics regista as visitas, visualizações de páginas e comportamentos de navegação dos clientes no site.

### Como configurar:
1. Aceda ao [Google Analytics](https://analytics.google.com/).
2. Crie uma nova conta/propriedade para o site **Agostinho BIKES**.
3. Crie um fluxo de dados da Web e copie o seu **ID de Medição** (tem o formato `G-XXXXXXXXXX`).
4. Abra o ficheiro [index.html](file:///e:/Takos/Agostinho/index.html), remova as tags de comentário `<!--` e `-->` que envolvem o bloco de script e substitua `G-XXXXXXXXXX` pelo seu ID real:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU-ID-AQUI"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-SEU-ID-AQUI');
   </script>
   ```

---

## 3. Google Maps (Atualizar Localização)

O mapa incorporado no site está configurado para as coordenadas aproximadas da Mata Mourisca, Pombal. Se pretender utilizar a listagem oficial da sua empresa no Google:

### Como configurar:
1. Pesquise por **"Agostinho BIKES"** no [Google Maps](https://www.google.com/maps).
2. Clique no botão **"Partilhar"** (Share) e escolha a aba **"Incorporar um mapa"** (Embed a map).
3. Copie apenas o link dentro do atributo `src` da tag `<iframe>` fornecida (um link longo que começa com `https://www.google.com/maps/embed?...`).
4. Abra o ficheiro [Location.jsx](file:///e:/Takos/Agostinho/src/components/Location.jsx).
5. Substitua o link atual no atributo `src` da tag `<iframe>` pelo novo link copiado.

---

## 4. Alterar o Número de WhatsApp

O número de WhatsApp configurado por padrão nos formulários de contacto e no botão flutuante é `351925138269` (+351 925 138 269). Se precisar de alterar este número no futuro:

### Ficheiros a modificar:
Altere a constante `WHATSAPP_NUMBER` no topo de cada um destes ficheiros:
1. [WhatsAppButton.jsx](file:///e:/Takos/Agostinho/src/components/WhatsAppButton.jsx) (linha 3)
2. [BudgetForm.jsx](file:///e:/Takos/Agostinho/src/components/BudgetForm.jsx) (linha 3)
3. [WorkshopForm.jsx](file:///e:/Takos/Agostinho/src/components/WorkshopForm.jsx) (linha 3)
