# Read Me First
The following was discovered as part of building this project:

* The JVM level was changed from '11' to '17', review the [JDK Version Range](https://github.com/spring-projects/spring-framework/wiki/Spring-Framework-Versions#jdk-version-range) on the wiki for more details.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.0.4/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.0.4/gradle-plugin/reference/html/#build-image)
* [Spring for GraphQL](https://docs.spring.io/spring-boot/docs/3.0.4/reference/html/web.html#web.graphql)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/3.0.4/reference/htmlsingle/#data.sql.jpa-and-spring-data)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a GraphQL service](https://spring.io/guides/gs/graphql-server/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)

###Local Testing

####Using IDE

**Initial setup**
* Install IntelliJ
* Open project
* Setup project SDK to coretto-17
* Go to setting/preferences, search gradle. In Build tools>Gradle select coretto-17
* Run PlatformApplication

**Testing Queries/mutations**
* Once server is up, open http://localhost:8080/graphiql
* Try queries/mutation
* Sample queries
  *  Add event
```aidl
mutation {
  createEvent(input: {
    city: GURGAON
    dateTime: "18-03-2023"
    moderatorId: "1"
    charges: 300
    sportsVenueId: "1"
    players:{
      whatsAppNumber: 12345
      firstName: "Harsh"
    }
  }) {
    isSuccessful
  }
}
```
  * Search event
```aidl
query {
  events(city: GURGAON) {
    eventId
    city
    dateTime
    players {
      whatsAppNumber
      firstName
    }
  }
}
```
  * Add new player, After running below mutation run query mentioned in step "Search event" to check if player is added.
```aidl
mutation {
  joinEvent(input: {
    eventId: "1"
    player:{
      whatsAppNumber: 9876
      firstName: "Vardhan"
    }
  }) {
    isSuccessful
  }
}
```


####Using Terminal

//TODO

### Additional Links
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

