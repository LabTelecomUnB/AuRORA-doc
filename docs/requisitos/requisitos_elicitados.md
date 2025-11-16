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
| RF01 | O software deve mostrar a última pessoa que moveu a antena (log de operação). | EN07 |
| RF02 | O software deve mostrar se a antena está apresentando falhas no posicionamento. | EN10 |
| RF03 | O usuário deve poder verificar a situação atual do clima onde as antenas estão localizadas. | EN20 |
| RF04 | O usuário deve poder realizar o login na plataforma. | IN01 |
| RF05 | O usuário deve poder redefinir sua senha. | IN03 |
| RF06 | O software deve alertar quando a antena precisa de calibração. | IN16 |
| RF07 | O usuário deve poder selecionar entre dark mode e light mode. | IN24 |
| RF08 | O usuário deve ser capaz de interromper uma rotina. | IN26 |
| RF09 | O software deve calcular e enviar os ângulos de posicionamento da antena. | EN01, IN13 |
| RF10 | O software deve ser capaz de salvar os dados recebidos pelo satélite monitorado. | EN03, IN18 |
| RF11 | O software deve mostrar a evolução do posicionamento da antena. | EN05, IN17 |
| RF12 | O usuário deve ser capaz de salvar rotinas de posicionamento. | EN06, IN09 |
| RF13 | O software deve mostrar a última vez que a antena foi calibrada. | EN08, IN15 |
| RF14 | O software deve bloquear rotinas que ultrapassem limites físicos ou de velocidade da antena. | EN11, EN12, IN14 |
| RF15 | O administrador deve poder gerenciar (cadastrar/controlar) usuários na plataforma. | EN13, IN02 |
| RF16 | O software deve ter um perfil de usuário normal (Operador). | EN14 |
| RF17 | O usuário deve poder selecionar entre os idiomas português e inglês. | EN15, IN25 |
| RF18 | O usuário deve poder exportar/baixar dados (gráficos de posicionamento e dados da medição). | EN26, IN20 |
| RF19 | O usuário deve poder verificar o status das antenas (ex: disponível, indisponível e ocupada). | EN22, IN04 |

<center>
    <figcaption>Tabela 1 - Requisitos funcionais e suas rastreabilidades. Fonte: Autor.</figcaption>
</center>


## Requisitos Não Funcionais

### Tabela 2 - Requisitos Não Funcionais

| Identificador | Requisito | Rastreabilidade |
|---------------|-----------|-----------------|
| RN01 | O software deve ser acessível via web e compatível com os principais navegadores (ex: Chrome, Firefox). | EN17, IN28, IN29 |
| RN02 | Os fluxos para a realização de tarefas devem ser curtos. | EN19 |
| RN03 | O software deve seguir a identidade visual do laboratório. | EN23 |
| RN04 | O software deve ter uma boa documentação. | EN28 |


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
