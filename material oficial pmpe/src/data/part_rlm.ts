import {
  BookOpenCheck,
  Timer,
  ListChecks,
  Lightbulb,
  Layers,
  Cable,
  Waypoints,
  ScanSearch,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";
import type { Part } from "./types";

export const PART_RLM: Part = {
  id: 4,
  tabShort: "Raciocínio Lógico",
  tabLabel: "Raciocínio Lógico-Matemático",
  docTitle: "PMPE Oficial · Raciocínio Lógico",
  footerNote: "Raciocínio Lógico-Matemático",
  nextNote: "➡️ Próxima disciplina: Estatística.",
  bancas: ["Instituto AOCP", "Cebraspe", "FGV", "FCC", "IBFC"],
  tocLabel: "Nesta disciplina",
  hero: {
    eyebrow: "Oficial PMPE · Raciocínio Lógico · Banca Instituto AOCP",
    title: "==Raciocínio Lógico==-Matemático",
    subtitle:
      "proposições, conectivos e tabelas-verdade, equivalências e De Morgan, quantificadores, lógica de argumentação, diagramas de Euler-Venn, contagem e probabilidade — do jeito que o Instituto AOCP cobra",
    description:
      "Disciplina de **alto retorno por hora de estudo**: poucas regras, muita aplicação. Você aprende a montar **tabelas-verdade**, reconhecer **equivalências e negações**, julgar a **validade de argumentos**, interpretar **diagramas lógicos** e resolver **contagem e probabilidade** com método. Com exemplos policial-militares, ==pegadinhas mapeadas==, quadros-resumo, macetes e questões-treino comentadas no estilo **Instituto AOCP**.",
    stats: [
      { icon: BookOpenCheck, big: "5", small: "grandes eixos" },
      { icon: Timer, big: "~1h40", small: "de leitura focada" },
      { icon: ListChecks, big: "51", small: "questões comentadas" },
      { icon: Lightbulb, big: "AOCP", small: "foco na banca e no cargo" },
    ],
    terms: [
      "~p · p∧q · p∨q",
      "condicional p→q",
      "tabela-verdade",
      "tautologia · contradição",
      "De Morgan",
      "contrapositiva",
      "∀ todo · ∃ algum",
      "modus ponens / tollens",
      "falácias",
      "Euler-Venn",
      "PFC · permutação",
      "arranjo × combinação",
      "P = favoráveis/possíveis",
      "eventos independentes × exclusivos",
    ],
    palette: "teal",
    termsLabel: "Termos mais cobrados pela AOCP",
    startId: "panorama-rlm",
  },
  sections: [
    {
      id: "panorama-rlm",
      num: "01",
      kicker: "Como usar este material",
      icon: GraduationCap,
      title: "Panorama do ==Raciocínio Lógico==",
      lead: "Lógica é método, não decoreba: quem domina a tabela-verdade, as equivalências e os princípios de contagem resolve a prova inteira com segurança.",
      blocks: [
        {
          t: "p",
          text: "Esta disciplina percorre cinco blocos encadeados: **proposições e conectivos** (a gramática da lógica), **equivalências, De Morgan e quantificadores**, **lógica de argumentação** (validade de argumentos), **diagramas de Euler-Venn** e, por fim, **contagem e probabilidade**. Cada bloco traz teoria, exemplos policial-militares, pegadinhas, quadro-resumo e questões comentadas.",
        },
        {
          t: "callout",
          variant: "macete",
          title: "a rota mais curta",
          text: "Se o tempo estiver curto, priorize nesta ordem: **tabela do condicional (V→F é o único falso)**, **negação de proposições compostas e de quantificadores**, **arranjo × combinação** e **probabilidade básica**. Esses quatro pontos respondem pela maioria das questões do Instituto AOCP.",
        },
      ],
    },

    {
      id: "proposicoes",
      num: "02",
      kicker: "Lógica · estruturas (parte A)",
      icon: BrainCircuit,
      title: "Proposições, conectivos e ==tabelas-verdade==",
      lead: "Proposição é uma frase declarativa a que se pode atribuir V ou F. Os conectivos combinam proposições, e a tabela-verdade revela o valor lógico do conjunto.",
      blocks: [
        {
          t: "callout",
          variant: "conceito",
          title: "o que é proposição",
          text: "**Proposição** é uma sentença **declarativa** com valor lógico único: **V**erdadeiro ou **F**also. Frases interrogativas, exclamativas, imperativas, abertas (com ‘x’) e **paradoxos** (*‘esta frase é falsa’* — nem V nem F) **não** são proposições. Uma proposição **simples** não tem conectivo; a **composta** une simples por conectivos.",
        },
        {
          t: "table",
          caption: "Os conectivos e quando são VERDADEIROS",
          head: ["Conectivo", "Símbolo", "Verdadeiro quando..."],
          rows: [
            ["Negação (não)", "~p", "inverte o valor de p"],
            ["Conjunção (e)", "p ∧ q", "**ambos** verdadeiros"],
            ["Disjunção inclusiva (ou)", "p ∨ q", "**pelo menos um** verdadeiro (F só se ambos F)"],
            ["Disjunção exclusiva (ou...ou)", "p ⊕ q", "os valores são **diferentes**"],
            ["Condicional (se...então)", "p → q", "F **somente** quando V → F"],
            ["Bicondicional (se e somente se)", "p ↔ q", "os valores são **iguais**"],
          ],
        },
        {
          t: "table",
          caption: "Tabelas-verdade completas (o quadro que resolve tudo)",
          head: ["p", "q", "p ∧ q", "p ∨ q", "p ⊕ q", "p → q", "p ↔ q"],
          rows: [
            ["V", "V", "V", "V", "**F**", "V", "V"],
            ["V", "F", "F", "V", "**V**", "**F**", "F"],
            ["F", "V", "F", "V", "**V**", "V", "F"],
            ["F", "F", "F", "**F**", "F", "V", "**V**"],
          ],
        },
        {
          t: "keyvalue",
          title: "Variações do condicional e condição suficiente × necessária",
          rows: [
            { k: "Traduzem p → q", v: "**p implica q** · **p somente se q** · **q se p** · **q sempre que p** · **q caso p** · ‘p é **suficiente** para q’ · ‘q é **necessária** para p’." },
            { k: "Cuidado (traduzem q → p)", v: "‘**q somente se p**’ e ‘**p é necessário para q**’ invertem: a condição p aparece depois do ‘se’." },
            { k: "Regra do antecedente", v: "no p → q, o **antecedente** (p) é a condição **SUFICIENTE**; o **consequente** (q) é a condição **NECESSÁRIA**." },
            { k: "Como montar a tabela", v: "1) conte as simples (n) → **2ⁿ linhas**; 2) colunas intermediárias **da esquerda para a direita**; 3) resolve ~ → ∧/∨ → →/↔ (da menor precedência para a maior)." },
          ],
        },
        {
          t: "keyvalue",
          title: "Classificação da proposição composta",
          rows: [
            { k: "Tautologia", v: "**sempre V**, independentemente dos valores (ex.: p ∨ ~p)." },
            { k: "Contradição", v: "**sempre F** (ex.: p ∧ ~p)." },
            { k: "Contingência", v: "ora V, ora F (a maioria das proposições)." },
            { k: "Nº de linhas da tabela", v: "**2ⁿ**, sendo n o número de proposições simples (2 simples → 4 linhas; 3 → 8)." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) o **condicional** (só é F em V→F) — o mais cobrado de todos; (2) construir/completar **tabela-verdade**; (3) classificar em **tautologia/contradição/contingência**; (4) número de linhas **2ⁿ**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "O **condicional p → q** é **F somente** no caso **V → F**. Muita gente erra achando que ‘F → qualquer coisa’ é falso — é o contrário: **partindo do falso, o condicional é sempre V**. E a **disjunção inclusiva** só é F quando os DOIS são F.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Sejam p = ‘o suspeito fugiu’ e q = ‘a equipe deu perseguição’. ‘Se o suspeito fugiu, então a equipe deu perseguição’ (p→q) só é **falsa** se ele fugiu (V) e a equipe **não** perseguiu (F). Em todos os outros casos, é **verdadeira**.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**Condicional: ‘V→F cai na real’ é o único FALSO.** Conjunção (E) é ‘exigente’: precisa de tudo V. Disjunção (OU) é ‘generosa’: basta um V. Bicondicional é o ‘espelho’: V quando iguais.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Proposições e conectivos",
          items: [
            "Proposição = frase declarativa com valor V ou F.",
            "~p inverte; p∧q (E): V só se ambos V.",
            "p∨q (OU): F só se ambos F.",
            "p⊕q (ou...ou): V quando os valores diferem.",
            "p→q: F somente em V→F.",
            "p↔q: V quando os valores são iguais.",
            "Tautologia sempre V; contradição sempre F; contingência varia.",
            "Nº de linhas da tabela-verdade = 2ⁿ.",
            "‘p somente se q’, ‘q se p’, ‘p implica q’ = p → q.",
            "Antecedente p = suficiente; consequente q = necessária.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Proposições e conectivos",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "A proposição condicional “Se p, então q” (p → q) é falsa apenas quando p é verdadeira e q é falsa.",
              correct: "C",
              comentario:
                "CERTO. O condicional só assume valor F no caso V → F. Nos demais (V→V, F→V, F→F) é verdadeiro. Regra mais cobrada de toda a lógica.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Uma proposição composta formada por 3 proposições simples tem, em sua tabela-verdade, quantas linhas?",
              options: [
                { key: "a", label: "3" },
                { key: "b", label: "6" },
                { key: "c", label: "8" },
                { key: "d", label: "9" },
                { key: "e", label: "16" },
              ],
              correct: "c",
              comentario:
                "Letra C. O número de linhas é 2ⁿ, com n = número de proposições simples. Para n = 3: 2³ = 8 linhas.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A proposição “p ∨ ~p” é classificada como:",
              options: [
                { key: "a", label: "contradição" },
                { key: "b", label: "contingência" },
                { key: "c", label: "tautologia" },
                { key: "d", label: "bicondicional falsa" },
                { key: "e", label: "disjunção exclusiva" },
              ],
              correct: "c",
              comentario:
                "Letra C. “p ou não p” é sempre verdadeira (se p é V, o primeiro; se é F, o segundo) → tautologia. Já “p ∧ ~p” é sempre falsa (contradição).",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Considere as proposições p (V) e q (F). O valor lógico da proposição composta “(p ∧ q) → (p ∨ q)” é:",
              options: [
                { key: "a", label: "Falso" },
                { key: "b", label: "Verdadeiro" },
                { key: "c", label: "Indeterminado" },
                { key: "d", label: "Depende de outra proposição" },
                { key: "e", label: "Não é uma proposição" },
              ],
              correct: "b",
              comentario:
                "Letra B. p∧q = V∧F = F; p∨q = V∨F = V. O condicional F→V é VERDADEIRO (o condicional só é falso quando V→F). Logo, o valor é Verdadeiro.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "O único caso em que a proposição condicional “Se o agente está de plantão, então porta arma” é FALSA ocorre quando:",
              options: [
                { key: "a", label: "está de plantão e porta arma" },
                { key: "b", label: "está de plantão e NÃO porta arma" },
                { key: "c", label: "não está de plantão e porta arma" },
                { key: "d", label: "não está de plantão e não porta arma" },
                { key: "e", label: "nunca é falsa" },
              ],
              correct: "b",
              comentario:
                "Letra B. O condicional p→q só é falso quando o antecedente é V e o consequente é F: está de plantão (V) e não porta arma (F). Nos demais casos é verdadeiro.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "A bicondicional “p ↔ q” é verdadeira somente quando p e q têm o mesmo valor lógico (ambos verdadeiros ou ambos falsos).",
              correct: "C",
              comentario:
                "CERTO. A bicondicional é verdadeira quando os dois lados têm o mesmo valor (V↔V e F↔F) e falsa quando são diferentes (V↔F, F↔V). Traduz a ideia de “se e somente se”.",
            },
          ],
        },
        {
          t: "quiz",
          title: "🔁 Questões Cebraspe (Certo/Errado) · Proposições e conectivos — aprofundamento",
          questions: [
            {
              id: 7,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "A frase “O policial será promovido somente se for aprovado no curso” pode ser simbolizada por “se for aprovado no curso, então será promovido”.",
              correct: "E",
              comentario:
                "ERRADO. ‘p somente se q’ traduz-se por p → q (a promoção garante que houve aprovação): **promovido → aprovado**. A forma “se aprovado → promovido” é a INVERSA, que inverte antecedente e consequente.",
            },
            {
              id: 8,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Na condicional p → q, p é condição suficiente para q, e q é condição necessária para p.",
              correct: "C",
              comentario:
                "CERTO. Basta p ocorrer (V) para q seguir — p é suficiente; mas p só ocorre SE q ocorrer — q é necessária. Aplicação: ‘se é delegado (p), é policial (q)’ — ser delegado basta; ser policial é necessário.",
            },
            {
              id: 9,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Na tabela-verdade da disjunção exclusiva p ⊕ q, a proposição composta é falsa quando p e q assumem valores lógicos iguais.",
              correct: "C",
              comentario:
                "CERTO. p ⊕ q é verdadeira somente quando os valores são DIFERENTES (V-F e F-V); nos casos V-V e F-F (valores iguais), é falsa. Daí a leitura ‘ou isto, ou aquilo, mas não ambos’.",
            },
          ],
        },
      ],
    },

    /* ============= EQUIVALÊNCIAS, DE MORGAN, QUANTIFICADORES, FALÁCIAS ============= */
    {
      id: "equivalencias",
      num: "03",
      kicker: "Lógica · estruturas (parte B)",
      icon: Cable,
      title: "Equivalências, ==De Morgan==, quantificadores e falácias",
      lead: "Negar e transformar proposições sem alterar seu valor lógico. As Leis de De Morgan e a negação do condicional são presença garantida na prova.",
      blocks: [
        {
          t: "table",
          caption: "Equivalências e negações essenciais",
          head: ["Proposição", "Equivalente / Negação", "Observação"],
          rows: [
            ["p → q", "~q → ~p", "contrapositiva (equivalente)"],
            ["p → q", "~p ∨ q", "condicional vira disjunção"],
            ["~(p ∧ q)", "~p ∨ ~q", "De Morgan (nega o E → vira OU)"],
            ["~(p ∨ q)", "~p ∧ ~q", "De Morgan (nega o OU → vira E)"],
            ["~(p → q)", "p ∧ ~q", "negação do condicional"],
            ["~(p ↔ q)", "p ⊕ q", "negação do bicondicional (ou exclusivo)"],
            ["~(~p)", "p", "dupla negação: negar duas vezes volta ao original"],
            ["(p ∧ q) → r", "p → (q → r)", "exportação: move uma condição para a conclusão"],
            ["p ∧ (p ∨ q) e p ∨ (p ∧ q)", "p", "absorção: o parêntese redundante é engolido"],
            ["p ∧ p e p ∨ p", "p", "idempotência: repetir não muda nada"],
            ["p ∧ (q ∨ r)", "(p ∧ q) ∨ (p ∧ r)", "distributiva do E sobre o OU"],
          ],
        },
        {
          t: "keyvalue",
          title: "Quantificadores e suas negações",
          rows: [
            { k: "Universal ∀", v: "‘todo’, ‘qualquer’, ‘nenhum’. Ex.: **Todo** policial é disciplinado." },
            { k: "Existencial ∃", v: "‘algum’, ‘existe’, ‘pelo menos um’. Ex.: **Algum** suspeito confessou." },
            { k: "Negar ‘todo A é B’", v: "= **‘algum A não é B’** (existe pelo menos uma exceção)." },
            { k: "Negar ‘algum A é B’", v: "= **‘nenhum A é B’**." },
            { k: "Proposições categóricas", v: "A (todo é), E (nenhum é), I (algum é), O (algum não é)." },
          ],
        },
        {
          t: "keyvalue",
          title: "Falácias — raciocínios que parecem válidos, mas não são",
          rows: [
            { k: "Ad hominem", v: "atacar a pessoa, não o argumento." },
            { k: "Espantalho", v: "distorcer o argumento do outro para refutá-lo mais fácil." },
            { k: "Apelo à autoridade / emoção", v: "usar prestígio ou sentimento em vez de razões." },
            { k: "Generalização apressada", v: "concluir a partir de poucos casos." },
            { k: "Falsa dicotomia", v: "reduzir a só duas opções quando há mais." },
            { k: "Post hoc", v: "achar que, porque veio depois, foi causado por (causa falsa)." },
            { k: "Afirmação do consequente (FORMAL)", v: "de p→q e **q**, concluir **p** — INVÁLIDO: *se é PM, usa farda; usa farda; logo é PM* (pode ser bombeiro)." },
            { k: "Negação do antecedente (FORMAL)", v: "de p→q e **~p**, concluir **~q** — INVÁLIDO: *se chove, molha; não choveu; logo não molhou* (pode molhar por outro motivo)." },
            { k: "Petição de princípio", v: "argumento circular: usa a própria conclusão como premissa." },
            { k: "Derrapagem (slippery slope)", v: "afirmar que um pequeno passo leva inevitavelmente a consequências extremas, sem justificar a cadeia." },
            { k: "Apelo à ignorância", v: "afirmar que algo é verdadeiro porque não foi refutado: *não há prova contra, logo é verdade* (argumentum ad ignorantiam)." },
            { k: "Red herring", v: "arenque vermelho: desviar o assunto para uma pista irrelevante — o tema muda de rumo sem o leitor perceber." },
          ],
        },
        {
          t: "table",
          caption: "Proposições categóricas (A, E, I, O) e suas negações — quadro de oposição",
          head: ["Tipo", "Forma", "Exemplo", "Negação"],
          rows: [
            ["**A**", "Todo S é P", "Todo policial é disciplinado", "**O**: Algum policial NÃO é disciplinado"],
            ["**E**", "Nenhum S é P", "Nenhum recruta faltou", "**I**: Algum recruta faltou"],
            ["**I**", "Algum S é P", "Algum suspeito confessou", "**E**: Nenhum suspeito confessou"],
            ["**O**", "Algum S não é P", "Algum agente não compareceu", "**A**: Todo agente compareceu"],
          ],
        },
        {
          t: "keyvalue",
          title: "Quadrado da oposição — as 4 relações entre A, E, I, O",
          rows: [
            { k: "Contraditórias (A×O, E×I)", v: "valores SEMPRE opostos: uma é a negação exata da outra — não podem ser ambas V nem ambas F." },
            { k: "Contrárias (A×E)", v: "não podem ser ambas VERDADEIRAS; podem ser ambas falsas: *Todo PM é baixo* × *Nenhum PM é baixo* (ambas falsas se alguns são)." },
            { k: "Subcontrárias (I×O)", v: "não podem ser ambas FALSAS; podem ser ambas verdadeiras: *Algum confessou* × *Algum não confessou*." },
            { k: "Subalternas (A→I, E→O)", v: "a universal V ARRASTA a particular V; a particular F ARRASTA a universal F: *Todo* é V → *algum* é V." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **negação do condicional** (~(p→q) = p ∧ ~q); (2) **De Morgan**; (3) **contrapositiva** (p→q ≡ ~q→~p); (4) **negar quantificadores** (todo ↔ algum não); (5) identificar a **falácia**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "A negação de **‘Todos os PMs são altos’** NÃO é ‘Nenhum PM é alto’ — é **‘Pelo menos um PM não é alto’**. E ao negar o condicional, **mantém-se a 1ª e nega-se a 2ª** com ‘e’: ~(p→q) = **p ∧ ~q** (não é outro condicional!).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Frase: ‘Se houve flagrante, então houve prisão’ (p→q). **Negação:** ‘Houve flagrante **e** não houve prisão’ (p ∧ ~q). **Contrapositiva** (equivalente): ‘Se não houve prisão, então não houve flagrante’ (~q→~p).",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**De Morgan: ‘nega tudo e troca o conectivo’** (E↔OU). **Negar condicional:** ‘mantém, troca o → por ∧ e nega o segundo’. **Quantificador:** todo ↔ algum-não; nenhum ↔ algum.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Equivalências, quantificadores e falácias",
          items: [
            "p→q ≡ ~q→~p (contrapositiva) ≡ ~p ∨ q.",
            "~(p∧q) = ~p ∨ ~q; ~(p∨q) = ~p ∧ ~q (De Morgan).",
            "~(p→q) = p ∧ ~q (negação do condicional).",
            "~(p↔q) = disjunção exclusiva (p ⊕ q).",
            "∀ = todo/qualquer/nenhum; ∃ = algum/existe/pelo menos um.",
            "Negar ‘todo A é B’ = ‘algum A não é B’.",
            "Negar ‘algum A é B’ = ‘nenhum A é B’.",
            "Falácias: ad hominem, espantalho, generalização, falsa dicotomia, post hoc.",
            "Falácias FORMAIS: afirmação do consequente (q→p?) e negação do antecedente (~p→~q?) — ambas inválidas.",
            "Categóricas: A↔O e E↔I são negações uma da outra.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Equivalências e quantificadores",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "A negação da proposição “Se choveu, então a operação foi cancelada” é:",
              options: [
                { key: "a", label: "Se não choveu, então a operação não foi cancelada." },
                { key: "b", label: "Choveu e a operação não foi cancelada." },
                { key: "c", label: "Não choveu ou a operação foi cancelada." },
                { key: "d", label: "Se a operação foi cancelada, então choveu." },
                { key: "e", label: "Não choveu e a operação foi cancelada." },
              ],
              correct: "b",
              comentario:
                "Letra B. ~(p → q) = p ∧ ~q: mantém a 1ª (choveu) e nega a 2ª (não foi cancelada), unidas por ‘e’. A letra A é a contrapositiva negada errada; C é a equivalência (não a negação).",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "A negação de “Todos os policiais foram aprovados” é “Pelo menos um policial não foi aprovado”.",
              correct: "C",
              comentario:
                "CERTO. Negar o quantificador universal ‘todo’ gera o existencial de exceção: ‘algum/pelo menos um não’. Não é ‘nenhum foi aprovado’.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Pela Lei de De Morgan, a negação de “O agente é honesto E competente” é:",
              options: [
                { key: "a", label: "O agente é desonesto e incompetente." },
                { key: "b", label: "O agente não é honesto ou não é competente." },
                { key: "c", label: "O agente é honesto ou competente." },
                { key: "d", label: "Se o agente é honesto, então é competente." },
                { key: "e", label: "O agente não é honesto e não é competente." },
              ],
              correct: "b",
              comentario:
                "Letra B. ~(p ∧ q) = ~p ∨ ~q: nega cada parte e troca ‘e’ por ‘ou’. Basta faltar uma qualidade para a conjunção original ser falsa.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A negação da proposição “Se há flagrante, então há prisão” é:",
              options: [
                { key: "a", label: "Se não há flagrante, então não há prisão." },
                { key: "b", label: "Há flagrante e não há prisão." },
                { key: "c", label: "Não há flagrante ou há prisão." },
                { key: "d", label: "Se há prisão, então há flagrante." },
                { key: "e", label: "Não há flagrante e não há prisão." },
              ],
              correct: "b",
              comentario:
                "Letra B. A negação de p→q é “p ∧ ~q” (mantém o antecedente e nega o consequente): há flagrante E não há prisão. Não se nega condicional trocando por outro condicional.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A proposição “Se o suspeito confessa, então é indiciado” é logicamente EQUIVALENTE a:",
              options: [
                { key: "a", label: "Se é indiciado, então confessa." },
                { key: "b", label: "Se não confessa, então não é indiciado." },
                { key: "c", label: "Se não é indiciado, então não confessa." },
                { key: "d", label: "Confessa e é indiciado." },
                { key: "e", label: "Não confessa ou não é indiciado." },
              ],
              correct: "c",
              comentario:
                "Letra C. A equivalência de p→q é a contrapositiva ~q→~p: “se não é indiciado, então não confessa”. A opção A é a recíproca (não equivale) e a B é a inversa (não equivale).",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "A negação de “Todo policial é corajoso” é “Nenhum policial é corajoso”.",
              correct: "E",
              comentario:
                "ERRADO. A negação de “Todo A é B” é “Algum A NÃO é B” (existe pelo menos um contraexemplo). “Nenhum policial é corajoso” é uma afirmação contrária, não a negação lógica.",
            },
          ],
        },
        {
          t: "quiz",
          title: "🔁 Questões Cebraspe (Certo/Errado) · Equivalências e falácias — aprofundamento",
          questions: [
            {
              id: 7,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "O argumento “Se o veículo é viatura, tem sirene. O veículo tem sirene. Logo, o veículo é viatura” é um exemplo de argumento válido.",
              correct: "E",
              comentario:
                "ERRADO. É a FALÁCIA FORMAL da afirmação do consequente (p→q, q ⊢ p): ter sirene não garante ser viatura (ambulância também tem). O argumento válido seria o modus ponens (p→q, p ⊢ q) ou o modus tollens (p→q, ~q ⊢ ~p).",
            },
            {
              id: 8,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "A negação de “Nenhum agente da unidade faltou à instrução” é “Algum agente da unidade faltou à instrução”.",
              correct: "C",
              comentario:
                "CERTO. Negar a categórica E (nenhum S é P) gera a I (algum S é P): basta UM caso para derrubar o ‘nenhum’. No quadro de oposição, E ↔ I.",
            },
          ],
        },
      ],
    },

    /* ============= ARGUMENTAÇÃO ============= */
    {
      id: "argumentacao",
      num: "04",
      kicker: "Lógica · argumentação",
      icon: Waypoints,
      title: "Lógica de ==argumentação==",
      lead: "Um argumento é válido quando a conclusão decorre necessariamente das premissas. Validade é sobre a FORMA — não confunda com verdade do conteúdo.",
      blocks: [
        {
          t: "twocol",
          title: "Validade × Verdade",
          left: { label: "Validade (forma)", text: "um argumento é **válido** se, sendo as premissas verdadeiras, a conclusão é **necessariamente** verdadeira. É questão de estrutura." },
          right: { label: "Verdade (conteúdo)", text: "diz respeito ao **valor lógico** de cada proposição. Um argumento pode ser válido com premissas falsas e inválido com premissas verdadeiras." },
        },
        {
          t: "table",
          caption: "Regras de inferência válidas",
          head: ["Nome", "Forma", "Leitura"],
          rows: [
            ["Modus Ponens", "[(p→q) ∧ p] ⟹ q", "afirma o antecedente → conclui o consequente"],
            ["Modus Tollens", "[(p→q) ∧ ~q] ⟹ ~p", "nega o consequente → nega o antecedente"],
            ["Silogismo hipotético", "[(p→q) ∧ (q→r)] ⟹ (p→r)", "encadeamento de condicionais"],
            ["Silogismo disjuntivo", "[(p∨q) ∧ ~p] ⟹ q", "elimina uma opção da disjunção"],
          ],
        },
        {
          t: "keyvalue",
          title: "Silogismo categórico — a estrutura completa",
          rows: [
            { k: "Estrutura", v: "**premissa maior** (contém o termo maior) + **premissa menor** (contém o termo menor) → **conclusão**." },
            { k: "Os 3 termos", v: "**maior** = predicado da conclusão; **menor** = sujeito da conclusão; **médio** = aparece nas DUAS premissas e **desaparece na conclusão**." },
            { k: "Exemplo (PM)", v: "‘Todo policial usa farda’ (maior); ‘Sérgio é policial’ (menor); ∴ ‘Sérgio usa farda’. Termo médio: ‘policial’ — some na conclusão." },
          ],
        },
        {
          t: "keyvalue",
          title: "Outros conceitos de argumentação",
          rows: [
            { k: "Dedução", v: "do geral para o particular; conclusão **necessária** (se premissas V, conclusão V)." },
            { k: "Indução", v: "do particular para o geral; conclusão **provável**, não garantida." },
            { k: "Analogia", v: "conclui por **semelhança** entre casos: A e B compartilham x, y; A tem z; logo, B **provavelmente** tem z. Gera conclusão **provável**, não necessária." },
            { k: "Implicação lógica", v: "quando o condicional entre premissa e conclusão é **tautologia**." },
            { k: "Implicação × equivalência", v: "**implicação** (p ⟹ q) vai num só sentido; **equivalência** (p ⟺ q) é dupla: vale a ida e a volta (p→q e q→p)." },
            { k: "Inferência imediata", v: "decorre de UMA premissa só: **conversão** de I: ‘algum A é B’ ⟺ ‘algum B é A’; de E: ‘nenhum A é B’ ⟺ ‘nenhum B é A’." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **modus ponens** e **modus tollens**; (2) **validade × verdade**; (3) concluir se um argumento é **válido** (testar por tabela ou supondo premissas V e conclusão F); (4) **silogismo** categórico e disjuntivo.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "Cuidado com a **falácia da afirmação do consequente**: de ‘p→q’ e ‘q’ **NÃO** se conclui ‘p’ (inválido!). O válido é o contrário: **modus tollens** (de ‘p→q’ e ‘~q’ conclui-se ‘~p’). E argumento válido pode ter premissas **falsas** — validade ≠ verdade.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Premissas: ‘Se o alarme dispara, a equipe é acionada’ (p→q); ‘a equipe **não** foi acionada’ (~q). **Modus tollens** → conclui-se ‘o alarme **não** disparou’ (~p). Argumento válido.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**Para testar validade:** suponha todas as premissas **V** e a conclusão **F**. Se der **contradição**, o argumento é **VÁLIDO**; se for possível sem contradição, é **inválido**.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Argumentação",
          items: [
            "Argumento válido: premissas V → conclusão necessariamente V.",
            "Validade é forma; verdade é conteúdo (não confundir).",
            "Modus ponens: (p→q) e p ⟹ q.",
            "Modus tollens: (p→q) e ~q ⟹ ~p.",
            "Silogismo hipotético: (p→q) e (q→r) ⟹ (p→r).",
            "Dedução: conclusão necessária; indução: conclusão provável.",
            "Falácia da afirmação do consequente é inválida.",
            "Teste: premissas V + conclusão F → se der contradição, é válido.",
            "Silogismo categórico: termo médio some na conclusão.",
            "Analogia e indução dão conclusão provável; dedução, necessária.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Argumentação",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Das premissas “Se há flagrante, há prisão” e “Não houve prisão”, conclui-se validamente que:",
              options: [
                { key: "a", label: "houve flagrante." },
                { key: "b", label: "não houve flagrante." },
                { key: "c", label: "houve prisão." },
                { key: "d", label: "nada se pode concluir." },
                { key: "e", label: "houve flagrante e prisão." },
              ],
              correct: "b",
              comentario:
                "Letra B. Modus tollens: de (p→q) e ~q conclui-se ~p. Negado o consequente (não houve prisão), nega-se o antecedente (não houve flagrante).",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Um argumento pode ser válido mesmo que suas premissas sejam falsas, pois a validade depende da forma, não do conteúdo.",
              correct: "C",
              comentario:
                "CERTO. Validade é uma propriedade da estrutura do argumento: se a forma garante que premissas V levam a conclusão V, ele é válido — independentemente de as premissas serem, de fato, verdadeiras.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A regra de inferência “[(p→q) ∧ p] ⟹ q” é conhecida como:",
              options: [
                { key: "a", label: "modus tollens" },
                { key: "b", label: "modus ponens" },
                { key: "c", label: "silogismo disjuntivo" },
                { key: "d", label: "De Morgan" },
                { key: "e", label: "contraposição" },
              ],
              correct: "b",
              comentario:
                "Letra B. Afirmar o antecedente (p) de um condicional (p→q) permite concluir o consequente (q): modus ponens.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Dadas as premissas “Se chove, a operação é adiada” e “A operação NÃO foi adiada”, conclui-se validamente que:",
              options: [
                { key: "a", label: "Choveu." },
                { key: "b", label: "Não choveu." },
                { key: "c", label: "Talvez tenha chovido." },
                { key: "d", label: "A operação foi cancelada." },
                { key: "e", label: "Nada se pode concluir." },
              ],
              correct: "b",
              comentario:
                "Letra B. Negar o consequente de p→q permite negar o antecedente: modus tollens. Como a operação NÃO foi adiada (~q), conclui-se “não choveu” (~p).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Um argumento é considerado VÁLIDO quando:",
              options: [
                { key: "a", label: "todas as suas premissas são verdadeiras no mundo real" },
                { key: "b", label: "a conclusão é uma frase bonita" },
                { key: "c", label: "é impossível as premissas serem verdadeiras e a conclusão falsa" },
                { key: "d", label: "a conclusão é verdadeira, independentemente das premissas" },
                { key: "e", label: "possui muitas premissas" },
              ],
              correct: "c",
              comentario:
                "Letra C. A validade é uma propriedade da FORMA: um argumento é válido quando é impossível ter premissas verdadeiras e conclusão falsa. Validade ≠ verdade das premissas.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Um argumento pode ser válido mesmo que suas premissas sejam falsas, pois a validade depende da estrutura lógica, e não do conteúdo verdadeiro das premissas.",
              correct: "C",
              comentario:
                "CERTO. Validade é formal: se a estrutura garante que a conclusão decorre das premissas, o argumento é válido — ainda que as premissas sejam factualmente falsas. Argumento sólido = válido + premissas verdadeiras.",
            },
          ],
        },
        {
          t: "quiz",
          title: "🔁 Questões Cebraspe (Certo/Errado) · Argumentação — aprofundamento",
          questions: [
            {
              id: 7,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "No silogismo categórico “Todo policial usa farda; Sérgio é policial; logo, Sérgio usa farda”, o termo “policial” é o termo médio e, por isso, não aparece na conclusão.",
              correct: "C",
              comentario:
                "CERTO. O termo médio aparece nas duas premissas e liga os extremos, mas NUNCA figura na conclusão. Sujeito da conclusão (Sérgio) = termo menor; predicado (usa farda) = termo maior.",
            },
            {
              id: 8,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Um argumento por analogia, que conclui a partir de semelhanças entre casos, produz conclusão apenas provável, e não necessária.",
              correct: "C",
              comentario:
                "CERTO. A analogia raciocina do particular para o particular por semelhança: a conclusão é PROVÁVEL (como na indução), nunca necessária. Só a dedução garante a conclusão a partir das premissas.",
            },
          ],
        },
      ],
    },

    /* ============= DIAGRAMAS LÓGICOS ============= */
    {
      id: "diagramas",
      num: "05",
      kicker: "Lógica · conjuntos",
      icon: Layers,
      title: "Diagramas ==lógicos== (Euler-Venn)",
      lead: "Representar proposições categóricas com círculos. Os diagramas resolvem silogismos e questões de ‘todo/algum/nenhum’ de forma visual e segura.",
      blocks: [
        {
          t: "keyvalue",
          title: "As relações entre conjuntos",
          rows: [
            { k: "Todo A é B (inclusão)", v: "o círculo A fica **dentro** de B." },
            { k: "Nenhum A é B (exclusão)", v: "os círculos A e B **não se tocam**." },
            { k: "Algum A é B (interseção)", v: "os círculos **se cruzam** parcialmente." },
            { k: "Algum A não é B", v: "existe parte de A **fora** de B." },
            { k: "Problemas com 3 conjuntos", v: "três círculos criam **8 regiões**. Preencha **primeiro** as interseções dadas (‘todo’, ‘nenhum’), deixando os ‘alguns’ para o fim — eles não são exclusivos." },
            { k: "Fórmula da união (2 conjuntos)", v: "n(A ∪ B) = n(A) + n(B) − **n(A ∩ B)** — subtrai o que foi contado duas vezes." },
            { k: "União (3 conjuntos)", v: "n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) **+ n(A∩B∩C)**" },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) traduzir **‘todo/algum/nenhum’** em diagrama; (2) julgar se uma conclusão é **necessária** (vale em TODOS os desenhos possíveis) ou apenas **possível**; (3) resolver **silogismos** categóricos com Euler-Venn.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "Uma conclusão só é **verdadeira** se for válida em **todas** as configurações possíveis dos diagramas. Se existir **um único** desenho compatível com as premissas em que a conclusão falhe, ela **não** é necessária — e a banca marca como errada.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "‘Todo oficial é policial’ (oficial ⊂ policial) e ‘Alguns policiais fazem ronda’. Não se conclui que ‘algum oficial faz ronda’ — o desenho permite que os que fazem ronda não sejam oficiais. Conclusão **não necessária**.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**‘Todo’ = um círculo dentro do outro; ‘nenhum’ = círculos separados; ‘algum’ = círculos que se cruzam.** Teste a conclusão desenhando o **pior caso** possível: se ela ainda vale, é necessária.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Diagramas lógicos",
          items: [
            "Todo A é B → A dentro de B (inclusão).",
            "Nenhum A é B → círculos separados (exclusão).",
            "Algum A é B → círculos se cruzam (interseção).",
            "Algum A não é B → parte de A fora de B.",
            "Conclusão necessária vale em TODOS os diagramas possíveis.",
            "Se um desenho contraria a conclusão, ela não é necessária.",
            "Diagramas resolvem silogismos categóricos.",
            "Desenhe o ‘pior caso’ para testar a conclusão.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Diagramas lógicos",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Sabendo que “Todo sargento é militar” e “Nenhum militar é civil”, conclui-se necessariamente que:",
              options: [
                { key: "a", label: "Todo civil é sargento." },
                { key: "b", label: "Algum sargento é civil." },
                { key: "c", label: "Nenhum sargento é civil." },
                { key: "d", label: "Todo militar é sargento." },
                { key: "e", label: "Algum civil é militar." },
              ],
              correct: "c",
              comentario:
                "Letra C. Sargento ⊂ militar, e militar não intersecta civil; logo, sargento também não intersecta civil: nenhum sargento é civil. As demais não são necessárias.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Se “Todo policial é servidor público” e “Alguns servidores públicos são investigadores”, então necessariamente “algum policial é investigador”.",
              correct: "E",
              comentario:
                "ERRADO. É possível desenhar os investigadores fora do círculo dos policiais (ainda dentro de servidores). Como existe configuração em que a conclusão falha, ela não é necessária.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A afirmação “Algum A é B” é representada, em diagramas de Euler-Venn, por:",
              options: [
                { key: "a", label: "um círculo A totalmente dentro de B" },
                { key: "b", label: "dois círculos separados" },
                { key: "c", label: "dois círculos que se cruzam parcialmente" },
                { key: "d", label: "um único círculo" },
                { key: "e", label: "B totalmente dentro de A" },
              ],
              correct: "c",
              comentario:
                "Letra C. ‘Algum A é B’ indica interseção: os círculos se cruzam, havendo elementos comuns a A e B.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Considere: “Todo policial é servidor público” e “Nenhum servidor público é isento de responsabilidade”. Logo:",
              options: [
                { key: "a", label: "Algum policial é isento de responsabilidade." },
                { key: "b", label: "Nenhum policial é isento de responsabilidade." },
                { key: "c", label: "Todo servidor é policial." },
                { key: "d", label: "Alguns servidores são policiais isentos." },
                { key: "e", label: "Nada se pode concluir." },
              ],
              correct: "b",
              comentario:
                "Letra B. Se todo policial está dentro de ‘servidor público’ e nenhum servidor é isento, então nenhum policial é isento. Encadeamento de diagramas: o subconjunto herda a restrição do conjunto maior.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A afirmação “Todo A é B” é representada, em diagramas de Euler-Venn, por:",
              options: [
                { key: "a", label: "dois círculos totalmente separados" },
                { key: "b", label: "o círculo A inteiramente dentro do círculo B" },
                { key: "c", label: "o círculo B inteiramente dentro do círculo A" },
                { key: "d", label: "dois círculos que apenas se cruzam" },
                { key: "e", label: "um único círculo" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Todo A é B” = A é subconjunto de B: o círculo A fica inteiramente contido em B. Cuidado para não inverter (isso representaria “Todo B é A”).",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Da premissa “Algum A é B” pode-se concluir logicamente que “Algum B é A”.",
              correct: "C",
              comentario:
                "CERTO. A proposição particular afirmativa é conversível: se existe pelo menos um elemento comum a A e B, esse elemento também é comum a B e A. “Algum A é B” ⟺ “Algum B é A”.",
            },
          ],
        },
        {
          t: "quiz",
          title: "🔁 Questões Cebraspe (Certo/Errado) · Diagramas — aprofundamento",
          questions: [
            {
              id: 7,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Se “Alguns policiais são instrutores” e “Todo instrutor é aprovado no TAF”, então, necessariamente, “algum policial é aprovado no TAF”.",
              correct: "C",
              comentario:
                "CERTO. Os policiais-instrutores existem (interseção não vazia) e todo instrutor está dentro de ‘aprovados no TAF’ — logo, esses mesmos policiais são aprovados. Encadeamento: A∩B ≠ ∅ e B ⊂ C ⟹ A∩C ≠ ∅.",
            },
          ],
        },
      ],
    },

    /* ============= CONTAGEM E PROBABILIDADE ============= */
    {
      id: "contagem",
      num: "06",
      kicker: "Lógica · combinatória",
      icon: ScanSearch,
      title: "Contagem e ==probabilidade==",
      lead: "O princípio fundamental da contagem, permutações, arranjos e combinações — e a probabilidade como razão entre casos favoráveis e casos possíveis.",
      blocks: [
        {
          t: "table",
          caption: "Fórmulas de contagem",
          head: ["Técnica", "Fórmula", "Quando usar"],
          rows: [
            ["PFC (multiplicativo)", "n₁ × n₂ × ... × nₖ", "etapas sucessivas de escolha"],
            ["Permutação simples", "Pₙ = n!", "ordenar TODOS os n elementos"],
            ["Permutação c/ repetição", "n! / (a!·b!·...)", "elementos repetidos"],
            ["Arranjo", "A(n,p) = n! / (n−p)!", "escolher p de n, **a ordem importa**"],
            ["Arranjo c/ repetição", "AR = nᵖ", "p escolhas, cada uma com n opções (senha, placa)"],
            ["Combinação", "C(n,p) = n! / [p!·(n−p)!]", "escolher p de n, **a ordem NÃO importa**"],
            ["Permutação circular", "Pc = (n−1)!", "ordenar em CÍRCULO (mesa, roda): fixa um giro"],
            ["Propriedade da combinação", "C(n,p) = C(n, n−p)", "escolher p é o mesmo que deixar n−p de fora"],
            ["Triângulo de Pascal", "C(n,p) = C(n−1,p−1) + C(n−1,p)", "cada número = soma dos dois de cima; gera todos os C(n,p)"],
          ],
        },
        {
          t: "keyvalue",
          title: "Probabilidade — o essencial",
          rows: [
            { k: "Definição clássica", v: "P(A) = **casos favoráveis / casos possíveis** (espaço amostral equiprovável). Sempre entre 0 e 1." },
            { k: "União", v: "P(A ∪ B) = P(A) + P(B) − **P(A ∩ B)**." },
            { k: "Eventos mutuamente exclusivos", v: "P(A ∩ B) = 0 → P(A ∪ B) = P(A) + P(B)." },
            { k: "Eventos independentes", v: "P(A ∩ B) = **P(A) × P(B)**." },
            { k: "Probabilidade condicional", v: "P(A | B) = P(A ∩ B) / P(B)." },
            { k: "Complementar", v: "P(não A) = 1 − P(A)." },
            { k: "Probabilidade total", v: "P(B) = P(B|A₁)·P(A₁) + P(B|A₂)·P(A₂) + ... — soma os cenários que levam a B." },
            { k: "Bayes", v: "P(A|B) = [P(B|A) · P(A)] / P(B) — inverte a condição: *dado o efeito, qual a causa mais provável?*" },
            { k: "Binomial", v: "P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ — exatamente k sucessos em n provas independentes." },
            { k: "PFC aditivo", v: "tarefas **alternativas** se SOMAM: 3 vias para A + 2 para B = 5 maneiras (sem sobreposição)." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **arranjo × combinação** (a ordem importa?); (2) **PFC**; (3) **P = favoráveis/possíveis**; (4) **união** com interseção; (5) **independentes** (multiplica) × **condicional**. A pergunta-chave: *a ordem faz diferença?*",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**Arranjo** (ordem importa: senha, pódio, cargos distintos) × **Combinação** (ordem não importa: comissão, grupo, dupla). Trocar um pelo outro é o erro nº 1. E em ‘ou’ use **soma** (com −interseção); em ‘e’ de independentes, **multiplique**.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Formar uma **comissão** de 3 policiais dentre 8 (ordem não importa): **C(8,3)** = 8!/(3!5!) = 56. Já formar uma **escala** com comandante, sub e motorista (cargos distintos, ordem importa): **A(8,3)** = 8·7·6 = 336.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**‘A ordem importa?’ → SIM = Arranjo; NÃO = Combinação.** Comissão/grupo/dupla = combinação. Senha/pódio/cargos = arranjo. Probabilidade é sempre **favoráveis sobre possíveis**, resultado entre 0 e 1.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Contagem e probabilidade",
          items: [
            "PFC: multiplique as possibilidades de cada etapa.",
            "Permutação Pₙ = n! (ordenar todos).",
            "Arranjo A(n,p) = n!/(n−p)! → ordem importa.",
            "Combinação C(n,p) = n!/[p!(n−p)!] → ordem não importa.",
            "P(A) = casos favoráveis / casos possíveis (0 a 1).",
            "P(A∪B) = P(A)+P(B)−P(A∩B).",
            "Independentes: P(A∩B) = P(A)·P(B).",
            "Condicional: P(A|B) = P(A∩B)/P(B); complementar: 1−P(A).",
            "Circular: (n−1)! (mesa/roda); aditivo: etapas alternativas somam.",
            "C(n,p) = C(n, n−p): escolher 5 de 8 = escolher 3 de 8.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Contagem e probabilidade",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "De quantas maneiras se pode formar uma comissão de 3 policiais escolhidos entre 8?",
              options: [
                { key: "a", label: "24" },
                { key: "b", label: "56" },
                { key: "c", label: "120" },
                { key: "d", label: "336" },
                { key: "e", label: "512" },
              ],
              correct: "b",
              comentario:
                "Letra B. Comissão = grupo, ordem não importa → combinação: C(8,3) = 8!/(3!·5!) = 56. Se a ordem importasse (cargos), seria arranjo A(8,3) = 336.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Ao lançar um dado honesto, a probabilidade de sair um número par é 1/2.",
              correct: "C",
              comentario:
                "CERTO. Casos favoráveis (2, 4, 6) = 3; casos possíveis = 6. P = 3/6 = 1/2. Aplicação direta de favoráveis/possíveis.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Dois eventos independentes A e B têm P(A) = 0,4 e P(B) = 0,5. A probabilidade de ocorrerem os dois (A ∩ B) é:",
              options: [
                { key: "a", label: "0,9" },
                { key: "b", label: "0,1" },
                { key: "c", label: "0,2" },
                { key: "d", label: "0,45" },
                { key: "e", label: "0,7" },
              ],
              correct: "c",
              comentario:
                "Letra C. Para eventos independentes, P(A ∩ B) = P(A) × P(B) = 0,4 × 0,5 = 0,2.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "De quantas maneiras distintas 5 policiais podem ser dispostos em fila para uma foto?",
              options: [
                { key: "a", label: "25" },
                { key: "b", label: "60" },
                { key: "c", label: "120" },
                { key: "d", label: "5" },
                { key: "e", label: "3125" },
              ],
              correct: "c",
              comentario:
                "Letra C. Ordenar todos os 5 elementos é uma permutação: P₅ = 5! = 5×4×3×2×1 = 120.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "De um grupo de 6 agentes, quantas comissões de 2 podem ser formadas (a ordem não importa)?",
              options: [
                { key: "a", label: "12" },
                { key: "b", label: "30" },
                { key: "c", label: "15" },
                { key: "d", label: "36" },
                { key: "e", label: "720" },
              ],
              correct: "c",
              comentario:
                "Letra C. A ordem não importa → combinação: C(6,2) = 6!/(2!·4!) = (6×5)/2 = 15. Se a ordem importasse (arranjo), seriam 30.",
            },
            {
              id: 6,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Ao lançar um dado honesto, a probabilidade de sair um número par é:",
              options: [
                { key: "a", label: "1/6" },
                { key: "b", label: "1/2" },
                { key: "c", label: "1/3" },
                { key: "d", label: "2/3" },
                { key: "e", label: "1" },
              ],
              correct: "b",
              comentario:
                "Letra B. Casos favoráveis (2, 4, 6) = 3; casos possíveis = 6. P = 3/6 = 1/2 (definição clássica: favoráveis/possíveis).",
            },
          ],
        },
        {
          t: "quiz",
          title: "🔁 Questões Cebraspe (Certo/Errado) · Contagem — aprofundamento",
          questions: [
            {
              id: 7,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Cinco policiais serão dispostos ao redor de uma mesa circular. Como rotações da mesa não criam novos arranjos, o número de disposições distintas é 24.",
              correct: "C",
              comentario:
                "CERTO. Em permutação CIRCULAR, fixa-se um elemento como referência: Pc = (n−1)! = (5−1)! = 4! = 24. Se fosse em fila (linear), seria 5! = 120.",
            },
            {
              id: 8,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "O número de maneiras de escolher 5 policiais dentre 8 é igual ao número de maneiras de escolher 3 policiais dentre 8, pois C(n, p) = C(n, n−p).",
              correct: "C",
              comentario:
                "CERTO. Propriedade da combinação: escolher 5 para a patrulha equivale a escolher os 3 que ficam na base — C(8,5) = C(8,3) = 56.",
            },
            {
              id: 9,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "O teorema de Bayes permite calcular a probabilidade condicional P(A|B) a partir de P(B|A), P(A) e P(B).",
              correct: "C",
              comentario: "CERTO. Bayes: P(A|B) = [P(B|A) · P(A)] / P(B). Ele INVERTE a condição — de P(B|A) obtém-se P(A|B) — e é a base dos problemas do tipo ‘dado o efeito (o exame deu positivo), qual a probabilidade da causa?’, combinando-se com a probabilidade total.",
            },
            {
              id: 10,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "Se cada farol de uma ronda tem probabilidade 0,9 de funcionar, a probabilidade de exatamente 2 entre 3 funcionarem é 0,9².",
              correct: "E",
              comentario: "ERRADO. Faltam dois fatores da distribuição binomial: a COMBINAÇÃO de escolher quais 2 faróis funcionam e o fator de falha. P(X=2) = C(3,2) · 0,9² · 0,1¹ = 3 · 0,81 · 0,1 = 0,243.",
            },
          ],
        },
      ],
    },

    /* ============= ESTATÍSTICA: CONCEITOS, GRÁFICOS, PROBABILIDADE ============= */
    {
      id: "questoes",
      num: "07",
      kicker: "Hora de treinar de verdade",
      icon: ListChecks,
      title: "Simulado ==de Raciocínio Lógico==",
      lead: "Nove itens de lógica proposicional, quantificadores, argumentação, contagem e probabilidade, com predominância do estilo Instituto AOCP (múltipla escolha A–E). Responda sem consultar.",
      blocks: [
        {
          t: "quiz",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "A proposição “p ∧ ~p” é uma contradição, pois é falsa para quaisquer valores de p.",
              correct: "C",
              comentario:
                "CERTO. ‘p e não p’ nunca pode ser verdadeira → contradição.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "A negação de “Todo policial é corajoso” é:",
              options: [
                { key: "a", label: "Nenhum policial é corajoso." },
                { key: "b", label: "Todo policial é covarde." },
                { key: "c", label: "Pelo menos um policial não é corajoso." },
                { key: "d", label: "Algum policial é corajoso." },
                { key: "e", label: "Nenhum corajoso é policial." },
              ],
              correct: "c",
              comentario:
                "Letra C. Negar ‘todo A é B’ resulta em ‘algum/pelo menos um A não é B’.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Quantas senhas de 4 dígitos distintos podem ser formadas com os algarismos de 0 a 9?",
              options: [
                { key: "a", label: "5040" },
                { key: "b", label: "210" },
                { key: "c", label: "10000" },
                { key: "d", label: "24" },
                { key: "e", label: "720" },
              ],
              correct: "a",
              comentario:
                "Letra A. Ordem importa e dígitos distintos → arranjo A(10,4) = 10·9·8·7 = 5040.",
            },
            {
              id: 4,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Ao lançar dois dados honestos, a probabilidade de a soma ser 7 é:",
              options: [
                { key: "a", label: "1/6" },
                { key: "b", label: "1/12" },
                { key: "c", label: "5/36" },
                { key: "d", label: "1/9" },
                { key: "e", label: "7/36" },
              ],
              correct: "a",
              comentario:
                "Letra A. Há 6 pares que somam 7 (1-6, 2-5, 3-4, 4-3, 5-2, 6-1) em 36 possíveis: 6/36 = 1/6.",
            },
            {
              id: 7,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "A equivalência (contrapositiva) de “Se A, então B” é:",
              options: [
                { key: "a", label: "Se B, então A." },
                { key: "b", label: "Se não A, então não B." },
                { key: "c", label: "Se não B, então não A." },
                { key: "d", label: "A e não B." },
                { key: "e", label: "Não A ou não B." },
              ],
              correct: "c",
              comentario:
                "Letra C. A contrapositiva de p→q é ~q→~p, logicamente equivalente à original.",
            },
            {
              id: 9,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Um argumento é considerado VÁLIDO quando:",
              options: [
                { key: "a", label: "todas as suas premissas são verdadeiras." },
                { key: "b", label: "a conclusão é verdadeira no mundo real." },
                { key: "c", label: "sendo as premissas verdadeiras, a conclusão é necessariamente verdadeira." },
                { key: "d", label: "possui exatamente duas premissas." },
                { key: "e", label: "a conclusão contradiz as premissas." },
              ],
              correct: "c",
              comentario:
                "Letra C. Validade é a garantia estrutural de que premissas verdadeiras conduzem a uma conclusão verdadeira. Independe de as premissas serem, de fato, verdadeiras.",
            },
            {
              id: 11,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "Se dois eventos são mutuamente exclusivos, a probabilidade de sua interseção é zero.",
              correct: "C",
              comentario:
                "CERTO. Eventos mutuamente exclusivos não ocorrem juntos: P(A ∩ B) = 0, e P(A ∪ B) = P(A) + P(B).",
            },
            {
              id: 13,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A negação de “Todos os agentes usam colete” é:",
              options: [
                { key: "a", label: "Nenhum agente usa colete." },
                { key: "b", label: "Pelo menos um agente não usa colete." },
                { key: "c", label: "Todos os agentes não usam colete." },
                { key: "d", label: "Alguns agentes usam colete." },
                { key: "e", label: "Se é agente, usa colete." },
              ],
              correct: "b",
              comentario:
                "Letra B. A negação de “Todo A é B” é “Existe pelo menos um A que não é B”: pelo menos um agente não usa colete. Basta um contraexemplo.",
            },
            {
              id: 14,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Uma senha é formada por 3 algarismos distintos escolhidos de 0 a 9. Quantas senhas são possíveis?",
              options: [
                { key: "a", label: "1000" },
                { key: "b", label: "720" },
                { key: "c", label: "120" },
                { key: "d", label: "30" },
                { key: "e", label: "27" },
              ],
              correct: "b",
              comentario:
                "Letra B. A ordem importa e não há repetição → arranjo: A(10,3) = 10×9×8 = 720. Se pudesse repetir algarismos, seriam 10³ = 1000.",
            },

          ],
        },
      ],
    },

    /* ==================== RESUMO ==================== */
    {
      id: "resumo-rlm",
      num: "08",
      kicker: "Revisão final · leia na véspera",
      icon: BookOpenCheck,
      title: "Resumo ==de véspera== — Lógica",
      lead: "O essencial do Raciocínio Lógico em duas listas: o que costuma ser verdadeiro e as armadilhas que mais derrubam candidatos.",
      blocks: [
        {
          t: "list",
          variant: "check",
          title: "Regras que costumam ser CERTAS",
          items: [
            "Condicional p→q só é falso em V→F.",
            "Tabela-verdade tem 2ⁿ linhas; tautologia é sempre V e contradição é sempre F.",
            "~(p→q) = p ∧ ~q; De Morgan troca E↔OU negando tudo.",
            "Contrapositiva: “Se A, então B” equivale a “Se não B, então não A”.",
            "Negar “todo A é B” = “algum A não é B”; negar “algum” = “nenhum”.",
            "Argumento válido é aquele cuja conclusão decorre necessariamente das premissas.",
            "Arranjo (ordem importa) × Combinação (ordem não importa).",
            "P = casos favoráveis / casos possíveis; eventos independentes multiplicam.",
          ],
        },
        {
          t: "list",
          variant: "x",
          title: "Armadilhas que são quase sempre ERRADAS",
          items: [
            "Achar que F→qualquer coisa é falso (é verdadeiro!).",
            "Negar “todo” como “nenhum” (o certo é “algum não”).",
            "Concluir p a partir de (p→q) e q (afirmação do consequente — inválido).",
            "Confundir validade do argumento com verdade das premissas.",
            "Trocar arranjo por combinação (e vice-versa).",
            "Somar probabilidades de eventos não exclusivos sem subtrair a interseção.",
            "Ler o diagrama de Euler-Venn supondo interseção que o enunciado não afirmou.",
          ],
        },
        {
          t: "callout",
          variant: "macete",
          title: "para fechar",
          text: "Se sobrar 5 minutos: revise a **tabela do condicional**, **De Morgan**, **negação de quantificadores** e **arranjo × combinação**. São os pontos mais recorrentes da disciplina.",
        },
      ],
    },
  ],
};
