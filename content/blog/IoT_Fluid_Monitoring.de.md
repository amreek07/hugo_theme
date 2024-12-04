---
title: "IoT in der Flüssigkeitsspeicherung und -verwaltung"
date: 2023-10-10T15:11:53+02:00
tags:  ["Architecture", "Repository"]
author: "Kai Herings"
featured: true
draft: false
icon: 'services/service-icon-iot.png'
weight: 3
heroHeading: IoT in der Flüssigkeitsspeicherung und -verwaltung
heroBackground: 'https://images.unsplash.com/photo-1560320652-6acbefacb0fd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600'
reviewed: yes
original: no
---

###### IoT in der Flüssigkeitsspeicherung und -verwaltung

Dieser Artikel gibt Ihnen einen Überblick über einen Ansatz zur Sammlung von Messungen in einem verteilten IoT-Setup. Die Herausforderungen der Flüssigkeitsspeicherung und -verwaltung können auf andere IoT-Anwendungsfälle verallgemeinert werden.

Im Allgemeinen werden Speicherreservoirs und -tanks für Wasser dort platziert, wo Wasser gesammelt wird, nicht dort, wo es logistisch sinnvoll wäre, das Wasser zu haben. Abgelegenheit ist eine ständige Herausforderung. Um solche Standorte zu überwachen, haben wir ein IoT-Netzwerk entwickelt, um die Wasserstände zu überwachen. Ein Netzwerk, das durch 5G oder potenziell andere Technologien wie StarLink unterstützt wird, überbrückt die Entfernung und umhüllt unsere Tanks in einem sicheren Netzwerk durch VPNs. In Zukunft werden die Messknoten vollständig netzunabhängig über eine Solaranlage betrieben. Diese technologische Grundlage sorgt für einen nahtlosen und ununterbrochenen Fluss von Echtzeitdaten, selbst von den isoliertesten Standorten. Wir haben uns auf den Weg gemacht, ein vollständig unabhängiges Netzwerk von Sensorknoten zu entwickeln. 

Die Lösung kann in verschiedenen Kontexten genutzt werden, z. B. in der Landwirtschaft und Bewässerung, in industriellen Anwendungsfällen, in Smart Cities, in der Versorgungs- und Wasserwirtschaft, im Bergbau und in der Gewinnung, im Bauwesen oder im Transport und in der Logistik.

![Dashboard](/images/blog/dashboard.jpeg)

## **Sensoren: Unsere Augen und Ohren**

Präzision ist wichtig, wenn es um die Überwachung von Flüssigkeitsspeichertanks geht. Eine Reihe von Sensortechnologien spielt dabei eine entscheidende Rolle:

- **Sonarsensoren:**: Zeigen ihre Stärke bei der Erkennung von Flüssigkeitsständen durch Behälterwände mit einer außergewöhnlichen Präzision bis auf den Millimeter. Diese Art von Sensor hat den Vorteil, dass er den gelagerten Inhalt nicht beeinträchtigt.

![small](/images/blog/sonarsensor.jpg)


- **Eintauchsensoren:**: Eine vielseitige Alternative, die sicherstellt, dass unser System eine robuste Genauigkeit beibehält und sich an verschiedene Überwachungsanforderungen und -bedingungen anpasst.

![small](/images/blog/submersionsensor.jpg?width=120px&height=60px)

- **Bestehende industrielle Steuerungsinfrastruktur:**: Die Wasserwirtschaftsinfrastruktur wird häufig von industriellen SPS, wie Siemens S7 oder ähnlichen, betrieben. Das Extrahieren von Informationen aus diesen Systemen ist eine zusätzliche Datenquelle für unser Überwachungssystem.

![small](/images/blog/s7.png)

  **Anwendungsfälle**



IoT-Datenerfassungssysteme sammeln nicht nur Daten, sondern nutzen diese Informationen strategisch für:

