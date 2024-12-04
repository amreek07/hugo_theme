---
title: "IoT in Fluid Storage and Management"
date: 2023-10-10T15:11:53+02:00
tags:  ["Architecture", "Repository"]
author: "Kai Herings"
featured: true
draft: false
icon: 'services/service-icon-iot.png'
weight: 0
heroHeading: IoT in Fluid Storage and Management
heroBackground: 'https://images.unsplash.com/photo-1560320652-6acbefacb0fd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600'
original: yes
---

###### IoT in Fluid Storage and Management

This article gives you an overview of an approach to collect measurements in a distributed IoT setup. The challenges of fluid storage and management can be generalized to other IoT use-cases.

In general, storage reservoirs and tanks for water are placed where water is collected not where it is logistically sound to have the water. Remoteness is a constant challenge. In order to monitor such locations we have developed an IoT network to monitor water levels. A network, bolstered by 5G or potentially other technologies such as StarLink, bridges the distance, enveloping our tanks in a secure web of connectivity through VPNs. In the future, the measurement nodes will be run fully off-grid via a solar power supply. This foundational layer of technology ensures a seamless and uninterrupted flow of real-time data, even from the most isolated locations. We have engaged in the journey to develop a fully independent network of sensor nodes. 

The solution can be leveraged in different contexts, e.g., agriculture and irrigation, industrial use-cases, smart cities, utilities and water management, mining and extraction, construction, or transportation and logistics.

![Dashboard](/images/blog/dashboard.jpeg)

## **Sensors: Our Eyes and Ears**

Precision is important when it comes to monitoring fluid storage tanks. An array of sensor technologies plays a crucial role:

- **Sonar sensors**: Demonstrating prowess in detecting fluid levels through container walls with an extraordinary precision down to the millimeter. This type of sensor has the advantage of not interfering with the stored contents.

![small](/images/blog/sonarsensor.jpg)


- **Submersion sensors**: A versatile alternative, ensuring that our system retains a resilient accuracy, adapting to various monitoring needs and conditions.

![small](/images/blog/submersionsensor.jpg?width=120px&height=60px)

- **Existing industrial controller infrastructure**: Water management infrastructure is often run by Industrial PLCs, such as Siemens S7 or similar. Extracting information from these systems is an additional data source to our monitoring system.

![small](/images/blog/s7.png)


## Use Cases


IoT Data acquisition systems are not only about  collecting data—it is about leveraging this information strategically for:

- **Monitoring and forecasting**: Continuously keeping tabs on water levels, enabling accurate forecasts that serve as a backbone for logistical and operational planning.
- **Spill prediction**: Utilizing data to anticipate potential spill events, allowing for proactive measures to prevent environmental and material losses.
- **Irrigation planning**: Guiding irrigation strategies through precise water level data, ensuring that water usage is optimized, and waste is minimized.

![small](/images/blog/metalcontainers.jpg)
Industrial Applications

![small](/images/blog/plasticcontainers.jpg)
Smart city water logistics

**Iterative optimization of the solution**






We have started the solution by 

- Building the sensor electronic from scratch, based on electronic components and prototyping boards. (The integration with manufactured printed circuit boards will also be documented in this Blog series.)
- The infrastructure and network layer with on-prem, VPN and GCP components.
- Security with encryption and zero-trust aspects.
- The IoT data distribition backbone with MQTT libraries and brokers, such as [Paho-Mqtt](https://pypi.org/project/paho-mqtt/) and [HiveMQ](https://www.hivemq.com/developers/community/)
- The data storage layer with a timeseries DB in our case [Apache IoTDB](https://iotdb.apache.org/)
- The  visualization of key business questions in several dashboards
- Iterative improvement of robustness.

![Architecture](/images/blog/iotarch.jpg)

**Cloud-Native Agility**

Google Cloud Platform (GCP) is woven into our technological fabric, offering a resilient and scalable environment. Containers within GCP facilitate a seamless management and aggregation of data, allowing workloads to operate with enhanced efficiency and reliability.

**Code Management and Deployment**

Innovation is continuous within our ecosystem. GitLab houses our code, fostering a collaborative development environment. A streamlined CI/CD pipeline pushes our code, enabling a fluid integration of updates and enhancements into the operational system.

**Conclusion: Crafting a Resilient and Strategic IoT Ecosystem**

Our journey is a tapestry of technological innovation, each thread—from sensors to cloud technologies—interweaving to create a resilient and strategic IoT ecosystem. At its core, our system strives to convert data into actionable insights, driving forward strategies in monitoring, spill prevention, and irrigation planning for effective and sustainable fluid storage management.

We believe in the power of collaboration and tailored solutions. If you find resonance with our approach and believe that a bespoke technological solution could enhance your operations, we are here to listen, understand, and collaborate.

Feel free to reach out to us at [info@fwdnow.io](mailto:info@fwdnow.io), and talk to Kai to explore with you the potential pathways to a solution that aligns seamlessly with your specific needs and objectives. Together, we can navigate the complexities and unlock new opportunities in custom IoT solutions.


