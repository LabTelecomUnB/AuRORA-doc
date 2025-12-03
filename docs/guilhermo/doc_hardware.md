## Comunicação serial MODBUS-RTU

A comunicação entre os controladores das antenas e o conversor Ethernet/RS485 é realizada por meio do procolo MODBUS-RTU sobre um barramento RS-485 *half-duplex*. Nesta condição, o controlador principal atua como amo (*master*) e os controladores das antenas como escravos (*slave*). Conforme o MODBUS, o controlador principal (*master*) inicia a transmissão e toda requisição realizada recebe do controlador da antena (slave) uma resposta informando a validade ou não do comando enviado. 

No monitoramento do sistema serão usados os Input Registers. Na configuração e o controle, os Holding Registers. 

### Monitoramento

Os endereços a seguir correspondem a os ***Inputs Registers*** MODBUS, onde os dados do estado da antena são armazenados. Os registradores podem ser lidos com o código de função 0x03, mas não podem ser escritos.

***Tabela 6.*** *Inputs Registers (leitura)*

|Endereço <br> (hex) | Grupo / Registrador |Tamanho <br> (16 bits) | Formatação <br> (int:dec) | Possíveis valores| Unidade de medida |
|:--:|:--|:--:|:--:|:--:|:--:|
|      | ***Registradores de estado do controlador de movimento da antena*** | | | |
| 0000 | Data e hora (timestamp) | 4 | Coordinated Universal Time (UTC) Epoch Milliseconds (48 bits) | 0..281474976710655 | ms |
| 0003 | Estado do controle de movimento da antena | 1 | bits | 0..65535 | - |
|      | ***Registradores de estado do eixo Azimute*** | | | |
| 0004 | Posição atual | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 0006 | Posição desejada | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 0008 | Posição para iniciar a freagem, se estiver habilitada | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 000A | Tempo de passo | 1 | Inteiro sem sinal | 0..4294967295 | us |
| 000B | Tempo de passo desejado | 1 | Inteiro sem sinal | 0..4294967295 | us |
| 000C | Estado da máquina de estados do controle do movimento | 1 | bits | 0..65535 | - |
| 000D | Estado do eixo | 1 | bits | 0..65535 | - |
|      | ***Registradores de estado do eixo Elevação*** | | | |
| 000E | Posição desejada | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 0010 | Posição atual | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 0012 | Posição para iniciar a freagem, se estiver habilitada | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 0014 | Tempo de passo | 1 | Inteiro sem sinal | 0..4294967295 | us |
| 0015 | Tempo de passo desejado | 1 | Inteiro sem sinal | 0..4294967295 | us |
| 0016 | Estado da máquina de estados do controle do movimento | 1 | bits | 0..65535 | - |
| 0017 | Estado do eixo | 1 | bits | 0..65535 | - |
|      | ***Registradores de estado da fonte de alimentação*** | | | |
| 0018 | Valor mínimo da tensão elétrica da fonte de alimentação desde a última leitura | 1 | Inteiro sem sinal ponto fixo (2:3) | 0,000..65,535 | V |
| 0019 | Valor máximo da tensão elétrica da fonte de alimentação desde a última leitura | 1 | Inteiro sem sinal ponto fixo (2:3) | 0,000..65,535 | V |
| 001A | Valor médio (média aritmética) da tensão elétrica da fonte de alimentação desde a última leitura | 1 | Inteiro sem sinal ponto fixo (2:3) | 0,000..65,535 | V |
|      | ***Registradores de estado do firmware*** | | | |
| 001B | Número de parte | 16 | ASCII  | - | - |  

O valor *UTC Timestamp Epoch Milliseconds* ocupa por padrão 64 bits. Com o intuito de poupar espaço em memória e tempo de transmissão, foi implementado com apenas 48 bits, mas que suficiente para armazenar o tempo em milissegundos até 02/08/10889, partindo de 01/01/1970 conforme padrão UTC.s

Todos os valores numéricos que ocupam mais de um registrador MODBUS (16 bits) são representados em Little-Endian, ou seja, o valor de 16 bytes mais significativo estará localizado no último registrador que representa o valor.

A seguir se detalham os possíveis valores e significado de cada bit dos registradores de monitoramento.

***Tabela 7.*** *Bits de estado do movimento da antena*

| Bit | Descrição | Possíveis valores |
|:--:|:--|:--|
| ***15..0*** | ***Estado do controle de movimento da antena*** | |
| 15..8| Quantidade de pontos disponíveis para traçar percurso | 0..255 | 
| 3 | Aguardando dados para percurso | Tabela de pontos de percurso vazia, último percurso finalizado | 
| 2..1 | Modo de funcionamento do controle | 00 Absoluto, 01 Incremental, 10 Polar, 11 Seguimento | 
| 0 | Estado de sincronismo da antena com o percurso estabelecido (usado apenas no modo Seguimento) | 0 Sincronizado, 1 Fora de sincronismo |

***Tabela 8.*** *Bits de estado do movimento dos eixos Azimute e Elevação*

