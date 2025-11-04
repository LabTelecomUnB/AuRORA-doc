# Documentação

A documentação serve para guiar os desenvolvedores ao realizarem melhorias na aplicação e deve sempre estar atualizada. Ao adicionar novas funcionalidades ou realizar manutenções na aplicação, é válido revisá-la e atualizá-la. Recomenda-se também documentar os processos anteriores ao desenvolvimento, como reuniões, pesquisas, decisões técnicas etc.

O que pode ser óbvio para você pode não ser para outra pessoa. Tenha isso em mente.

## Como começar

### 1. Configure o ambiente

Primeiro, faça um fork do repositório e clone-o localmente:

```bash
git clone https://github.com/seu-usuario/AuRORA-doc.git
cd AuRORA-doc
```

### 2. Instale as dependências

```bash
pip install -r requirements.txt
```

### 3. Execute o servidor local

```bash
mkdocs serve
```

Acesse `http://127.0.0.1:8000` para visualizar a documentação localmente.

## Diretrizes de contribuição

### Estrutura da documentação

- Todos os arquivos de documentação estão na pasta `docs/`
- Use Markdown para formatar o conteúdo 
- Evite usar HTML
- Imagens devem ser adicionadas em `docs/assets/images/`

### Padrões de escrita

- Use linguagem clara e objetiva
- Evite jargões técnicos desnecessários
- Inclua exemplos sempre que possível
- Mantenha parágrafos curtos e diretos

## Processo de submissão

1. Crie uma branch para sua contribuição:
   ```bash
   git checkout -b minha-contribuicao
   ```

2. Faça suas alterações e commit:
   ```bash
   git add .
   git commit -m "Descrição clara das alterações"
   ```

3. Abra um Pull Request no repositório principal

## Dúvidas e suporte

Se você tiver dúvidas sobre como contribuir, não hesite em:

- Abrir uma issue no GitHub
- Entrar em contato com a equipe de desenvolvimento
- Consultar a documentação existente para referência