- **Überwachung und Prognose:**: Ständige Überwachung der Wasserstände, die genaue Prognosen ermöglicht und als Rückgrat für die logistische und operative Planung dient.
- **Verschüttungsvorhersage:**: Nutzung von Daten, um potenzielle Verschüttungsereignisse vorherzusagen, sodass proaktive Maßnahmen zur Vermeidung von Umwelt- und Materialverlusten ergriffen werden können.
- **Bewässerungsplanung:**: Steuerung von Bewässerungsstrategien durch präzise Wasserstandsdaten, um sicherzustellen, dass der Wasserverbrauch optimiert und Verschwendung minimiert wird.

![small](/images/blog/metalcontainers.jpg)
Industrielle Anwendungen

![small](/images/blog/plasticcontainers.jpg)
Smart-City-Wasserlogistik

**Iterative Optimierung der Lösung**






Wir haben die Lösung gestartet, indem wir:

- Die Sensorelektronik von Grund auf basierend auf elektronischen Komponenten und Prototyping-Platinen entwickelt haben. (Die Integration mit hergestellten Leiterplatten wird ebenfalls in dieser Blog-Serie dokumentiert.)
- Die Infrastruktur- und Netzwerkschicht mit On-Prem, VPN und GCP-Komponenten erstellt haben.
- Sicherheit mit Verschlüsselung und Zero-Trust-Aspekten implementiert haben.
- Das IoT-Datenverteilungs-Backbone mit MQTT-Bibliotheken und Brokern wie [Paho-Mqtt](https://pypi.org/project/paho-mqtt/) und [HiveMQ](https://www.hivemq.com/developers/community/) entwickelt haben.
- Die Datenschicht mit einer Zeitreihen-Datenbank, in unserem Fall [Apache IoTDB](https://iotdb.apache.org/)
- Die Visualisierung von Schlüsselfragen des Unternehmens in mehreren Dashboards.
- Iterative Verbesserung der Robustheit.

![Architecture](/images/blog/iotarch.jpg)

**Cloud-native Agilität**

Die Google Cloud Platform (GCP) ist in unser technologisches Gefüge integriert und bietet eine robuste und skalierbare Umgebung. Container innerhalb von GCP erleichtern ein nahtloses Management und die Aggregation von Daten, sodass Workloads effizienter und zuverlässiger betrieben werden können.

**Code-Management und Deployment**

Innovation ist ein kontinuierlicher Prozess in unserem Ökosystem. GitLab beherbergt unseren Code und fördert eine kollaborative Entwicklungsumgebung. Eine optimierte CI/CD-Pipeline bringt unseren Code in die Produktionsumgebung, sodass Updates und Verbesserungen nahtlos in das Betriebssystem integriert werden können.

**Fazit: Entwicklung eines robusten und strategischen IoT-Ökosystems**

Unsere Reise ist ein Geflecht technologischer Innovationen, wobei jeder Faden – von Sensoren bis hin zu Cloud-Technologien – ein robustes und strategisches IoT-Ökosystem schafft. Im Kern strebt unser System danach, Daten in umsetzbare Erkenntnisse umzuwandeln und Strategien in den Bereichen Überwachung, Spill-Vermeidung und Bewässerungsplanung für ein effektives und nachhaltiges Flüssigkeitsspeichermanagement voranzutreiben.

Wir glauben an die Kraft der Zusammenarbeit und maßgeschneiderter Lösungen. Wenn Ihnen unser Ansatz gefällt und Sie glauben, dass eine maßgeschneiderte technologische Lösung Ihre Abläufe verbessern könnte, sind wir bereit, zuzuhören, zu verstehen und zusammenzuarbeiten.

Kontaktieren Sie uns gerne unter [info@fwdnow.io](mailto:info@fwdnow.io), und sprechen Sie mit Kai, um die potenziellen Wege zu einer Lösung zu erkunden, die nahtlos zu Ihren spezifischen Bedürfnissen und Zielen passt. Gemeinsam können wir die Komplexitäten meistern und neue Chancen in maßgeschneiderten IoT-Lösungen erschließen.


