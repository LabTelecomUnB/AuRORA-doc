# Priorização

O presente artefato busca descrever a aplicação da metodologia Moscow para priorização dos requisitos do software AuRORA.

## Metodologia

A técnica Moscow para a análise de requisitos consiste em classificá-los em quatro valores: must, should, could e won't. Abaixo é descrito o significado de cada um deles: 

1. **Must have (deve ter)**: Requisitos essenciais para o funcionamento do sistema. Sem eles o sistema não atende as necessidades mínimas dos usuários e não agrega valor.

2. **Should have (deveria ter)**: Requisito importante para o sistema mas não essencial para seu funcionamento. Pode afetar a satisfação do cliente se não entrege.

3. **Could have (poderia ter)**: Requisitos desejáveis pelo cliente mas que não afetam o funcionamento do software. Também pode afetar a satisfação do cliente mas de forma menos clucial que um requisito should.

4. **Won't have this time (não terá agora)**: São requisitos que não aferam o funcionamento do sistema e podem ser implementados em versões futuras do software.

## Resultado

| Identificador | Requisito | Priorização |
|---------------|-----------|-----------------|
| RF01 | O software deve mostrar a última pessoa que moveu a antena (log de operação). | Could |
| RF02 | O software deve mostrar se a antena está apresentando falhas no posicionamento. | Should |
| RF03 | O usuário deve poder verificar a situação atual do clima onde as antenas estão localizadas. | Could |
| RF04 | O usuário deve poder realizar o login na plataforma. | Must |
| RF05 | O usuário deve poder redefinir sua senha. | Must |
| RF06 | O software deve alertar quando a antena precisa de calibração. | Must |
| RF07 | O usuário deve poder selecionar entre dark mode e light mode. | Would |
| RF08 | O usuário deve ser capaz de interromper uma rotina. | Must |
| RF09 | O software deve calcular e enviar os ângulos de posicionamento da antena. | Must |
| RF10 | O software deve ser capaz de salvar os dados recebidos pelo satélite monitorado. | Must |
| RF11 | O software deve mostrar a evolução do posicionamento da antena. | Could |
| RF12 | O usuário deve ser capaz de salvar rotinas de posicionamento. | Should |
| RF13 | O software deve mostrar a última vez que a antena foi calibrada. | Must |
| RF14 | O software deve bloquear rotinas que ultrapassem limites físicos ou de velocidade da antena. | Must |
| RF15 | O administrador deve poder gerenciar (cadastrar/controlar) usuários na plataforma. | Must |
| RF16 | O software deve ter um perfil de usuário normal (Operador). | Must |
| RF17 | O usuário deve poder selecionar entre os idiomas português e inglês. | Could |
| RF18 | O usuário deve poder exportar/baixar dados (gráficos de posicionamento e dados da medição). | Must |
| RF19 | O usuário deve poder verificar o status das antenas (ex: disponível, indisponível e ocupada). | Must |
| RN01 | O software deve ser acessível via web e compatível com os principais navegadores (ex: Chrome, Firefox). | Must |
| RN02 | Os fluxos para a realização de tarefas devem ser curtos. | Must |
| RN03 | O software deve seguir a identidade visual do laboratório. | Should |
| RN04 | O software deve ter uma boa documentação. | Must |

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
