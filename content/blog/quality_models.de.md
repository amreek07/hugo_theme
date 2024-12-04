---
title: "Qualitätsmodelle Q42 & ISO25010 "
date: 2023-08-15T11:24:53+02:00
tags:  ["Architecture","Quality","Models"]
author: "Kai Herings"
featured: true
icon: 'services/service-icon-2.png'
draft: false
weight: 1
heroHeading: 'Qualitätsmodelle'
heroSubHeading: 'Einsatz von Q42 und ISO25010 in Ihren täglichen Projekten'
heroBackground: 'services/service1.jpg'
reviewed: yes
original: no
---

###### Architekturqualität

Qualitätsmodelle helfen uns, Qualitätskriterien für die Software- und Architekturentwicklung zu definieren. Es gibt verschiedene Arten, die im Software- und Architekturentwicklungsprozess angewendet werden können.

## Warum brauchen wir ein Qualitätsmodell für Architekturen?

Ein Qualitätsmodell ist eine strukturierte Methode, um Prioritäten während der Konzeption und Entwicklung eines Softwaresystems auszurichten. Es gibt Aspekte, die verhandelbar sein können, andere nicht. Zum Beispiel können Sie in Qualitätskategorien wie #Flexibilität Kompromisse eingehen, während in Aspekten wie #Sicherheit keine Kompromisse gemacht werden. Diese Qualitätsrichtlinien helfen dabei, die eigenen Entscheidungen und Ansätze zu hinterfragen und eine Realität zu prüfen. "Brauchen wir tatsächlich Redundanz in diesem Teil der Architektur?"

Es gibt verschiedene Qualitätsmodelle, die von sehr ausgeklügelten Modellen mit fast 40 Attributen bis hin zu anwendungsorientierten Modellen reichen, die sich auf pragmatische Ansichten des Softwareentwicklungsprozesses konzentrieren. 

Zwei Modelle, die wir hervorheben möchten, sind:

-  **ISO25010 - “Softwareprodukt Qualitätsanforderungen”**
-  **Das arc42-Qualitätsmodell - qm42**

