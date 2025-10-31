import React, { useEffect, useRef } from "react";
import "../styles/rules.css";
import cayo from "../assets/cayo-perico.png";

const TOC = [
  { id: "intro", title: "Úvod" },
  { id: "zakladni", title: "Základní pojmy & RP příkazy" },
  { id: "pkck", title: "PK / CK (kompletně)" },
  { id: "heists", title: "Pravidla vykrádání" },
  { id: "failrp", title: "FailRP" },
  { id: "at", title: "Komunikace s AT" },
  { id: "general", title: "Obecná pravidla" },
  { id: "girl", title: "Girl Hunt / Obtěžování" },
  { id: "atapd", title: "ATA PD" },
  { id: "pvp", title: "PvP pravidla" },
  { id: "random", title: "Random looting" },
  { id: "bunny", title: "Bunny Hopping" },
  { id: "housing", title: "Bydlení" },
  { id: "factions", title: "Frakce" },
  { id: "cayo", title: "Cayo Perico" },
  { id: "other", title: "Další informace" },
];

export default function Rules() {
  const mainRef = useRef(null);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".rules-toc a"));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = "#" + e.target.id;
          const link = links.find((l) => l.getAttribute("href") === id);
          if (!link) return;
          if (e.isIntersecting) link.classList.add("active");
          else link.classList.remove("active");
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="rules-page">
      <aside className="rules-toc">
        <h2>Pravidla</h2>
        <nav>
          {TOC.map((s) => (
            <a key={s.id} href={"#" + s.id}>
              {s.title}
            </a>
          ))}
        </nav>
      </aside>

      <main className="rules-main" ref={mainRef}>
        {/* HERO */}
        <div className="hero">
          <h1>Pravidla ElevateRP</h1>
          <p>Kompletní pravidla komunity — čtěte pečlivě, neznalost neomlouvá.</p>
        </div>

        {/* ZÁKLADNÍ POJMY */}
        <section id="zakladni" className="rule-card fade-in">
          <CardHead title="Základní pojmy & RP příkazy" />
          <div className="card-grid">
            <Card title="RP (Roleplay)">
              <P>Hraní za fiktivní postavu ve smyšleném herním světě.</P>
              <P>
                Jedná se o simulaci reálného života, takže v RP reagujeme na
                situace tak, jako v běžném životě.
              </P>
            </Card>

            <Card title="OOC (Out Of Character)">
              <P>Komunikace mezi hráči mimo roleplay.</P>
              <P>Situace, kdy řešíte věci mimo hru.</P>
              <P>Informace získané mimo herní svět RP nelze využít v IC (Metagaming).</P>
            </Card>

            <Card title="IC (In Character)">
              <P>Komunikace v rámci RP. Výměna informací mezi postavami v rámci RP.</P>
            </Card>

            <Card title="/ME">
              <P>
                Popisuje aktivitu postavy, nahrazuje animace, které nelze vykonat pomocí
                herní mechaniky.
              </P>
              <H4>Příklady správného užití</H4>
              <List>
                <li>/me Vytahuje ID kartu z peněženky</li>
                <li>/me otevírá okno</li>
              </List>
            </Card>

            <Card title="/DO">
              <P>
                Popis vykonání činnosti, možnost použití jako otázku, na kterou hráč musí
                odpovědět.
              </P>
              <P>Do /do se nesmí lhát. Do /do je zakázáno psát myšlenky a pocity.</P>
              <H4>Příklady správného užití</H4>
              <List>
                <li>/me dává osobě dýchnout (osoba 1)</li>
                <li>/do nadýchal? (osoba 1)</li>
                <li>/do Ano, půl promile (osoba 2)</li>
              </List>
            </Card>

            <Card title="/TRY">
              <P>
                Herní příkaz, který slouží k náhodnému vygenerování odpovědi ANO/NE + text.
                Slouží pouze k rozvinutí RP. /try nesmíte použít v rámci Passive RP.
              </P>
              <H4>Příklady správného/špatného užití</H4>
              <List>
                <li>Hráč 1: /do Prosakuje obvaz? → Hráč 2: /try</li>
                <li>Špatně: Hráč: /do je auto pojízdné → Hráč: /try</li>
              </List>
            </Card>

            <Card title="/STAV">
              <P>Herní příkaz pro nastavení stavu postavy. Nelze RPit myšlenky.</P>
              <H4>Příklady</H4>
              <List>
                <li>Správně: /stav má obvázané koleno</li>
                <li>Špatně: /stav je zamyšlený, /stav má špatnou náladu</li>
              </List>
            </Card>

            <Card title="Lokální chat (OOC ve hře)">
              <P>
                Slouží pouze pro důležité informace — neslouží ke komunikaci a nadávkám!
              </P>
              <H4>Častá použití</H4>
              <List>
                <li>L-OOC: Povolujete Gross RP?</li>
                <li>L-OOC: CK – Jméno a příjmení</li>
              </List>
            </Card>

            <Card title="KOS">
              <P>
                Zabití na první pohled (Kill On Sight), bez jakékoliv předešlé RP akce či
                interakce s danou osobou.
              </P>
            </Card>

            <Card title="VDM (Vehicle Deathmatch)">
              <P>Úmyslné narážení do okolních vozidel a objektů (hráčů).</P>
            </Card>

            <Card title="Ninja Jacking">
              <P>
                Ukradnutí cizího vozidla bez jakéhokoli RP důvodu a interakce. K ukradení
                auta je nutná smysluplná interakce – např. použití zbraně.
              </P>
            </Card>

            <Card title="Metagaming">
              <P>
                Zneužití informací z OOC do IC. Je zakázáno využívat informace, které vaše
                postava neví a nemá se k nim jak dostat (např. po CK).
              </P>
              <P>
                Je zakázáno přenášet informace mezi postavami v rámci multicharu (ban).
                Nabádání k MG je také zakázané (ban).
              </P>
              <H4>Příklady</H4>
              <List>
                <li>
                  Napíšeš kamarádovi na Discord místo, kde tě unesla nelegální organizace
                  a pošleš jejich vysílačku, aby se napojil.
                </li>
                <li>Z callu zjistíš, že kamarád je na policejní stanici, a pojedeš za ním.</li>
              </List>
            </Card>

            <Card title="Mixing">
              <P>Zakázáno spojovat IC a OOC. Výrazy z reálného světa/Discordu do IC nepatří.</P>
              <H4>Příklady</H4>
              <List>
                <li>„admin to vyřeší“</li>
                <li>„svalem mezerník to uděláš“</li>
                <li>
                  místo „napíšu si support ticket…“ řekne „zkusím napsat dopis městu…“
                </li>
              </List>
            </Card>

            <Card title="NVL (Not Valuing your Life)">
              <P>Nevážení si vlastního života postavy.</P>
            </Card>

            <Card title="Cop Baiting">
              <P>Zakázáno bezdůvodně provokovat státní složky nebo je urážet bez důvodu.</P>
            </Card>

            <Card title="NonRP Injuries">
              <P>
                Musíš adekvátně RPit zdravotní stav dle zranění. Střelná zranění se RPí až
                po skončení přestřelky.
              </P>
            </Card>

            <Card title="NonRP Driving">
              <P>
                Řiď tak, aby vozidlo nedělalo věci, které by v realitě nebyly reálné
                vzhledem k typu (např. rally auto v těžkém offroadu).
              </P>
            </Card>

            <Card title="FearRP">
              <P>
                RP strachu v dané situaci. Vztahuje se i na ztrátu zaměstnání, vozidla atd.
                Nedodržování je FailRP.
              </P>
            </Card>

            <Card title="GrossRP">
              <P>Nechutné RP – mučení, znásilnění, nucený sex apod.</P>
              <List>
                <li>Každý má právo akci kdykoli zastavit.</li>
                <li>
                  Potřeba povolení všech zúčastněných (u nelegálních frakcí automaticky
                  schváleno, sexuální podnět je na schválení).
                </li>
                <li>
                  Kdokoli nový, kdo do akce přijde, musí také souhlasit. Nesouhlas ⇒ ihned
                  stop.
                </li>
                <li>Nelze tvořit trvalé následky (useknutí končetin apod.). Výjimka u CK.</li>
              </List>
            </Card>

            <Card title="AssPulling">
              <P>
                Zakázáno vytahovat velké zbraně/předměty „z ničeho“. Dlouhá zbraň či velký
                objekt musí být viditelný (záda, ruka, auto).
              </P>
              <H4>Příklady</H4>
              <List>
                <li>Špatně: vytáhne z kapsy brokovnici/samopal.</li>
                <li>Správně: <code>/me</code> sahá do kufru a vytahuje pušku.</li>
                <li>
                  Můžeš použít <code>/připnout</code> / <code>/odepnout</code> a poté{" "}
                  <code>/reloadchar</code> pro odstranění ze zad.
                </li>
              </List>
            </Card>

            <Card title="CombatLog">
              <P>Odpojení z probíhající RP akce kvůli obcházení trestu nebo následků.</P>
            </Card>

            <Card title="Combat comeback">
              <P>
                Návrat do probíhající RP akce, které ses účastnil a byl jsi v ní postřelen
                (death screen) — Zakázáno.
              </P>
              <P>
                Veškerá zranění vyžadují ošetření a následnou rekonvalescenci – doba nutná
                k dokončení probíhající akce.
              </P>
            </Card>

            <Card title="Powergaming">
              <P>Nereálné úkony/schopnosti, které nelze vykonat v reálném životě.</P>
              <List>
                <li>Zákaz RP GPS lokátorů a sdílení polohy na DC.</li>
                <li>Zvedání nepřiměřeně těžkých věcí (auto, kamion apod.).</li>
                <li>„Superhrdinské“ schopnosti.</li>
                <li>Létání s helikoptérou bez pilotního průkazu.</li>
                <li>Zamykání vozidla v dead screenu.</li>
                <li>
                  „Jen tak“ odtáhnout auto bez RP – správně: otevřít dveře, vyndat osoby,
                  až poté odtáhnout.
                </li>
              </List>
            </Card>

            <Card title="Passive RP">
              <P>
                Ber, že na veřejných místech jsou další lidé (zejména ve dne). V budovách
                státních/ozbrojených složek jsou vždy lidé – nelze využít otevřených dveří
                ve svůj prospěch.
              </P>
            </Card>

            <Card title="Inventář">
              <P>Vše, co máš v inventáři, má tvoje postava u sebe.</P>
            </Card>

            <Card title="Water Evading">
              <P>
                Úmyslný útěk do oceánu za účelem vyhnout se PD je zakázán. Povolené jsou
                menší vodní plochy (řeka/jezero) v rámci logiky RP.
              </P>
            </Card>

            <Card title="Peace Time">
              <P>
                Období vyhlašované pouze AT. Všechny nelegální aktivity jsou zakázané. Co
                se stane v PT, se nepočítá do RP.
              </P>
            </Card>

            <Card title="Pravidlo Multicharu">
              <P>
                Můžeš mít více postav, ale nesmí sdílet informace, peníze ani majetek.
                Každá postava má vlastní lore a nesmí se IC ovlivňovat/znát.
              </P>
              <List>
                <li>Zakázáno: být zároveň u PD a v cartelu.</li>
                <li>
                  Zakázáno: jedna jednotná postava ve 2 státních složkách (např. EMS a PD).
                </li>
              </List>
            </Card>

            <Card title="Stream Sniping / Pravidla pro streamery">
              <P>
                Využívání informací ze streamů jiných hráčů je zakázáno. Nesmíš streamovat
                nebo natáčet řešení s A-teamem ani ticket na Discordu.
              </P>
            </Card>
          </div>
        </section>

        {/* PK / CK */}
        <section id="pkck" className="rule-card fade-in">
          <CardHead title="PK / CK (kompletně)" />
          <div className="card-grid">
            <Card title="PK (Player Kill)">
              <P>Na serveru se pravidlo PK nenachází, ale lze ho provést v rámci RP.</P>
              <P>
                Platí pouze, když strana udělující PK napíše do L-OOC „FULL PK“. Pokud to
                neučiní, FULL PK neplatí.
              </P>
              <H4>Příklad</H4>
              <P>
                Úder pažbou do hlavy → bezvědomí → L-OOC „FULL PK“ → po probuzení si
                pamatuješ jen části (přízvuk, masky, přibližné dění).
              </P>
            </Card>

            <Card title="CK (Character Kill)">
              <P>
                Trvalá smrt/odchod z města. Postava i její majetek jsou smazány. Po CK
                nesmíš přenášet informace na novou postavu.
              </P>
              <List>
                <li>Po udělení CK je hráč povinen postavu smazat z výběru postav.</li>
                <li>
                  Zakázáno: před CK odkázat majetek nebo přepisovat na druhou postavu
                  (PERMABAN).
                </li>
                <li>
                  Zakázáno: hrát postavu, která znala tvou zemřelou (např. sourozenec).
                </li>
              </List>
            </Card>

            <Card title="Druhy CK">
              <List>
                <li>CK schvalované A-teamem</li>
                <li>Self-CK (hráč si uzná sám — musí být vážný důvod)</li>
                <li>Jail CK (pouze LSPD/LSSD)</li>
                <li>Interní CK (pro nelegální frakce)</li>
              </List>
            </Card>

            <Card title="CK schvalované A-teamem">
              <List>
                <li>Zvaž, že hráč do postavy investoval čas.</li>
                <li>Nelze CK použít k získání majetku jiné osoby.</li>
                <li>
                  V ticketu dodej: důvod, IC jméno postavy, místo zanechání těla (screen).
                </li>
                <li>
                  Nelegální frakce mohou žádat o CK na ozbrojené složky — ne na hodnost
                  seržant a výše.
                </li>
                <li>Po udělení: L-OOC „CK – Jméno postavy (CK Erik White)“</li>
              </List>
            </Card>

            <Card title="Self-CK">
              <P>Čistě na kvalitě RP hráče, musí být vážný důvod (např. těžká nehoda).</P>
              <P>Hráč si může uznat CK dle závažnosti zranění.</P>
            </Card>

            <Card title="Jail CK">
              <P>Omezeno na počet let (minuty).</P>
              <List>
                <li>0–11 měsíců = 1 minuta</li>
                <li>1 rok = 2 minuty</li>
                <li>2 roky = 4 minuty</li>
              </List>
              <P>
                Po dosažení 180 min / 90 let nebo při závažném TČ (např. mnohonásobná
                vražda) státní složka založí ticket se spisem.
              </P>
              <P>Tresty se sčítají.</P>
            </Card>

            <Card title="Interní CK (pouze ILEGAL)">
              <List>
                <li>Boss a vybraní lidé mají automaticky povolené CK na svých členech.</li>
                <li>Důvody: nekvalitní RP, porušení interních pravidel frakce.</li>
                <li>
                  Boss je povinen přiložit screen zaerpeného CK + důvod do frakčního
                  ticketu.
                </li>
                <li>Hráč se může odvolat u AT.</li>
                <li>Po CK nelze 7 dní zpět do stejné frakce.</li>
              </List>
            </Card>
          </div>
        </section>

        {/* HEISTS */}
        <section id="heists" className="rule-card fade-in">
          <CardHead title="Pravidla vykrádání" />
          <div className="card-body">
            <List>
              <li>
                Obě strany vyjednávají podmínky během vykrádání. Maximální výkupné za
                všechny rukojmí je <b>50 000$</b>.
              </li>
              <li>Vykrádající nesmí klást nesmyslné požadavky (letadlo, Lamborghini apod.).</li>
              <li>Unesená osoba musí být uvnitř objektu. Nelze RPit NPC jako rukojmí.</li>
              <li>
                PD jedná přiměřeně, může povolat SWAT v rámci „Hostage situation“ a vniknout
                k záchraně rukojmí.
              </li>
              <li>K vykrádání hlavní banky je nutný ticket.</li>
              <li>Při vykrádání nesmí být více vykrádajících než PD.</li>
              <li>
                Všichni vykrádající musí být uvnitř objektu (obchod, malá banka). PD nesmí
                pokládat ostnaté pásy přímo před výjezd.
              </li>
            </List>
          </div>
        </section>

        {/* FAILRP */}
        <section id="failrp" className="rule-card fade-in">
          <CardHead title="FailRP" />
          <div className="card-body">
            <P>
              Jakékoliv porušení pravidel a výrazné narušení RP akce. Jednání, které by v
              reálném světě nebylo možné/nebo nedává smysl. Hráč je povinen držet se lore
              své postavy.
            </P>
            <H4>Příklady</H4>
            <List>
              <li>Jsi EMS, ale děláš traffic stopy jako PD.</li>
              <li>Jezdíš hodiny po mapě a hledáš hráče.</li>
              <li>Odmítáš spolupracovat a spamuješ nesmysly, abys znechutil scénu.</li>
              <li>Ignorace RP interakcí.</li>
            </List>
          </div>
        </section>

        {/* AT */}
        <section id="at" className="rule-card fade-in">
          <CardHead title="Komunikace s AT" />
          <div className="card-body">
            <List>
              <li>
                Zákaz bezdůvodně psát adminům do soukromých zpráv (unban apod.). Na to
                slouží ticket — admin má na odpověď 24 h.
              </li>
              <li>
                Zákaz urážení a dohadování se s AT. Admin rozhodne o skipu akce/délce banu.
              </li>
            </List>
          </div>
        </section>

        {/* OBECNÁ PRAVIDLA */}
        <section id="general" className="rule-card fade-in">
          <CardHead title="Obecná pravidla" />
          <div className="card-body">
            <List>
              <li>Na serveru se používá Kalifornský zákoník.</li>
              <li>Jakékoliv bugy/cheaty/exploity jsou zakázány a trestány banem.</li>
              <li>Co je v inventáři, to má postava u sebe.</li>
              <li>
                Při honičce s policií je zakázáno uložit vozidlo do garáže či opustit hru
                do 15 min od ukončení RP akce (úspěšného ujetí).
              </li>
              <li>
                Zákaz N-wordů a zakázaných slov; povoleno pouze: <b>Nigga</b>.
              </li>
              <li>
                RPit střel do vesty lze pouze do doby, než osoba zemře — po deadscreenu už
                ne.
              </li>
              <li>Safezony nejsou — platí pravidlo Passive.</li>
              <li>Zákaz použití G signálu na nelegálních lokacích (drog lokace, BM…).</li>
              <li>
                Drž se původního lore postavy; zásadní změny musí dávat smysl (policista → cartel
                jen po dlouhodobém smysluplném RP). Zákaz zneužívání znalostí mezi rolemi.
              </li>
              <li>Únos za účelem nuceného sběru drog/předělů je zakázán.</li>
              <li>
                Přísně zakázáno vykrádat frakční sklady státních složek (EMS/LSPD/LSSD/SAND).
              </li>
              <li>Státní složky nemají přístup na black market (EMS/LSPD/LSSD/SAND).</li>
              <li>
                Zakázáno streamovat/zaznamenávat rozhovor s adminem (video/audio).
              </li>
              <li>
                Zakázáno vydávat se za státní složku (platí i pro oblečení) — EMS/LSPD/LSSD/SAND.
              </li>
              <li>Bugy, které nejsou ve tvůj prospěch, se „erpí“ (nehraješ je, nahlásíš).</li>
              <li>
                V ticketech udržuj slušnost — jinak může být ignorován/uzamčen.
              </li>
              <li>
                Traffic Stop: PD bez důvodu nesmí prohledávat osobu/vozidlo. Zastavený hráč
                nesmí zabít policistu (střelba až krajní možnost).
              </li>
              <li>Zákaz bezdůvodné střelby z helikoptéry i na helikoptéru.</li>
              <li>Hráči s troll jmény budou smazáni.</li>
              <li>Slavná jména jen po schválení A-teamem.</li>
              <li>Zákaz zabíjet za účelem lootu.</li>
              <li>Zákaz vulgarismů/nesmyslů v /ad (reklama).</li>
              <li>
                Únos státních složek pouze po schválení v TICKETU A-teamem — jinak nesmí být
                proveden.
              </li>
              <li>
                Pokud nejsi ve státní složce, je zakázáno mít zbraně typu: fm1-pistol, Fm1,
                Fm2.
              </li>
              <li>Zákaz střelby z vozidla nad 60 MPH pro řidiče.</li>
              <li>
                Pokud bylo během RP porušeno mnoho pravidel, admin může akci pozastavit a
                řešit.
              </li>
              <li>
                Admin může zapnout TAG a řešit report; při TAGu se chovej slušně (nestřílej,
                neurážej, nepokračuj v RP).
              </li>
            </List>
          </div>
        </section>

        {/* GIRL HUNT */}
        <section id="girl" className="rule-card fade-in">
          <CardHead title="Pravidlo Girl Hunt / Obtěžování žen" />
          <div className="card-body">
            <P>Zakázané chování zahrnuje zejména:</P>
            <List>
              <li>Nadměrné/opakované obtěžování</li>
              <li>Nevhodné či sexuálně laděné narážky a poznámky</li>
              <li>Nevyžádané pokusy o sexuální RP</li>
              <li>Jakékoliv sexistické, urážlivé či nevhodné chování</li>
            </List>
            <P>
              <b>Trest:</b> bez výjimky a <b>bez varování</b> — BAN.
            </P>
          </div>
        </section>

        {/* ATA PD */}
        <section id="atapd" className="rule-card fade-in">
          <CardHead title="ATA PD" />
          <div className="card-body">
            <List>
              <li>
                Akce s PD, kde se střílelo a jsi v dead screenu a nejsou EMS/nerespondují →
                bere se, že místní doktor poskytl první pomoc (respawn do nemocnice).
              </li>
              <li>
                Po respawnu je postava v péči nemocnice, připoutaná a pod dohledem PD —
                nemůže samovolně odejít.
              </li>
              <li>Vyčkej 10 minut, zda přijede PD. Pokud ne, napiš 911 s časem a místem.</li>
            </List>
          </div>
        </section>

        {/* PVP */}
        <section id="pvp" className="rule-card fade-in">
          <CardHead title="PvP pravidla" />
          <div className="card-body">
            <List>
              <li>Looting státních složek je zakázán.</li>
              <li>Hráč nesmí vyvolat RP s PD jen za účelem zabití.</li>
              <li>
                Pokud při únosu dáte PK/DS (bezvědomí), nelze si zaerpit vlastní ošetření a
                žádat revive.
              </li>
              <li>
                Zákaz programů třetích stran měnících hru (odstraňují propy/keře, ruší den/noc…).
              </li>
              <li>Povoleny jen PVP packy zlepšující FPS.</li>
              <li>Zákaz střelby bez adekvátního RP důvodu a předešlé RP interakce.</li>
              <li>Zákaz využívat animace během PvP (spam /e prone, /e pushup…)</li>
            </List>
          </div>
        </section>

        {/* RANDOM LOOTING */}
        <section id="random" className="rule-card fade-in">
          <CardHead title="Random looting" />
          <div className="card-body">
            <P>
              Přísně zakázáno náhodně lootovat hráče v dead screenu na ulici nebo bez
              důvodu někoho přepadnout a okrást bez interakce.
            </P>
          </div>
        </section>

        {/* BUNNY */}
        <section id="bunny" className="rule-card fade-in">
          <CardHead title="Bunny Hopping" />
          <div className="card-body">
            <P>Zákaz spamování mezerníku (skákání) za účelem rychlejšího přesunu.</P>
          </div>
        </section>

        {/* BYDLENÍ */}