| Bit | Descrição | Possíveis valores |
|:--:|:--|:--|
| 10 | Estado do driver do motor | 0 Desabilitado, 1 Habilitado | 
| 9 | Estado do motor | 0 Parado, 1 Em movimento |
| 8 | Sentido de movimento | 0 Negativo, 1 Positivo |
| 7 | Sentido de movimento desejado (depende da posição atual e a desejada) | 0 Negativo, 1 Positivo |
| 6 | Em rampa de aceleração ou desaceleração | 0 Velocidade constante, 1 Acelerando ou desacelerando |
| 5 | Habilitação da rampa de freagem | 0 Desabilitada, 1 Habilitada |
| 4 | Estado da rampa de freagem* | 0 Desabilitada, 1 Habilitada |
| 3 | Estado de sincronismo com o satélite | 0 Sincronizado, 1 Fora de sincronismo |
| 2 | Estado de alarme (sinal ALM) | 0 Inativa, 1 Ativa |
| 1 | Estado do sensor de limite mínimo | 0 Inativo, 1 Ativo |
| 0 | Estado do sensor de limite máximo | 0 Inativo, 1 Ativo |

A *Habilitação da rampa de freagem* estará ativa quando a posição atingir a posição para iniciar a freagem (se habilitado). Isso permite uma redução da velocidade antes de atingir o último ponto da lista ou em movimentos isolados. No modo de seguimento, quando existir mais pontos a serem atingidos, a rampa de freagem fica desabilitada e apenas se muda a velocidade após haver terminado o percurso atual e em função da velocidade do novo percurso.

### Controle e configuração

Os endereços a seguir correspondem a os ***Holding Registers*** MODBUS, onde os dados de configuração e controle da antena são armazenados. Os registradores podem ser escritos com os códigos de função 0x06 e 0x10 e lidos com o código de função 0x04.

***Tabela 9.*** *Holding Registers (leitura/escritura)*

|Endereço <br> (hex) | Grupo / Registrador |Tamanho <br> (16 bits) | Formatação <br> (int:dec) | Possíveis valores| Unidade de medida |
|:--:|:--|:--:|:--:|:--:|:--:|
|      | ***Registradores de configuração do MODBUS***  | | | | |
| 0000 | Identificador do escravo | 1 | Inteiro sem sinal | 1..254 | - |
| 0001 | Velocidade de comunicação (Baud rate) | 1 | Inteiro sem sinal | 0 - 9600 <br> 1 - 19200 <br> 2 - 38400 <br> 3 - 57600 <br> 4 - 115200 <br> 6 - 256000 | BPS |
|      | ***Registradores de configuração do eixo Azimute***  | | | | |
| 0002 | Tempo de passo mínimo | 1 | 4:0 | 0..65535 | us |
| 0003 | Tempo de passo máximo | 1 | 4:0 | 0..65535 | us |
| 0004 | Decremento do tempo de passo na aceleração | 1 | 4:0 | 0..65535 | us/passo
| 0005 | Incremento do tempo de passo na desaceleração | 1 | 4:0 | 0..65535 | us/passo  
| 0005 | Tempo de espera para inversão da direção de movimento após parada | 1 | 4:0 | 0..65535 | ms  
| 0006 | Coeficiente de conversão de graus para passos | 2 | IEEE-754 Floating Point (big-endian) | -inf..+inf | passo/° |
|      | ***Registradores de configuração do eixo Elevação***  | | | | |
| 0008 | Tempo de passo mínimo | 1 | 4:0 | 0..65535 | us |
| 0009 | Tempo de passo mínimo | 1 | 4:0 | 0..65535 | us |
| 000A | Decremento do tempo de passo na rampa de aceleração | 1 | 4:0 | 0..65505 | us/passo |
| 000B | Incremento do tempo de passo na rampa de desaceleração | 1 | 4:0 | 0..65505 | us/passo |
| 0005 | Tempo de espera para inversão da direção de movimento após parada | 1 | 4:0 | 0..65535 | ms  
| 000C | Coeficiente de conversão de graus para passos | 2 | IEEE-754 Floating Point (big-endian) | -inf..+inf | passo/° |
|      | ***Registradores de configuração do monitoramento da fonte de alimentação***  | | | | |
| 000E | Coeficiente de conversão do valor do ADC para tensão da fonte de alimentação | 2 | IEEE-754 Floating Point (big-endian) | -inf..+inf | V/uc |
|      | ***Registradores para o controle do funcionamento*** | | | | |
| 0010 | Comando | 1 | bits | 0..65535 | - |
| 0011 | Dados do comando | 4 | - | - | - |
|      | ***Lista de coordenadas para seguimento de percurso*** | | | | |
| 0015 | Coordenada 1 no eixo Azimute | 1 | Inteiro sem sinal ponto fixo (3:2) | 0,00..360,00 | ° |
| 0016 | Coordenada 1 no eixo Elevação | 1 | Inteiro sem sinal ponto fixo (3:2) | 0,00..90,00 | ° |
| 0017 | Horário em que deve ser atingida a coordenada 1 | 3 | UTC Timestamp Epoch Milliseconds (48 bits) | 0..281474976710655 | ms |
| 0015+5*n | Coordenada *n* no eixo Azimute | 1 | Inteiro sem sinal ponto fixo (3:0) | 0,00..360,00 | ° |
| 0016+5*n | Coordenada *n* no eixo Elevação | 1 | Inteiro sem sinal ponto fixo (3:0) | 0,00..90,00 | ° |
| 0017+5*n | Horário em que deve ser atingida a coordenada *n* | 3 | UTC Timestamp Epoch Milliseconds (48 bits) | 0..281474976710655 | ms |

