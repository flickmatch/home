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

### Basic setup
* Install Java coretto-17, Gradle. Verify installation by running `java --version` and `gradle --version` in terminal.
* Install postman.
* [Optional] install aws CLI
* Set up AWS credentials using SOP https://docs.google.com/document/d/1CKlucg8TiFdQLcRTRgTmlalzUyMWF-HF2WzFVLqI474/edit?usp=sharing


### IDE Setup

#### IntelliJ
* Install IntelliJ
* Run IntelliJ, click open and select platform directory (not home) in repo.
* Setup project SDK to coretto-17
* Go to setting/preferences, search gradle. In Build tools>Gradle select coretto-17

**Note**: If you prefer to use other IDEs, please add steps in this section.

## Local Testing

### Running Application

* Run command `./gradlew bootRun --args='--spring.profiles.active=beta'` in **/platform/* directory.
* This command will start the application in local which will use beta dynamoDB tables.
* If you want to use local instance of dynamoDB for development follow steps mentioned in addition resources.

### Testing Queries/mutations

* Add integration tests, and run `gradle clean build`. This command will run all tests and build application.

#### Manual testing
* Once server is up, open http://localhost:8080/graphiql in browser. (or http://localhost:8080/graphql in postman)
* Try queries/mutation
* Sample queries
  * Add event (Only add 1/2 days future date-time to view this while querying city)
  * SOP: https://docs.google.com/document/d/1ApqofKwYePEf5YEsPg8hUQHKw_op0win-yzkzDfY9c0/edit#heading=h.vubfe6ogz3q0
```aidl
mutation {
  createEvent(input: {
    cityId: "1"
    charges: 200
    sportsVenueId: "1680632179435"
    startTime: "2023-04-13T11:00+0530"
    endTime: "2023-04-13T12:00+0530"
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

### Additional Resources
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

#### Running Dynamodb instance locally

* [One time setup] Use this guide to install and run dynamodb in local [DynamoDBLocal.DownloadingAndRunning](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
* [One time setup] Run `local_db_init.sh` to create all tables and populate City and Sport tables  
* To hit local dynamoDB set `spring.profiles.active=dev` in command to start application.

### Server errors and their resolution

*  tomcat runs on 8443 but to avoid using port number in https url we need to forward 443 to 8443
*  Fix : sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 8443