<section id="housing" className="rule-card fade-in">
  <CardHead title="Bydlení" />
  <div className="card-body">
    <P>
      Každý občan musí někde bydlet – mělo by to být v místě, kde může
      přespat a vykonávat základní lidské potřeby.
    </P>
    <ul className="rule-list">
      <li>Může to být apartmán, dům nebo frakční sídlo.</li>
      <li>Ve frakčním sídle může bydlet maximálně <b>20 lidí</b>.</li>
      <li>V domě nebo apartmánu může bydlet maximálně <b>5 lidí</b>.</li>
    </ul>
    <P>
      🏠 Výjimku mají pouze hráči, kteří mají <b>pedmenu</b> nebo chtějí erpit{" "}
      <b>bezdomovce</b>, ale musí na to mít schválený <b>ticket</b>.
    </P>
    <P>
      🆕 Pro nové hráče platí, že si musí zajít do <b>realitky</b> a domluvit si
      bydlení s <b>makléřem</b>.
    </P>
  </div>
</section>

        {/* FRAKCE */}
        <section id="factions" className="rule-card fade-in">
          <CardHead title="Frakce" />
          <div className="card-body">
            <H4>Žádost o frakci (přes ticket)</H4>
            <P>Minimální počet členů pro založení: 7 (nelegální do začátku min. 15).</P>
            <H4>Vzor žádosti</H4>
            <List>
              <li>Název (nesmí kopírovat existující nelegální org.)</li>
              <li>Majitel (OOC nick)</li>
              <li>
                Seznam členů (OOC nicky) — ilegální max 40 (+10 při kvalitním RP), legální
                max 50 (+20 při kvalitním RP)
              </li>
              <li>Lore frakce (min. 150 slov)</li>
              <li>Hierarchie (ranks od nejnižší pozice)</li>
              <li>Popis (co dělá, jak funguje, proč ji chcete)</li>
              <li>Frakční sídlo (fotka/název)</li>
              <li>Počet členů do začátku</li>
              <li>Požadavky na DEV</li>
            </List>

            <H4>Práva a povinnosti</H4>
            <P>
              Frakce má povinnost být aktivní a využívat své výhody; jinak může být
              zrušena/odebrána managementem. Změny hlásí Boss (změna Bosse/Discordu).
            </P>

            <H4>Komunikace</H4>
            <P>
              Každá frakce má IC Discord s min. jedním adminem. Admin tým má právo vstupu
              (vyjma admina RPícího v konkurenci).
            </P>

            <H4>Aliance / Dohody</H4>
            <List>
              <li>Aliance – pouze s 1 frakcí; schvaluje se v ticketu.</li>
              <li>Dohoda – dlouhodobé vztahy, obchod, výměna, mír.</li>
            </List>

            <H4>Raidy / Vypálení frakčních budov</H4>
            <List>
              <li>Pouze Molotov; granáty/výbušniny/odpaly kamionů zakázány.</li>
              <li>Jen na předem zjištěné sídlo. Nutný frakční ticket a spect admin.</li>
              <li>
                Musí být jasné, že jsou uvnitř osoby schopné se bránit; odpojování kvůli
                vyhnutí se raidu = CombatLog/Vyhýbání RP.
              </li>
              <li>
                Při schváleném nelegálním raidu, pokud útočník dostane PK a bránící frakce
                ho chytí, lze situační CK — pouze pokud je přítomen boss/proxy.
              </li>
            </List>

            <H4>Vzor žádosti o raid</H4>
            <List>
              <li>IC důvody (min. 50 slov)</li>
              <li>Místo (postal, screen mapy)</li>
              <li>Datum/čas</li>
              <li>Popis průběhu</li>
              <li>Cíl akce</li>
            </List>

            <H4>Návrat do RP</H4>
            <List>
              <li>Legální frakce: 30 min</li>
              <li>Státní složky: 30 min</li>
              <li>Nelegální frakce: 45 min</li>
            </List>

            <H4>Únosy / Zatčení</H4>
            <P>
              Nelegální mohou držet osobu max. 3 h; prodloužení jen se schválením admina
              (max 24 h) a při dostatku interakcí. Státní složky max. 3 h, prodloužení
              schvaluje soudce; při odchodu z RP předat informace kolegovi.
            </P>

            <H4>Uniformy státních složek</H4>
            <P>Nerespektování předepsaných uniforem = FailRP.</P>

            <H4>Korupce státních složek</H4>
            <P>Možná po schválení přes ticket na Discordu.</P>

            <H4>Snitching</H4>
            <P>
              Žádost skrz ticket. Max. dvě postavy, na které můžeš „snitchovat“. Správné:
              cartel zabil bratra → spolupráce s PD jako informátor. Špatné: sdělíš info,
              abys se vyhnul pokutě.
            </P>
          </div>
        </section>

        {/* CAYO */}
        <section id="cayo" className="rule-card fade-in">
          <CardHead title="Cayo Perico" />
          <div className="card-body">
            <H4>Zóny</H4>
            <List>
              <li>Horní (zelená) = legální — platí PASSIVE a KOS.</li>
              <li>Spodní (červená) = nelegální — neplatí PASSIVE a KOS.</li>
              <li>Žlutá čára = brána (hranice) — přísný PASSIVE.</li>
            </List>
            <H4>Informace</H4>
            <List>
              <li>
                Armáda na checkpointu může vyžádat ID a prohledání osoby/vozidla.
              </li>
              <li>Legální osoby nesmí spolupracovat s kriminálníky na ostrově.</li>
              <li>Vstup mimo koridor = narušení vojenské zóny.</li>
              <li>Vstup na nelegální část je na vlastní nebezpečí.</li>
              <li>
                Na legální části může kdykoli proběhnout kontrola armádou (identifikace).
              </li>
              <li>
                Po celém ostrově je zakázáno mít u sebe zbraně — při nálezu budeš zadržen
                armádou.
              </li>
              <li>
                Přidány nelegální aktivity (sběr součástek pro crafting attachmentů).
              </li>
              <li>Port na postalu 712 (poplatek 5000$).</li>
            </List>

            <div className="cayo-wrap">
              <img src={cayo} alt="Cayo Perico mapa" />
              <div className="cayo-caption">
                Mapa Cayo Perico – legální (zelená) / nelegální (červená), hranice = žlutá
                čára
              </div>
            </div>
          </div>
        </section>

        {/* DALŠÍ INFO */}
        <section id="other" className="rule-card fade-in">
          <CardHead title="Další informace" />
          <div className="card-body">
            <List>
              <li>
                Sand má povolen pouze looting drog a zbraní, které máš u sebe nebo ve
                vozidle. Vše ostatní musí nechat.
              </li>
              <li>
                Looting federálních složek (armády) je přísně zakázán — <b>PERMABAN</b>.
              </li>
            </List>
            <Callout>
              Pravidla jsou závazná. V případě dotazů kontaktuj staff na Discordu. Pravidla
              se mohou měnit — sleduj oznámení.
            </Callout>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- Malé pomocné komponenty ---------- */

function CardHead({ title }) {
  return (
    <div className="card-head">
      <h2>{title}</h2>
      <div className="underline" />
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="subcard">
      <div className="subcard-head">
        <h3>{title}</h3>
      </div>
      <div className="subcard-body">{children}</div>
    </div>
  );
}

function Notice({ children }) {
  return <div className="notice">{children}</div>;
}

function Callout({ children }) {
  return <div className="callout">{children}</div>;
}

function P({ children }) {
  return <p className="p">{children}</p>;
}

function H4({ children }) {
  return <h4 className="h4">{children}</h4>;
}

function List({ children }) {
  return <ul className="list">{children}</ul>;
}

