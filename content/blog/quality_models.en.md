---
title: "Quality Models Q42 & ISO25010 "
date: 2023-08-15T11:24:53+02:00
tags:  ["Architecture","Quality","Models"]
author: "Kai Herings"
featured: true
icon: 'services/service-icon-2.png'
draft: false
weight: 1
heroHeading: 'Quality Models'
heroSubHeading: 'using Q42 and ISO25010 in your day to day projects'
heroBackground: 'services/service1.jpg'
original: yes
---

###### Architecture Quality

Quality Models help us to define quality criteria for software and architecture development. There are several different types out there that can be applied in the software and architecture development process.

## Why do we need a quality model for architectures?

A quality model is a structured way to align priorities during the conception phase and development of a software system. There might be some aspects that can be negotiable, others not. For example, you can make compromises in quality categories such as #flexibility, while making no compromises in aspects of #security. This quality guidelines help with challenging your own decisions and approaches and allow a reality check. “Do we actually need redundancy in this part of the architecture?”

There are are several quality models out there, ranging from very sophisticated models with almost 40 attributes to more application oriented models that focus on pragmatic views of the software development process. 

Two models that we want to emphasis are:

-  **ISO25010 - “Software product Quality requirements”**
-  **The arc42 Quality Model - qm42**

A neat history of quality models can be found [here](https://quality.arc42.org/articles/quality-models).

### ISO25010 - A very detailed Model Specification

If you want to have a look at the outline of ISO25010, you can preview it [here](https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en). The model is segmented into quality in use and the product quality model. 

The **Quality in use Model** describes quality characteristics that a user experiences while actually using the system. This covers aspects such as: 

- Effectiveness
- Efficiency
- Freedom from Risk
- Context Coverage

These are aspects that cover things like comfort or usefulness to the user. However, these categories are not sufficient to cover all aspects of software product quality, such as reusability, for example.

The **Product Quality Model** is focused on providing guidance on aspects of software or architecture qualities. There are eight main categories that can be used as orientation:

- Functional Suitability
- Performance Efficiency
- Compatibility
- Usability
- Reliability
- Security
- Maintainability
- Portability

All of these attributes are further sub-segmented. 

If you want to read further about the shortcomings of ISO 25010, you can do so [here](https://quality.arc42.org/articles/iso-25010-shortcomings).

### Q42 - The arc42 Quality Model

arc42 is a pragmatic framwork for documenting and structuring architecture discussions. Quality is always a part of this discussion. Therefore, q42 is intended to be a pragmatic sub-framework that starts with the view of key stakeholders on the product. 

Instead of 'noun'-driven quality categories such as 'Security', it uses a more interaction-friendly language that favors the use of different adjectives e.g., 'secure', to form sentences like "the login services should be secure". 

Usually, the quality trees of other models become very expansive. The quality requirements that are formulated in Q42 are instead tagged with properties. For one quality requirement, several properties could apply. There are eight properties that can be assigned to system aspects, often written in tag notation. These are:

- 🏷️ flexible
- 🏷️ reliable
- 🏷️ safe
- 🏷️ secure
- 🏷️ suitable
- 🏷️ operable
- 🏷️ usable
- 🏷️ efficient

These system-Properties are used to ‘tag’ and categorizes different quality requirements that are formulated together with the eight different types of stakeholders, such as management, users, domain experts, product owners, developers, testers, admins, and others.

The core of Q42 consists of specific **Quality Requirements** that can be described in different aspects. 

🏷️ Tag - A reference to the applicable system aspects.

🧑‍💻 Stakeholder - A reference to the stakeholders that have an interest in this requirement.

📰 Title - A descriptive title.

📬 Stimulus - In what cases does this requirement trigger action? When is ist applied? For example, in case of a code change.

📲 Reaction - The response to the stimulus or response of the system to satisfy the quality requirement.

📈 Metric - How to measure quality aspects.

📄 Background - Explanatory insights.

🔗 Links - Links to related quality requirements.

### Q42 applied

First, we strive to identify all relevant stakeholders. The stakeholders provide key input for our quality requirements. There are different ways to get to a proper set of quality requirements. Structured interviews, where you walk the stakeholders through the quality attributes with examples, are suitable for stakeholders who are not very familiar with the approach of quality attributes.  In our scenario, we consider a reporting solution that reports specific web application usage data for product owners.

**📰 Fast and accurate Black Friday Reports ( 🏷️[reliable](https://quality.arc42.org/tag-reliable/), 🏷️[availabe](https://quality.arc42.org/qualities/availability)le)**

For our Black Friday sales, we have sales dashboards monitoring the activity and cash flow of the sales channels. Minutes of blocked check-out routes, misconfiguration, or login issues can have a major impact on revenues. During Black Friday sales, we need our reports to be highly available. 

🧑‍💻 **Stakeholders**
- 🧑‍💻 Users
- 👩‍💼 Management
- 👨‍🔧 Others - Architects

📬 **Stimulus:** 

- Black Friday sales season
- Sales team accessing the reports
- New data is available e.g., logstash, auditDB, etc.

📲  **Reaction:**

- Data is updated in reports within minutes.
- Reliability issues should be flagged e.g., unavailable data sources should be flagged.
- Scaling infrastructure during Black Friday season.

📈 **Metric:**

- Lead time from updated datasource to display in reports should be less than a minute.
- Number of connected datasources should be 100% at all times.
- Deviation of actual sales and sales shown in dashboard should be less than 10% of actual revenue.

📄 **Background:**

- Users (product managers) and management rely on real-time data to take decisions about pricing and marketing measures.
- Revenue during Black Friday early evening is 100k€/minute.
- Reports can only be accurate if all data sources are available at all times.

🔗 You can find further examples of requirements [here](https://quality.arc42.org/requirements/).

### Quality Models as Part of the (Enterprise) Architecture Review Process

Quality models can be employed as a part of architecture reviews, which should be part of project delivery guidelines or quality gates in the project lifecycle. In the software development process, these attributes should be discussed and elaborated in an early phase of your project. It is advisable to partly write down quality requirements together with the stakeholders of your software, e.g., product owners, users, management etc.

The defined quality requirements should be documented in the architecture description and revisited regularly during product development to align priorities.

### Taking your next Steps 

We recommend practicing using the quality models in your architectures or products. The quality of your quality requirements will improve over time. Building quality models and procedures in your organization is a challenging task because many stakeholders are involved and need to be aware of the requirements and procedures of applying quality models in product development. If you want to discuss further real-world examples, do not hesitate to reach out to us.

Furthermore, we are curious how you apply quality models in your day-to-day software/product/consulting business. If you have insights for us, we would be glad if you could share them with the community. 

You can reach us at [info@fwdnow.io](mailto:info@fwdnow.io)