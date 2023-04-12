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
* [Spring Data DynamoDB](https://github.com/boostchicken/spring-data-dynamodb/blob/develop/README.md)
* [Amazon DynamoDB developer guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
* [AWS Java SDK for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a GraphQL service](https://spring.io/guides/gs/graphql-server/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Cheat sheet for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CheatSheet.html)

##Local Testing

###Running Dynamodb instance locally

* [One time setup] Use this guide to install and run dynamodb in local [DynamoDBLocal.DownloadingAndRunning](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
* [One time setup] Run `local_db_init.sh` to create all tables and populate City and Sport tables  

###Running Application
####Using IDE

**Initial setup**
* Install IntelliJ
* Run IntelliJ, click open and select platform directory (not home) in repo. 
* Setup project SDK to coretto-17
* Go to setting/preferences, search gradle. In Build tools>Gradle select coretto-17
* Go to Run>Edit Configurations and add `spring.profiles.active=dev` in environment variables
* Run PlatformApplication.java by clicking play icon in file.

####Using Terminal

//TODO

###Testing Queries/mutations
* Once server is up, open http://localhost:8080/graphiql
* Try queries/mutation
* Sample queries
  *  Add event (Only add 1/2 days future date-time to view this while querying city)
```aidl
mutation {
  createEvent(input: {
    cityId: "1"
    charges: 200
    sportsVenueId: "1680632179435" // update this with sportsVenueId in local, check value by running query mentioned below.
    startTime: "2023-04-13T11:00+0530" //Update it.
    endTime: "2023-04-13T12:00+0530" //Update it.
    reservedPlayersCount: 14,
    waitListPlayersCount: 5
  }) {
    isSuccessful
  }
}
```
  * Search event, sports venues
```aidl
query {
  city(cityId: "1") {
    cityId
    cityName
    sportsVenues {
      sportsVenueId
      displayName
      googleMapsLink
      availableSportsIds
    }
    events {
      displayId
      displayTitle
      venueLocationLink
      charges
      reservedPlayersList {
        displayName
      }
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
      whatsAppNumber: "9876"
      firstName: "Vardhan"
    }
  }) {
    isSuccessful
  }
}
```




### Additional Links
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