Eine detaillierte Geschichte der Qualitätsmodelle finden Sie [hier](https://quality.arc42.org/articles/quality-models).

### ISO25010 - Eine sehr detaillierte Modellspezifikation

Wenn Sie sich die Gliederung der ISO25010 ansehen möchten, können Sie sie [hier](https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en) einsehen. Das Modell ist in Qualitätsmerkmale in der Nutzung und das Produktqualitätsmodell unterteilt. 

Das Modell **Quality in Use**  beschreibt Qualitätsmerkmale, die ein Benutzer bei der tatsächlichen Nutzung des Systems erfährt. Dies umfasst Aspekte wie:

- Effektivität
- Effizienz
- Risikofreiheit
- Kontextabdeckung

Diese Aspekte decken Dinge wie Komfort oder Nützlichkeit für den Benutzer ab. Diese Kategorien reichen jedoch nicht aus, um alle Aspekte der Softwareproduktqualität abzudecken, wie zum Beispiel die Wiederverwendbarkeit.

Das **Produktqualitätsmodell** konzentriert sich auf die Bereitstellung von Leitlinien zu Aspekten der Software- oder Architekturqualität. Es gibt acht Hauptkategorien, die als Orientierungshilfe dienen können:

- Funktionale Eignung
- Leistungsfähigkeit
- Kompatibilität
- Benutzerfreundlichkeit
- Zuverlässigkeit
- Sicherheit
- Wartbarkeit
- Portabilität

All diese Attribute sind weiter unterteilt. 

Wenn Sie mehr über die Schwächen der ISO 25010 erfahren möchten, können Sie dies [hier](https://quality.arc42.org/articles/iso-25010-shortcomings) nachlesen.

### Q42 - Das arc42-Qualitätsmodell

arc42 ist ein pragmatisches Framework zur Dokumentation und Strukturierung von Architekturgesprächen. Qualität ist immer Teil dieser Diskussion. Daher ist q42 als pragmatisches Sub-Framework gedacht, das mit der Sichtweise der wichtigsten Stakeholder auf das Produkt beginnt. 

Anstatt 'substantivgesteuerte' Qualitätskategorien wie 'Sicherheit' zu verwenden, verwendet es eine interaktionsfreundlichere Sprache, die die Verwendung verschiedener Adjektive bevorzugt, z. B. 'sicher', um Sätze wie "die Anmeldedienste sollten sicher sein" zu bilden.

Normalerweise werden die Qualitätshierarchien anderer Modelle sehr umfangreich. Die in Q42 formulierten Qualitätsanforderungen sind stattdessen mit Eigenschaften versehen. Für eine Qualitätsanforderung könnten mehrere Eigenschaften gelten. Es gibt acht Eigenschaften, die Systemaspekten zugewiesen werden können und oft in Tag-Notation geschrieben werden. Diese sind:

- 🏷️ flexibel
- 🏷️ zuverlässig
- 🏷️ sicher
- 🏷️ geschützt
- 🏷️ geeignet
- 🏷️ bedienbar
- 🏷️ benutzbar
- 🏷️ effizient

Diese Systemeigenschaften werden verwendet, um verschiedene Qualitätsanforderungen zu "taggen" und zu kategorisieren, die zusammen mit den acht verschiedenen Stakeholder-Typen formuliert werden, wie z. B. Management, Benutzer, Domänenexperten, Produktinhaber, Entwickler, Tester, Administratoren und andere.

Der Kern von Q42 besteht aus spezifischen **Qualitätsanforderungen**, die in verschiedenen Aspekten beschrieben werden können. 

🏷️ Tag - Ein Verweis auf die zutreffenden Systemaspekte.

🧑‍💻 Stakeholder - Ein Verweis auf die Stakeholder, die an dieser Anforderung interessiert sind.

📰 Titel - Ein beschreibender Titel.

📬 Stimulus - In welchen Fällen wird diese Anforderung aktiviert? Wann wird sie angewendet? Zum Beispiel bei einer Code-Änderung.

📲 Reaktion - Die Reaktion auf den Stimulus oder die Reaktion des Systems, um die Qualitätsanforderung zu erfüllen.

📈 Metrik - Wie man Qualitätsaspekte misst.

📄 Hintergrund - Erklärende Einblicke.

🔗 Links - Links zu verwandten Qualitätsanforderungen.

### Q42 angewendet

Zunächst versuchen wir, alle relevanten Stakeholder zu identifizieren. Die Stakeholder liefern wichtige Inputs für unsere Qualitätsanforderungen. Es gibt verschiedene Wege, um zu einem geeigneten Satz von Qualitätsanforderungen zu gelangen. Strukturierte Interviews, bei denen man die Stakeholder durch die Qualitätsattribute mit Beispielen führt, sind geeignet für Stakeholder, die mit dem Ansatz der Qualitätsattribute nicht sehr vertraut sind. In unserem Szenario betrachten wir eine Berichtslösung, die spezifische Webanwendungsnutzungsdaten für Produktinhaber meldet.

**📰 Schnelle und genaue Black Friday Reports ( 🏷️[zuverlässig](https://quality.arc42.org/tag-reliable/), 🏷️[verfügbar](https://quality.arc42.org/qualities/availability)le)**

Für unseren Black Friday-Verkauf haben wir Verkaufsdashboards, die die Aktivität und den Cashflow der Verkaufskanäle überwachen. Minuten blockierter Checkout-Routen, Fehlkonfigurationen oder Login-Probleme können erhebliche Auswirkungen auf die Einnahmen haben. Während des Black Friday-Verkaufs müssen unsere Berichte hochverfügbar sein. 

🧑‍💻 **Stakeholder**
- 🧑‍💻 Benutzer
- 👩‍💼 Management
- 👨‍🔧 Andere - Architekten

📬 **Stimulus:** 

- Black Friday-Verkaufssaison
- Verkaufsteam greift auf die Berichte zu
- Neue Daten sind verfügbar, z.B. logstash, auditDB, etc.

📲  **Reaktion:**

- Daten werden innerhalb von Minuten in Berichten aktualisiert.
- Zuverlässigkeitsprobleme sollten markiert werden, z.B. nicht verfügbare Datenquellen sollten markiert werden.
- Skalierung der Infrastruktur während der Black Friday-Saison.

📈 **Metrik:**

- Die Vorlaufzeit von der aktualisierten Datenquelle bis zur Anzeige in den Berichten sollte weniger als eine Minute betragen.
- Die Anzahl der verbundenen Datenquellen sollte jederzeit 100 % betragen.
- Die Abweichung der tatsächlichen Verkäufe und der in Dashboards angezeigten Verkäufe sollte weniger als 10 % des tatsächlichen Umsatzes betragen.

📄 **Hintergrund:**

- Benutzer (Produktmanager) und Management sind auf Echtzeitdaten angewiesen, um Entscheidungen über Preisgestaltung und Marketingmaßnahmen zu treffen.
- Der Umsatz während des Black Friday am frühen Abend beträgt 100k€/Minute.
- Berichte können nur genau sein, wenn alle Datenquellen jederzeit verfügbar sind.

🔗  Weitere Beispiele für Anforderungen finden Sie [hier](https://quality.arc42.org/requirements/).

### Qualitätsmodelle als Teil des (Enterprise) Architekturprüfungsprozesses

Qualitätsmodelle können als Teil von Architekturprüfungen eingesetzt werden, die Teil der Projektlieferungsrichtlinien oder Qualitätskontrollen im Projektlebenszyklus sein sollten. Im Softwareentwicklungsprozess sollten diese Attribute in einer frühen Phase Ihres Projekts diskutiert und ausgearbeitet werden. Es ist ratsam, die Qualitätsanforderungen teilweise zusammen mit den Stakeholdern Ihrer Software, z.B. Produktinhabern, Benutzern, Management etc., schriftlich festzuhalten.

Die definierten Qualitätsanforderungen sollten in der Architekturbeschreibung dokumentiert und während der Produktentwicklung regelmäßig überprüft werden, um die Prioritäten abzustimmen.

### Ihre nächsten Schritte

Wir empfehlen, die Qualitätsmodelle in Ihren Architekturen oder Produkten zu üben. Die Qualität Ihrer Qualitätsanforderungen wird sich mit der Zeit verbessern. Der Aufbau von Qualitätsmodellen und Verfahren in Ihrer Organisation ist eine herausfordernde Aufgabe, da viele Stakeholder beteiligt sind und sich der Anforderungen und Verfahren zur Anwendung von Qualitätsmodellen in der Produktentwicklung bewusst sein müssen. Wenn Sie weitere Beispiele aus der Praxis diskutieren möchten, zögern Sie nicht, uns zu kontaktieren.

Außerdem sind wir neugierig, wie Sie Qualitätsmodelle in Ihrem täglichen Software-/Produkt-/Beratungsgeschäft anwenden. Wenn Sie Einblicke für uns haben, würden wir uns freuen, wenn Sie diese mit der Community teilen könnten. 

Sie erreichen uns unter [info@fwdnow.io](mailto:info@fwdnow.io)