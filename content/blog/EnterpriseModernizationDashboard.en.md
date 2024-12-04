---
title: "Measuring Enterprise Modernization"
date: 2023-08-15T11:24:53+02:00
tags:  ["Architecture","Quality","Models"]
author: "Kai Herings"
featured: true
draft: false
icon: 'services/service-icon-Enterprise-modern.png'
weight: 1
heroHeading: Measuring Enterprise Modernization 
heroSubHeading: 'a data-driven approach'
heroBackground: 'https://www.notion.so/images/page-cover/nasa_ibm_type_704.jpg'
---
###### Data-Driven Modernization

Enterprises across Europe are undergoing modernization - a process that is crucial to maintaining competitiveness, ensuring security, and increasing efficiency. This is the glossy view of modernization. In reality this is a messy business with digging in old code, making migration plans and dealing with significant resistance within the organization. And this is to such an extent that it becomes difficult to ascertain whether modernization is effectively taking place, except for the lighthouse projects that are under your control. However, managing and tracking the progress of these programs can be achieved. To navigate this issue, we applied a data-driven approach that is measuring aspects of the transformation. Especially the cut-over from legacy applications to newly deployed applications is an interesting measurement. 

### Data-Driven Modernization Programs

Through this approach, we work on monitoring the progress of modernization programs in real time, assess their effectiveness, and make necessary adjustments to the program promptly and efficiently. Acquiring reliable data for decision-making presents a significant challenge - especially when you are running a lot of distributed legacy code. 
forwardnow successfully built solutions that enable us to acquire detailed information about all deployed legacy frontends. This pipeline efficiently aggregates deployment status and monitors the removal of functionality from the legacy stack.

### The Power of Modernization KPI Dashboards

Key Performance Indicator (KPI) dashboards serve as a comprehensive tool for gauging an organization's performance in relation to its strategic goals. In the realm of enterprise modernization, these dashboards can track various metrics, such as the rate of technology adoption, system downtime, operational efficiency, and employee productivity. In our case we measure the transition from legacy systems to a modernized stack, respectively the retirement of legacy applications. 

The information has multiple recipients (with different purposes). 

- Teams for calibrating their own performance,
- Team leads to have an objective indicator for discussion,
- Program leads for keeping track of progress,
- Leadership team in order to steer efforts across the company.

![Untitled](/images/blog/looker_dashboard.png)

Google Looker Report on Stack Distriution.

The interactive reports, e.g. in google looker or other Solutions, allow direct drill-down into the different dimensions to answer questions like: 

- What are the last legacy applications running in IT?
- What is the development of legacy stack applications over time?
- Which organizational unit is responsible?

### Organizational and Business-Model Perspectives on the Transformation

The first important perspective is the responsibility for transformation.

Matching different artifacts to the responsible product teams is a crucial prerequisite for us, so that there is a measure of the progress and adoption of the new strategy on a team-by-team basis. KPI dashboards visualize the progress of different teams, increasing transparency and boosting morale. For example focusing on the ‘back-log’ and progress of the finance applications solutions team.  They also facilitate the comparison of performance across different teams or time frames, enabling insights into the effectiveness of various strategies.

The second perspective is the customer facing or business perspective.

Which business-domains underwent the transformation? This is independent of the actual teams working on the modernization. We rather know if different internal or external customers already work on the new stack, e.g. purchasing department is already working on new systems, logistics is not.

### Modernization KPIs to track

What KPIs to deploy cannot be answered universally. It depends on the actual goals of the Organization. We want to give some inspiration for what we found to be promising for tracking the transformation process of a whole application landscape from an enterprise perspective:

- Number of legacy frontends per business domain
- Number of legacy frontends per team
- Actual use of legacy frontends (by use-case)
- Rate of retired frontends (or code artifacts)
- Increase of legacy code/frontends
- Project repositories in target application stack and usage frequencies
- Use of enterprise platform services
- Budget and resources allocated to migration projects
- Burn-rate of projects vs. migration activity

KPIs can be categorized into two types: forward-looking and backward-looking. Backward-looking KPIs measure past performance and provide historical context for current results. These include metrics like previous quarter's downtime or last year's productivity levels.

