# Requisitos Elicitados

O presente artefato tem por objetivo listar os requisitos elicitados nos artefatos de [introspecção](./introspeccao.md) e [entrevista](./entrevistas.md) de forma a rastrear seu surgimento.

## Metodologia

Os requisitos são listados nas tabelas 1 e 2, as quais possuem 3 colunas: uma para o identificador, uma para o nome do requisito e outra de rastreabilidade. Considera a seguinte legenda:

- RFxx: Requisito funcional número xx;
- RNxx: Requisito não funcional número xx;
- INxx: Requisito elicitado pela técnica de [Introspecção](./introspeccao.md);
- ENxx: Requisito elicitado pela técnica de [Entrevista](./entrevistas.md);

## Requisitos Funcionais

### Tabela 1 - Requisitos Funcionais

| Identificador | Requisito | Rastreabilidade |
|---------------|-----------|-----------------|
| RF01 | O usuário deve poder realizar login na plataforma. | IN03 |
| RF02 | O usuário deve poder redefinir sua senha. | EN10 |
| RF03 | O software deve ter perfis de usuário (administrador e usuário normal). | EN11, EN12 |
| RF04 | O administrador deve poder administrar novos usuários na plataforma. | IN02 |
| RF05 | O usuário deve poder visualizar o status das antenas. | IN04, EN19 |
| RF06 | O usuário deve poder visualizar uma lista de todas as antenas. | IN05 |
| RF07 | O usuário deve poder abrir múltiplas janelas, uma para cada antena. | EN18 |
| RF08 | O software deve mostrar o posicionamento da antena em tempo real. | EN24 |
| RF09 | O software deve mostrar falhas no posicionamento da antena. | EN10 |
| RF10 | O software deve mostrar a última pessoa que moveu a antena. | EN07 |
| RF11 | O software deve mostrar qual foi a última rotina realizada pela antena. | EN09 |
| RF12 | O administrador deve poder bloquear uma antena. | IN23 |
| RF13 | O usuário deve poder selecionar o satélite a ser rastreado/monitorado. | IN09 |
| RF14 | O software deve listar os satélites disponíveis. |  EN02 |
| RF15 | O software deve mostrar a trajetória do satélite. | IN19 |
| RF16 | O software deve alertar se a antena está recebendo os dados do satélite selecionado. | IN16 |
| RF17 | O software deve salvar os dados recebidos do satélite. | IN15, EN03 |
| RF18 | O usuário deve poder baixar/exportar os dados salvos. | IN17, EN23 |
| RF19 | O software deve mostrar a potência e a frequência do sinal recebido. | EN21, EN22 |
| RF20 | O usuário deve poder salvar e deletar rotinas. | IN07, EN06 |
| RF21 | O usuário deve poder realizar rotinas de calibração. | IN08 |
| RF22 | O usuário deve poder interromper uma rotina. | IN22 |
| RF23 | O software deve bloquear rotinas inválidas. | IN11 |
| RF24 | O software deve calcular o posicionamento da antena conforme parâmetros fornecidos. | IN10 |
| RF25 | O software deve calcular a trajetória da antena. | IEN01 |
| RF26 | O usuário deve poder inserir manualmente dados de posicionamento. | EN04 |
| RF27 | O software deve mostrar a evolução/histórico do posicionamento da antena. | IN14, EN05 |
| RF28 | O software deve mostrar a última vez que a antena foi calibrada. | IN12, EN08 |
| RF29 | O software deve alertar quando a antena precisar de calibração. | IN13 |
| RF30 | O usuário deve poder verificar o clima onde as antenas estão localizadas. | EN17 |
| RF31 | O banco deve limpar os dados coletados periodicamente. | IN18 |
| RF32 | O usuário deve poder selecionar entre dark mode e light mode. | IN20 |
| RF33 | O usuário deve poder escolher entre português e inglês. | IN21, EN13 |

<center>
    <figcaption>Tabela 1 - Requisitos funcionais e suas rastreabilidades. Fonte: Autor.</figcaption>
</center>


## Requisitos Não Funcionais

### Tabela 2 - Requisitos Não Funcionais

| Identificador | Requisito | Rastreabilidade |
|---------------|-----------|-----------------|
| NF01 | O software deve seguir a identidade visual do laboratório. | EN20 |
| NF02 | Os fluxos para realização de tarefas devem ser curtos. | EN16 |
| NF03 | O software deve rodar na web. | EN14 |
| NF04 | O software deve ser compatível com Chrome. | IN24 |
| NF05 | O software deve ser compatível com Firefox. | IN25 |
| NF06 | O software deve rodar nos principais navegadores. | EN15 |
| NF07 | O software deve ter documentação adequada. | EN25 |



<center>
    <figcaption>Tabela 2 - Requisitos não funcionais e suas rastreabilidades. Fonte: Autor.</figcaption>
</center>

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
