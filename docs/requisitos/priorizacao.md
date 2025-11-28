# Priorização

O presente artefato busca descrever a aplicação da metodologia Moscow para priorização dos requisitos do software AuRORA.

## Metodologia

A técnica MoSCoW é um método popular e eficaz para a priorização de requisitos em desenvolvimento ágil. Ela consiste em classificar cada requisito em quatro categorias de valor, que determinam sua importância e impacto na entrega. 

As categorias são classificadas em:

1. **Must have (deve ter)**: Requisitos essenciais para o funcionamento do sistema. Sem eles o sistema não atende as necessidades mínimas dos usuários e não agrega valor.

2. **Should have (deveria ter)**: Requisito importante para o sistema mas não essencial para seu funcionamento. Pode afetar a satisfação do cliente se não entrege.

3. **Could have (poderia ter)**: Requisitos desejáveis pelo cliente mas que não afetam o funcionamento do software. Também pode afetar a satisfação do cliente mas de forma menos clucial que um requisito should.

4. **Won't have this time (não terá agora)**: São requisitos que não aferam o funcionamento do sistema e podem ser implementados em versões futuras do software.

Este modelo garante que os recursos sejam focados nos "Must Haves", assegurando que o produto mínimo viável (MVP) seja entregue dentro do prazo e atenda às necessidades críticas do negócio. A transparência na priorização do MoSCoW facilita a gestão de expectativas do cliente, mitiga riscos de escopo excessivo e otimiza o planejamento das iterações futuras.

## Resultado

### Tabela 1 - Priorização de Requisitos Funcionais

| Identificador | Requisito | Priorização |
|---------------|-----------|-------------|
| RF01 | O usuário deve poder realizar login na plataforma. | Must |
| RF02 | O usuário deve poder redefinir sua senha. | Should |
| RF03 | O software deve ter perfis de usuário (administrador e usuário normal). | Must |
| RF04 | O administrador deve poder administrar novos usuários na plataforma. | Must |
| RF05 | O usuário deve poder visualizar o status das antenas. | Must |
| RF06 | O usuário deve poder visualizar uma lista de todas as antenas. | Must |
| RF07 | O usuário deve poder abrir múltiplas janelas, uma para cada antena. | Could |
| RF08 | O software deve mostrar o posicionamento da antena em tempo real. | Must |
| RF09 | O software deve mostrar falhas no posicionamento da antena. | Should |
| RF10 | O software deve mostrar a última pessoa que moveu a antena. | Could |
| RF11 | O software deve mostrar qual foi a última rotina realizada pela antena. | Should |
| RF12 | O administrador deve poder bloquear uma antena. | Must |
| RF13 | O usuário deve poder selecionar o satélite a ser rastreado/monitorado. | Must |
| RF14 | O software deve listar os satélites disponíveis. | Should |
| RF15 | O software deve mostrar a trajetória do satélite. | Should |
| RF16 | O software deve alertar se a antena está recebendo os dados do satélite selecionado. | Must |
| RF17 | O software deve salvar os dados recebidos do satélite. | Must |
| RF18 | O usuário deve poder baixar/exportar os dados salvos. | Must |
| RF19 | O software deve mostrar a potência e a frequência do sinal recebido. | Should |
| RF20 | O usuário deve poder salvar e deletar rotinas. | Should |
| RF21 | O usuário deve poder realizar rotinas de calibração. | Must |
| RF22 | O usuário deve poder interromper uma rotina. | Must |
| RF23 | O software deve bloquear rotinas inválidas. | Must |
| RF24 | O software deve calcular o posicionamento da antena conforme parâmetros fornecidos. | Must |
| RF25 | O software deve mostrar a evolução/histórico do posicionamento da antena. | Could |
| RF26 | O software deve mostrar a última vez que a antena foi calibrada. | Must |
| RF27 | O software deve alertar quando a antena precisar de calibração. | Must |
| RF28 | O usuário deve poder verificar o clima onde as antenas estão localizadas. | Could |
| RF29 | O banco deve limpar os dados coletados periodicamente. | Should |
| RF30 | O usuário deve poder selecionar entre dark mode e light mode. | Won't have this time |
| RF31 | O usuário deve poder escolher entre português e inglês. | Could |

### Tabela 2 - Priorização de Requisitos Não Funcionais

| Identificador | Requisito | Priorização |
|---------------|-----------|-------------|
| NF01 | O software deve seguir a identidade visual do laboratório. | Should |
| NF02 | Os fluxos para realização de tarefas devem ser curtos. | Must |
| NF03 | O software deve rodar na web. | Must |
| NF04 | O software deve ser compatível com Chrome. | Must |
| NF05 | O software deve ser compatível com Firefox. | Must |
| NF06 | O software deve rodar nos principais navegadores. | Must |
| NF07 | O software deve ter documentação adequada. | Should |

<center>
    <figcaption>Tabela 1 - Priorização dos requisitos. Fonte: Autor.</figcaption>
</center>

## Referências

[1] VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira. Engenharia de requisitos: software orientado ao negócio. Rio de Janeiro: Brasport , 2016.

## Histórico de versões

<div align="center">
    <table>
        <tr>
            <th>Data</th>
            <th>Versão</th>
            <th>Descrição</th>
            <th>Autor</th>
        </tr>
        <tr>
            <td>15/11</td>
            <td>1.0</td>
            <td>Primeira versão finalizada</td>
            <td><a href="https://github.com/ccarlaa">Carla Clementino</a></td>
    </table>
</div>