On the other hand, forward-looking KPIs use past trends to predict future outcomes. For example, based on previous rates of technology adoption, one could predict how long it might take for a new system to be fully implemented.

Implementing both types of KPIs provides a more comprehensive view of an organization's performance and potential, empowering strategic decision-making for modernization effort.

If you are working on the ways to deliver software pojects and move towards a more DevOps way of working, we recommend to have a look at the accelerate metrics ([Link](https://www.amazon.de/dp/1942788339?ref=nb_sb_ss_w_as-reorder-t1_k9_1_10&amp=&crid=4NHQ3N8BWW22&amp=&sprefix=accelerate)). Which is a combination of metrics: 1. Lead time 2. Deployment frequency 3. Mean time to restore 4. Change fail percentage

### Boosting Engagement and Motivation

I do not want to talk about gamification in terms of - designing jobs as a game way. Nevertheless, work needs to be somehow motivating and it might be easier to stay committed and see the purpose of your own work if you see the actual progress ([small-wins](https://hbr.org/2011/05/the-power-of-small-wins)) and [purpose](https://penpoin.com/pinks-theory-of-motivation/) what you are doing (besides some other aspects, such as autonomy and mastery*) .    

In a *gamified* migration strategy, teams might earn achievements by making progress. Each artifact they successfully migrate contributes to reaching their individual, team and company-goals. In a first place this is not about competition, but rather about anchoring their work to real progress and overall goals. 

You could think of introducing badges for achieving specific milestones, further motivating and recognizing their efforts - but this might be a little bit over the top. Leaderboards, badges, and points systems make progress visible and comparable, fostering a healthy competition and increasing the sense of achievement among team members.

It is crucial to strike a balance. Overemphasizing competition or rewards could potentially shift focus away from the main objective: successful migration. The process should be designed with an understanding of what is appropriate and motivational for the team, ensuring that it promotes progress without creating unnecessary pressure or a counterproductive work environment. 

### Challenges of Data Acquisition

Obtaining comprehensive data from the outset can be challenging. This includes identifying code responsibilities or cataloging all code. Initial information can be sourced from enterprise architecture repositories, such as [LeanIX](https://www.leanix.net/) or [Ado IT](https://www.boc-group.com/de/adoit/), providing insights into application and solution responsibilities. Further data can be gathered from code repositories such as gitlab, github, AWS/GCP/Azure, pipelines, and runtime environments, while usage data can be obtained through logging or API monitoring. Teams may need to supply additional information, such as updates on application statuses. This information can be sourced from the architecture repositories or by adding new status fields in program management environments. Encouraging teams to contribute is achieved through transparency of contributions and sensible [nudging](https://en.wikipedia.org/wiki/Nudge_(book)) of the teams.

### Delivering Information to the Teams

The distribution of information on progress can be done in different ways: We have tried public dashboards, update newsletters, slack chatbots, or discussions as part of the monthly team meetings, etc. . Furthermore, the numbers can be part of the program status meetings. Physical rewards can provide a tangible acknowledgement of a team's contributions, fueling their motivation to advance the migration. It is also crucial to recognize that progress may vary across teams due to differing circumstances and challenges. This variation results in a natural shift in focus over time, ensuring different teams receive attention and recognition at different stages of the project. In this dynamic environment, consistent encouragement and rewards can serve to maintain overall momentum and create a spirit of collective achievement.

### The Technical Implementation

Implementing solutions for measuring enterprise modernization involve selecting the right metrics to track, setting up a reliable data collection and analysis system, designing an engaging dashboard and communication channels. 

The concrete implementation can be done by leveraging different technology stacks - It really depends on the actual transformation task you are up to. In the second part of this blog article we will give you concrete ideas about architecture and implementation of a solution for monitoring modernization.

If you want to discuss your modernization program with us, please feel free to reach out to us immediately via email (info@fwdnow.io) . We would like to schedule a 20 min meeting with you for a quick check and the potential approaches to make your transformation program measurable.

**Links**
- https://penpoin.com/pinks-theory-of-motivation/
- https://lookerstudio.google.com/
