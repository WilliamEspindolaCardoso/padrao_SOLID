# Design Patterns Examples

Pesquisar sobre o padrão SOLID e escolher dois deles (duas letras).


S — Single Responsibility (Responsabilidade Única)

Uma classe que deve fazer apenas uma coisa.

Imagine que você tem um funcionário que faz de tudo: atende telefone, faz café, limpa o escritório, resolve problemas técnicos, atende cliente…

Ele não consegue fazer tudo bem feito, e se ele faltar, tudo para.

No código vai ser igual: Uma classe que faz várias coisas fica difícil de arrumar e entender.

Por isso, deve existir uma classe para cada tipo de tarefa.

Cada classe cuidando de um único papel = código mais limpo


✔ Exemplo:

Uma classe “Aluno” faz:
- validar nota
- calcular média
- enviar mensagem para os pais
- gerar boleto da mensalidade

👉 Pergunta: Qual dessas responsabilidades não deveria estar aí?
👉 Tarefa: Diga quais funções você moveria para outras classes.

-->> Resposta:

Na classe Aluno, as responsabilidades estão misturadas:
- validar nota → ok
- calcular média → ok
- enviar mensagem para os pais → NÃO deveria estar aqui
- gerar boleto → NÃO deveria estar aqui

>> Correção:
Aluno
validarNota()
calcularMedia()

ComunicacaoService
enviarMensagemPais()

FinanceiroService
gerarBoleto()

👉 Agora cada classe faz apenas o que pertence a ela.

________________________________________________________________________________________________

I — Interface Segregation (Segregação de Interfaces)

Muitas interfaces específicas são melhores do que uma interface geral única.

É melhor ter interfaces específicas do que uma interface enorme com métodos inúteis.

Interface pequena, focada no que cada classe precisa.


✔ Exemplo:

Uma interface “Impressora” tem:
- imprimir()
- escanear()
- enviarFax()

Mas a “ImpressoraSimples” só imprime.

👉 Pergunta: O que está errado?
👉 Tarefa: Que interfaces você criaria para arrumar isso?

>> Correção:
ImpressoraSimples é obrigada a implementar métodos que não precisa.

Correção: dividir interfaces
interface Imprimivel { imprimir() }
interface Escaneavel { escanear() }
interface Fax { enviarFax() }

Agora:
class ImpressoraSimples implements Imprimivel {}
class ImpressoraAvancada implements Imprimivel, Escaneavel, Fax {}

👉 Cada classe implementa só o que realmente usa.