Após enviar o comando e o último valor dos dados, o comando será executado. Para que o comando seja executado devem ser enviados escritos os 5 Holding Registers associados ao comando. Os valores não utilizados podem ser enviados com qualquer valor. 

O registrador Comando será zerado quando o commando seja executado. Qualquer leitura posterior devolverá o valor de zero.

O valor máximo de *n* é definido no firmware. O valor de pontos de percurso disponíveis para ser preenchidos pode ser lido no Registrador de estado de movimento da antena nos bits "Quantidade de pontos para traçar percurso disponíveis". Se a antena estiver com o bit "Aguardando dados para percurso" em "1", ese valor representa a quantidade máxima de pontos disponíveis para traçar um percurso.

***Tabela 10.*** *Lista de comandos* 

|Incremento no endereço | Comando/Dados (Hex) | Tamanho <br> (16 bits) | Formatação <br> (int:dec) | Possíveis valores| Unidade de medida |
|:--:|:--|:--:|:--:|:--:|:--:|
|      | ***Parada imediata e desabilitação de um ou ambos eixos*** | | | | |
| 0 | 100E onde E identifica o eixo | 1 | Inteiro sem sinal | E=0 Ambos eixos,<br> E=1 Eixo Azimute,<br> E=2 Eixo Elevação | - |
|      | ***Parada suave e desabilitação de um ou ambos eixos*** | | | | |
| 0 | 101E onde E identifica o eixo | 1 | Inteiro sem sinal | E=0 Ambos eixos,<br> E=1 Eixo Azimute,<br> E=2 Eixo Elevação | - |
|      | ***Movimento de um ou ambos eixos com ponto final definido em quantidade de passos relativos à posição inicial (modo absoluto)*** | | | | |
| 0 | 110E onde E identifica o eixo | 1 | Inteiro sem sinal | E=0 Ambos eixos,<br> E=1 Eixo Azimute,<br> E=2 Eixo Elevação | - |
| 1 | Quantidade de passos | 2 | Inteiro sem sinal | 0..4294967295 | passos |
| 3 | Tempo de passo | 1 | Inteiro sem sinal | 0..65535 | us |
|      | ***Movimento de um ou ambos eixos com ponto final definido em quantidade passos relativos à posição atual (modo incremental)*** | | | | |
| 0 | 120E onde E identifica o eixo | 1 | Inteiro sem sinal | E=0 Ambos eixos,<br> E=1 Eixo Azimute,<br> E=2 Eixo Elevação | - |
| 1 | Quantidade de passos | 2 | Inteiro com sinal | -2147483648..2147483647 | passos |
| 2 | Tempo de passo | 1 | Inteiro sem sinal | 0..65535 | us |
|      | ***Movimento de ambos eixos com ponto final definido em coordenadas polares (modo polar)*** | | | | |
| 0 | 1300 | 1 | - | - | - |
| 1 | Posição desejada no eixo Azimute | 1 | Inteiro sem sinal ponto fixo (3:2) | 0,00..360,00 | ° |
| 2 | Tempo de passo no eixo Azimute | 1 | Inteiro sem sinal | 0..65535 | us |
| 3 | Posição desejada no eixo Elevação | 1 | Inteiro sem sinal ponto fixo (3:2) | 0,00..90,00 | ° |
| 4 | Tempo de passo no eixo Elevação | 1 | Inteiro sem sinal | 0..65535 | us |
|      | ***Apaga lista de coordenadas para seguimento de percurso  (modo seguimento)*** | | | | |
| 0 | 1400 | 1 | - | - | - |
|      | ***Inicia movimento de seguimento de percurso em ambos eixos conforme lista de coordenadas*** | | | | |
| 0 | 1500 | 1 | - | - | - |
|      | **Atualiza Horário do RTC (timestamp)*** | | | | |
| 0 | 8000 | 1 | - | - | - |
| 1 | Horário atualizado | 3 | UTC Timestamp Epoch Milliseconds (48 bits)  | 0..281474976710655 | ms |
|      | ***"Reseta" sistema*** | | | | |
| 0 | A500 | 1 | - | - | - |
|      | ***Restaura os valores de configuração de fábrica*** | | | | |
| 0 | A5A5 | 1 | - | - | - |
|      | ***Desliga/Liga alimentação do motor de um ou ambos eixos*** | | | | |
| 0 | A0SE onde E identifica o eixo e S o estado da alimentação | 1 | Inteiro sem sinal | E=0 Ambos eixos,<br> E=1 Eixo Azimute,<br> E=2 Eixo Elevação,<br> S=0 Desligar,<br> S=1 Ligar | - |
