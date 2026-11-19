(function(){
const root=document.getElementById("mendel");
root.innerHTML=String.raw`

<h2>Mendel e le leggi dell'ereditarietà</h2>
  <div class="section-rule"></div>
  <div class="bridge">
    <h3>Il tassello mancante di Darwin</h3>
    <p>La selezione naturale ha bisogno di variazioni <b>ereditabili</b>, ma Darwin non sapeva come si trasmettessero i caratteri. Ai suoi tempi prevaleva l'idea dell'<b>eredità per mescolanza</b>: i caratteri dei genitori si fonderebbero nei figli come due colori di vernice.</p>
    <p>Nel 1867 l'ingegnere Fleeming Jenkin ne trasse un'obiezione pesante: se i caratteri si mescolano, una variazione vantaggiosa si diluisce in poche generazioni, prima che la selezione possa agire. Darwin tentò di rispondere con la teoria della <b>pangenesi</b> (1868), che si rivelò sbagliata.</p>
    <p style="margin-bottom:0">La risposta esisteva già: nel 1866 Gregor Mendel aveva mostrato che i caratteri si trasmettono come <b>unità discrete</b> che non si mescolano. Una variante recessiva può restare nascosta per generazioni senza andare perduta. Darwin non conobbe mai quel lavoro. Solo con la <b>sintesi moderna</b> (anni '30–'40 del Novecento: Fisher, Haldane, Wright, Dobzhansky, Mayr) genetica mendeliana e selezione naturale si unirono in un'unica teoria.</p>
  </div>

<div class="m-tabs" id="tabs">
  <button data-go="m-intro" class="act">Le basi</button>
  <button data-go="m-l1">1ª legge</button>
  <button data-go="m-l2">2ª legge</button>
  <button data-go="m-l3">3ª legge</button>
  <button data-go="m-lab">Laboratorio</button>
  <button data-go="m-oltre">Oltre Mendel</button>
  <button data-go="m-quiz">Verifica</button>
</div>

<!-- ============ INTRO ============ -->
<div class="m-sec" id="m-intro">
  <div class="kicker">Prima di cominciare</div>
  <h2 style="font-size:1.4rem">Un monaco, un orto, 28.000 piante</h2>
  <p>Tra il 1856 e il 1863, nel giardino del monastero di Brno, <b>Gregor Mendel</b> coltivò e incrociò migliaia di piante di pisello (<i>Pisum sativum</i>). Pubblicò i risultati nel 1866, ma nessuno ne capì la portata: furono riscoperti solo nel 1900, da tre botanici indipendenti (de Vries, Correns e Tschermak).</p>
  <p>La sua idea rivoluzionaria: i caratteri non si “mescolano” come colori di vernice. Si trasmettono come <b>unità discrete</b> (oggi le chiamiamo <b>geni</b>) che passano intatte da una generazione all'altra.</p>

  <div class="card">
    <h3 style="margin-top:0">Perché proprio il pisello?</h3>
    <p style="margin:0">Cresce in fretta e fa molti semi; ha caratteri con due sole forme ben distinguibili (seme giallo o verde, liscio o rugoso…); di solito si autoimpollina, ma Mendel poteva controllare gli incroci togliendo gli stami e trasportando il polline a mano. E partì da <b>linee pure</b>: piante che, per generazioni, davano sempre figli identici a sé.</p>
  </div>

  <h3>I semi che useremo</h3>
  <div class="row" style="gap:22px;margin:12px 0" id="seedLegend"></div>

  <h3>Le parole chiave</h3>
  <div class="gloss">
    <div><b>Gene</b>Tratto di DNA che controlla un carattere (es. il colore del seme).</div>
    <div><b>Allele</b>Ciascuna delle versioni di un gene. Qui: <span class="al D">G</span> giallo, <span class="al r">g</span> verde. Per la forma: <span class="al D">L</span> liscio, <span class="al r">l</span> rugoso.</div>
    <div><b>Dominante / recessivo</b>Se ci sono entrambi gli alleli, si vede solo quello dominante (maiuscola). Il recessivo (minuscola) si vede solo in doppia copia.</div>
    <div><b>Genotipo</b>La coppia di alleli posseduta: <span class="geno"><span class="al D">G</span><span class="al r">g</span></span>.</div>
    <div><b>Fenotipo</b>L'aspetto visibile: “seme giallo”.</div>
    <div><b>Omozigote</b>Due alleli uguali: <span class="geno"><span class="al D">G</span><span class="al D">G</span></span> oppure <span class="geno"><span class="al r">g</span><span class="al r">g</span></span>.</div>
    <div><b>Eterozigote (ibrido)</b>Due alleli diversi: <span class="geno"><span class="al D">G</span><span class="al r">g</span></span>.</div>
    <div><b>P, F1, F2</b>Generazione parentale, prima e seconda generazione filiale.</div>
  </div>
  <div class="note"><b>L'idea di fondo.</b> Ogni individuo ha <b>due</b> alleli per ogni gene (uno dal padre, uno dalla madre), ma ne mette <b>uno solo</b> in ciascun gamete. Tutte e tre le leggi discendono da qui.</div>
</div>

<!-- ============ LEGGE 1 ============ -->
<div class="m-sec" id="m-l1">
  <div class="kicker">Prima legge</div>
  <h2 style="font-size:1.4rem">Legge della dominanza</h2>
  <div class="law"><b>Uniformità degli ibridi</b>Incrociando due linee pure che differiscono per un carattere, tutti i figli della F1 sono uguali tra loro e mostrano il carattere dominante.</div>

  <div class="stage" id="stage1">
    <div class="gen">Generazione P · linee pure</div>
    <div class="row">
      <div class="ind" data-p1a></div>
      <span class="cross">×</span>
      <div class="ind" data-p1b></div>
    </div>
    <div class="arrow st" data-step="1">↓</div>
    <div class="gen st" data-step="1">Gameti</div>
    <div class="row">
      <div class="st" data-step="1"><span class="gam"><span class="al D">G</span></span></div>
      <span class="st cross" data-step="1" style="font-size:16px">+</span>
      <div class="st" data-step="1"><span class="gam"><span class="al r">g</span></span></div>
    </div>
    <div class="arrow st" data-step="2">↓</div>
    <div class="gen st" data-step="2">F1 · tutti ibridi</div>
    <div class="row" id="f1row"></div>
    <div class="caption" id="cap1">Premi “Avvia” per incrociare le due linee pure.</div>
    <div class="btnrow" style="justify-content:center"><button class="btn" id="play1">▶ Avvia l'incrocio</button></div>
  </div>

  <p>Il verde non è sparito: è <b>nascosto</b>. Ogni pianta F1 porta l'allele <span class="al r">g</span>, ma accanto a <span class="al D">G</span> non si esprime. Mendel chiamò “dominante” il carattere che compare nella F1 e “recessivo” quello che scompare.</p>
  <div class="note"><b>Attenzione:</b> “dominante” non vuol dire “più frequente” né “migliore”. Indica solo quale fenotipo si vede nell'eterozigote.</div>
</div>

<!-- ============ LEGGE 2 ============ -->
<div class="m-sec" id="m-l2">
  <div class="kicker">Seconda legge</div>
  <h2 style="font-size:1.4rem">Legge della segregazione</h2>
  <div class="law"><b>I due alleli si separano</b>Nella formazione dei gameti i due alleli di un gene si separano: ogni gamete ne riceve uno solo, con la stessa probabilità. Per questo, nella F2, il carattere recessivo ricompare in circa ¼ dei figli.</div>

  <p>Mendel lasciò che le piante F1 si autoimpollinassero: <span class="geno"><span class="al D">G</span><span class="al r">g</span></span> × <span class="geno"><span class="al D">G</span><span class="al r">g</span></span>. Guarda cosa succede.</p>

  <div class="stage" id="stage2">
    <div class="gen">F1 × F1</div>
    <div class="row">
      <div class="ind" data-p2a></div>
      <span class="cross">×</span>
      <div class="ind" data-p2b></div>
    </div>
    <div class="gen st" data-step="1">Ogni pianta produce due tipi di gameti, al 50%</div>
    <div class="row st" data-step="1" style="gap:26px">
      <div><span class="gam"><span class="al D">G</span></span> <span class="gam"><span class="al r">g</span></span></div>
      <div><span class="gam"><span class="al D">G</span></span> <span class="gam"><span class="al r">g</span></span></div>
    </div>
    <div class="gen st" data-step="2">Quadrato di Punnett: tutte le combinazioni possibili</div>
    <table class="pun st" data-step="2" id="pun2">
      <tr><th class="corner">♂ \ ♀</th><th data-c="0"><span class="al D">G</span></th><th data-c="1"><span class="al r">g</span></th></tr>
      <tr><th data-r="0"><span class="al D">G</span></th><td data-cell="0-0"></td><td data-cell="0-1"></td></tr>
      <tr><th data-r="1"><span class="al r">g</span></th><td data-cell="1-0"></td><td data-cell="1-1"></td></tr>
    </table>
    <div class="st" data-step="7">
      <div class="ratio">3 gialli : 1 verde</div>
      <div class="small">Genotipi: 1 <span class="geno"><span class="al D">G</span><span class="al D">G</span></span> : 2 <span class="geno"><span class="al D">G</span><span class="al r">g</span></span> : 1 <span class="geno"><span class="al r">g</span><span class="al r">g</span></span></div>
    </div>
    <div class="caption" id="cap2">Premi “Avvia” per seguire la formazione dei gameti.</div>
    <div class="btnrow" style="justify-content:center"><button class="btn" id="play2">▶ Avvia</button></div>
  </div>

  <h3>Il caso fa le sue parti: prova tu</h3>
  <p>Il 3:1 è una <b>probabilità</b>, non una garanzia. Con pochi figli i numeri ballano; con tanti si avvicinano al rapporto atteso. Semina piselli dall'incrocio <span class="geno"><span class="al D">G</span><span class="al r">g</span></span> × <span class="geno"><span class="al D">G</span><span class="al r">g</span></span>:</p>
  <div class="card">
    <div class="btnrow">
      <button class="btn" data-sim="1">+1</button>
      <button class="btn" data-sim="10">+10</button>
      <button class="btn" data-sim="100">+100</button>
      <button class="btn" data-sim="1000">+1000</button>
      <button class="btn ghost" data-sim="0">Azzera</button>
    </div>
    <div class="pod" id="pod"></div>
    <div class="stats">
      <div class="stat"><div class="n" id="sY">0</div><div class="l">gialli</div></div>
      <div class="stat"><div class="n" id="sG">0</div><div class="l">verdi</div></div>
      <div class="stat"><div class="n" id="sR">–</div><div class="l">rapporto gialli : verdi</div></div>
    </div>
    <div class="small">Fenotipi osservati</div>
    <div class="bar" id="barP"><div style="width:50%;background:var(--Y)"></div><div style="width:50%;background:var(--G)"></div></div>
    <div class="small">Atteso: 75% · 25%</div>
    <div class="bar"><div style="width:75%;background:var(--Y);opacity:.55">75%</div><div style="width:25%;background:var(--G);opacity:.55">25%</div></div>
    <div class="small" style="margin-top:8px">Genotipi: <span id="sGeno">–</span></div>
  </div>

  <div class="note"><b>I dati veri di Mendel.</b> Colore del seme: 6.022 gialli e 2.001 verdi (3,01 : 1). Forma del seme: 5.474 lisci e 1.850 rugosi (2,96 : 1). Con migliaia di semi, il caso si “appiana”.</div>
</div>

<!-- ============ LEGGE 3 ============ -->
<div class="m-sec" id="m-l3">
  <div class="kicker">Terza legge</div>
  <h2 style="font-size:1.4rem">Legge dell'assortimento indipendente</h2>
  <div class="law"><b>Geni diversi viaggiano separati</b>Quando si considerano due (o più) caratteri, gli alleli di un gene si distribuiscono nei gameti indipendentemente da quelli dell'altro gene.</div>

  <p>Aggiungiamo un secondo carattere: la <b>forma</b> del seme, liscio <span class="al D">L</span> (dominante) o rugoso <span class="al r">l</span>. Una pianta doppio eterozigote <span class="geno"><span class="al D">G</span><span class="al r">g</span><span class="al D">L</span><span class="al r">l</span></span> che gameti produce?</p>

  <h3>Il perché: la meiosi</h3>
  <p>I due geni stanno su cromosomi diversi. Nella meiosi, ogni coppia di cromosomi omologhi si allinea al centro della cellula <b>a caso</b>, indipendentemente dalle altre coppie. Premi più volte e osserva.</p>
  <div class="stage" id="meiosis">
    <svg viewBox="0 0 340 210" id="msvg"></svg>
    <div class="caption" id="capM">Una cellula <b>GgLl</b> sta per dividersi.</div>
    <div class="btnrow" style="justify-content:center">
      <button class="btn" id="playM">▶ Una meiosi</button>
      <button class="btn ghost" id="fastM">×100</button>
      <button class="btn ghost" id="resetM">Azzera</button>
    </div>
    <div class="tally" id="tally"></div>
    <div class="small" style="margin-top:6px" id="tallyN">Gameti prodotti: 0</div>
  </div>
  <p>I quattro tipi di gameti — <b>GL, Gl, gL, gl</b> — si formano ciascuno nel 25% dei casi. Se i due geni fossero “legati” usciremmo solo con GL e gl.</p>

  <h3>L'incrocio diibrido: 16 combinazioni</h3>
  <p>Incrociando due piante <span class="geno"><span class="al D">G</span><span class="al r">g</span><span class="al D">L</span><span class="al r">l</span></span>, i 4 gameti × 4 gameti danno un quadrato di 16 caselle. Tocca una categoria per evidenziarla.</p>
  <div class="stage" style="padding:12px 4px">
    <div style="overflow-x:auto"><table class="pun big" id="pun3"></table></div>
    <div class="legend" id="legend3"></div>
    <div class="ratio">9 : 3 : 3 : 1</div>
    <div class="btnrow" style="justify-content:center"><button class="btn" id="play3">▶ Riempi il quadrato</button></div>
  </div>

  <div class="card">
    <h3 style="margin-top:0">Simula un raccolto diibrido</h3>
    <div class="btnrow">
      <button class="btn" data-sim3="16">+16</button>
      <button class="btn" data-sim3="556">+556 (come Mendel)</button>
      <button class="btn" data-sim3="5000">+5000</button>
      <button class="btn ghost" data-sim3="0">Azzera</button>
    </div>
    <table class="data" id="tab3"></table>
    <div class="small">Mendel, nel 1866, ottenne da questo incrocio 556 semi: 315 gialli lisci, 101 gialli rugosi, 108 verdi lisci, 32 verdi rugosi. Molto vicino a 9:3:3:1.</div>
  </div>

  <div class="note"><b>Il limite della terza legge.</b> Vale per geni su cromosomi diversi (o molto distanti sullo stesso cromosoma). Geni vicini tendono a essere ereditati insieme: è l'<b>associazione</b> (<em>linkage</em>), scoperta da Thomas H. Morgan nei moscerini della frutta.</div>
</div>

<!-- ============ LAB ============ -->
<div class="m-sec" id="m-lab">
  <div class="kicker">Laboratorio</div>
  <h2 style="font-size:1.4rem">Costruisci il tuo incrocio</h2>
  <p>Scegli il genotipo dei due genitori per il colore del seme e guarda i figli attesi.</p>
  <div class="stage">
    <div class="labpick">
      <div><span class="lbl">Genitore 1</span><div class="seg" id="segA"></div></div>
      <span class="cross">×</span>
      <div><span class="lbl">Genitore 2</span><div class="seg" id="segB"></div></div>
    </div>
    <div class="row" id="labParents"></div>
    <table class="pun" id="punLab"></table>
    <div class="stats" id="labStats"></div>
    <div class="caption" id="labCap"></div>
  </div>

  <div class="card">
    <h3 style="margin-top:0">Il reincrocio (<em>test cross</em>)</h3>
    <p>Hai un pisello giallo: è <span class="geno"><span class="al D">G</span><span class="al D">G</span></span> o <span class="geno"><span class="al D">G</span><span class="al r">g</span></span>? A vederlo non si capisce. Mendel lo incrociava con un omozigote recessivo <span class="geno"><span class="al r">g</span><span class="al r">g</span></span>:</p>
    <p style="margin:0">• se <b>tutti</b> i figli sono gialli → era <b>GG</b><br>• se circa <b>metà</b> sono verdi → era <b>Gg</b></p>
    <div class="btnrow"><button class="btn ghost" data-tc="GG">Prova con GG × gg</button><button class="btn ghost" data-tc="Gg">Prova con Gg × gg</button></div>
  </div>
</div>

<!-- ============ OLTRE ============ -->
<div class="m-sec" id="m-oltre">
  <div class="kicker">Oltre Mendel</div>
  <h2 style="font-size:1.4rem">Quando le cose si complicano</h2>
  <p>Le leggi di Mendel descrivono il caso più semplice: un gene, due alleli, dominanza completa, geni indipendenti. La realtà ha molte eccezioni, che però si spiegano tutte partendo dal suo modello.</p>
  <div class="grid2">
    <div class="card"><h4>Dominanza incompleta</h4><p>L'eterozigote ha un fenotipo intermedio. Bocca di leone rossa × bianca → F1 tutta <b>rosa</b>. In F2: 1 rossa : 2 rosa : 1 bianca. Gli alleli non si mescolano: il bianco e il rosso ricompaiono.</p></div>
    <div class="card"><h4>Codominanza</h4><p>Entrambi gli alleli si esprimono pienamente. Nei gruppi sanguigni, chi ha gli alleli A e B è di gruppo <b>AB</b>.</p></div>
    <div class="card"><h4>Allelia multipla</h4><p>Nella popolazione esistono più di due alleli per lo stesso gene (sistema AB0: A, B, 0), anche se ogni individuo ne porta solo due.</p></div>
    <div class="card"><h4>Geni associati</h4><p>Geni vicini sullo stesso cromosoma non si assortiscono in modo indipendente: violano la terza legge, salvo quando il <em>crossing-over</em> li separa.</p></div>
    <div class="card"><h4>Eredità poligenica</h4><p>Statura, colore della pelle: molti geni con piccoli effetti sommati producono una variazione continua, non due classi nette.</p></div>
    <div class="card"><h4>Eredità legata al sesso</h4><p>Geni sul cromosoma X (es. daltonismo, emofilia) si manifestano con frequenze diverse nei maschi e nelle femmine.</p></div>
  </div>
  <div class="note"><b>Nota storica.</b> Mendel non formulò “tre leggi” numerate: la suddivisione nasce dopo la riscoperta del 1900 ed è una sistemazione didattica. Molti testi accorpano la prima nella seconda.</div>
</div>

<!-- ============ QUIZ ============ -->
<div class="m-sec" id="m-quiz">
  <div class="kicker">Verifica</div>
  <h2 style="font-size:1.4rem">Hai capito?</h2>
  <div id="qz"></div>
  <div id="score"></div>
</div>

<p class="m-foot">Simulazioni basate su estrazioni casuali: ogni volta i numeri cambiano, come in un vero orto. Dati storici da G. Mendel, <i>Versuche über Pflanzen-Hybriden</i> (1866).</p>
`;

const C={Y:'#EDC340',Yd:'#B98F12',G:'#82B34F',Gd:'#4C7A27'};
function pea(yellow,smooth=true,s=40){
  const f=yellow?C.Y:C.G,d=yellow?C.Yd:C.Gd;let sh;
  if(smooth){sh=`<circle cx="20" cy="20" r="16" fill="${f}" stroke="${d}" stroke-width="1.5"/>`}
  else{let p=[];for(let i=0;i<60;i++){const a=i/60*2*Math.PI;const r=15.2*(1+.08*Math.sin(7*a)+.045*Math.sin(13*a+1.3));p.push((20+r*Math.cos(a)).toFixed(1)+','+(20+r*Math.sin(a)).toFixed(1))}
    sh=`<polygon points="${p.join(' ')}" fill="${f}" stroke="${d}" stroke-width="1.5" stroke-linejoin="round"/><path d="M13 24 Q18 20 16 14 M22 29 Q26 22 24 15 M27 25 Q31 21 29 17" fill="none" stroke="${d}" stroke-width="1" opacity=".55"/>`}
  return `<svg class="pea" viewBox="0 0 40 40" width="${s}" height="${s}" aria-hidden="true">${sh}<ellipse cx="14" cy="13" rx="5" ry="3" fill="#fff" opacity=".45" transform="rotate(-30 14 13)"/></svg>`;
}
const al=a=>`<span class="al a${a}">${a}</span>`;
document.querySelectorAll('#mendel .al').forEach(e=>e.className='al a'+e.textContent.trim());
const geno=s=>`<span class="geno">${[...s].map(al).join('')}</span>`;
const sortG=(a,b)=>(a===a.toUpperCase()?a+b:b+a); // dominante prima
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

/* legenda semi */
$('#seedLegend').innerHTML=[[1,1,'Giallo liscio'],[0,1,'Verde liscio'],[1,0,'Giallo rugoso'],[0,0,'Verde rugoso']].map(([y,s,t])=>`<div class="ind">${pea(y,s,46)}<span>${t}</span></div>`).join('');

/* nav */
$$('#tabs button').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.go).scrollIntoView({behavior:'smooth'}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){$$('#tabs button').forEach(b=>b.classList.toggle('act',b.dataset.go===e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
$$('#mendel .m-sec').forEach(s=>io.observe(s));

/* sequencer */
function sequence(stage,steps,capEl){
  let timers=[];return ()=>{timers.forEach(clearTimeout);timers=[];
    stage.querySelectorAll('.st').forEach(e=>e.classList.remove('on'));
    steps.forEach((s,i)=>timers.push(setTimeout(()=>{if(s.step!=null)stage.querySelectorAll(`[data-step="${s.step}"]`).forEach(e=>e.classList.add('on'));s.fn&&s.fn();if(s.cap)capEl.innerHTML=s.cap},s.t)));
  };
}

/* ---- Legge 1 ---- */
$('[data-p1a]').innerHTML=pea(1,1,54)+geno('GG')+'<span>giallo puro</span>';
$('[data-p1b]').innerHTML=pea(0,1,54)+geno('gg')+'<span>verde puro</span>';
$('#f1row').innerHTML=[0,1,2,3].map(i=>`<div class="ind st" data-step="${3+i}">${pea(1,1,44)}${geno('Gg')}</div>`).join('');
$('#play1').onclick=sequence($('#stage1'),[
  {t:0,cap:'Due linee pure: una dà sempre semi gialli, l\'altra sempre verdi.'},
  {t:900,step:1,cap:'Ogni genitore omozigote può dare <b>un solo tipo</b> di gamete: G oppure g.'},
  {t:2100,step:2,cap:'La fecondazione unisce un G e un g…'},
  {t:2800,step:3},{t:3100,step:4},{t:3400,step:5},{t:3700,step:6,cap:'…e <b>tutti</b> i figli sono <b>Gg</b> e gialli. Il verde sembra scomparso.'}
],$('#cap1'));

/* ---- Legge 2 ---- */
$('[data-p2a]').innerHTML=pea(1,1,50)+geno('Gg');
$('[data-p2b]').innerHTML=pea(1,1,50)+geno('Gg');
const cells2=[['0-0','GG'],['0-1','Gg'],['1-0','Gg'],['1-1','gg']];
function fillCell(id,g){const td=$(`#pun2 [data-cell="${id}"]`);td.innerHTML=`<div class="in pop">${pea(g!=='gg',1,34)}<span class="gt">${geno(g)}</span></div>`;
  $$('#pun2 th').forEach(t=>t.classList.remove('hl'));const [r,c]=id.split('-');$(`#pun2 th[data-r="${r}"]`).classList.add('hl');$(`#pun2 th[data-c="${c}"]`).classList.add('hl');}
const play2=sequence($('#stage2'),[
  {t:0,fn:()=>$$('#pun2 td').forEach(t=>t.innerHTML=''),cap:'Due ibridi F1, entrambi gialli ma portatori di g.'},
  {t:900,step:1,cap:'<b>Segregazione:</b> i due alleli si separano. Metà dei gameti porta G, metà porta g.'},
  {t:2300,step:2,cap:'Mettiamo i gameti maschili sulle righe e quelli femminili sulle colonne.'},
  {t:3200,fn:()=>fillCell('0-0','GG'),cap:'G + G → <b>GG</b>: giallo.'},
  {t:4200,fn:()=>fillCell('0-1','Gg'),cap:'G + g → <b>Gg</b>: giallo (domina G).'},
  {t:5200,fn:()=>fillCell('1-0','Gg'),cap:'g + G → <b>Gg</b>: giallo.'},
  {t:6200,fn:()=>fillCell('1-1','gg'),cap:'g + g → <b>gg</b>: <b>verde!</b> Il recessivo ricompare.'},
  {t:7300,step:7,fn:()=>$$('#pun2 th').forEach(t=>t.classList.remove('hl')),cap:'Tre caselle su quattro gialle, una verde: <b>3:1</b>.'}
],$('#cap2'));
$('#play2').onclick=play2;

/* sim monoibrido */
let m={GG:0,Gg:0,gg:0},recent=[];
const pick=()=>Math.random()<.5?'G':'g';
function simMono(n){
  if(n===0){m={GG:0,Gg:0,gg:0};recent=[]}
  for(let i=0;i<n;i++){const g=sortG(pick(),pick());m[g]++;recent.push(g!=='gg');}
  recent=recent.slice(-48);
  const y=m.GG+m.Gg,v=m.gg,t=y+v;
  $('#sY').textContent=y.toLocaleString('it');$('#sG').textContent=v.toLocaleString('it');
  $('#sR').textContent=v?(y/v).toFixed(2).replace('.',',')+' : 1':(t?'∞':'–');
  const py=t?y/t*100:50;const b=$('#barP').children;
  b[0].style.width=py+'%';b[0].textContent=t?py.toFixed(1).replace('.',',')+'%':'';b[1].style.width=(100-py)+'%';b[1].textContent=t?(100-py).toFixed(1).replace('.',',')+'%':'';
  $('#sGeno').innerHTML=t?`GG ${m.GG} · Gg ${m.Gg} · gg ${m.gg}`:'–';
  $('#pod').innerHTML=recent.map((yy,i)=>`<span class="${i>=recent.length-Math.min(n,48)?'pop':''}" style="display:inline-block">${pea(yy,1,18)}</span>`).join('');
}
$$('[data-sim]').forEach(b=>b.onclick=()=>simMono(+b.dataset.sim));
simMono(0);

/* ---- Meiosi ---- */
const msvg=$('#msvg');
function chrom(id,x,y,h,label,color,dom){
  return `<g class="mv" id="${id}" style="transform:translate(${x}px,${y}px)">
    <rect x="-6" y="${-h/2}" width="12" height="${h}" rx="6" fill="#E8DFCF" stroke="#A89C86" stroke-width="1.2"/>
    <rect x="-6" y="-6" width="12" height="12" fill="${color}"/>
    <text x="0" y="${-h/2-6}" text-anchor="middle" font-family="Inter" font-weight="700" font-size="14" fill="${({G:'#7A5C05',g:'#355D17',L:'#4E3A86',l:'#6F5FA0'})[label]}">${label}</text></g>`;
}
function drawCell(){
  msvg.innerHTML=`
  <g class="mv" id="cellL" style="transform:translate(0px,0)"><ellipse cx="170" cy="110" rx="78" ry="88" fill="#FFF8E8" stroke="#D2C4A6" stroke-width="2"/></g>
  <g class="mv" id="cellR" style="transform:translate(0px,0)"><ellipse cx="170" cy="110" rx="78" ry="88" fill="#FFF8E8" stroke="#D2C4A6" stroke-width="2" opacity=".85"/></g>
  <line x1="170" y1="28" x2="170" y2="192" stroke="#C9BCA2" stroke-dasharray="4 4" id="eq"/>
  ${chrom('cG',156,82,52,'G',C.Y,1)}${chrom('cg',184,82,52,'g',C.G,0)}
  ${chrom('cL',156,152,36,'L','#9C86C9',1)}${chrom('cl',184,152,36,'l','#D7CCEA',0)}`;
}
const tal={GL:0,Gl:0,gL:0,gl:0};
function drawTally(){const tot=tal.GL+tal.Gl+tal.gL+tal.gl;
  $('#tally').innerHTML=['GL','Gl','gL','gl'].map(k=>{const p=tot?tal[k]/tot:0;return `<div class="t"><div class="vb"><i style="height:${p*100*1.6}%"></i></div><b>${geno(k)}</b><div class="p">${tot?(p*100).toFixed(0)+'%':'–'}</div></div>`}).join('');
  $('#tallyN').textContent='Gameti prodotti: '+tot.toLocaleString('it')+(tot?' · atteso 25% ciascuno':'');}
let mBusy=false;
function setT(id,x,y){$('#'+id).style.transform=`translate(${x}px,${y}px)`}
function meiosis(){
  if(mBusy)return;mBusy=true;
  drawCell();$('#capM').innerHTML='Metafase I: le coppie di omologhi si allineano all\'equatore…';
  const flip=Math.random()<.5;
  setTimeout(()=>{
    if(flip){setT('cL',184,152);setT('cl',156,152);$('#capM').innerHTML='…la coppia L/l si è orientata al contrario: <b>è un caso</b>, come lanciare una moneta.'}
    else $('#capM').innerHTML='…la coppia L/l ha lo stesso orientamento della coppia G/g.';
  },700);
  setTimeout(()=>{
    $('#eq').style.opacity=0;
    setT('cellL',-82,0);setT('cellR',82,0);
    setT('cG',74,82);setT('cg',266,82);
    setT(flip?'cl':'cL',74,152);setT(flip?'cL':'cl',266,152);
  },1900);
  setTimeout(()=>{
    const a=flip?'Gl':'GL',b=flip?'gL':'gl';tal[a]+=2;tal[b]+=2;drawTally();
    $('#capM').innerHTML=`Si formano gameti <b>${a}</b> e <b>${b}</b>. Ripeti: prima o poi uscirà ${flip?'l\'altra combinazione (GL e gl)':'anche Gl e gL'}.`;mBusy=false;
  },2900);
}
$('#playM').onclick=meiosis;
$('#fastM').onclick=()=>{for(let i=0;i<100;i++){const f=Math.random()<.5;if(f){tal.Gl+=2;tal.gL+=2}else{tal.GL+=2;tal.gl+=2}}drawTally();$('#capM').innerHTML='100 meiosi in un colpo: le quattro combinazioni tendono al 25%.'};
$('#resetM').onclick=()=>{Object.keys(tal).forEach(k=>tal[k]=0);drawTally();drawCell();$('#capM').innerHTML='Una cellula <b>GgLl</b> sta per dividersi.'};
drawCell();drawTally();

/* ---- Punnett diibrido ---- */
const gam=['GL','Gl','gL','gl'];
const cls=g=>{const y=g.includes('G'),s=g.includes('L');return (y?'Y':'V')+(s?'L':'R')};
const names={YL:'Giallo liscio',YR:'Giallo rugoso',VL:'Verde liscio',VR:'Verde rugoso'};
function geno2(a,b){return sortG(a[0],b[0])+sortG(a[1],b[1])}
let h='<tr><th class="corner">♂ \\ ♀</th>'+gam.map(g=>`<th>${geno(g)}</th>`).join('')+'</tr>';
gam.forEach((r,i)=>{h+=`<tr><th>${geno(r)}</th>`;gam.forEach((c,j)=>{const g=geno2(r,c);h+=`<td data-k="${cls(g)}" data-g="${g}" data-i="${i*4+j}"></td>`});h+='</tr>'});
$('#pun3').innerHTML=h;
function fill3(td){const g=td.dataset.g;td.innerHTML=`<div class="in pop">${pea(g.includes('G'),g.includes('L'),28)}<span class="gt" style="font-size:10.5px">${g}</span></div>`}
$$('#pun3 td').forEach(fill3);
$('#legend3').innerHTML=['YL','YR','VL','VR'].map(k=>`<button data-k="${k}">${pea(k[0]==='Y',k[1]==='L',28)}<span>${names[k]}</span><span class="cnt">${$$('#pun3 td[data-k="'+k+'"]').length}</span></button>`).join('');
$$('#legend3 button').forEach(b=>b.onclick=()=>{const on=!b.classList.contains('sel');$$('#legend3 button').forEach(x=>x.classList.remove('sel'));
  $$('#pun3 td').forEach(td=>{td.classList.remove('dim','hi');if(on){td.classList.add(td.dataset.k===b.dataset.k?'hi':'dim')}});if(on)b.classList.add('sel')});
$('#play3').onclick=()=>{const tds=$$('#pun3 td');tds.forEach(t=>{t.innerHTML='';t.classList.remove('dim','hi')});$$('#legend3 button').forEach(x=>x.classList.remove('sel'));tds.forEach((t,i)=>setTimeout(()=>fill3(t),150*i))};

/* sim diibrido */
let d={YL:0,YR:0,VL:0,VR:0};
function simDi(n){if(n===0)d={YL:0,YR:0,VL:0,VR:0};
  for(let i=0;i<n;i++){const a=gam[Math.random()*4|0],b=gam[Math.random()*4|0];d[cls(geno2(a,b))]++}
  const t=d.YL+d.YR+d.VL+d.VR,exp={YL:9,YR:3,VL:3,VR:1},mend={YL:315,YR:101,VL:108,VR:32};
  $('#tab3').innerHTML='<tr><th>Fenotipo</th><th>Tuoi semi</th><th>%</th><th>Atteso</th><th>Mendel</th></tr>'+
   ['YL','YR','VL','VR'].map(k=>`<tr><td><span style="display:inline-flex;align-items:center;gap:6px">${pea(k[0]==='Y',k[1]==='L',22)}${names[k]}</span></td><td>${d[k]}</td><td>${t?(d[k]/t*100).toFixed(1).replace('.',','):'–'}</td><td>${(exp[k]/16*100).toFixed(1).replace('.',',')}</td><td>${mend[k]}</td></tr>`).join('')+
   `<tr><td><b>Totale</b></td><td><b>${t}</b></td><td></td><td>${exp.YL}:${exp.YR}:${exp.VL}:${exp.VR}</td><td>556</td></tr>`;
}
$$('[data-sim3]').forEach(b=>b.onclick=()=>simDi(+b.dataset.sim3));simDi(0);

/* ---- Lab ---- */
let A='Gg',B='Gg';const opts=['GG','Gg','gg'];
function seg(el,cur,set){el.innerHTML=opts.map(o=>`<button class="${o===cur?'sel':''}" data-o="${o}">${o}</button>`).join('');el.querySelectorAll('button').forEach(b=>b.onclick=()=>{set(b.dataset.o);renderLab()})}
function renderLab(){
  seg($('#segA'),A,v=>A=v);seg($('#segB'),B,v=>B=v);
  $('#labParents').innerHTML=`<div class="ind">${pea(A!=='gg',1,44)}${geno(A)}</div><span class="cross">×</span><div class="ind">${pea(B!=='gg',1,44)}${geno(B)}</div>`;
  const a=[...A],b=[...B];let html=`<tr><th class="corner">1 \\ 2</th>${b.map(x=>`<th>${al(x)}</th>`).join('')}</tr>`;const cnt={GG:0,Gg:0,gg:0};
  a.forEach(x=>{html+=`<tr><th>${al(x)}</th>`;b.forEach(y=>{const g=sortG(x,y);cnt[g]++;html+=`<td><div class="in pop">${pea(g!=='gg',1,32)}<span class="gt">${geno(g)}</span></div></td>`});html+='</tr>'});
  $('#punLab').innerHTML=html;
  const y=(cnt.GG+cnt.Gg)/4*100;
  $('#labStats').innerHTML=`<div class="stat"><div class="n">${y}%</div><div class="l">gialli</div></div><div class="stat"><div class="n">${100-y}%</div><div class="l">verdi</div></div><div class="stat"><div class="n" style="font-size:17px">${cnt.GG}:${cnt.Gg}:${cnt.gg}</div><div class="l">GG : Gg : gg</div></div>`;
  let c='';
  if(A===B&&A!=='Gg')c='Due omozigoti uguali: linea pura, i figli sono identici ai genitori.';
  else if((A==='GG'&&B==='gg')||(A==='gg'&&B==='GG'))c='È l\'incrocio della <b>prima legge</b>: F1 tutta Gg e gialla.';
  else if(A==='Gg'&&B==='Gg')c='È l\'incrocio della <b>seconda legge</b>: 3 gialli : 1 verde.';
  else if(A==='gg'||B==='gg')c='È un <b>reincrocio</b>: con un eterozigote si ottiene 1 giallo : 1 verde.';
  else c='Con almeno un genitore GG, tutti i figli ricevono una G: sono tutti gialli, anche se alcuni sono portatori di g.';
  $('#labCap').innerHTML=c;
}
renderLab();
$$('[data-tc]').forEach(b=>b.onclick=()=>{A=b.dataset.tc;B='gg';renderLab();$('#m-lab').scrollIntoView({behavior:'smooth'})});

/* ---- Quiz ---- */
const Q=[
 ['Incroci una linea pura a fiori viola (dominante) con una a fiori bianchi. Come sarà la F1?',['Metà viola, metà bianchi','Tutti viola','Tutti di un colore intermedio','3 viola : 1 bianco'],1,'Prima legge: gli ibridi F1 sono tutti uguali e mostrano il carattere dominante.'],
 ['Da Gg × Gg, quale frazione dei figli è omozigote recessiva?',['1/2','3/4','1/4','Nessuna'],2,'Nel quadrato di Punnett, solo una casella su quattro è gg.'],
 ['Tra i figli gialli di Gg × Gg, quanti sono eterozigoti?',['1/3','2/3','1/2','3/4'],1,'I gialli sono GG, Gg, Gg: due su tre sono eterozigoti. Domanda insidiosa: la base sono i gialli, non tutti i figli.'],
 ['Per sapere se un pisello giallo è GG o Gg lo incroci con…',['un altro giallo','un gg','un GG','se stesso, una sola volta'],1,'Reincrocio: con gg, un GG dà solo gialli, un Gg dà circa metà verdi.'],
 ['Su quale processo cellulare si basa la terza legge?',['Mitosi','Fecondazione','Orientamento casuale degli omologhi nella meiosi I','Replicazione del DNA'],2,'Ogni coppia di omologhi si orienta indipendentemente dalle altre: da qui l\'assortimento indipendente.'],
 ['Nell\'incrocio GgLl × GgLl, quale frazione dei semi è verde e rugosa?',['1/16','3/16','9/16','1/4'],0,'Serve ggll: probabilità 1/4 × 1/4 = 1/16.']
];
let score=0,answered=0;
$('#qz').innerHTML=Q.map((q,i)=>`<div class="q" id="q${i}"><div class="qt">${i+1}. ${q[0]}</div><div class="opts">${q[1].map((o,j)=>`<button data-q="${i}" data-a="${j}">${o}</button>`).join('')}</div><div class="fb">${q[3]}</div></div>`).join('');
$$('#qz button').forEach(b=>b.onclick=()=>{const i=+b.dataset.q,box=$('#q'+i);if(box.classList.contains('done'))return;box.classList.add('done');
  const ok=+b.dataset.a===Q[i][2];b.classList.add(ok?'ok':'no');box.querySelectorAll('button')[Q[i][2]].classList.add('ok');if(ok)score++;answered++;
  if(answered===Q.length)$('#score').textContent=`Risultato: ${score} su ${Q.length}`;});

})();
