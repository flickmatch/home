const gamesData = {
  games: [
    {
      cityId: 2,
      date: '2023-04-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"uday"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"185"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-04-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-04-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Hriday"}}},{"M":{"name":{"S":"hemanth"}}},{"M":{"name":{"S":"Ausaf"}}},{"M":{"name":{"S":"Hemakumar"}}},{"M":{"name":{"S":"Ranjith"}}},{"M":{"name":{"S":"Sujith"}}},{"M":{"name":{"S":"Aravind"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"195"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-04-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-30T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Vishesh"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Ausaf"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Aman Mishra"}}},{"M":{"name":{"S":"Haarish"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-02T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-02T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vishesh"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Shiva"}}},{"M":{"name":{"S":"Ausaf"}}},{"M":{"name":{"S":"Ayushman"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Ankit Kumar"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Sidda"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-04T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-04T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda+2"}}},{"M":{"name":{"S":"Sanjith"}}},{"M":{"name":{"S":"Yash"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Shiva"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Pravomh"}}},{"M":{"name":{"S":"Uday + 1"}}},{"M":{"name":{"S":"Sanjith+1"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-08T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aman Mishra"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sidda+1"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-10T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sagnik"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Aman Mishra"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sidda+1"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Pravomh"}}},{"M":{"name":{"S":"Haris"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Sayan"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"sportName":{"S":"Football"},"startTime":{"S":"2023-05-11T15:00:00.000Z"},"endTime":{"S":"2023-05-11T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ankur"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Shiva"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Aman Mishra"}}},{"M":{"name":{"S":"Vignesh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-12T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ankur"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-13T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-13T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Ankur"}}},{"M":{"name":{"S":"Priyank"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Shiva Paid"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Ayushman"}}},{"M":{"name":{"S":"Poojan paid"}}},{"M":{"name":{"S":"Ravi"}}},{"M":{"name":{"S":"Sibasish"}}},{"M":{"name":{"S":"Aniket"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sagnik"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Dhruv"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-15T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-15T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ankur"}}},{"M":{"name":{"S":"Hemakumar"}}},{"M":{"name":{"S":"Venkat kamal"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-16T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-16T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ankur"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-17T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-17T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ankur"}}},{"M":{"name":{"S":"Priyank"}}},{"M":{"name":{"S":"Ausaf"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-19T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-19T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rudradeep"}}},{"M":{"name":{"S":"Jaxz"}}},{"M":{"name":{"S":"Satya"}}},{"M":{"name":{"S":"Pravomh"}}},{"M":{"name":{"S":"Hemakumar"}}},{"M":{"name":{"S":"Shiva"}}},{"M":{"name":{"S":"Sidda+1"}}},{"M":{"name":{"S":"Divyanshu"}}},{"M":{"name":{"S":"Vedanshu"}}},{"M":{"name":{"S":"Sidda"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aashish"}}},{"M":{"name":{"S":"Abhijith"}}},{"M":{"name":{"S":"Kanhaiya"}}},{"M":{"name":{"S":"Ankitesh"}}},{"M":{"name":{"S":"Rohit singh"}}},{"M":{"name":{"S":"Sandeep"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Teja"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-21T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-21T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"venkat kamal"}}},{"M":{"name":{"S":"Debanjan"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sibasish"}}},{"M":{"name":{"S":"Sidda+1"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Dhruv"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Rohit Singh paid"}}},{"M":{"name":{"S":"Kanhaiya paid"}}},{"M":{"name":{"S":"Ankitesh paid"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Sibasish"}}},{"M":{"name":{"S":"Sagnik"}}},{"M":{"name":{"S":"Vicky"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Satya"}}},{"M":{"name":{"S":"Poojan"}}},{"M":{"name":{"S":"Ayush"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Arijit"}}},{"M":{"name":{"S":"Ayush"}}},{"M":{"name":{"S":"Ishaan"}}},{"M":{"name":{"S":"Ayushman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-27T12:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-27T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Tirtha paid"}}},{"M":{"name":{"S":"Projjal paid"}}},{"M":{"name":{"S":"Rudradeep paid"}}},{"M":{"name":{"S":"Ujjawal paid"}}},{"M":{"name":{"S":"Priyank paid previously"}}},{"M":{"name":{"S":"Pravomh paid"}}},{"M":{"name":{"S":"Abhijith paid"}}},{"M":{"name":{"S":"Satya paid"}}},{"M":{"name":{"S":"Ayushman"}}},{"M":{"name":{"S":"Avi paid"}}},{"M":{"name":{"S":"Abhishek (t)"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-28T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-28T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Aman"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-05-29T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-29T16:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Avi"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Saksham+1"}}},{"M":{"name":{"S":"Akash"}}},{"M":{"name":{"S":"Shiva"}}},{"M":{"name":{"S":"Sagnik"}}},{"M":{"name":{"S":"Rajdeep"}}},{"M":{"name":{"S":"Bhotu"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-05-29T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-29T18:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-05-30T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-30T16:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-05-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"GK"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Prudhvi"}}},{"M":{"name":{"S":"Vihari"}}},{"M":{"name":{"S":"Vivek"}}},{"M":{"name":{"S":"Abu"}}},{"M":{"name":{"S":"Uttam"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-05-31T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-31T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Lijo"}}},{"M":{"name":{"S":"Ashwin"}}},{"M":{"name":{"S":"Dhruv - Paid"}}},{"M":{"name":{"S":"Deepak"}}},{"M":{"name":{"S":"Aakrit"}}},{"M":{"name":{"S":"Arindam (@⁨~Arindam⁩ )"}}},{"M":{"name":{"S":"Vishal"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-03T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-03T18:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Divyanshu"}}}]},"venueName":{"S":"Roofers Gachibowli"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/UNr2hwqwA1UijjnG9"},"index":{"N":"1"},"startTime":{"S":"2023-06-04T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sukul"}}},{"M":{"name":{"S":"Sarin"}}}]},"venueName":{"S":"Roofers Gachibowli"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/UNr2hwqwA1UijjnG9"},"index":{"N":"1"},"startTime":{"S":"2023-06-05T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sukul"}}},{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"Roofers Gachibowli"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/UNr2hwqwA1UijjnG9"},"index":{"N":"1"},"startTime":{"S":"2023-06-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sukul"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Sarin"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Lavesh+1"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"startTime":{"S":"2023-06-08T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Rinil"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Sai"}}},{"M":{"name":{"S":"Divyanshu"}}},{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Poojan"}}},{"M":{"name":{"S":"Aravind"}}},{"M":{"name":{"S":"Midhun"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"startTime":{"S":"2023-06-11T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-11T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Shivank"}}},{"M":{"name":{"S":"Venkatkamal"}}},{"M":{"name":{"S":"Ekansh"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"startTime":{"S":"2023-06-13T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-13T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Vishnu"}}},{"M":{"name":{"S":"Tanay"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Basi"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Sukul"}}},{"M":{"name":{"S":"Shivank"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Anant"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"startTime":{"S":"2023-06-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-14T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Tsering"}}},{"M":{"name":{"S":"Tanay"}}},{"M":{"name":{"S":"Atishay"}}},{"M":{"name":{"S":"Atishay+1"}}},{"M":{"name":{"S":"Mohammed"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Ekansh"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"startTime":{"S":"2023-06-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Jayraj"}}},{"M":{"name":{"S":"Sujay"}}},{"M":{"name":{"S":"Sameer"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Venkat Kamal"}}},{"M":{"name":{"S":"Subhathish"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Siddu"}}},{"M":{"name":{"S":"Tanay"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"startTime":{"S":"2023-06-18T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-18T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Basi"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Debanjan"}}},{"M":{"name":{"S":"Pratyush"}}},{"M":{"name":{"S":"Basi +1"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-06-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Saarthak"}}},{"M":{"name":{"S":"Moin"}}},{"M":{"name":{"S":"Sarin"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-20T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet+1 paid"}}},{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Satya paid"}}},{"M":{"name":{"S":"Abhijith paid"}}},{"M":{"name":{"S":"Vishesh paid"}}},{"M":{"name":{"S":"Saarthak paid"}}},{"M":{"name":{"S":"Sukul paid"}}},{"M":{"name":{"S":"Priyank - paid"}}},{"M":{"name":{"S":"Rahul(priyank+1) - paid"}}},{"M":{"name":{"S":"Dhruv - paid"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-23T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-23T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-06-23T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-23T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Shrek(Sreekanth)"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Hemakumar"}}},{"M":{"name":{"S":"Meet - Paid"}}},{"M":{"name":{"S":"Prasanna Kumar"}}},{"M":{"name":{"S":"Raul"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-24T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-24T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashwin - paid"}}},{"M":{"name":{"S":"Nabeel"}}},{"M":{"name":{"S":"Satya"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Saksham - paid"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Pankaj"}}},{"M":{"name":{"S":"Abhay"}}},{"M":{"name":{"S":"Ashvin"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Sanjith"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Deepak"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-25T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-25T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-06-25T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-25T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Basi"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Kathik"}}},{"M":{"name":{"S":"Moin"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-27T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-27T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ani paid"}}},{"M":{"name":{"S":"Basi paid"}}},{"M":{"name":{"S":"Nikhil paid"}}},{"M":{"name":{"S":"Tom paid"}}},{"M":{"name":{"S":"Saarthak paid"}}},{"M":{"name":{"S":"Anant paid"}}},{"M":{"name":{"S":"Rudra paid"}}},{"M":{"name":{"S":"Sriram - paid"}}},{"M":{"name":{"S":"Poojan Paid"}}},{"M":{"name":{"S":"Ayush paid"}}},{"M":{"name":{"S":"Ujjawal"}}},{"M":{"name":{"S":"Tsering"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-06-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Basi"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Tsering"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Deepak"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Dhruv"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-29T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-29T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-06-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Prasenjit"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-06-30T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Davidson"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aabhas"}}},{"M":{"name":{"S":"Abhay"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-01T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-01T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"UN"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Priyank"}}},{"M":{"name":{"S":"Rohan (t)"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-03T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-03T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dhruv - Paid"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Satya"}}},{"M":{"name":{"S":"Karthik paid"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Sukhman paid"}}},{"M":{"name":{"S":"Sidda- paid"}}},{"M":{"name":{"S":"Sameer- Paid"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-04T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-04T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Basi"}}},{"M":{"name":{"S":"Sidda"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-05T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Debanjan"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Vk"}}},{"M":{"name":{"S":"Subhathish"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-06T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-06T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Sanan"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-07T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-07T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ekansh"}}},{"M":{"name":{"S":"Nadeem Paid"}}},{"M":{"name":{"S":"Ankur"}}},{"M":{"name":{"S":"Rudra"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-08T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-08T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Avi"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aditya ✅"}}},{"M":{"name":{"S":"Ritesh ✅"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Rudra"}}},{"M":{"name":{"S":"Debanjan"}}},{"M":{"name":{"S":"Soumya"}}},{"M":{"name":{"S":"Nadeem ✅"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-09T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-09T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aman paid"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Saksham paid"}}},{"M":{"name":{"S":"Aakash paid"}}},{"M":{"name":{"S":"Sidda paid"}}},{"M":{"name":{"S":"Aditya ✅"}}},{"M":{"name":{"S":"Ritesh✅"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-10T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Muba"}}}]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"1"},"startTime":{"S":"2023-07-12T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-12T16:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aditya +1 paid"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Aditya paid"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Lavesh + 1"}}},{"M":{"name":{"S":"Aravind"}}},{"M":{"name":{"S":"Akshay"}}},{"M":{"name":{"S":"Lavesh"}}}]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"1"},"startTime":{"S":"2023-07-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarin"}}},{"M":{"name":{"S":"Ayushman"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Pranay"}}},{"M":{"name":{"S":"Ekansh"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Yash"}}},{"M":{"name":{"S":"Aravind"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-15T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-15T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda+1-paid"}}},{"M":{"name":{"S":"Hritik - Paid"}}},{"M":{"name":{"S":"Lavesh - Paid"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Louis confirm(doesn\'t have a UPI yet)"}}},{"M":{"name":{"S":"Dhruv paid"}}},{"M":{"name":{"S":"Satya - Paid"}}},{"M":{"name":{"S":"Pranav paid"}}},{"M":{"name":{"S":"Karthik paid"}}},{"M":{"name":{"S":"Sidda-paid"}}},{"M":{"name":{"S":"Vk"}}},{"M":{"name":{"S":"Ayushman"}}},{"M":{"name":{"S":"Aravind"}}},{"M":{"name":{"S":"Rinil"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-16T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-16T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Vishesh"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Prasenjit"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vardhan"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-07-19T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-04T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aman Mishra"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Ritesh"}}},{"M":{"name":{"S":"Pranav"}}},{"M":{"name":{"S":"Vk"}}},{"M":{"name":{"S":"Sidda"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-07-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vardhan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Satish"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Manoj"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Atif"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Suraj"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kaushal"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kishore"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Sahil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Margo"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"John"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Dravid"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rahul"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-07-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-20T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"0"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rahul"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Himanshu"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Samarth"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rohan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kapil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Saurabh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Parth"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Manoj"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Manish"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Keshav"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Ankur"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Aslam"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Naresh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Darpan"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-07-21T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"2"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Suraj"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Satish"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Vardhan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Vardhman"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Chetan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rahul"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Dravid"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"John"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Satish"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Sameer"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Nimesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Gaurav"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Sarvesh"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"2"},"startTime":{"S":"2023-07-21T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"2"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Aslam"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Asmit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Astitva"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Abhimanyu"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Anmol"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Ramesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Parth"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kiyan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rishab"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"3"},"startTime":{"S":"2023-07-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"0"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ravindra"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Hardik"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Yuvraj Singh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Jasprit Bumrah"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kapil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mukesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"MS Dhoni"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rohit Sharma"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Virat Kohli"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Abhishek"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"4"},"startTime":{"S":"2023-07-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"0"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aditya @⁨~Aditya Choudhary⁩"}}},{"M":{"name":{"S":"Pranav"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"5"},"startTime":{"S":"2023-07-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Ani"}}},{"M":{"name":{"S":"Basi"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sidda+1"}}},{"M":{"name":{"S":"Sidda+2"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-22T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-22T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sourabh"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"400"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-07-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"0"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aravind"}}},{"M":{"name":{"S":"Sarth"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Lingaraju"}}},{"M":{"name":{"S":"Hritik"}}},{"M":{"name":{"S":"Sibasish"}}},{"M":{"name":{"S":"Rinil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-07-23T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-23T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Ishaan"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Sidda"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Manit"}}},{"M":{"name":{"S":"Tsering"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sourabh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Sahil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kamlesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Santosh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Manoj"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mahesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Jenny"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rohan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Abhimanyu"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"400"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-07-27T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-27T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"0"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Sidda+2"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Ritesh"}}},{"M":{"name":{"S":"Satya Paid"}}},{"M":{"name":{"S":"Prateek confirm"}}},{"M":{"name":{"S":"Pranay paid"}}},{"M":{"name":{"S":"Sidda confirm"}}},{"M":{"name":{"S":"Sidda+1 confirm"}}},{"M":{"name":{"S":"Aman paid"}}},{"M":{"name":{"S":"Vk"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-07-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda+2"}}},{"M":{"name":{"S":"Satya"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Pranay"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Sidda+1"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Vybhav+1"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-30T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-30T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-07-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Lavesh confirm"}}},{"M":{"name":{"S":"Louis confirm"}}},{"M":{"name":{"S":"Aditya ✅"}}},{"M":{"name":{"S":"Deepak confirm"}}},{"M":{"name":{"S":"Sagnik confirm"}}},{"M":{"name":{"S":"Sidda confirm"}}},{"M":{"name":{"S":"Pranav confirm"}}},{"M":{"name":{"S":"Aditya confirm"}}},{"M":{"name":{"S":"Harshit confirm"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-07-31T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-31T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Anant"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Salman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-02T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant - Paid"}}},{"M":{"name":{"S":"Vamshi - Paid"}}},{"M":{"name":{"S":"Aman ✅"}}},{"M":{"name":{"S":"Krishna - paid"}}},{"M":{"name":{"S":"Louis - confirm"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash-paid"}}},{"M":{"name":{"S":"Lavesh -Paid"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"rishabh -paid"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-03T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Rohan confirmed"}}},{"M":{"name":{"S":"Aakash- paid"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Saksham - paid"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Debanjan Paid"}}},{"M":{"name":{"S":"Samarth paid"}}},{"M":{"name":{"S":"Aaradhya paid"}}},{"M":{"name":{"S":"Deepak  paid"}}},{"M":{"name":{"S":"Saud"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-05T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-05T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Aaradhya"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Ritesh"}}},{"M":{"name":{"S":"Hritik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-06T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-06T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-08T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-08T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Vk confirm"}}},{"M":{"name":{"S":"Krishna confirm"}}},{"M":{"name":{"S":"Lavesh -Paid"}}},{"M":{"name":{"S":"Sidda - paid"}}},{"M":{"name":{"S":"Vamshi - Paid"}}},{"M":{"name":{"S":"Himanshu -paid"}}},{"M":{"name":{"S":"Om - confirm"}}},{"M":{"name":{"S":"Vishnu"}}},{"M":{"name":{"S":"Sa’ud confirm"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-08-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kumar ✅"}}},{"M":{"name":{"S":"Vamsi ✅"}}},{"M":{"name":{"S":"Vibhav ✅"}}},{"M":{"name":{"S":"Faisal ✅"}}},{"M":{"name":{"S":"Akheel ✅"}}},{"M":{"name":{"S":"Deepak✅"}}},{"M":{"name":{"S":"Sidda✅"}}},{"M":{"name":{"S":"Prayas ✅"}}},{"M":{"name":{"S":"Abhishek✅"}}},{"M":{"name":{"S":"Aditya ✅"}}},{"M":{"name":{"S":"Avi✅"}}},{"M":{"name":{"S":"Pranav✅"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-09T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aditya"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-10T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Sidhu"}}},{"M":{"name":{"S":"Abhishek - Confirm"}}},{"M":{"name":{"S":"Tsering"}}},{"M":{"name":{"S":"Rishi - Confirm"}}},{"M":{"name":{"S":"Lavesh - Confirm"}}},{"M":{"name":{"S":"Himanshu - paid"}}},{"M":{"name":{"S":"Vybhav - Paid"}}},{"M":{"name":{"S":"Sidda - Paid"}}},{"M":{"name":{"S":"Raul"}}},{"M":{"name":{"S":"Aman Mishra paid"}}},{"M":{"name":{"S":"Vk confirm"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-11T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh Vardhan"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Rishi"}}},{"M":{"name":{"S":"@⁨~Shubham Agarwal⁩"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-08-13T11:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-13T12:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00g3g424Ag1o8EwbIU"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Poojan"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-08-13T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-13T14:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh Vardhan"}}},{"M":{"name":{"S":"Kunal"}}}]},"venueName":{"S":"Bsporty"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"startTime":{"S":"2023-08-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-14T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00g3g424Ag1o8EwbIU"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Osman"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Aditya"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-08-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-14T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-15T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rishi Confirm"}}},{"M":{"name":{"S":"Louis confirmed"}}},{"M":{"name":{"S":"Guillaume confirmed"}}},{"M":{"name":{"S":"Mathis confirmed"}}},{"M":{"name":{"S":"Sidda paid"}}},{"M":{"name":{"S":"Krishna ✅"}}},{"M":{"name":{"S":"Amk confirmed"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Lavesh confirmed"}}},{"M":{"name":{"S":"Himanshu paid"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-16T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-16T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh Vardhan"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Shubham"}}}]},"venueName":{"S":"Shooting Star club"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/j6QSd8dimFD9meSS6"},"index":{"N":"2"},"startTime":{"S":"2023-08-16T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-16T15:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh Vardhan"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Shubham"}}}]},"venueName":{"S":"Shooting Star club"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/j6QSd8dimFD9meSS6"},"index":{"N":"1"},"startTime":{"S":"2023-08-18T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-18T15:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/3cs17W8sY7uSg6YaEX"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aman Mishra"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"startTime":{"S":"2023-08-18T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-18T17:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aman Mishra"}}},{"M":{"name":{"S":"Krishna"}}},{"M":{"name":{"S":"Krishna+1"}}},{"M":{"name":{"S":"Poojan"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-19T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-19T15:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Giridhar"}}},{"M":{"name":{"S":"Rudra"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-20T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-20T15:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-21T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-21T16:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Giridhar"}}},{"M":{"name":{"S":"Vamshi"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-22T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-23T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Saad"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-24T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Faizan confirm"}}},{"M":{"name":{"S":"Pranay"}}},{"M":{"name":{"S":"Anant paid only 90 as 90 was pending from last time"}}},{"M":{"name":{"S":"Sibasish(will pay at the ground)"}}},{"M":{"name":{"S":"Poojan"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Adithya paid"}}},{"M":{"name":{"S":"junaid confirm"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-25T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Sunny"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Saad"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Dilip"}}},{"M":{"name":{"S":"Areeb"},"waNumber":{"S":"+918999964337"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-26T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-26T15:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"VK"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Chaitanya"}}},{"M":{"name":{"S":"Krishna"}}},{"M":{"name":{"S":"Likhit"}}},{"M":{"name":{"S":"Venkat"}}}]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"2"},"startTime":{"S":"2023-08-26T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-26T15:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aditya ✅"}}},{"M":{"name":{"S":"Amarpal✅"}}},{"M":{"name":{"S":"Rahul✅"}}},{"M":{"name":{"S":"Ahmad✅"}}},{"M":{"name":{"S":"Rohit✅"}}},{"M":{"name":{"S":"Dhruv paid"}}},{"M":{"name":{"S":"Milind paid"}}},{"M":{"name":{"S":"Selva✅"}}},{"M":{"name":{"S":"aman✅"}}},{"M":{"name":{"S":"Siddu✅"}}},{"M":{"name":{"S":"Sidda"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-27T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-27T15:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Vk confirm"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Geeth"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Sasidhar"}}},{"M":{"name":{"S":"Nishaanth"}}},{"M":{"name":{"S":"Dilip"}}},{"M":{"name":{"S":"Giridhar"}}},{"M":{"name":{"S":"Rudra"}}},{"M":{"name":{"S":"Ujjawal"}}},{"M":{"name":{"S":"Vamshi"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-28T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Jeevan"}}},{"M":{"name":{"S":"Vedant"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-29T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Kalash"}}}]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"160"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"2"},"startTime":{"S":"2023-08-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-29T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEeYMaB6aH4dYQ9AX"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Mathis"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Ismail"}}},{"M":{"name":{"S":"Kaustav"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Faisal"}}},{"M":{"name":{"S":"Jawad"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-30T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-08-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Pavan"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-08-31T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-31T16:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Azhar"}}},{"M":{"name":{"S":"Ziya"}}},{"M":{"name":{"S":"Pranay"}}},{"M":{"name":{"S":"Pavan"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Harsha"}}},{"M":{"name":{"S":"Giridhar"}}},{"M":{"name":{"S":"Aaryaman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"startTime":{"S":"2023-09-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Himesh"}}},{"M":{"name":{"S":"Sibashish"}}},{"M":{"name":{"S":"G1"}}},{"M":{"name":{"S":"Rishik"}}},{"M":{"name":{"S":"Tejas"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Sagar+1"}}},{"M":{"name":{"S":"Sagar+2"}}},{"M":{"name":{"S":"Osman"}}},{"M":{"name":{"S":"Avi"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-02T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-02T17:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Giridhar"}}},{"M":{"name":{"S":"Avi (paid)"}}},{"M":{"name":{"S":"Osman Paid"}}},{"M":{"name":{"S":"Harsha (confirmed)"}}},{"M":{"name":{"S":"Pavan(paid)"}}},{"M":{"name":{"S":"Mathis confirmed"}}},{"M":{"name":{"S":"Louis confirmed"}}},{"M":{"name":{"S":"Ziya (IN)"}}},{"M":{"name":{"S":"Sidda confirmed"}}},{"M":{"name":{"S":"Vamshi(Paid)"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Selva"}}},{"M":{"name":{"S":"Aman Mishra"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-09T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-09T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-10T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-10T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-11T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-11T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Giridhar"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Ganesh"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Poojan"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-13T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-13T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"himanshu"}}},{"M":{"name":{"S":"Meghraj"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"@⁨+91 95737 15831⁩"}}},{"M":{"name":{"S":"Shubhransh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-15T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-17T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/3cs5oc4cIbL8cUM28i"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Kanishk"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/3cs5oc4cIbL8cUM28i"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Krishna M"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Nishant"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-20T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mirza Paid"}}},{"M":{"name":{"S":"Rahul. Paid"}}},{"M":{"name":{"S":"Amarpal. Paid"}}},{"M":{"name":{"S":"Debanjan"}}},{"M":{"name":{"S":"rohit. paid"}}},{"M":{"name":{"S":"Poojan"}}},{"M":{"name":{"S":"Prem - Paid"}}},{"M":{"name":{"S":"Jaidev - Paid"}}},{"M":{"name":{"S":"VK - paid"}}},{"M":{"name":{"S":"Subbu confirm"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Tanay"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-22T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mirza"}}},{"M":{"name":{"S":"SANJITH"}}},{"M":{"name":{"S":"Selva"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Dhruv - paid"}}},{"M":{"name":{"S":"Kalash"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Lingaraju"}}},{"M":{"name":{"S":"Kaushik - paid"}}},{"M":{"name":{"S":"Deepak"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-23T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sameer"}}},{"M":{"name":{"S":"Arshad"}}},{"M":{"name":{"S":"Selva"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Poojan"}}},{"M":{"name":{"S":"Sibasish"}}},{"M":{"name":{"S":"Sunil"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-24T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Sriram"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-28T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-09-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Ayushman"}}},{"M":{"name":{"S":"Manu"}}},{"M":{"name":{"S":"Sudarshan"}}},{"M":{"name":{"S":"Vadi"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-30T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Guru"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Ahmed"}}},{"M":{"name":{"S":"Amer"}}},{"M":{"name":{"S":"Abdallah"}}},{"M":{"name":{"S":"Kalash"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-01T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-01T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-02T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-02T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-03T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-04T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-04T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-05T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-05T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-06T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-06T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-07T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-07T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-08T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Rishabh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-11T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ankit"}}},{"M":{"name":{"S":"Swapnil"}}},{"M":{"name":{"S":"Vibin"}}},{"M":{"name":{"S":"Selva"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Sameer"}}},{"M":{"name":{"S":"Rishabh N"}}},{"M":{"name":{"S":"Saish"}}},{"M":{"name":{"S":"Sriram"}}},{"M":{"name":{"S":"Ninad"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-14T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-14T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Tarun"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Harshal"}}},{"M":{"name":{"S":"Louis"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-16T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-16T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-17T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-17T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dhruv paid"}}},{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Sunil"}}},{"M":{"name":{"S":"Paarth paid (whatsapp payments)"}}},{"M":{"name":{"S":"YashP - paid"}}},{"M":{"name":{"S":"VD - paid"}}},{"M":{"name":{"S":"Pranjal - paid"}}},{"M":{"name":{"S":"Ritish - paid"}}},{"M":{"name":{"S":"Saurabh - paid"}}},{"M":{"name":{"S":"Ayush - paid"}}},{"M":{"name":{"S":"VishalV"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-18T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-19T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ishaan"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Ayush"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-21T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-21T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ishaan"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Ayush"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-22T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-22T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Lavankit"}}},{"M":{"name":{"S":"Yash"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Sameer *paid*"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-22T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-22T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aakash paid"}}},{"M":{"name":{"S":"Vybhav confirm"}}},{"M":{"name":{"S":"venkat confirm"}}},{"M":{"name":{"S":"Vishnu confirm"}}},{"M":{"name":{"S":"Sunil"}}},{"M":{"name":{"S":"VK confirm"}}},{"M":{"name":{"S":"Abhay Paid"}}},{"M":{"name":{"S":"likhit confirm"}}},{"M":{"name":{"S":"krishna confirm"}}},{"M":{"name":{"S":"Saksham paid"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-23T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-23T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pranjal Paid"}}},{"M":{"name":{"S":"Abhay Paid"}}},{"M":{"name":{"S":"Paarth paid"}}},{"M":{"name":{"S":"Dhruv paid"}}},{"M":{"name":{"S":"Tejas"}}},{"M":{"name":{"S":"Amarpal paid"}}},{"M":{"name":{"S":"Rohit paid"}}},{"M":{"name":{"S":"Rahul paid"}}},{"M":{"name":{"S":"Bharath  paid"}}},{"M":{"name":{"S":"Nadeem paid"}}},{"M":{"name":{"S":"Kartikey"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-25T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-25T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Aaradhya"}}},{"M":{"name":{"S":"Vybahv"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-26T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-26T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Kartikey"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-27T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-27T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhay"}}},{"M":{"name":{"S":"Kartikey"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Tejas"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-28T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-28T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Sameer"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-28T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-28T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Abhay"}}},{"M":{"name":{"S":"Narendra"}}},{"M":{"name":{"S":"Don Karthikeya"}}},{"M":{"name":{"S":"Avi"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-30T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-30T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-10-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-31T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-31T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-01T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-01T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-02T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Narendra-paid"}}},{"M":{"name":{"S":"Sunil"}}},{"M":{"name":{"S":"Anurag"}}},{"M":{"name":{"S":"salman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-02T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-02T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-03T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-03T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-03T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-04T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-04T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Krishna"}}},{"M":{"name":{"S":"Nikhilesh"}}},{"M":{"name":{"S":"Likhit"}}},{"M":{"name":{"S":"Tanay"}}},{"M":{"name":{"S":"Narendra-paid"}}},{"M":{"name":{"S":"Ankit"}}},{"M":{"name":{"S":"Swapnil"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-05T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-05T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-07T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-07T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Ashwin"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Jerry"}}},{"M":{"name":{"S":"Vybhav"}}},{"M":{"name":{"S":"Sunil"}}},{"M":{"name":{"S":"Saksham"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-08T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-08T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-09T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-09T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-11T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Mathis"}}},{"M":{"name":{"S":"Jerry"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-12T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-15T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-15T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-19T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Raul"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"VK"}}},{"M":{"name":{"S":"Sidda"}}},{"M":{"name":{"S":"Rohit"}}},{"M":{"name":{"S":"Sidda+1"}}},{"M":{"name":{"S":"Krishna"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-24T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Tejas"}}},{"M":{"name":{"S":"Swapnil"}}},{"M":{"name":{"S":"VishalV"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-27T10:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-27T11:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Swapnil"}}},{"M":{"name":{"S":"Sunil"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Swapnil"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Rahil"}}},{"M":{"name":{"S":"Saad"}}},{"M":{"name":{"S":"Vamshi"}}},{"M":{"name":{"S":"Junaid"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-11-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Salman"}}},{"M":{"name":{"S":"Avi + 1"}}},{"M":{"name":{"S":"paarth"}}},{"M":{"name":{"S":"Yudh"}}},{"M":{"name":{"S":"Akarsh"}}},{"M":{"name":{"S":"Rishabh"}}},{"M":{"name":{"S":"Harshit"}}},{"M":{"name":{"S":"Avi"}}},{"M":{"name":{"S":"Nadeem"}}},{"M":{"name":{"S":"Sunil"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-30T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-05T12:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-05T13:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"paarth"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Avi"}}},{"M":{"name":{"S":"VishalV"}}},{"M":{"name":{"S":"Akarsh"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Kartikey"}}},{"M":{"name":{"S":"Vamshi"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-07T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-07T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Salman"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Anurag"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Salman"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Anurag"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-12T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-12T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Salman"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Himanshu"}}},{"M":{"name":{"S":"Lavesh"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"Anurag"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-13T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-13T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Loalith"}}},{"M":{"name":{"S":"Medhansh"}}},{"M":{"name":{"S":"Joy"}}},{"M":{"name":{"S":"Aju"}}},{"M":{"name":{"S":"Naheem"}}},{"M":{"name":{"S":"Sanjith"}}},{"M":{"name":{"S":"Fasal"}}},{"M":{"name":{"S":"Jasil"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"225"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-16T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Apoorv"}}},{"M":{"name":{"S":"Paarth"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Geeth"}}},{"M":{"name":{"S":"paarth"}}},{"M":{"name":{"S":"Dilip"}}},{"M":{"name":{"S":"Akarsh"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Salman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2023-12-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Bsporty"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-23T10:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-23T10:30:00.000Z"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"krishna"}}},{"M":{"name":{"S":"om"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"kaushik"}}},{"M":{"name":{"S":"Vk"}}},{"M":{"name":{"S":"Abhay"}}},{"M":{"name":{"S":"Akhilesh"}}},{"M":{"name":{"S":"Faizan"}}},{"M":{"name":{"S":"paarth"}}},{"M":{"name":{"S":"Salman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-23T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-03T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-03T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"harsh"},"waNumber":{"S":"9999999999"}}},{"M":{"name":{"S":"harsh vardhan"},"waNumber":{"S":"9999999999"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-06T08:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-06T09:30:00.000Z"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"krishna"}}},{"M":{"name":{"S":"om"}}},{"M":{"name":{"S":"⁠ ⁠Saksham"}}},{"M":{"name":{"S":"⁠ ⁠Aakash"}}},{"M":{"name":{"S":"kaushik"}}},{"M":{"name":{"S":"⁠ ⁠Vk"}}},{"M":{"name":{"S":"⁠ ⁠Abhay"}}},{"M":{"name":{"S":"⁠ ⁠Akhilesh"}}},{"M":{"name":{"S":"⁠ ⁠Faizan"}}},{"M":{"name":{"S":"⁠ ⁠paarth"}}},{"M":{"name":{"S":"⁠ ⁠Salman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-10T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-10T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"krishna"}}},{"M":{"name":{"S":"om"}}},{"M":{"name":{"S":"⁠ ⁠Saksham"}}},{"M":{"name":{"S":"⁠ ⁠Aakash"}}},{"M":{"name":{"S":"kaushik"}}},{"M":{"name":{"S":"⁠ ⁠Vk"}}},{"M":{"name":{"S":"⁠ ⁠Abhay"}}},{"M":{"name":{"S":"⁠ ⁠Akhilesh"}}},{"M":{"name":{"S":"⁠ ⁠Faizan"}}},{"M":{"name":{"S":"⁠ ⁠paarth"}}},{"M":{"name":{"S":"⁠ ⁠Salman"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-11T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"krishna"}}},{"M":{"name":{"S":"om"}}},{"M":{"name":{"S":"⁠ ⁠Saksham"}}},{"M":{"name":{"S":"⁠ ⁠Aakash"}}},{"M":{"name":{"S":"kaushik"}}},{"M":{"name":{"S":"⁠ ⁠Vk"}}},{"M":{"name":{"S":"⁠ ⁠Abhay"}}},{"M":{"name":{"S":"⁠ ⁠Akhilesh"}}},{"M":{"name":{"S":"⁠ ⁠Faizan"}}},{"M":{"name":{"S":"⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-16T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"krishna"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠Aakash"}}},{"M":{"name":{"S":"kaushik"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠Faizan"}}},{"M":{"name":{"S":"⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"sumit"},"waNumber":{"S":"8971829355"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"3"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-16T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-16T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-26T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-26T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"⁠ ⁠Sarthak"}}},{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Maulik"}}},{"M":{"name":{"S":"⁠ ⁠Aditya R"}}},{"M":{"name":{"S":"⁠ ⁠Govind"}}},{"M":{"name":{"S":"⁠ ⁠Nishant"}}},{"M":{"name":{"S":"⁠ ⁠Mridul"}}},{"M":{"name":{"S":"⁠ ⁠Abhimanyu"}}},{"M":{"name":{"S":"⁠ ⁠Abhimanyu"}}},{"M":{"name":{"S":"xyz"},"waNumber":{"S":"16507890395"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-26T14:38:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-29T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Sahil"}}},{"M":{"name":{"S":"⁠ ⁠Karthik"}}},{"M":{"name":{"S":"⁠ ⁠Anurag"}}},{"M":{"name":{"S":"⁠ ⁠Kumar"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-30T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-01-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-31T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-31T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-31T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-31T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-01T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-01T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-02T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-02T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mohammed Parvez"},"waNumber":{"S":"7842844254"}}},{"M":{"name":{"S":"Somak Nandy"},"waNumber":{"S":"9830234343"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-04T12:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-04T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-05T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"apoorv yadav"},"waNumber":{"S":"9680548081"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Raul Pacheco"},"waNumber":{"S":"9999563207"}}},{"M":{"name":{"S":"Lavesh Topani"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Himanshu Mishra"},"waNumber":{"S":"9012915241"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"AABEL FRANCIS"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Akhil Tom"},"waNumber":{"S":"9497582099"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"aman bassan"},"waNumber":{"S":"8897303701"}}},{"M":{"name":{"S":"Debanjan Saha"},"waNumber":{"S":"7585844620"}}},{"M":{"name":{"S":"ayush mohanty"},"waNumber":{"S":"9121212878"}}},{"M":{"name":{"S":"ayush mohanty"},"waNumber":{"S":"9121212878"}}},{"M":{"name":{"S":"sanjay yadav"},"waNumber":{"S":"8520074688"}}},{"M":{"name":{"S":"sanjay yadav"},"waNumber":{"S":"8520074688"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-07T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-07T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Himanshu Mishra"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Himanshu Mishra"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Raul Pacheco"},"waNumber":{"S":"9999563204"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-09T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-09T17:10:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"9704093598"}}},{"M":{"name":{"S":"Prudhvi Kolaventy"},"waNumber":{"S":"7675074148"}}},{"M":{"name":{"S":"Taha Khan"},"waNumber":{"S":"7893959047"}}},{"M":{"name":{"S":"Kantheti Surya Vihari"},"waNumber":{"S":"9573719819"}}},{"M":{"name":{"S":"san"},"waNumber":{"S":"9969176430"}}},{"M":{"name":{"S":"Sam Druk"},"waNumber":{"S":"8134839588"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-10T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"ahmad 5d"},"waNumber":{"S":"9160205501"}}},{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Sriram +1"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"ABDALLAH"},"waNumber":{"S":"6300403304"}}},{"M":{"name":{"S":"Amer 😎⚽️"},"waNumber":{"S":"9666835602"}}},{"M":{"name":{"S":"Harshal"},"waNumber":{"S":"9359159866"}}},{"M":{"name":{"S":"Sibasish Mohapatra"},"waNumber":{"S":"8249688035"}}},{"M":{"name":{"S":"swosti swaroop nayak(sibasish+1) "},"waNumber":{"S":"6370939432"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-11T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-11T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Louis"}}},{"M":{"name":{"S":"Mathis"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Lavesh Topani"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Himanshu Mishra"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Himanshu Mishra"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-13T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-13T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Sumeet Bisen"},"waNumber":{"S":"7757054286"}}},{"M":{"name":{"S":"Albin Santhosh"},"waNumber":{"S":"9945539333"}}},{"M":{"name":{"S":"Arman"},"waNumber":{"S":"8086701833"}}},{"M":{"name":{"S":"Arman"},"waNumber":{"S":"8086701833"}}},{"M":{"name":{"S":"Atreya Majumdar"},"waNumber":{"S":"9008430111"}}},{"M":{"name":{"S":"san"},"waNumber":{"S":"9939176430"}}},{"M":{"name":{"S":"Manan Maheshwari"},"waNumber":{"S":"9057229034"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-16T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"avijoy sircar"},"waNumber":{"S":"9949171877"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-17T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-17T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"sainath naidu"},"waNumber":{"S":"9550116903"}}},{"M":{"name":{"S":"avijoy sircar"},"waNumber":{"S":"9949171877"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Atreya Majumdar"},"waNumber":{"S":"9008430111"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"arman mohanty"},"waNumber":{"S":"8086701833"}}},{"M":{"name":{"S":"arman mohanty"},"waNumber":{"S":"8086701833"}}},{"M":{"name":{"S":"Albin Santhosh"},"waNumber":{"S":"9945539333"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-18T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-18T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Atreya Majumdar"},"waNumber":{"S":"9008430111"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-19T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-19T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-20T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-20T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"sainath naidu"},"waNumber":{"S":"9550116903"}}},{"M":{"name":{"S":"Takshit Mathur"},"waNumber":{"S":"9521452479"}}},{"M":{"name":{"S":"Atreya Majumdar"},"waNumber":{"S":"9008430111"}}},{"M":{"name":{"S":"Manan Maheshwari"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Sumeet Bisen"},"waNumber":{"S":"7757054286"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-23T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"avijoy sircar"},"waNumber":{"S":"9949171877"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-24T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-24T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"avijoy sircar"},"waNumber":{"S":"9949171877"}}},{"M":{"name":{"S":"sainath naidu"},"waNumber":{"S":"9550116903"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-25T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-25T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Souradip Guha"},"waNumber":{"S":"9740322939"}}},{"M":{"name":{"S":"AABEL FRANCIS"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Ankit kumar"},"waNumber":{"S":"7814429136"}}},{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-02-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaushik"}}},{"M":{"name":{"S":"Manan Maheshwari"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"san"},"waNumber":{"S":"9939176430"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-01T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Ayaan"}}},{"M":{"name":{"S":"⁠ ⁠Harshith"}}},{"M":{"name":{"S":"Lola"}}},{"M":{"name":{"S":"Sangeeth"}}},{"M":{"name":{"S":"⁠ ⁠Tarun"}}},{"M":{"name":{"S":"⁠ ⁠⁠Ismail"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠"}}}]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"275"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-01T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-01T15:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU3g424AdTgf2U7sU"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaushik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-02T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-02T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Rushabh Trivedi"},"waNumber":{"S":"8097070375"}}},{"M":{"name":{"S":"BRAJESH LAHOTI"},"waNumber":{"S":"9029309315"}}},{"M":{"name":{"S":"Pranay Mishra"},"waNumber":{"S":"6387700446"}}},{"M":{"name":{"S":"Meghaj"},"waNumber":{"S":"9521336208"}}},{"M":{"name":{"S":"Paritosh"},"waNumber":{"S":"9592226543"}}}]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"275"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-03T15:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU3g424AdTgf2U7sU"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Akarsh Rana"},"waNumber":{"S":"9458654394"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"swapnil pandey"},"waNumber":{"S":"9039011890"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-03T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"- Aman -"},"waNumber":{"S":"8688990551"}}},{"M":{"name":{"S":"- Aman -"},"waNumber":{"S":"8688990551"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"vedant gupta"},"waNumber":{"S":"9479804457"}}},{"M":{"name":{"S":"Sumit"},"waNumber":{"S":"8971829355"}}},{"M":{"name":{"S":"sumit2"},"waNumber":{"S":"8971829355"}}},{"M":{"name":{"S":"sumit3"},"waNumber":{"S":"8971829355"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"3"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-03T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Prince Patil"},"waNumber":{"S":"8698629706"}}},{"M":{"name":{"S":"Ananthu"},"waNumber":{"S":"8698629706"}}},{"M":{"name":{"S":"Sudhanshu"},"waNumber":{"S":"8698629706"}}},{"M":{"name":{"S":"Prasad"},"waNumber":{"S":"8698629706"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-04T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-04T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"225"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-05T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-05T14:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-05T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-05T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Gourav Prasad"},"waNumber":{"S":"9679926899"}}},{"M":{"name":{"S":"Louis "},"waNumber":{"S":"9063997014"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-06T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-07T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-08T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-08T14:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wMeYM5gM02q5sk7sW"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-09T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-09T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"vishal"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"dheeraj"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"ARATRIK DAS"},"waNumber":{"S":"8918488436"}}},{"M":{"name":{"S":"MaNu"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Girinath Ravichandran"},"waNumber":{"S":"8489466466"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}}]},"venueName":{"S":"Flipside"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/79uwaHCq2WPw3Bnf7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-10T11:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-10T12:30:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEg2QfVqg1o2g83cH"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-10T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"Flipside"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/79uwaHCq2WPw3Bnf7"},"index":{"N":"3"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-10T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"16"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"ALLAGADDA VISHAAL"},"waNumber":{"S":"7075578436"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Anvit Jaykar"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"krishaang D"},"waNumber":{"S":"7075578436"}}},{"M":{"name":{"S":"shantanu patel"},"waNumber":{"S":"9545021625"}}},{"M":{"name":{"S":"Lavesh Topani"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Himanshu Singh Chauhan"},"waNumber":{"S":"7217207721"}}},{"M":{"name":{"S":"swapnil pandey"},"waNumber":{"S":"9039011890"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Sarvesh Batra"},"waNumber":{"S":"8882339820"}}},{"M":{"name":{"S":"AABEL FRANCIS"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Athul Francis"},"waNumber":{"S":"8921629834"}}},{"M":{"name":{"S":"MANU"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Kumar Abhishek"},"waNumber":{"S":"9052260777"}}},{"M":{"name":{"S":"Kumar Abhishek"},"waNumber":{"S":"9052260777"}}},{"M":{"name":{"S":"Kumar Abhishek"},"waNumber":{"S":"9052260777"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Kaushik Bhupathi"},"waNumber":{"S":"8897938611"}}},{"M":{"name":{"S":"osman baig"},"waNumber":{"S":"7045605240"}}},{"M":{"name":{"S":"Aryan Kasliwal"},"waNumber":{"S":"6304080380"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Kailash H"},"waNumber":{"S":"9003055513"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-14T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dr. Naveen Atluru MD"},"waNumber":{"S":"9618766955"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek☑️"}}},{"M":{"name":{"S":"⁠"}}},{"M":{"name":{"S":"⁠⁠"}}}]},"venueName":{"S":"Turfside Jubilee"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/mgswQJGkwCfXDihP7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-15T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-15T14:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wMaIwbFaaH4cUM5kS"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Dr. Naveen Atluru MD"},"waNumber":{"S":"9618766955"}}},{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Shayak Sarkar"},"waNumber":{"S":"9382273226"}}},{"M":{"name":{"S":"AMAN MISHRA"},"waNumber":{"S":"+918264396557"}}},{"M":{"name":{"S":"prasannakumar "},"waNumber":{"S":"6309625150"}}},{"M":{"name":{"S":"Vamsi"},"waNumber":{"S":"6309625150"}}},{"M":{"name":{"S":"S.t.s.Hussain Harper"},"waNumber":{"S":"9182824922"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-15T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-15T17:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/14kbMAcJe02qdYQ4gr"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"Flipside"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/79uwaHCq2WPw3Bnf7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-16T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-16T17:00:00.000Z"},"reservedPlayersCount":{"N":"16"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"kanishk chaudhary"},"waNumber":{"S":"8527782410"}}},{"M":{"name":{"S":"swapnil pandey"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Rishu Raj"},"waNumber":{"S":"8134839588"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-17T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Guillaume"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Kaushik Bhupathi"},"waNumber":{"S":"8897938611"}}},{"M":{"name":{"S":"Lavesh Topani"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-18T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-18T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"Shashank k"},"waNumber":{"S":"9441057650"}}},{"M":{"name":{"S":"Minnat Patel"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Dhruv Murarka"},"waNumber":{"S":"9831326263"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-19T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-19T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}},{"M":{"name":{"S":"jatin chopra"},"waNumber":{"S":"7838266346"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-20T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"⁠ ⁠Karthik"}}}]},"venueName":{"S":"Flipside"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/79uwaHCq2WPw3Bnf7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"16"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Sahil"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dr. Naveen Atluru MD"},"waNumber":{"S":"9618766955"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Minnat Patel"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"san"},"waNumber":{"S":"9939176430"}}},{"M":{"name":{"S":"Ashwen Barathan"},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"9618067598"}}},{"M":{"name":{"S":"Sahil"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-22T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Rittam Das"},"waNumber":{"S":"8697422569"}}},{"M":{"name":{"S":"Debanjan goswami"},"waNumber":{"S":"7980969624"}}},{"M":{"name":{"S":"Ram Sawad"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Krishna Paladugu"},"waNumber":{"S":"8497922870"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-23T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR67wkeRm16ucUMaFf"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Wiki Dongre"},"waNumber":{"S":"9922095220"}}},{"M":{"name":{"S":"ashim garg"},"waNumber":{"S":"8447236637"}}},{"M":{"name":{"S":" Nimoo"},"waNumber":{"S":"6383265870"}}},{"M":{"name":{"S":"Hari Prasath"},"waNumber":{"S":"7397317891"}}},{"M":{"name":{"S":"Sayan Mitra"},"waNumber":{"S":"9932280740"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Sidda Chandan"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Rony Augustine"},"waNumber":{"S":"9995458844"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-24T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-24T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat Patel"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"9000966007"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shayak Sarkar"},"waNumber":{"S":"9382273226"}}},{"M":{"name":{"S":"Kailash H"},"waNumber":{"S":"9003055513"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"san"},"waNumber":{"S":"9939176430"}}},{"M":{"name":{"S":"kanishk chaudhary"},"waNumber":{"S":"8527782410"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet Singh"},"waNumber":{"S":"7376302257"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-29T16:09:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ram Sawad"},"waNumber":{"S":"8097486662"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-30T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-03-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"shashank kurella"},"waNumber":{"S":"9182122557"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"avijoy sircar"},"waNumber":{"S":"9949171877"}}},{"M":{"name":{"S":"Kaushik Parasu"},"waNumber":{"S":"8618388129"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-31T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-31T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat Patel"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Abhinav Sambyal"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"Lavesh Topani"},"waNumber":{"S":"8890728188"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-01T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-01T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-02T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-02T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vishnu bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"shashank kurella"},"waNumber":{"S":"9182122557"}}},{"M":{"name":{"S":"Dhruv"},"waNumber":{"S":"9"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Abhinav Sambyal"},"waNumber":{"S":"7006726700"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-03T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-03T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"177"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-04T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-04T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"18ME004 Agni"},"waNumber":{"S":"7708640050"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"Minnat Patel"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"san"},"waNumber":{"S":"9939176430"}}},{"M":{"name":{"S":"swapnil pandey"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"swapnil pandey"},"waNumber":{"S":"7843215687"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-05T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-05T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Akhil Reddy Anthamgari"},"waNumber":{"S":"9505938615"}}},{"M":{"name":{"S":"Anurag"},"waNumber":{"S":"9505938615"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}},{"M":{"name":{"S":"Adarsh Kolli"},"waNumber":{"S":"9704217799"}}},{"M":{"name":{"S":"Sibasish Mohapatra"},"waNumber":{"S":"8249688035"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-06T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-06T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dr. Naveen Atluru MD"},"waNumber":{"S":"9618766955"}}},{"M":{"name":{"S":"Sriram Yarlagadda"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"swapnil pandey"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Siddhant Chawla"},"waNumber":{"S":"8789386710"}}},{"M":{"name":{"S":"zaks Ahmed"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Somak Nandy"},"waNumber":{"S":"9830234343"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"Muhammed "},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-07T17:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-07T18:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Skandh Gairola"},"waNumber":{"S":"9560022962"}}},{"M":{"name":{"S":"Akshay Gundewar"},"waNumber":{"S":"9860648661"}}},{"M":{"name":{"S":"Manan Maheshwari"},"waNumber":{"S":"9057229034"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Subhodeep Das"},"waNumber":{"S":"9883735883"}}},{"M":{"name":{"S":"Kumar"},"waNumber":{"S":"9052260777"}}},{"M":{"name":{"S":"Rikesh"},"waNumber":{"S":"9052260777"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-09T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-10T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"AC"},"waNumber":{"S":"9999999999"}}},{"M":{"name":{"S":"Dr. Naveen Atluru MD"},"waNumber":{"S":"9618766955"}}}]},"venueName":{"S":"Flipside"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/79uwaHCq2WPw3Bnf7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-12T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE03S6kQ16udYQ7t4"},"waitListPlayersCount":{"N":"8"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shayak"},"waNumber":{"S":"9382273226"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Kumar"},"waNumber":{"S":"9052260777"}}},{"M":{"name":{"S":"Himanshu"},"waNumber":{"S":"9177079039"}}},{"M":{"name":{"S":"Rahul"},"waNumber":{"S":"8978884629"}}},{"M":{"name":{"S":"Rahul "},"waNumber":{"S":"8978884629"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-12T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-12T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Dheeraj"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"Vishal bhai"},"waNumber":{"S":"7893167376"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-13T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pardhu"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Pranav"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Harsha"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Eshwar"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Avijoy "},"waNumber":{"S":"9949171877"}}},{"M":{"name":{"S":"Nitish"},"waNumber":{"S":"9448373623"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Shaysk"},"waNumber":{"S":"9382273226"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-14T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-14T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsha"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Pardhu"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Pranav "},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Sandeep "},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Pepe"},"waNumber":{"S":"7036093747"}}},{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Aditya Mishra"},"waNumber":{"S":"9559004663"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-16T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Ninad"},"waNumber":{"S":"8788357434"}}},{"M":{"name":{"S":"zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Albin"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"Shayak"},"waNumber":{"S":"9382273226"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-17T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-17T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/14kbMAcJe02qdYQ4gr"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/14kbMAcJe02qdYQ4gr"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Karthik"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-19T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kshitij Gupta"},"waNumber":{"S":"9956488239"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Sanjith"},"waNumber":{"S":"9562448738"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Asjad"},"waNumber":{"S":"8919925951"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Akarsh Sharma"},"waNumber":{"S":"9149897550"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9131113165"}}},{"M":{"name":{"S":"Shivank"},"waNumber":{"S":"9393737310"}}},{"M":{"name":{"S":"Avijoy"},"waNumber":{"S":"9949171877"}}},{"M":{"name":{"S":"Sunil"},"waNumber":{"S":"9502953283"}}},{"M":{"name":{"S":"Manvith"},"waNumber":{"S":"9000966007"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-21T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-21T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Ashwen Barathan"},"waNumber":{"S":"+919445628828"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"+919063997014"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"One"},"waNumber":{"S":"9458654394"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"9999563207"}}},{"M":{"name":{"S":"Ashwin"},"waNumber":{"S":"9677504085"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9663516444"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"918295353966"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"9999563207"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Deepak "},"waNumber":{"S":"9756967889"}}},{"M":{"name":{"S":"Krishna"},"waNumber":{"S":"8497922870"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"Swapnil Pandey"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Vivek Tiwari"},"waNumber":{"S":"9039011890"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashutosh"},"waNumber":{"S":"9113342396"}}},{"M":{"name":{"S":"Sunil"},"waNumber":{"S":"7857006385"}}},{"M":{"name":{"S":"Akarsh Rana"},"waNumber":{"S":"9458654394"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9925183125"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Vivek Tiwari"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-04-28T18:00:00.000Z"},"endTime":{"S":"2024-04-28T19:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"9999563207"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Himanshu"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Albin Santhosh"},"waNumber":{"S":"9945539333"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-29T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-04-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Jay"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":"Avinash"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":"Sid"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":"Ashwin"},"waNumber":{"S":"9677504085"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Akarsh"},"waNumber":{"S":"9458654394"}}},{"M":{"name":{"S":"Mayank"},"waNumber":{"S":"9458654394"}}},{"M":{"name":{"S":"Asjad"},"waNumber":{"S":"8919925951"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Vivek kumar"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Yash "},"waNumber":{"S":"9925183125"}}},{"M":{"name":{"S":"Akarsh"},"waNumber":{"S":"9149897550"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Vishal"},"waNumber":{"S":"9646091821"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"9646091821"}}},{"M":{"name":{"S":"Sahil  Vyas"},"waNumber":{"S":"+917776091114"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-02T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-03T18:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-03T19:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/14kbMAcJe02qdYQ4gr"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"7096726700"}}},{"M":{"name":{"S":"Sayan Mitra"},"waNumber":{"S":"9932280740"}}},{"M":{"name":{"S":" Suchith Reddy "},"waNumber":{"S":"7671051485"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-04T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-04T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dasari Rahul"},"waNumber":{"S":"9381530392"}}},{"M":{"name":{"S":" Vivek"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Vivek Tiwari"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":" Suchith Reddy "},"waNumber":{"S":"7671051485"}}},{"M":{"name":{"S":"Rahil Nisar"},"waNumber":{"S":"7386538067"}}},{"M":{"name":{"S":"Ammar"},"waNumber":{"S":"7386538067"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-05T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-05T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shafi"},"waNumber":{"S":"9121780970"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pruthvi "},"waNumber":{"S":"8106432270"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8106432270"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Sai Manvith"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Rony"},"waNumber":{"S":"9995458844"}}},{"M":{"name":{"S":"Himanshu"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhaskar N"},"waNumber":{"S":"9347474588"}}},{"M":{"name":{"S":"Prem"},"waNumber":{"S":"9246553355"}}},{"M":{"name":{"S":"Kumar"},"waNumber":{"S":"9052260777"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-08T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"9711957811"}}},{"M":{"name":{"S":"Jude"},"waNumber":{"S":"9711957811"}}},{"M":{"name":{"S":"Nayan"},"waNumber":{"S":"9502483802"}}},{"M":{"name":{"S":"Armaan"},"waNumber":{"S":"8790886993"}}},{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"+919445628828"}}},{"M":{"name":{"S":"Ashwin Krishnaa"},"waNumber":{"S":"9677504085"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-09T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vivek"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Shivang"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Abhijeet"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Sridhar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Minnst"},"waNumber":{"S":"8156054595"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"paarth"},"waNumber":{"S":"9034342449"}}},{"M":{"name":{"S":"Shivank"},"waNumber":{"S":"9393737310"}}},{"M":{"name":{"S":"Revanth"},"waNumber":{"S":"9398280916"}}},{"M":{"name":{"S":"zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}},{"M":{"name":{"S":"vishaal"},"waNumber":{"S":"7075578436"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-11T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sai Manvith"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Revanth"},"waNumber":{"S":"9398280916"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Mayank"},"waNumber":{"S":"9165918889"}}},{"M":{"name":{"S":"Akarsh"},"waNumber":{"S":"9165918889"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Dheeraj"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Sukul"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Ninad"},"waNumber":{"S":"8788357434"}}},{"M":{"name":{"S":"Ninad"},"waNumber":{"S":"8788357434"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-12T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-12T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Rony Augustine"},"waNumber":{"S":"9995458844"}}},{"M":{"name":{"S":"Sidda"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Revanth"},"waNumber":{"S":"9398280916"}}},{"M":{"name":{"S":"Hrithik "},"waNumber":{"S":"9620658557"}}},{"M":{"name":{"S":"Shayak"},"waNumber":{"S":"9382273226"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945857398"}}},{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"6264833550"}}},{"M":{"name":{"S":"Nikhil "},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Nishant "},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Jayanth"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-15T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-15T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Roofers Gachibowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/UNr2hwqwA1UijjnG9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"JP "},"waNumber":{"S":"8368648674"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Sridhar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Vivek"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Vivek plus One"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Vivek Plus two"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9131113165"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"9039011890"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-17T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9704109574"}}},{"M":{"name":{"S":"Vineeth"},"waNumber":{"S":"9704109574"}}},{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Shayak"},"waNumber":{"S":"9382273226"}}},{"M":{"name":{"S":"Mayank"},"waNumber":{"S":"9165918889"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-18T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ron"},"waNumber":{"S":"8142001400"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Bhaskar n"},"waNumber":{"S":"9347474599"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-19T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-19T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"sunil"},"waNumber":{"S":"7857006385"}}},{"M":{"name":{"S":"Himanshu"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Mrityunjay "},"waNumber":{"S":"7003784086"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"09999563207"}}},{"M":{"name":{"S":"Lavesh "},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9131113165"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-20T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Sreekant "},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Vivek"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Shivang"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Abhijeet"},"waNumber":{"S":"8085444641"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Bhaskar "},"waNumber":{"S":"9347474599"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"one"},"waNumber":{"S":"7030087585"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032131115"}}},{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Rizwan Zhad"},"waNumber":{"S":"7030087585"}}},{"M":{"name":{"S":"Inaam"},"waNumber":{"S":"7030087585"}}},{"M":{"name":{"S":"Iffam"},"waNumber":{"S":"7030087585"}}},{"M":{"name":{"S":"Shadan"},"waNumber":{"S":"7030087585"}}},{"M":{"name":{"S":"Debanjan"},"waNumber":{"S":"7585844620"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Flipside"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/79uwaHCq2WPw3Bnf7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-24T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE03S6kQ16udYQ7t4"},"waitListPlayersCount":{"N":"8"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Aritra"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Atherv"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Vaibhav"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Rohit"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Tobruk"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Sourav"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Bhaskar N"},"waNumber":{"S":"9347474599"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9614777999"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-24T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-25T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Paramesh "},"waNumber":{"S":"9392323470"}}},{"M":{"name":{"S":"Jay"},"waNumber":{"S":"9392323470"}}},{"M":{"name":{"S":"Parth"},"waNumber":{"S":"7043612268"}}},{"M":{"name":{"S":"Eeshan"},"waNumber":{"S":"6287999281"}}}]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pruthvi "},"waNumber":{"S":"8106432270"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Nayan"},"waNumber":{"S":"9502483802"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant "},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9131113165"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bala"},"waNumber":{"S":"9701784387"}}},{"M":{"name":{"S":"Manvith"},"waNumber":{"S":"9701784387"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Anant"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Himanshu"},"waNumber":{"S":"9012915241"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"09963723048"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"7416964132"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-29T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-29T16:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"+919063997014"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"sathwik"},"waNumber":{"S":"7680087383"}}},{"M":{"name":{"S":"amrit "},"waNumber":{"S":"7680087383"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"09999563207"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-30T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-05-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Bhaskar n"},"waNumber":{"S":"9347474588"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Anirudh"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Vishal"},"waNumber":{"S":"7893167376"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-31T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-31T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"260"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-31T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-31T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Aa"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9911715989"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Dheeraj"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Jay"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"vishaal"},"waNumber":{"S":"7075578436"}}},{"M":{"name":{"S":"jai"},"waNumber":{"S":"7075578436"}}},{"M":{"name":{"S":"Revanth"},"waNumber":{"S":"9398280916"}}},{"M":{"name":{"S":"Rohith Reddy"},"waNumber":{"S":"9059874509"}}}]},"venueName":{"S":"Foodball Park Jubilee Hills"},"charges":{"N":"260"},"venueLocationLink":{"S":"https://maps.app.goo.gl/2JwCs4sSxZmKXism9?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sidda"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Bhaskar n"},"waNumber":{"S":"9347474588"}}},{"M":{"name":{"S":"Ashwen Barathan"},"waNumber":{"S":"+919445628828"}}},{"M":{"name":{"S":"Abhinav "},"waNumber":{"S":"8712154292"}}},{"M":{"name":{"S":"Adil"},"waNumber":{"S":"9959772721"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Sai Manvith"},"waNumber":{"S":"9000966007"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-03T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Nayan Thorat"},"waNumber":{"S":"7738620466"}}},{"M":{"name":{"S":"Sourav"},"waNumber":{"S":"9002574933"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-04T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-04T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Nayan Thorat"},"waNumber":{"S":"7738620466"}}},{"M":{"name":{"S":"Inaam"},"waNumber":{"S":"9959772721"}}},{"M":{"name":{"S":"Adil"},"waNumber":{"S":"9959772721"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Sidda"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9704699511"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-05T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-05T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Avi Mishra"},"waNumber":{"S":"+919990001850"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-05T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-05T16:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rony Augustine"},"waNumber":{"S":"9995458844"}}},{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Hrithik "},"waNumber":{"S":"9620658557"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Atreya"},"waNumber":{"S":"9008430111"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-06T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-06T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhargav"},"waNumber":{"S":"8332858959"}}},{"M":{"name":{"S":"Sourav "},"waNumber":{"S":"919002574933"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Ashwen B"},"waNumber":{"S":"+919445628828"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Rony Augustine"},"waNumber":{"S":"9995458844"}}},{"M":{"name":{"S":"Sidda Boss"},"waNumber":{"S":"9515791794"}}},{"M":{"name":{"S":"Sidda Boss"},"waNumber":{"S":"9515791794"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"SHUBHAM PATEL"},"waNumber":{"S":"8140799791"}}},{"M":{"name":{"S":"Sai Manvith"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Bala"},"waNumber":{"S":"9000966007"}}},{"M":{"name":{"S":"Sasidhar Kosuri"},"waNumber":{"S":"8247732903"}}},{"M":{"name":{"S":"Abhinav Reddy"},"waNumber":{"S":"8247732903"}}},{"M":{"name":{"S":"Sasidhar Friend"},"waNumber":{"S":"8247732903"}}},{"M":{"name":{"S":"Praveen"},"waNumber":{"S":"8800775640"}}},{"M":{"name":{"S":"Selva "},"waNumber":{"S":"8800775640"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Jayanth"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Sayan"},"waNumber":{"S":"9932280740"}}},{"M":{"name":{"S":"Hari"},"waNumber":{"S":"9932280740"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9131113165"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-09T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Vishnu Bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-10T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Tejas "},"waNumber":{"S":"7702761598"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ritin"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ninad kale"},"waNumber":{"S":"8788357434"}}},{"M":{"name":{"S":"Ashwin Kola"},"waNumber":{"S":"9986454943"}}},{"M":{"name":{"S":"Sasidhar"},"waNumber":{"S":"8247732903"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"8247732903"}}},{"M":{"name":{"S":"Inam"},"waNumber":{"S":"7030087585"}}},{"M":{"name":{"S":"Rizwan Zhad"},"waNumber":{"S":"7030087585"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Prateek Shekhar "},"waNumber":{"S":"9082317469"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-13T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-13T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"9999563207"}}},{"M":{"name":{"S":"Mrityunjay Das"},"waNumber":{"S":"7003784086"}}},{"M":{"name":{"S":"Noufal"},"waNumber":{"S":"8589823752"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-13T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-13T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Roofers Gachibowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/UNr2hwqwA1UijjnG9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9925183125"}}},{"M":{"name":{"S":"Akarsh"},"waNumber":{"S":"9149897550"}}},{"M":{"name":{"S":"Syed"},"waNumber":{"S":"9703243057"}}},{"M":{"name":{"S":"Arbaaz"},"waNumber":{"S":"9703243057"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"9703243057"}}},{"M":{"name":{"S":"Adnan"},"waNumber":{"S":"9703243057"}}},{"M":{"name":{"S":"Ayan"},"waNumber":{"S":"9703243057"}}},{"M":{"name":{"S":"Zebhi"},"waNumber":{"S":"9703243057"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}}]},"venueName":{"S":"Super Sports Park Nanakramguda"},"charges":{"N":"140"},"venueLocationLink":{"S":"https://maps.app.goo.gl/wjhdFpAxCSWrhqMK6"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-15T17:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-15T18:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Suchith"},"waNumber":{"S":"7671051485"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Jayanth"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Nayan "},"waNumber":{"S":"7977377622"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Noufal K"},"waNumber":{"S":"08589823752"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"09039011890"}}},{"M":{"name":{"S":"Somak"},"waNumber":{"S":"9830234343"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-16T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-16T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-17T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sriram "},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Rishabh Gopal "},"waNumber":{"S":"8800255085"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-18T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-18T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Mrityunjay "},"waNumber":{"S":"7003784086"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"09999563207"}}},{"M":{"name":{"S":"Vaibhava"},"waNumber":{"S":"8802739229"}}},{"M":{"name":{"S":"Rishabh"},"waNumber":{"S":"8800255085"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Atherv"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Karan"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Inam"},"waNumber":{"S":"9756711908"}}},{"M":{"name":{"S":"Ayaan"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aabel Francis"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Shinod"},"waNumber":{"S":"9961704575"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Harneet"},"waNumber":{"S":"9540744708"}}},{"M":{"name":{"S":"Mrityunjay "},"waNumber":{"S":"7003784086"}}},{"M":{"name":{"S":"Siddhant"},"waNumber":{"S":"7003784086"}}},{"M":{"name":{"S":"Rony Augustine"},"waNumber":{"S":"9995458844"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-21T17:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-21T18:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Noufal K"},"waNumber":{"S":"08589823752"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-22T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-22T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Hrithik"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Albin"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Harsha"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Atreya"},"waNumber":{"S":"8762345989"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/14kbMAcJe02qdYQ4gr"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Akhil Sojan"},"waNumber":{"S":"8667340232"}}},{"M":{"name":{"S":"Ahmad balfas "},"waNumber":{"S":"9160205501"}}},{"M":{"name":{"S":"Abdullah jabri"},"waNumber":{"S":"9160205501"}}},{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Jatin"},"waNumber":{"S":"9461374302"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-23T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-23T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vishnu Bongu"},"waNumber":{"S":"8374377433"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Anvit "},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Manan Maheshwari"},"waNumber":{"S":"+919057229034"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"8712154292"}}},{"M":{"name":{"S":"syed rayyan ahmed"},"waNumber":{"S":"8309010414"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Inam"},"waNumber":{"S":"9756711908"}}},{"M":{"name":{"S":"Ifham"},"waNumber":{"S":"9756711908"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"+919445628828"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ritin"},"waNumber":{"S":"9963060055"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aabel Francis"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Shinodh "},"waNumber":{"S":"9961704575"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Jayanth"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Rishabh "},"waNumber":{"S":"8800255085"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant "},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ayaan"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Ninad"},"waNumber":{"S":"8788357434"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7836991160"}}},{"M":{"name":{"S":"Sanskar"},"waNumber":{"S":"7836991160"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aabel Francis"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Shinodh"},"waNumber":{"S":"9961704575"}}},{"M":{"name":{"S":"Ankit Rai"},"waNumber":{"S":"8340624064"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Sushant Yadav"},"waNumber":{"S":"9161010984"}}},{"M":{"name":{"S":"Rishabh"},"waNumber":{"S":"8058793634"}}},{"M":{"name":{"S":"Puneet"},"waNumber":{"S":"8058793634"}}},{"M":{"name":{"S":"Alankrit "},"waNumber":{"S":"8058793634"}}},{"M":{"name":{"S":"Kushagra"},"waNumber":{"S":"8058793634"}}},{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"+919445628828"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-28T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-28T17:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"selva"},"waNumber":{"S":"9787059165"}}},{"M":{"name":{"S":"Albin Santhosh"},"waNumber":{"S":"9945539333"}}},{"M":{"name":{"S":"Vishnu Bongu"},"waNumber":{"S":"7997471952"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-29T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-29T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-06-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":" Suchith"},"waNumber":{"S":"7671051485"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"8959462531"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-30T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Mayank"},"waNumber":{"S":"9165918889"}}},{"M":{"name":{"S":"Mayank"},"waNumber":{"S":"9165918889"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"+919445628828"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-02T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"90"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-02T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Apoorv"},"waNumber":{"S":"8657903235"}}},{"M":{"name":{"S":"Vaibhava"},"waNumber":{"S":"8802739229"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Krishan "},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Mrityunjay Das"},"waNumber":{"S":"7003784086"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"9999563207"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-03T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Louis "},"waNumber":{"S":"9701048299"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-04T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-04T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wM17W24Ag1o3kc4gp"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Jay"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":"Sanskar"},"waNumber":{"S":"8319193168"}}},{"M":{"name":{"S":"Sriram"},"waNumber":{"S":"9949711511"}}},{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Paramesh"},"waNumber":{"S":"7981538245"}}},{"M":{"name":{"S":" Apoorv"},"waNumber":{"S":"8657903235"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-06T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-06T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/dR66sg8sYdTg1c4dQY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":"Prateek "},"waNumber":{"S":"9082317469"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Krishna"},"waNumber":{"S":"8184954763"}}},{"M":{"name":{"S":"aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"8959462531"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-07T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-07T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Ayaan"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Bari"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Irteza"},"waNumber":{"S":"9912477776"}}},{"M":{"name":{"S":"Adnan"},"waNumber":{"S":"9063064084"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"99000981166"}}},{"M":{"name":{"S":"Vishnu Bongu"},"waNumber":{"S":"07997471952"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"07997471952"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-09T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Chaitanya"},"waNumber":{"S":"9502757116"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-10T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Vaibhava"},"waNumber":{"S":"8802739229"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}}]},"venueName":{"S":"Super Sports Park"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8pnasMQ8ewbKihrK9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-11T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-11T17:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU8Ao38Eg1odYQ6oB"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Tanish"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Taranath"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Abhinav s"},"waNumber":{"S":"7006726700"}}}]},"venueName":{"S":"HotFut Inorbit"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/8uc2bXxcCsUeJKis9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-12T13:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-12T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Prateek "},"waNumber":{"S":"9082317469"}}},{"M":{"name":{"S":"Areeb"},"waNumber":{"S":"8999964337"}}},{"M":{"name":{"S":"Samarth"},"waNumber":{"S":"9821156765"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Sreekant"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Ayaan"},"waNumber":{"S":"9885090716"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-13T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-13T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"7893654477"}}},{"M":{"name":{"S":"Akash G"},"waNumber":{"S":"9390465930"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Vishesh "},"waNumber":{"S":"9891953696"}}}]},"venueName":{"S":"Shooting Star club"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/j6QSd8dimFD9meSS6"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-13T17:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-13T06:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sreekant "},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Taranath"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Tara"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":"Irteza"},"waNumber":{"S":"9912477776"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9704699511"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-14T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-14T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"7893654477"}}},{"M":{"name":{"S":"TARZAN "},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"sunil"},"waNumber":{"S":"7857006385"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Rahul bafna"},"waNumber":{"S":"6300696914"}}},{"M":{"name":{"S":"Amarpal Singh "},"waNumber":{"S":"6300696914"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Dheeraj"},"waNumber":{"S":"7799452167"}}},{"M":{"name":{"S":"Raul "},"waNumber":{"S":"09999563207"}}},{"M":{"name":{"S":"Rev"},"waNumber":{"S":"9988103723"}}},{"M":{"name":{"S":"Krishan "},"waNumber":{"S":"9963723048"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-16T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Rit"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}},{"M":{"name":{"S":"Pranav"},"waNumber":{"S":"9110497986"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-17T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ani"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Naresh"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Krithik"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8639053035"}}},{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"one"},"waNumber":{"S":"8072918137"}}},{"M":{"name":{"S":"Kaushik"},"waNumber":{"S":"8618388129"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aaradhya"},"waNumber":{"S":"9599677228"}}},{"M":{"name":{"S":"Samarth Arora "},"waNumber":{"S":"9821156765"}}},{"M":{"name":{"S":"Rajdeep"},"waNumber":{"S":"7550173284"}}},{"M":{"name":{"S":"Sarthak Bathla"},"waNumber":{"S":"7895495509"}}},{"M":{"name":{"S":"Rishabh "},"waNumber":{"S":"8800255085"}}},{"M":{"name":{"S":"Sukul Bagai"},"waNumber":{"S":"9945858398"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991160"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-19T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shinod"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Aabel"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Dhruv"},"waNumber":{"S":"9063461701"}}},{"M":{"name":{"S":"Rahim"},"waNumber":{"S":"7977423540"}}},{"M":{"name":{"S":"Prateek "},"waNumber":{"S":"9082317469"}}},{"M":{"name":{"S":"Rony"},"waNumber":{"S":"9995458844"}}},{"M":{"name":{"S":"Omkar"},"waNumber":{"S":"9922498517"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9925183125"}}},{"M":{"name":{"S":"Apoorv"},"waNumber":{"S":"9680548081"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-19T17:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-19T18:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Bhargav"},"waNumber":{"S":"8332858959"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"7416964132"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rev"},"waNumber":{"S":"9988103723"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Vrajesh Nahar"},"waNumber":{"S":"9821361639"}}},{"M":{"name":{"S":"Sreekant friend"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Vishnu Bongu"},"waNumber":{"S":"07997471952"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-21T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-21T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Naveen"},"waNumber":{"S":"7337499190"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"9701048299"}}},{"M":{"name":{"S":"Miyashita"},"waNumber":{"S":"9701048299"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-22T17:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-22T18:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rahul"},"waNumber":{"S":"6300696914"}}},{"M":{"name":{"S":"Amarpal"},"waNumber":{"S":"6300696914"}}},{"M":{"name":{"S":"Vrajesh Nahar"},"waNumber":{"S":"9821361639"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991169"}}},{"M":{"name":{"S":"Raj"},"waNumber":{"S":"7550173284"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Pratim"},"waNumber":{"S":"9475542471"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Atherv"},"waNumber":{"S":"7032134115"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Pratim"},"waNumber":{"S":"9475542471"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shinod"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Aabel"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"7835991169"}}},{"M":{"name":{"S":"Abhinav "},"waNumber":{"S":"8977931881"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}},{"M":{"name":{"S":"Ashim"},"waNumber":{"S":"8447236637"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Bhargav"},"waNumber":{"S":"8332858959"}}},{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Ninad"},"waNumber":{"S":"8788357434"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-27T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-27T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Bsporty"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://maps.app.goo.gl/axDbAHPjP648u7FZA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"4"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rahim"},"waNumber":{"S":"7977423540"}}},{"M":{"name":{"S":"SHASHI "},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":"Louis "},"waNumber":{"S":"9701048299"}}},{"M":{"name":{"S":"Mathis"},"waNumber":{"S":"9701048299"}}},{"M":{"name":{"S":"Vamsi"},"waNumber":{"S":"6309625150"}}},{"M":{"name":{"S":"Prasanna"},"waNumber":{"S":"6309625150"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}},{"M":{"name":{"S":"Saurabh "},"waNumber":{"S":"7507635505"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"9701048299"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-07-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Minnat"},"waNumber":{"S":"8156054595"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9963723048"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Aabel Francis"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Mukassir"},"waNumber":{"S":"9052453355"}}},{"M":{"name":{"S":"Louis "},"waNumber":{"S":"9701048299"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Raul"},"waNumber":{"S":"9999563207"}}},{"M":{"name":{"S":"Tejas"},"waNumber":{"S":"7702761598"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-31T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-31T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aabel"},"waNumber":{"S":"7558881910"}}},{"M":{"name":{"S":"Akhil Tom"},"waNumber":{"S":"9497582099"}}},{"M":{"name":{"S":"Shinodh "},"waNumber":{"S":"9961704575"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"08340624064"}}},{"M":{"name":{"S":"Swapnil"},"waNumber":{"S":"08340624064"}}},{"M":{"name":{"S":"Zaks"},"waNumber":{"S":"7893167376"}}}]},"venueName":{"S":"Roofers Gachibowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/UNr2hwqwA1UijjnG9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-02T14:30:00.000Z"},"endTime":{"S":"2024-08-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Raj"},"waNumber":{"S":"7550173284"}}},{"M":{"name":{"S":"Vrajesh"},"waNumber":{"S":"7550173284"}}},{"M":{"name":{"S":"Sarthak"},"waNumber":{"S":"7550173284"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Ron"},"waNumber":{"S":"8142001400"}}},{"M":{"name":{"S":"Mithun"},"waNumber":{"S":"9677335808"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-03T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Manu"},"waNumber":{"S":"8714546078"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-05T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashwen "},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"Anvit"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Louis"},"waNumber":{"S":"8762345989"}}},{"M":{"name":{"S":"Ninad"},"waNumber":{"S":"8788357434"}}},{"M":{"name":{"S":"Lavesh"},"waNumber":{"S":"8890728188"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-06T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"7416964132"}}},{"M":{"name":{"S":"Louis "},"waNumber":{"S":"9701048299"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Sukhman"},"waNumber":{"S":"8860699794"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-08T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-08T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sohail"},"waNumber":{"S":"7758867647"}}},{"M":{"name":{"S":"Maharishi "},"waNumber":{"S":"7758867647"}}},{"M":{"name":{"S":"Vedang"},"waNumber":{"S":"7758867647"}}},{"M":{"name":{"S":"Anirudh"},"waNumber":{"S":"7758867647"}}},{"M":{"name":{"S":"Sanjay"},"waNumber":{"S":"7758867647"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9643481303"}}},{"M":{"name":{"S":"Manan"},"waNumber":{"S":"9057229034"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Prasanna"},"waNumber":{"S":"6309625150"}}},{"M":{"name":{"S":"Vamsi"},"waNumber":{"S":"6309625150"}}},{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"SHASHI"},"waNumber":{"S":"9391322931"}}},{"M":{"name":{"S":"Tarzan"},"waNumber":{"S":"9445628828"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-10T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-10T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Aakash Bhardwaj"},"waNumber":{"S":"7428919963"}}},{"M":{"name":{"S":"Tarzan "},"waNumber":{"S":"9445628828"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9704699511"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Jay"},"waNumber":{"S":"9391824485"}}},{"M":{"name":{"S":"Tarun"},"waNumber":{"S":"9911715959"}}},{"M":{"name":{"S":"Rishabh"},"waNumber":{"S":"1234567890"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-11T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-11T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-12T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-13T14:30:00.000Z"},"endTime":{"S":"2024-08-13T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-14T14:30:00.000Z"},"endTime":{"S":"2024-08-14T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ram"},"waNumber":{"S":"8097486662"}}},{"M":{"name":{"S":"Gaurav "},"waNumber":{"S":"08976161495"}}},{"M":{"name":{"S":"Mithun"},"waNumber":{"S":"9677335808"}}},{"M":{"name":{"S":"Krishna"},"waNumber":{"S":"8184954763"}}},{"M":{"name":{"S":"Basi"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Ani"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Sreyas"},"waNumber":{"S":"9963060055"}}},{"M":{"name":{"S":"Vaibhav Raj"},"waNumber":{"S":"9958021619"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-15T14:30:00.000Z"},"endTime":{"S":"2024-08-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"3"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-15T17:30:00.000Z"},"endTime":{"S":"2024-08-15T18:31:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 2,
      date: '2024-08-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pranav Athrey"},"waNumber":{"S":"9110497986"}}},{"M":{"name":{"S":"Vaibhav"},"waNumber":{"S":"9958021619"}}},{"M":{"name":{"S":"Abhinav S"},"waNumber":{"S":"7006726700"}}},{"M":{"name":{"S":"Mayank"},"waNumber":{"S":"9165918889"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"9900981166"}}}]},"venueName":{"S":"HotFut GachiBowli"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://goo.gl/maps/1QzakRkJPHxT8GjRA"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-16T14:30:00.000Z"},"endTime":{"S":"2024-08-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-01-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"⁠ ⁠Ashu"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"1"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-01-26T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-01-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-05T05:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-05T06:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"99115"}}},{"M":{"name":{"S":"player1"},"waNumber":{"S":"12345"}}},{"M":{"name":{"S":"player3"},"waNumber":{"S":"917895087050"}}},{"M":{"name":{"S":"Uday"},"waNumber":{"S":"919980155768"}}},{"M":{"name":{"S":"Abhishek"},"waNumber":{"S":"919818678977"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-08T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-08T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-13T05:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-14T06:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-15T05:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-16T06:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"},"waNumber":{"S":"16507890396"}}},{"M":{"name":{"S":"Rohan"},"waNumber":{"S":"15302206852"}}},{"M":{"name":{"S":"Vardhan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"bhaisaab"},"waNumber":{"S":"15302206852"}}},{"M":{"name":{"S":"uday"},"waNumber":{"S":"919980155768"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-19T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-20T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-20T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-21T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-27T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-27T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-04-27T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-27T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"startTime":{"S":"2023-04-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"2"},"startTime":{"S":"2023-04-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"3"},"startTime":{"S":"2023-04-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"4"},"startTime":{"S":"2023-04-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"5"},"startTime":{"S":"2023-04-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"6"},"startTime":{"S":"2023-04-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-28T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Rwit"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Garry"}}},{"M":{"name":{"S":"Kishan"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Manan"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Rajat"}}},{"M":{"name":{"S":"uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-04-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Harsh2"}}},{"M":{"name":{"S":"Harsh2 + 1"}}},{"M":{"name":{"S":"Vardhan"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Anil"}}},{"M":{"name":{"S":"Rwit"}}},{"M":{"name":{"S":"Rwit+1"}}},{"M":{"name":{"S":"Rwit+2"}}},{"M":{"name":{"S":"Rwit+3"}}},{"M":{"name":{"S":"Rwit+4"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Sarthak"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-04-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-04-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Ali"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Vinayak +1"}}},{"M":{"name":{"S":"Vinayak +2"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"startTime":{"S":"2023-05-01T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Amit"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"shubham"}}},{"M":{"name":{"S":"deepankar"}}},{"M":{"name":{"S":"manan"}}},{"M":{"name":{"S":"gautam bhaiya"}}},{"M":{"name":{"S":"Tenzin"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Akshat"}}},{"M":{"name":{"S":"Shubham k"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Sarthak"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-02T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aniket"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Amar+1"}}},{"M":{"name":{"S":"Ali"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Bhavya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-04T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-04T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Shubham S"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Deepankar"}}},{"M":{"name":{"S":"Manan"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Hansie"}}},{"M":{"name":{"S":"Shubham S plus one"}}},{"M":{"name":{"S":"Samarth Sharma"}}},{"M":{"name":{"S":"Ali"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Kishan"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Vardhan"}}},{"M":{"name":{"S":"Vardhan plus one"}}},{"M":{"name":{"S":"Vinay Pahal"}}},{"M":{"name":{"S":"Dhruv Arora"}}},{"M":{"name":{"S":"Vinayak plus two"}}},{"M":{"name":{"S":"Uday N"}}},{"M":{"name":{"S":"Shubham plus one"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"vinayak plus one"}}},{"M":{"name":{"S":"Subba"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-05-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"3"},"startTime":{"S":"2023-05-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"4"},"startTime":{"S":"2023-05-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Madhur"}}},{"M":{"name":{"S":"Deepak"}}},{"M":{"name":{"S":"Hari"}}},{"M":{"name":{"S":"Manan"}}},{"M":{"name":{"S":"Amit"}}},{"M":{"name":{"S":"Samarth Sharma"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Vinayak+1"}}},{"M":{"name":{"S":"shubham"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Uday(t)"}}},{"M":{"name":{"S":"Kunal"}}},{"M":{"name":{"S":"Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-09T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashish"}}},{"M":{"name":{"S":"Sankalp + 1"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Maulik"}}},{"M":{"name":{"S":"+1"}}},{"M":{"name":{"S":"Bhavya(t)"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-10T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"225"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-11T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Smarth"}}},{"M":{"name":{"S":"Smarth + 1"}}},{"M":{"name":{"S":"Smarth + 2"}}},{"M":{"name":{"S":"Smarth + 3"}}},{"M":{"name":{"S":"Smarth + 4"}}},{"M":{"name":{"S":"Smarth + 5"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Shubham + 1"}}},{"M":{"name":{"S":"Shubham + 2"}}},{"M":{"name":{"S":"Shubham + 3"}}},{"M":{"name":{"S":"Shubham + 4"}}},{"M":{"name":{"S":"Shubham + 5"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"320"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rwit"}}},{"M":{"name":{"S":"Rwit + 1"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Devarshi"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Bhavya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"225"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-05-12T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-12T17:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Govínd"}}},{"M":{"name":{"S":"Nelson"}}},{"M":{"name":{"S":"Nelson +1"}}},{"M":{"name":{"S":"Arshadarshan"}}},{"M":{"name":{"S":"Leander"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhishek+1"}}},{"M":{"name":{"S":"Abhishek +2"}}},{"M":{"name":{"S":"Harshit"}}},{"M":{"name":{"S":"Aditya R"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Manan"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Amrito"}}},{"M":{"name":{"S":"Aniket"}}},{"M":{"name":{"S":"Maulik"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Touhid+1"}}},{"M":{"name":{"S":"Touhid+2"}}},{"M":{"name":{"S":"Sahil Siwatch"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Aditya R"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ramish paid"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Samarth Sharma (confirmed)"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Maulik"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Garvit paid"}}},{"M":{"name":{"S":"Amit paid"}}},{"M":{"name":{"S":"Vinayak paid"}}},{"M":{"name":{"S":"Chirag paid"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Govind paid"}}},{"M":{"name":{"S":"Vinayak+1 paid"}}},{"M":{"name":{"S":"Uday (t)"}}},{"M":{"name":{"S":"Bhavya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-16T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"arshadarshan"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Touhid+1"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"saksham"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Touhid+2"}}},{"M":{"name":{"S":"Kashish"}}},{"M":{"name":{"S":"Apoorv"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"shubham"}}},{"M":{"name":{"S":"Satwik"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-17T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-17T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Rishab"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Ravi"}}},{"M":{"name":{"S":"Rakshit"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Govind"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-18T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-18T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya confirm"}}},{"M":{"name":{"S":"Mayank"}}},{"M":{"name":{"S":"Charan"}}},{"M":{"name":{"S":"Anant"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Ritik+1"}}},{"M":{"name":{"S":"Ritik+2"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Anil"}}},{"M":{"name":{"S":"Sahil +1"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Sahil +2"}}},{"M":{"name":{"S":"Sahil + 3"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-19T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-19T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Rajat"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Jaswant"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-20T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-20T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Kunal"}}},{"M":{"name":{"S":"Yash"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Zaeem"}}},{"M":{"name":{"S":"saksham"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-21T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Kunal"}}},{"M":{"name":{"S":"Yash"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Zaeem"}}},{"M":{"name":{"S":"saksham"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-05-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"amar"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhishek+1"}}},{"M":{"name":{"S":"Satwik"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Satwik +1"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"deepankar"}}},{"M":{"name":{"S":"gautam bhaiya"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"manan"}}},{"M":{"name":{"S":"mittul"}}},{"M":{"name":{"S":"Maulik"}}},{"M":{"name":{"S":"+1"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Samarth Sharma"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"+2"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-23T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sankalp + 1"}}},{"M":{"name":{"S":"+2"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Ashish"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhishek+1"}}},{"M":{"name":{"S":"Akshat Kapur"}}},{"M":{"name":{"S":"Utkarsh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-24T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-24T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Stanley"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Lakshay"}}},{"M":{"name":{"S":"aarav"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"Sunil"}}},{"M":{"name":{"S":"Vinay"}}},{"M":{"name":{"S":"Dhruv"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Sammy"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-25T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-25T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Uday paid"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Lakshay"}}},{"M":{"name":{"S":"Bhavya paid"}}},{"M":{"name":{"S":"Rishabh"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Stanley"}}},{"M":{"name":{"S":"Aarav"}}},{"M":{"name":{"S":"Bhavik"}}},{"M":{"name":{"S":"Abhijeet paid"}}},{"M":{"name":{"S":"Abhijeet +1 paid"}}},{"M":{"name":{"S":"Ritik +1"}}},{"M":{"name":{"S":"Ritik+2"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Arshadarshan"}}},{"M":{"name":{"S":"Adarsh"}}},{"M":{"name":{"S":"Akshat"}}},{"M":{"name":{"S":"Akshat +1"}}},{"M":{"name":{"S":"Ankit Y"}}},{"M":{"name":{"S":"Ankit Y+1"}}},{"M":{"name":{"S":"Ankit Y +2"}}},{"M":{"name":{"S":"Ankit Y+3"}}},{"M":{"name":{"S":"Nishant"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Ashish"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Aditya R"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Shubham"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-28T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Lakshay"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Aditya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Albin"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Satwik"}}},{"M":{"name":{"S":"Satwik +1"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Samarth Sharma"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-30T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-05-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Nishant"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-05-31T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-31T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Lakshay + 1"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Avi"}}},{"M":{"name":{"S":"Albin"}}},{"M":{"name":{"S":"Akshat"}}},{"M":{"name":{"S":"Saurabh"}}},{"M":{"name":{"S":"Kabir"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"lakshay"}}},{"M":{"name":{"S":"aarav"}}},{"M":{"name":{"S":"lakshay +2"}}},{"M":{"name":{"S":"Touhid"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Praveen"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Siddharth+1"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Charan"}}},{"M":{"name":{"S":"Pranjal"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Abhijeet +1"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Ritik+1"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"amar"}}},{"M":{"name":{"S":"Garvit"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-03T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Kaka"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Anuj"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Harshit"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Aman kumar"}}},{"M":{"name":{"S":"Yatharth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-06-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-03T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Ritik+1"}}},{"M":{"name":{"S":"Ritik+2"}}},{"M":{"name":{"S":"Ritik+3"}}},{"M":{"name":{"S":"Kishan"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-04T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-04T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil v"}}},{"M":{"name":{"S":"Uday paid"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Pranjal"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhishek paid"}}},{"M":{"name":{"S":"Aniket"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"vaibhav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-06T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Player\'s Den Rackonnect sports"},"charges":{"N":"150"},"venueLocationLink":{"S":"https://maps.app.goo.gl/DZhDBPUXyX5P1wp19"},"index":{"N":"1"},"startTime":{"S":"2023-06-08T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Srikar"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Amar+1"}}},{"M":{"name":{"S":"Shubhan"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Ravi"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Yatharth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaka"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Toge"}}},{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Ritik + 3"}}},{"M":{"name":{"S":"Saurabh"}}},{"M":{"name":{"S":"Kabir"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"Ramit"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Ritik+1"}}},{"M":{"name":{"S":"Ritik+2"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Vibhu"}}},{"M":{"name":{"S":"Charan"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"350"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-10T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-10T15:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"subba"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"Charan"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Ashish"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Manjunath +1"}}},{"M":{"name":{"S":"kk"}}},{"M":{"name":{"S":"Garvit"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-14T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-14T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Devarshi"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Raj"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-15T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-15T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaka"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Anuj"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Anil"}}},{"M":{"name":{"S":"Charan"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-17T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kk"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Kunal"}}},{"M":{"name":{"S":"Nelson"}}},{"M":{"name":{"S":"Nelson +2"}}},{"M":{"name":{"S":"Abhishek A"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"TJ+1"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"kishan"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-18T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Jahan"}}},{"M":{"name":{"S":"Nakul"}}},{"M":{"name":{"S":"Nakul +1"}}},{"M":{"name":{"S":"Siddharth Sehgal"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Bhavik"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Ravi"}}},{"M":{"name":{"S":"Rishi"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Eklavya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Zoeb"}}},{"M":{"name":{"S":"KK"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Abhishek A"}}},{"M":{"name":{"S":"Samarth sharma"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-20T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Rishi"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Srikar"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Kk"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Rishav"}}},{"M":{"name":{"S":"Amar"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-21T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-21T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Pranjal"}}},{"M":{"name":{"S":"Arnav"}}},{"M":{"name":{"S":"Aditya R"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Shubham"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Ashu   (paid)"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Krish (paid)"}}},{"M":{"name":{"S":"Krish + 1 (paid)"}}},{"M":{"name":{"S":"Harsh. (paid)"}}},{"M":{"name":{"S":"Vikas (paid)"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Abhishek A"}}},{"M":{"name":{"S":"Vinayak(paid)"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Parth(paid)"}}},{"M":{"name":{"S":"Sandeep (paid)"}}},{"M":{"name":{"S":"Manan"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-24T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-24T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Anshul +1"}}},{"M":{"name":{"S":"Anshul +1"}}},{"M":{"name":{"S":"Vineet"}}},{"M":{"name":{"S":"Vineet +1"}}},{"M":{"name":{"S":"Ashish"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"krishnan"}}},{"M":{"name":{"S":"Zoeb"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-25T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-25T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Rishav"}}},{"M":{"name":{"S":"Aditya R"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Deepak"}}},{"M":{"name":{"S":"Arnav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Vineet (paid)"}}},{"M":{"name":{"S":"Vineet+1 (paid)"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Krish +1"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Kk"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Vaibhav +1"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-28T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-28T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Milind"}}},{"M":{"name":{"S":"milind +1"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Anil"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Amar"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-06-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Abhishek A"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Harsh G"}}},{"M":{"name":{"S":"Rahul S"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Rwit"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-06-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-06-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Deepesh"}}},{"M":{"name":{"S":"Abhishek A"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Prateek"}}},{"M":{"name":{"S":"Ravi"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Rishav"}}},{"M":{"name":{"S":"Rishav +1"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaka"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Anuj"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Anil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-07-01T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-01T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Pranit"}}},{"M":{"name":{"S":"Apurv"}}},{"M":{"name":{"S":"Harsh G"}}},{"M":{"name":{"S":"Rahul S"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-02T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Vineet"}}},{"M":{"name":{"S":"Satwik"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Akash"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-03T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Akash.   (paid)"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhishek A"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-04T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-04T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Vineet"}}},{"M":{"name":{"S":"Shreshth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-05T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-05T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Govínd"}}},{"M":{"name":{"S":"Sarthaj"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Sahil S"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Krish +1"}}},{"M":{"name":{"S":"Harsh G"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Amar+1"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh + 1"}}},{"M":{"name":{"S":"Kishan"}}},{"M":{"name":{"S":"Anubhav"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Arnav"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Siddhartha"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Apurv"}}},{"M":{"name":{"S":"Deepesh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-08T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-08T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Churag"}}},{"M":{"name":{"S":"Sahil S"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Abhiraj Parth"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Raghav"}}},{"M":{"name":{"S":"Akhil"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Ayaan + 1"}}},{"M":{"name":{"S":"Veer"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Subba"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-09T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sanav + 1"}}},{"M":{"name":{"S":"Sanav"}}},{"M":{"name":{"S":"Kishan"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Vinayak +1"}}},{"M":{"name":{"S":"Akshay"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-10T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Harsh G"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Vineet"}}},{"M":{"name":{"S":"Satwik"}}},{"M":{"name":{"S":"Rahul S"}}},{"M":{"name":{"S":"Labhant"}}},{"M":{"name":{"S":"Angad"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-12T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-12T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Harsh G"}}},{"M":{"name":{"S":"Rahul S"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Abhijeet (t)"}}},{"M":{"name":{"S":"Shresth (t)"}}},{"M":{"name":{"S":"Ashir"}}},{"M":{"name":{"S":"Ashir +1"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Touhid+1"}}},{"M":{"name":{"S":"Touhid+2"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Abhishek A"}}},{"M":{"name":{"S":"Vikas"}}},{"M":{"name":{"S":"Sandeep"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Harshit"}}},{"M":{"name":{"S":"Pranjal"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Dagar"}}},{"M":{"name":{"S":"Kishan"}}},{"M":{"name":{"S":"Ankit Y"}}},{"M":{"name":{"S":"Ankit Y +1"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-15T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-15T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Sanjay"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Apurv + 1"}}},{"M":{"name":{"S":"Vineet"}}},{"M":{"name":{"S":"Apurv + 2"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Aniket"}}},{"M":{"name":{"S":"Govind (c)"}}},{"M":{"name":{"S":"Manan"}}},{"M":{"name":{"S":"Apurv (c)"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"Ishu + 1"}}},{"M":{"name":{"S":"Amrito"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-07-16T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-16T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Jagjit"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Sayan"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aniket"}}},{"M":{"name":{"S":"Vignesh"}}},{"M":{"name":{"S":"Gatlin"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Sarthak"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-19T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-05-04T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-07-19T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-19T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"2"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mohan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"John"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Ayush"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Adil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Sarvesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kamal"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Karan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Ajay"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Varun"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Chandu"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Krishna"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Shreyas"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rohit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Arijit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Jubin"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-20T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-20T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mohammad"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Asit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Kuldeep"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Keshav"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Manish"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rohan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rahil"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Rithik"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Dikshank"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Vishwas"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Minkesh"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Sandeep"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Apoorav"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Gagan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Javeer"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Jashan"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mukesh"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-07-20T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-20T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Kanishak"}}},{"M":{"name":{"S":"Albin"}}},{"M":{"name":{"S":"Darryl"}}},{"M":{"name":{"S":"Uday"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Alok"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mark"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Billy"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Jonas"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Ulrich"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Magnus"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Bartosz"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Mike"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Lucas"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Will"},"waNumber":{"S":"9876"}}},{"M":{"name":{"S":"Steve"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"3"},"startTime":{"S":"2023-07-20T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-20T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Deepesh"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Mridul"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-21T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"2"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Aman"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-07-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"0"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bahadur"},"waNumber":{"S":"9876"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-22T16:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-22T17:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Ashutosh"}}},{"M":{"name":{"S":"Samarth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-07-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-22T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Adarsh"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Rishiraj"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Ronak"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-23T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Harman"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday Paid ⚫️"}}},{"M":{"name":{"S":"Harsh paid⚫️"}}},{"M":{"name":{"S":"Krish (paid) ⚫️"}}},{"M":{"name":{"S":"Prashant ⚫️"}}},{"M":{"name":{"S":"Nischay Paid⚫️"}}},{"M":{"name":{"S":"Rahul Paid⚫️"}}},{"M":{"name":{"S":"Amar⚫️"}}},{"M":{"name":{"S":"Kishan⚪️"}}},{"M":{"name":{"S":"ALBIN  Paid⚪️"}}},{"M":{"name":{"S":"Abhinav ⚪️"}}},{"M":{"name":{"S":"Yatharth (Paid)⚪️"}}},{"M":{"name":{"S":"Dagar ⚪️ PAID"}}},{"M":{"name":{"S":"Adarsh ⚪️"}}},{"M":{"name":{"S":"Sanskar Paid⚪️"}}},{"M":{"name":{"S":"Sarthak"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday (paid)"}}},{"M":{"name":{"S":"Arpit  (PAID)"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"Vignesh"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Anmol - Paid"}}},{"M":{"name":{"S":"Archit"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Sanskar"}}},{"M":{"name":{"S":"Ishu + 1"}}},{"M":{"name":{"S":"Karan"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Raghav"}}},{"M":{"name":{"S":"Ajay"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-26T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-26T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Jagjit"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Sahil (t)"}}},{"M":{"name":{"S":"Suraj"}}},{"M":{"name":{"S":"Aman (t)"}}},{"M":{"name":{"S":"Abhijeet (t)"}}},{"M":{"name":{"S":"Shresth (t)"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Anmol (t)"}}},{"M":{"name":{"S":"Archit (t)"}}},{"M":{"name":{"S":"Veer"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Touhid"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-27T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-27T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Rwit"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Ajay"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Anuj"}}},{"M":{"name":{"S":"gaurav"}}},{"M":{"name":{"S":"Kaka"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Ashutosh"}}},{"M":{"name":{"S":"bholesh"}}},{"M":{"name":{"S":"Kelvin"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Sahaj"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-29T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-29T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-07-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Govind (c)"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Vinayak (c)"}}},{"M":{"name":{"S":"Chirag (c)"}}},{"M":{"name":{"S":"Parth (c)"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Manjunath +1"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Ashutosh"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Saksham"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-07-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-07-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Angad"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Anshul"}}},{"M":{"name":{"S":"Srikar"}}},{"M":{"name":{"S":"Ravi"}}},{"M":{"name":{"S":"Dagar"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Abhijeet (t)"}}},{"M":{"name":{"S":"Shreshth (t)"}}},{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Govind"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"Bhavya (Paid)"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Veer"}}},{"M":{"name":{"S":"Adarsh (tent.)"}}},{"M":{"name":{"S":"Gatlin"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Milind (tent.)"}}},{"M":{"name":{"S":"Anmol"}}},{"M":{"name":{"S":"Ajay (paid)"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-02T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-02T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet (c)"}}},{"M":{"name":{"S":"Shreshth (c)"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Apurv"}}},{"M":{"name":{"S":"Saharsh Paid"}}},{"M":{"name":{"S":"Manav Paid"}}},{"M":{"name":{"S":"Animesh Paid"}}},{"M":{"name":{"S":"Anshul + 1 (paid)"}}},{"M":{"name":{"S":"Sahaj (paid)"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Anshul (paid)"}}},{"M":{"name":{"S":"Rakshit (paid)"}}},{"M":{"name":{"S":"Ravi (paid)"}}},{"M":{"name":{"S":"Srikar (paid)"}}},{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"Siddhartha"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-03T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-03T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Meghraj"}}},{"M":{"name":{"S":"Siddhartha"}}},{"M":{"name":{"S":"Sahaj ( tentative)"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Samarth Paul"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Veer"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Samarth Sharma"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-04T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Siddhartha"}}},{"M":{"name":{"S":"Nikhil"}}},{"M":{"name":{"S":"Nikhil+1"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"ASHU"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-05T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-05T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil v"}}},{"M":{"name":{"S":"Abhijeet (t)"}}},{"M":{"name":{"S":"Shreshth (t)"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Pranjal"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Vishnu"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil (c)"}}},{"M":{"name":{"S":"Samarth (c)"}}},{"M":{"name":{"S":"Shubham (c)"}}},{"M":{"name":{"S":"Deepankur (c)"}}},{"M":{"name":{"S":"Gautam bhaiya (c)"}}},{"M":{"name":{"S":"Negi (Paid)"}}},{"M":{"name":{"S":"Uday (Paid)"}}},{"M":{"name":{"S":"Sahaj (c)"}}},{"M":{"name":{"S":"Amar (c)"}}},{"M":{"name":{"S":"Sanjay (c)"}}},{"M":{"name":{"S":"Vikas (Paid)"}}},{"M":{"name":{"S":"Anshul (Paid)"}}},{"M":{"name":{"S":"Rakshit (Paid)"}}},{"M":{"name":{"S":"Ravi (Paid)"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-08T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rajath C"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhijeet (t)"}}},{"M":{"name":{"S":"Shreshth (t)"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Rahul + 1"}}},{"M":{"name":{"S":"Puneet"}}},{"M":{"name":{"S":"Jagjit"}}},{"M":{"name":{"S":"Aabhas"}}},{"M":{"name":{"S":"Mudit"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-09T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-09T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Aaryaman"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-11T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Kshiteej"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Apurv"}}},{"M":{"name":{"S":"Vivek"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Meghraj"}}},{"M":{"name":{"S":"Divij"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Sahaj( tentative)"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Uday (t)"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Manan"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-12T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-12T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"+919999999999"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-13T07:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-14T08:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahaj( confirm)"}}},{"M":{"name":{"S":"Kshiteej (Paid)"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Apurv"}}},{"M":{"name":{"S":"Vivek (Paid)"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Meghraj (Paid)"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Uday Paid"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Bhavya (Paid)"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Darryl"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-08-13T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-13T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Rohit"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Raghav"}}},{"M":{"name":{"S":"Aaryaman"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"TJ +1"}}},{"M":{"name":{"S":"TJ + 2"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"3"},"startTime":{"S":"2023-08-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-13T16:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Rohit"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Raghav"}}},{"M":{"name":{"S":"Aaryaman"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Abhimanyu Chopra"},"waNumber":{"S":"+16507890396"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-14T16:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Kaka"}}},{"M":{"name":{"S":"\'"}}},{"M":{"name":{"S":"Aaryaman"}}},{"M":{"name":{"S":"Subba"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"startTime":{"S":"2023-08-14T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-14T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"Aaryaman"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-15T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"apoorv"}}},{"M":{"name":{"S":"Aaryaman"}}},{"M":{"name":{"S":"Siddhartha"}}},{"M":{"name":{"S":"Adhyayana"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Vishnu (T)"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-16T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-16T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Shreyas"}}},{"M":{"name":{"S":"Salaj"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"jasjeet"}}},{"M":{"name":{"S":"Jasjeet + 1"}}},{"M":{"name":{"S":"Jasjeet + 2"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-17T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-17T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shubham (c)"}}},{"M":{"name":{"S":"Deepankur  (c)"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Samarth sharma (c)"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"ALBIN"}}},{"M":{"name":{"S":"Sanjay .P(c)"}}},{"M":{"name":{"S":"Samarth Paul(c)"}}},{"M":{"name":{"S":"Sahaj"}}},{"M":{"name":{"S":"Sahaj+1"}}},{"M":{"name":{"S":"Swadesh(c)"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-18T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-18T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Kaka\'"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Aakash"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Mohammad"}}},{"M":{"name":{"S":"Pranav"}}},{"M":{"name":{"S":"Sahil v"}}},{"M":{"name":{"S":"Prashant J"}}},{"M":{"name":{"S":"Milind"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"350"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-19T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-19T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/cN2dUI5gM8yW7As28s"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday (Paid)"}}},{"M":{"name":{"S":". Negi (Paid)"}}},{"M":{"name":{"S":"Apurv"}}},{"M":{"name":{"S":"Swadesh"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Sanjay(t)"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"samarth sharma"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Apoorv"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-21T15:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday paid"}}},{"M":{"name":{"S":"Sahil V"}}},{"M":{"name":{"S":"Abhijeet c"}}},{"M":{"name":{"S":"Shreshth c"}}},{"M":{"name":{"S":"Krish (paid)"}}},{"M":{"name":{"S":"Vivek paid"}}},{"M":{"name":{"S":"Vivek + 1 paid"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Ishu c"}}},{"M":{"name":{"S":"Kshiteej paid"}}},{"M":{"name":{"S":"Daksh paid"}}},{"M":{"name":{"S":"Akash paid"}}},{"M":{"name":{"S":"Vineet paid"}}},{"M":{"name":{"S":"Arpit paid"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-22T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-22T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Negi"}}},{"M":{"name":{"S":"Rohan"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-23T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-23T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Kaka\'"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Balwant"}}},{"M":{"name":{"S":"Rohit"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Arpit"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Sahaj"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-24T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-24T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Meghraj ✅"}}},{"M":{"name":{"S":"Rahul ✅"}}},{"M":{"name":{"S":"Gatlin ✅"}}},{"M":{"name":{"S":"Manan"}}},{"M":{"name":{"S":"Simranjeet"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Vivek ✅"}}},{"M":{"name":{"S":"Krish S ✅"}}},{"M":{"name":{"S":"Harsh G ✅"}}},{"M":{"name":{"S":"Samarth Paul"}}},{"M":{"name":{"S":"Swadesh"}}},{"M":{"name":{"S":"Kaustubh ✅"}}},{"M":{"name":{"S":"Ishu (c)"}}},{"M":{"name":{"S":"Swadesh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-25T16:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Abhi ✅"}}},{"M":{"name":{"S":"Nishant ✅"}}},{"M":{"name":{"S":"Aabhas"}}},{"M":{"name":{"S":"Kshiteej"}}},{"M":{"name":{"S":"Aman ✅"}}},{"M":{"name":{"S":"Manjeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Priyank ✅"}}},{"M":{"name":{"S":"Priyank+1 ✅"}}},{"M":{"name":{"S":"Priyank+2 ✅"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Swadesh"}}},{"M":{"name":{"S":"Yatharth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-27T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-27T16:30:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Sahaj"}}},{"M":{"name":{"S":"Kshiteej ✅"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Anmol"}}},{"M":{"name":{"S":"Pranav B"}}},{"M":{"name":{"S":"Sachin ✅"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Rwit"}}},{"M":{"name":{"S":"Harsh G"}}},{"M":{"name":{"S":"Krish S"}}},{"M":{"name":{"S":"Rahul S"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Prashant"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-30T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-30T17:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-08-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Ishu"}}},{"M":{"name":{"S":"apoorv ✅"}}},{"M":{"name":{"S":"Govind ✅"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Vivek"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Bhavik"}}},{"M":{"name":{"S":"Sahaj ✅"}}},{"M":{"name":{"S":"Meghraj ✅"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Anil"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Mohak"}}},{"M":{"name":{"S":"Agney"}}},{"M":{"name":{"S":"Arpit"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"startTime":{"S":"2023-08-31T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-31T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Mridul"}}},{"M":{"name":{"S":"Kaushal"}}},{"M":{"name":{"S":"Sandeep"}}},{"M":{"name":{"S":"Vikas"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Meghraj"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-02T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-02T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shresth ✅"}}},{"M":{"name":{"S":"Sanjay ✅"}}},{"M":{"name":{"S":"Abhijeet ✅"}}},{"M":{"name":{"S":"Vivek"}}},{"M":{"name":{"S":"Daksh ✅"}}},{"M":{"name":{"S":"Samarth.P ✅"}}},{"M":{"name":{"S":"Garry ✅"}}},{"M":{"name":{"S":"Vikas ✅"}}},{"M":{"name":{"S":"Krish ✅"}}},{"M":{"name":{"S":"Harsh ✅"}}},{"M":{"name":{"S":"Arpit"}}},{"M":{"name":{"S":"nishant ✅"}}},{"M":{"name":{"S":"Sahaj ✅"}}},{"M":{"name":{"S":"Shubham ✅"}}},{"M":{"name":{"S":"Aditya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krish ✅"}}},{"M":{"name":{"S":"Deepankur ✅"}}},{"M":{"name":{"S":"Yatharth ✅"}}},{"M":{"name":{"S":"Abhijeet ✅"}}},{"M":{"name":{"S":"Shreshth ✅"}}},{"M":{"name":{"S":"Jatin ✅"}}},{"M":{"name":{"S":"Arjun ✅"}}},{"M":{"name":{"S":"TJ ✅"}}},{"M":{"name":{"S":"Mohak ✅"}}},{"M":{"name":{"S":"Swadesh ✅"}}},{"M":{"name":{"S":"Pranav ✅"}}},{"M":{"name":{"S":"Kabir/Saurabh ✅"}}},{"M":{"name":{"S":"Tushar ✅"}}},{"M":{"name":{"S":"Shubham ✅"}}},{"M":{"name":{"S":"Arpit"}}},{"M":{"name":{"S":"Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Mohak"}}},{"M":{"name":{"S":"Tj"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Pranav"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Akash"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-09T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-09T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pranav"}}},{"M":{"name":{"S":"Deepankur"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Sahaj"}}},{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Veer"}}},{"M":{"name":{"S":"Kaneshwar ✅"}}},{"M":{"name":{"S":"Touhid"}}},{"M":{"name":{"S":"Jayant ✅"}}},{"M":{"name":{"S":"Rajath ✅"}}},{"M":{"name":{"S":"Pravin"}}},{"M":{"name":{"S":"Subba ✅"}}},{"M":{"name":{"S":"Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-10T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Akash"}}},{"M":{"name":{"S":"Ramit"}}},{"M":{"name":{"S":"abhinav"}}},{"M":{"name":{"S":"lakshay"}}},{"M":{"name":{"S":"Ramish"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"225"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vivek ✅"}}},{"M":{"name":{"S":"Govind ✅"}}},{"M":{"name":{"S":"Madhav ✅"}}},{"M":{"name":{"S":"Mohak ✅"}}},{"M":{"name":{"S":"Abhijeet ✅"}}},{"M":{"name":{"S":"Samarth S ✅"}}},{"M":{"name":{"S":"Amar ✅"}}},{"M":{"name":{"S":"Abhinav ✅"}}},{"M":{"name":{"S":"Pravar ✅"}}},{"M":{"name":{"S":"Satwik✅"}}},{"M":{"name":{"S":"Sachin(t)"}}},{"M":{"name":{"S":"Harsh G ✅"}}},{"M":{"name":{"S":"Krish ✅"}}},{"M":{"name":{"S":"Sahil ✅"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Kk"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-14T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-14T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vikas ✅"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Akash ✅"}}},{"M":{"name":{"S":"Saurabh ✅"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Anil ✅"}}},{"M":{"name":{"S":"Devesh ✅"}}},{"M":{"name":{"S":"Ajay ✅"}}},{"M":{"name":{"S":"Akash ✅"}}},{"M":{"name":{"S":"Mukul ✅"}}},{"M":{"name":{"S":"Ramish"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-16T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-16T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Aabhas"}}},{"M":{"name":{"S":"pravin"}}},{"M":{"name":{"S":"Anil"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Sahaj (T)"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Mohak"}}},{"M":{"name":{"S":"Tj"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"Shaun"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-17T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Madhav"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-20T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/fZecQEfVqg1o08028n"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Madhav ✅"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}}]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-21T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-21T16:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Devesh ✅"}}},{"M":{"name":{"S":"Gaurav ✅"}}},{"M":{"name":{"S":"Mukul ✅"}}},{"M":{"name":{"S":"Akash Thapa ✅"}}},{"M":{"name":{"S":"Kaka\' ✅"}}},{"M":{"name":{"S":"Arpit"}}},{"M":{"name":{"S":"Arpit +1"}}},{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"aditya"}}},{"M":{"name":{"S":"Shubhendu"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Amar+1"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-23T14:15:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Daksh"}}}]},"venueName":{"S":"Spada arenas"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/YXfJVBRzhpaDXzCJ6?g_st=iw"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Tushar ✅"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Sahaj ✅"}}},{"M":{"name":{"S":"Vinayak ☑️"}}},{"M":{"name":{"S":"Vishnu ☑️"}}},{"M":{"name":{"S":"Satyansh ✅"}}},{"M":{"name":{"S":"Amar ☑️"}}},{"M":{"name":{"S":"Kshiteej ✅"}}},{"M":{"name":{"S":"Krish ✅"}}},{"M":{"name":{"S":"Yatharth ☑️"}}},{"M":{"name":{"S":"Vaibhav ✅"}}},{"M":{"name":{"S":"Subba ✅"}}},{"M":{"name":{"S":"Madhav"}}}]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-26T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-26T17:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Madhav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-09-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Vikas"}}},{"M":{"name":{"S":"Maulik"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Ajay"}}},{"M":{"name":{"S":"Anuj"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Thapa"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Kaka’"}}},{"M":{"name":{"S":"Mukul"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-09-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Baqir Khan"},"waNumber":{"S":"+917275885583"}}},{"M":{"name":{"S":"Baqir ✅"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Mohommad"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Suyash ☑️"}}},{"M":{"name":{"S":"TJ ☑️"}}},{"M":{"name":{"S":"Kaka\'"}}},{"M":{"name":{"S":"Sarthak Aggarwal ☑️"}}},{"M":{"name":{"S":"Mohak ☑️"}}},{"M":{"name":{"S":"Ashu ✅"}}},{"M":{"name":{"S":"Divij ☑️"}}},{"M":{"name":{"S":"Madhav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-01T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Adarsh"}}},{"M":{"name":{"S":"Rahul S"}}},{"M":{"name":{"S":"Pranav B"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-02T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Atul"}}},{"M":{"name":{"S":"Kittu"}}},{"M":{"name":{"S":"Arjun"}}},{"M":{"name":{"S":"Rishabh"}}},{"M":{"name":{"S":"Anirban"}}},{"M":{"name":{"S":"Anirban +1"}}},{"M":{"name":{"S":"Anirban + 2"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhi Burman ✅"}}},{"M":{"name":{"S":"Madhav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-05T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Omkar"}}},{"M":{"name":{"S":"Anuj"}}},{"M":{"name":{"S":"Devesh"}}},{"M":{"name":{"S":"Mukul"}}},{"M":{"name":{"S":"Kaka\'"}}},{"M":{"name":{"S":"Thapa"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Baqir Khan"},"waNumber":{"S":"+917275885583"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"\'"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-09T14:45:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Amar"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Vishnu"}}},{"M":{"name":{"S":"Chirag"}}},{"M":{"name":{"S":"Yuvraj"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Harsh Ganatra"},"waNumber":{"S":"+919619551440"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-17T14:45:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-18T15:45:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-18T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahaj+2"}}},{"M":{"name":{"S":"Tushar ✅"}}},{"M":{"name":{"S":"Satyansh ✅"}}},{"M":{"name":{"S":"Krish ✅"}}},{"M":{"name":{"S":"Vijit"}}},{"M":{"name":{"S":"Saha(t) ✅"}}},{"M":{"name":{"S":"Sahaj+1"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Abhijeet ✅"}}},{"M":{"name":{"S":"Devesh ✅"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Amar"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-18T14:45:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Sahaj"}}},{"M":{"name":{"S":"Samarth Paul⁩"}}},{"M":{"name":{"S":"Samarth Sharma"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Naval"}}},{"M":{"name":{"S":"Raj"}}},{"M":{"name":{"S":"Sachit"}}},{"M":{"name":{"S":"Mayank"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Ritesh"}}},{"M":{"name":{"S":"Rajath"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-20T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Adarsh"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"Parth"}}},{"M":{"name":{"S":"Vishnu"}}},{"M":{"name":{"S":"Vinayak"}}},{"M":{"name":{"S":"Akshay"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Sankalp"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-22T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Simranjeet"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-23T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Milind"}}},{"M":{"name":{"S":"Shreshth ✅"}}},{"M":{"name":{"S":"Rajath"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Simranjeet"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"sourav"}}},{"M":{"name":{"S":"atharv"}}},{"M":{"name":{"S":"Charan"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Pranjal"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-24T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-24T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Dipankar"}}},{"M":{"name":{"S":"Uday ✅"}}},{"M":{"name":{"S":"Abhijeet (t)"}}},{"M":{"name":{"S":"Shreshth (t)"}}},{"M":{"name":{"S":"Govind"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-25T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-25T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Naveen"}}},{"M":{"name":{"S":"Satyansh"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"Milind"}}},{"M":{"name":{"S":"Dipankar"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Aruj"}}},{"M":{"name":{"S":"Ritesh"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"AdityaR"}}},{"M":{"name":{"S":"Uday(t)"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-26T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Madhav"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-27T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-27T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/fZecQEfVqg1o08028n"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Jatin"}}},{"M":{"name":{"S":"Abhijeet  ✅"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Suyash"}}},{"M":{"name":{"S":"sourav"}}},{"M":{"name":{"S":"atharv"}}},{"M":{"name":{"S":"Ashu ✅"}}},{"M":{"name":{"S":"Aruj"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Pranav"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Divij"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Kaushal"}}},{"M":{"name":{"S":"Bhavya"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Swadesh"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Shubham +1"}}},{"M":{"name":{"S":"Shubham + 2"}}},{"M":{"name":{"S":"Aruj"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Abhijeet"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-29T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Samarth Sharma"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Aruj"}}},{"M":{"name":{"S":"Daksh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-10-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-10-31T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-31T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Ravish (t)"}}},{"M":{"name":{"S":"Alok (t)"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"Satyansh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-01T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Shresth"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Ravish (t)"}}},{"M":{"name":{"S":"Alok (t)"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"Satyansh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-01T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-01T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kittu ✅"}}},{"M":{"name":{"S":"Atul ✅"}}},{"M":{"name":{"S":"Avdhesh ✅"}}},{"M":{"name":{"S":"Rishab ✅"}}},{"M":{"name":{"S":"Anirban ✅"}}},{"M":{"name":{"S":"Naveen ✅"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Abhijeet ✅"}}},{"M":{"name":{"S":"Ritesh"}}},{"M":{"name":{"S":"Shresth✅"}}},{"M":{"name":{"S":"Sagar"}}},{"M":{"name":{"S":"Pravin✅"}}},{"M":{"name":{"S":"Raj ✅"}}},{"M":{"name":{"S":"Garvit +1"}}},{"M":{"name":{"S":"Swadesh"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-02T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Aman + 1"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-03T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-04T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pranjal"}}},{"M":{"name":{"S":"Utkarsh"}}},{"M":{"name":{"S":"Aryaman"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Aruj"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Anmol"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Tushar"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-05T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sahil Jaiprakash Vyas"},"waNumber":{"S":"+917776091114"}}},{"M":{"name":{"S":"Suman ✅"}}},{"M":{"name":{"S":"Sahil V ✅"}}},{"M":{"name":{"S":"Atharv✅"}}},{"M":{"name":{"S":"Ravish ✅"}}},{"M":{"name":{"S":"Rachit ✅"}}},{"M":{"name":{"S":"Himank ✅"}}},{"M":{"name":{"S":"Subba ✅"}}},{"M":{"name":{"S":"Abhishek✅"}}},{"M":{"name":{"S":"Arpit✅"}}},{"M":{"name":{"S":"Shubham S. ☑️"}}},{"M":{"name":{"S":"Shubham S. +1 ☑️"}}},{"M":{"name":{"S":"Swadesh  ✅"}}},{"M":{"name":{"S":"Shanu ✅"}}},{"M":{"name":{"S":"Alok K ☑️"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Atharv"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Sourav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-08T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-08T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Raj"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-09T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Rahul"}}},{"M":{"name":{"S":"John"}}},{"M":{"name":{"S":"Shivraj"}}},{"M":{"name":{"S":"Milind"}}},{"M":{"name":{"S":"Saroch"}}},{"M":{"name":{"S":"Dwai"}}},{"M":{"name":{"S":"Abhishek ✅"}}},{"M":{"name":{"S":"Raj ✅"}}},{"M":{"name":{"S":"Aman ✅"}}},{"M":{"name":{"S":"Anirban  ✅"}}},{"M":{"name":{"S":"Atul ✅"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Daksh"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Asish"}}},{"M":{"name":{"S":"Romel"}}},{"M":{"name":{"S":"nickson"}}},{"M":{"name":{"S":"Govind"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-13T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Shubham"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Milind"}}},{"M":{"name":{"S":"Dwai"}}},{"M":{"name":{"S":"Saroch"}}},{"M":{"name":{"S":"Sulaksh"}}},{"M":{"name":{"S":"Rishabh"}}},{"M":{"name":{"S":"Milind +1"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Yatharth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Akshyavrit"}}},{"M":{"name":{"S":"Asif"}}},{"M":{"name":{"S":"Raj"}}},{"M":{"name":{"S":"atharv"}}},{"M":{"name":{"S":"Vivek"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Anmol"}}},{"M":{"name":{"S":"Samarth"}}},{"M":{"name":{"S":"Amar"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-17T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Siddhartha Sehgal"}}},{"M":{"name":{"S":"Atharv"}}},{"M":{"name":{"S":"Raj"}}},{"M":{"name":{"S":"Sankalp"}}},{"M":{"name":{"S":"Siddharth"}}},{"M":{"name":{"S":"itish"}}},{"M":{"name":{"S":"devarshi"}}},{"M":{"name":{"S":"Tushar"}}},{"M":{"name":{"S":"Akshyavrit"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Anmol"}}},{"M":{"name":{"S":"Sankalp +1"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Asif"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-19T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-19T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Yatharth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-20T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-22T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-22T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-23T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-11-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Deepak"}}},{"M":{"name":{"S":"Vivek ✅"}}},{"M":{"name":{"S":"Vivek +1 ✅"}}},{"M":{"name":{"S":"Krish"}}},{"M":{"name":{"S":"Puru"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"Subba ✅"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Satvik ✅"}}},{"M":{"name":{"S":"Simmu"}}},{"M":{"name":{"S":"Gaurav"}}},{"M":{"name":{"S":"Rishab"}}},{"M":{"name":{"S":"Chiru"}}},{"M":{"name":{"S":"Pravin"}}},{"M":{"name":{"S":"Milind"}}},{"M":{"name":{"S":"Ashu"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-11-30T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-12-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uttkarsh"}}},{"M":{"name":{"S":"Maulik"}}},{"M":{"name":{"S":"Abhimanyu paid"}}},{"M":{"name":{"S":"Govind ✅"}}},{"M":{"name":{"S":"Nishant ✅"}}},{"M":{"name":{"S":"Ashish"}}},{"M":{"name":{"S":"@⁨~Rishab Kaushik⁩"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shashank"}}},{"M":{"name":{"S":"Pravin"}}},{"M":{"name":{"S":"Yatharth ✅"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Naman"}}},{"M":{"name":{"S":"Naman"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"simranjeet"}}},{"M":{"name":{"S":"Pranav"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Shubham"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-06T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-06T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-12-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Madhav"}}},{"M":{"name":{"S":"Naman G"}}},{"M":{"name":{"S":"Naman C"}}},{"M":{"name":{"S":"Paritosh"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Garvit"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"⁠atharv"}}},{"M":{"name":{"S":"Mehran"}}},{"M":{"name":{"S":"Gautam"}}},{"M":{"name":{"S":"Yatharth"}}},{"M":{"name":{"S":"Vinit Pandey"}}},{"M":{"name":{"S":"Aayush bedi"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-11T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-12-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"⁠ ⁠⁠"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-13T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-13T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shanu"}}},{"M":{"name":{"S":"Shanu+1"}}},{"M":{"name":{"S":"Shanu+2"}}},{"M":{"name":{"S":"Shanu+3"}}},{"M":{"name":{"S":"Harsh"}}},{"M":{"name":{"S":"Apoorv"}}},{"M":{"name":{"S":"Vaibhav"}}},{"M":{"name":{"S":"abhijeet"}}},{"M":{"name":{"S":"Shreshth"}}},{"M":{"name":{"S":"Abhinav"}}},{"M":{"name":{"S":"Nishant"}}},{"M":{"name":{"S":"Prashant"}}},{"M":{"name":{"S":"Govind"}}},{"M":{"name":{"S":"pravin"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-12-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Rohit"}}},{"M":{"name":{"S":"Puru"}}},{"M":{"name":{"S":"Ritik"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-12-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Rohit"}}},{"M":{"name":{"S":"Puru"}}},{"M":{"name":{"S":"Ritik"}}}]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2023-12-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"TJ"}}},{"M":{"name":{"S":"Kaka\'"}}},{"M":{"name":{"S":"Divij"}}},{"M":{"name":{"S":"Aman"}}},{"M":{"name":{"S":"Sahaj"}}},{"M":{"name":{"S":"Ritik"}}},{"M":{"name":{"S":"milind"}}},{"M":{"name":{"S":"Manjunath"}}},{"M":{"name":{"S":"Akshyavrit"}}},{"M":{"name":{"S":"Sanjay"}}},{"M":{"name":{"S":"Ankit Y"}}},{"M":{"name":{"S":"Sid"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2023-12-23T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-12-23T13:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-01-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"uday"}}},{"M":{"name":{"S":"⁠ ⁠Amshu"}}},{"M":{"name":{"S":"⁠ ⁠Amshu+1"}}},{"M":{"name":{"S":"⁠ ⁠Bhavya"}}},{"M":{"name":{"S":"⁠ ⁠Akshyavrit"}}},{"M":{"name":{"S":"⁠ ⁠Sanjay"}}},{"M":{"name":{"S":"⁠ ⁠Rohit"}}},{"M":{"name":{"S":"Abhijeet"}}},{"M":{"name":{"S":"Ashu"}}},{"M":{"name":{"S":"⁠ ⁠Subinoy"}}},{"M":{"name":{"S":"⁠ ⁠Gautam"}}},{"M":{"name":{"S":"⁠ ⁠Shreshth"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-01-28T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-01-28T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"subham sinha"},"waNumber":{"S":"6290768299"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-02T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-02T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-03T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-03T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"⁠ ⁠"}}},{"M":{"name":{"S":"⁠"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-05T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-06T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-06T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-07T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-07T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Abhinav"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-08T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-08T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shashank ✅"}}},{"M":{"name":{"S":"Rohit✅"}}},{"M":{"name":{"S":"Subinoy ✅"}}},{"M":{"name":{"S":"Divyansh ✅"}}},{"M":{"name":{"S":"Pranav ✅"}}},{"M":{"name":{"S":"Manjunath✅"}}},{"M":{"name":{"S":"Apaar✅"}}},{"M":{"name":{"S":"Apaar+1✅"}}},{"M":{"name":{"S":"Apaar+2✅"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-10T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-10T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Nishant"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-11T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-11T13:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-12T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ambuj ✅"}}},{"M":{"name":{"S":"Ambuj+1✅"}}},{"M":{"name":{"S":"Ambuj +2✅"}}},{"M":{"name":{"S":"Ambuj +3✅"}}},{"M":{"name":{"S":"Ambuj +4✅"}}},{"M":{"name":{"S":"Ambuj +5✅"}}},{"M":{"name":{"S":"Praseej Singh"},"waNumber":{"S":"9988341172"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-14T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-14T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Ishan Kushwaha"},"waNumber":{"S":"8299838619"}}},{"M":{"name":{"S":"amshumann singh"},"waNumber":{"S":"9871297099"}}},{"M":{"name":{"S":"Praseej Singh"},"waNumber":{"S":"9988341172"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-16T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-17T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA4k8eRmeXk5sk4gm"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"amshumann singh"},"waNumber":{"S":"9871297099"}}},{"M":{"name":{"S":"Shivam Sahu"},"waNumber":{"S":"8860099738"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-18T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-18T13:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-19T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-19T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-20T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-20T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sanjay Chauhan"},"waNumber":{"S":"8171837345"}}},{"M":{"name":{"S":"Akshay Tanwar "},"waNumber":{"S":"8171837345"}}},{"M":{"name":{"S":"Gaurav Singh"},"waNumber":{"S":"9870811754"}}},{"M":{"name":{"S":"Raunak Singh"},"waNumber":{"S":"9855099174"}}},{"M":{"name":{"S":"Ansaf Akhtar"},"waNumber":{"S":"9855099174"}}},{"M":{"name":{"S":"Nitin Srivastava"},"waNumber":{"S":"7060747093"}}},{"M":{"name":{"S":"shivam shukla"},"waNumber":{"S":"7310655123"}}},{"M":{"name":{"S":"Nishant Tathagat"},"waNumber":{"S":"9119796110"}}},{"M":{"name":{"S":"Devarshi ✅"}}},{"M":{"name":{"S":"Archit✅"}}},{"M":{"name":{"S":"Kishan ✅"}}},{"M":{"name":{"S":"Pankaj✅"}}},{"M":{"name":{"S":"Ansaf ✅"}}},{"M":{"name":{"S":"Nitin ✅"}}},{"M":{"name":{"S":"Yash ✅"}}},{"M":{"name":{"S":"Raunak ✅"}}},{"M":{"name":{"S":"Akshay ✅"}}},{"M":{"name":{"S":"Gaurav✅"}}},{"M":{"name":{"S":"Shivam ✅"}}},{"M":{"name":{"S":"Apoorv"}}},{"M":{"name":{"S":"Sanjay ✅"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-21T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-21T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-22T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-22T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Lakeside turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://goo.gl/maps/Ttt1PdAHYc4N78Rx7"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-02-23T14:00:00.000Z"},"endTime":{"S":"2024-02-23T15:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/fZecQEfVqg1o08028n"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-02-24T13:30:00.000Z"},"endTime":{"S":"2024-02-24T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Bhavya"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Shubham S."}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-25T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-25T14:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"⁠ ⁠Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-26T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"⁠ ⁠Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-27T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"⁠ ⁠Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-28T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-28T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-02-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"⁠ ⁠Sahil"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-02-29T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-02-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhi"}}},{"M":{"name":{"S":"Aashutosh Pandey"},"waNumber":{"S":"9084938966"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-02T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-02T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Abhi"}}},{"M":{"name":{"S":"Akshyavrit Tanwar"},"waNumber":{"S":"9119796110"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-03T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-03T14:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Abhi"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-04T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-05T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Jitaksh Yadav"},"waNumber":{"S":"8929652162"}}},{"M":{"name":{"S":"Nikhil Prakash"},"waNumber":{"S":"9956382206"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aashutosh Pandey"},"waNumber":{"S":"9084938966"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"Abheek Babel"},"waNumber":{"S":"7975893065"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-09T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-09T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"naman sagar"},"waNumber":{"S":"8523965829"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-10T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-10T14:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-11T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}},{"M":{"name":{"S":"Aditya Gupta"},"waNumber":{"S":"9871607181"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-12T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhishek"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-13T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-13T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠Abhimanyu"}}},{"M":{"name":{"S":"Rahul Jain"},"waNumber":{"S":"8285912596"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aashutosh Pandey"},"waNumber":{"S":"9084938966"}}},{"M":{"name":{"S":"Leeladher Yaduwanshi"},"waNumber":{"S":"9617439761"}}},{"M":{"name":{"S":"Arjun Dey"},"waNumber":{"S":"8697614668"}}},{"M":{"name":{"S":"Anirban"}}},{"M":{"name":{"S":"Gourav Singh"},"waNumber":{"S":"9547551667"}}},{"M":{"name":{"S":"Manjunath"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Simranjeet "},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Abheek Babel"},"waNumber":{"S":"7975893065"}}},{"M":{"name":{"S":"Puru Verma"},"waNumber":{"S":"9899696578"}}},{"M":{"name":{"S":"Kaphil Diwakar"},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Abheek Babel"},"waNumber":{"S":"7975893065"}}},{"M":{"name":{"S":"Abheek Babel"},"waNumber":{"S":"7975893065"}}}]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-15T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-15T16:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"Leeladher Yaduwanshi"},"waNumber":{"S":"09617439761"}}},{"M":{"name":{"S":"Sahil Siwatch"},"waNumber":{"S":"8700148224"}}},{"M":{"name":{"S":"Shanu Kheria"},"waNumber":{"S":"9137119608"}}},{"M":{"name":{"S":"Abheek Babel"},"waNumber":{"S":"7975893065"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-16T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-16T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠AC"}}},{"M":{"name":{"S":"Sajesh Kumar"},"waNumber":{"S":"9880452177"}}}]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"240"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-16T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-16T15:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/7sI3g44cI2ay3kc9B9"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"Sajesh Kumar"},"waNumber":{"S":"9880152177"}}},{"M":{"name":{"S":"Adarsh A S"},"waNumber":{"S":"9747636408"}}},{"M":{"name":{"S":"Suman Ijam"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Vichitra Sharma"},"waNumber":{"S":"8983576961"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Suyash Garg"},"waNumber":{"S":"9565233082"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}},{"M":{"name":{"S":"gautam prakirn"},"waNumber":{"S":"8383048621"}}},{"M":{"name":{"S":"Saubhagya"},"waNumber":{"S":"8874294546"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-17T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-17T14:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"Ashish Rai"},"waNumber":{"S":"9971647065"}}},{"M":{"name":{"S":"Puru Verma"},"waNumber":{"S":"08368829030"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9899696578"}}},{"M":{"name":{"S":"Veer Singh (Mc_Dark)"},"waNumber":{"S":"9953015005"}}},{"M":{"name":{"S":"Govind Dasan"},"waNumber":{"S":"8095393503"}}},{"M":{"name":{"S":"Mehul "},"waNumber":{"S":"9953015005"}}},{"M":{"name":{"S":"Arnav "},"waNumber":{"S":"9953015005"}}},{"M":{"name":{"S":"Avi"},"waNumber":{"S":"9953015005"}}},{"M":{"name":{"S":"chiranjeev bisht"},"waNumber":{"S":"9761914155"}}},{"M":{"name":{"S":"Gaurav bisht"},"waNumber":{"S":"9761914155"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-18T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"Abhijeet Singh"},"waNumber":{"S":"7376302257"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-19T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-19T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"chiranjeev bisht"},"waNumber":{"S":"9761914155"}}},{"M":{"name":{"S":"Gaurav"},"waNumber":{"S":"9761914155"}}},{"M":{"name":{"S":"Param Chahal"},"waNumber":{"S":"8360220267"}}},{"M":{"name":{"S":"Param +1 "},"waNumber":{"S":"8360220267"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-20T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-20T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"Krish Sapra"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"ankit pali"},"waNumber":{"S":"8077897044"}}},{"M":{"name":{"S":"Saubhagya Gaurav"},"waNumber":{"S":"8874294546"}}},{"M":{"name":{"S":"animesh chhabra"},"waNumber":{"S":"8976263730"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-21T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-21T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ Uday"}}},{"M":{"name":{"S":"aditya dhaigude"},"waNumber":{"S":"8879962449"}}},{"M":{"name":{"S":"Suman Ijam"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Suman Sapkota"},"waNumber":{"S":"9289291222"}}},{"M":{"name":{"S":"Vinay khaneja"},"waNumber":{"S":"7042428899"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9818822233"}}},{"M":{"name":{"S":"Mohit Sharma"},"waNumber":{"S":"8983576961"}}},{"M":{"name":{"S":"Ashish Rai"},"waNumber":{"S":"9971647065"}}},{"M":{"name":{"S":"chiranjeev bisht"},"waNumber":{"S":"9761914155"}}},{"M":{"name":{"S":"Gaurav bisht"},"waNumber":{"S":"9761914155"}}},{"M":{"name":{"S":"Gaurav +1"},"waNumber":{"S":"9761914155"}}},{"M":{"name":{"S":"Sahil Jaiprakash Vyas"},"waNumber":{"S":"+917776091114"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-22T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Hariharan V"},"waNumber":{"S":"9535078116"}}},{"M":{"name":{"S":"Raashid Mohd"},"waNumber":{"S":"8075115652"}}},{"M":{"name":{"S":"Rishikesh"},"waNumber":{"S":"+919137270349"}}},{"M":{"name":{"S":"jatin chopra"},"waNumber":{"S":"+917838266346"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-23T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-23T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Abhishek rawat"},"waNumber":{"S":"9205257304"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-24T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-24T14:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Aditya"}}},{"M":{"name":{"S":"kartik thakur"},"waNumber":{"S":"7984717278"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-26T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-27T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-27T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krish Sapra"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"Saharsh Singh"},"waNumber":{"S":"9013047177"}}},{"M":{"name":{"S":"Animesh "},"waNumber":{"S":"9013047177"}}},{"M":{"name":{"S":"manju b"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"pranav"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"abhimanyu kadam"},"waNumber":{"S":"9594068835"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"Suman Ijam"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Aayush Awasthi"},"waNumber":{"S":"9821710930"}}},{"M":{"name":{"S":"Dwaipayan Bhattacharyya"},"waNumber":{"S":"7875533511"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-28T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-28T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashutosh Pathak"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"animesh chhabra"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"manju b"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"pranav"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Adarsh A S"},"waNumber":{"S":"9747636408"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"ankit pali"},"waNumber":{"S":"8077897044"}}},{"M":{"name":{"S":"Ashutosh Pathak"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"abhimanyu kadam"},"waNumber":{"S":"9594068835"}}},{"M":{"name":{"S":"Mrugank "},"waNumber":{"S":"9594068835"}}},{"M":{"name":{"S":"Suman Ijam"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Aditya Gandhi"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Nitesh Kumar Mehla"},"waNumber":{"S":"8377890612"}}},{"M":{"name":{"S":"Bhavya Kariwala"},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"jatin chopra"},"waNumber":{"S":"7838266346"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-30T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-30T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-03-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Akshyavrit Tanwar"},"waNumber":{"S":"9119796110"}}},{"M":{"name":{"S":"Sanjay Chauhan "},"waNumber":{"S":"9119796110"}}},{"M":{"name":{"S":"Bhavya Kariwala"},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"sanav+1"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav+2"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Siddharth Gupta"},"waNumber":{"S":"08585010354"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-03-31T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-31T14:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashish Rai"},"waNumber":{"S":"9971647065"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-01T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-01T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Puru Verma"},"waNumber":{"S":"8368829030"}}},{"M":{"name":{"S":"Yash "},"waNumber":{"S":"9899696578"}}},{"M":{"name":{"S":"Abhijeet Singh"},"waNumber":{"S":"7376302257"}}},{"M":{"name":{"S":"Param Chahal"},"waNumber":{"S":"8360220267"}}},{"M":{"name":{"S":"Suraj Khadka"},"waNumber":{"S":"9833054385"}}},{"M":{"name":{"S":"gautam prakirn"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"manju b"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"pranav "},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Mudit Vijayvergiya"},"waNumber":{"S":"8882079208"}}},{"M":{"name":{"S":"Kurban Krb"},"waNumber":{"S":"9717853604"}}},{"M":{"name":{"S":"Siddhartha Mall"},"waNumber":{"S":"7088971545"}}},{"M":{"name":{"S":"Tushar Nitharwal"},"waNumber":{"S":"9811550117"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-02T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-03T15:55:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-03T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet Singh"},"waNumber":{"S":"7376302257"}}},{"M":{"name":{"S":"Ankit Yadav"},"waNumber":{"S":"7678673497"}}},{"M":{"name":{"S":"Vivek "},"waNumber":{"S":"6376504721"}}},{"M":{"name":{"S":"manju b"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"pranav"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Shubham Agarwal"},"waNumber":{"S":"9560469667"}}},{"M":{"name":{"S":"gautam prakirn"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Aditya Gupta"},"waNumber":{"S":"9871607181"}}},{"M":{"name":{"S":"Sahil Siwatch"},"waNumber":{"S":"918700148224"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-04T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-04T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhasskar KsS"},"waNumber":{"S":"8074407730"}}},{"M":{"name":{"S":"Amit "},"waNumber":{"S":"9985121612"}}},{"M":{"name":{"S":"Aditya Gandhi"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"SHUBHAM SAURABH"},"waNumber":{"S":"9872551702"}}},{"M":{"name":{"S":"Suyash Garg"},"waNumber":{"S":"9565233082"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ankit Yadav"},"waNumber":{"S":"7678673497"}}},{"M":{"name":{"S":"Suraj Khadka"},"waNumber":{"S":"9833054385"}}},{"M":{"name":{"S":"naman sagar"},"waNumber":{"S":"8523965829"}}},{"M":{"name":{"S":"Bhavya Kariwala"},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"asif anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"gautam prakirn"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Ishu Bhagat"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Sahil Tyagi "},"waNumber":{"S":"7906581878"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Hemanth R"},"waNumber":{"S":"8075835531"}}},{"M":{"name":{"S":"Siddhartha Mall"},"waNumber":{"S":"7088971545"}}},{"M":{"name":{"S":"Suraj Khadka"},"waNumber":{"S":"9833054385"}}},{"M":{"name":{"S":"Bhavya Kariwala"},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"Akshyavrit Tanwar"},"waNumber":{"S":"09119796110"}}},{"M":{"name":{"S":"Gaurav"},"waNumber":{"S":"09119796110"}}},{"M":{"name":{"S":"Sukshmant "},"waNumber":{"S":"09119796110"}}},{"M":{"name":{"S":"Shanu Kheria"},"waNumber":{"S":"9137119608"}}},{"M":{"name":{"S":"Aditya Gandhi"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Deepanshu Khulbe"},"waNumber":{"S":"9205625628"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijeet Singh"},"waNumber":{"S":"7376302257"}}},{"M":{"name":{"S":"Puru Verma"},"waNumber":{"S":"8368829030"}}},{"M":{"name":{"S":"Keenu Yash"},"waNumber":{"S":"9899696578"}}},{"M":{"name":{"S":"Abhishek rawat"},"waNumber":{"S":"8368393196"}}},{"M":{"name":{"S":"Nishant Marwah"},"waNumber":{"S":"9899466150"}}},{"M":{"name":{"S":"Hemanth R"},"waNumber":{"S":"8075835531"}}},{"M":{"name":{"S":"Sahaj Oberoi"},"waNumber":{"S":"8860707633"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-08T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-08T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Kartik "},"waNumber":{"S":"7984717278"}}},{"M":{"name":{"S":"Vinayak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Vinayak +1(Deepak)"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Ashok"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Selva"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Anand singh"},"waNumber":{"S":"8920490609"}}},{"M":{"name":{"S":"Nishant"},"waNumber":{"S":"9560537640"}}},{"M":{"name":{"S":"Manjunath"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Arpit"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-09T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-04-10T16:00:00.000Z"},"endTime":{"S":"2024-04-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Jay"},"waNumber":{"S":"9887747444"}}},{"M":{"name":{"S":"AKSHYAVRIT"},"waNumber":{"S":"09119796110"}}},{"M":{"name":{"S":"Sanjay "},"waNumber":{"S":"09119796110"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-11T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-11T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"1"},"waNumber":{"S":"9694906750"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-11T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-11T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kshitij Gupta"},"waNumber":{"S":"9956488239"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Sid"},"waNumber":{"S":"8901572083"}}},{"M":{"name":{"S":"Sid+1"},"waNumber":{"S":"8901572083"}}},{"M":{"name":{"S":"Pramod GK"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Ashish "},"waNumber":{"S":"9971647065"}}},{"M":{"name":{"S":"Aditya Jain"},"waNumber":{"S":"8427845035"}}},{"M":{"name":{"S":"Shanu Kheria"},"waNumber":{"S":"9137119608"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Subinoy Chatterjee "},"waNumber":{"S":"7045048862"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Ishu"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Aditya Gandhi"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"9694906750"}}},{"M":{"name":{"S":"Hemant"},"waNumber":{"S":"7838723874"}}},{"M":{"name":{"S":"Divyam"},"waNumber":{"S":"7838723874"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-13T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Adarsh Rawal"},"waNumber":{"S":"9920950375"}}},{"M":{"name":{"S":"Saurabh"},"waNumber":{"S":"9871492577"}}},{"M":{"name":{"S":"Deba"},"waNumber":{"S":"9692337160"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"9654342480"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"9650279212"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-13T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Siddhartha "},"waNumber":{"S":"7088971545"}}},{"M":{"name":{"S":"Aditya Gupta"},"waNumber":{"S":"9871607181"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"1"},"waNumber":{"S":"8095393503"}}},{"M":{"name":{"S":" "},"waNumber":{"S":"9956488239"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"9880598492"}}},{"M":{"name":{"S":"Kshitij Gupta"},"waNumber":{"S":"9956488239"}}},{"M":{"name":{"S":"Lourdes Gupta"},"waNumber":{"S":"9956488239"}}},{"M":{"name":{"S":"Jonas"},"waNumber":{"S":"9956488239"}}},{"M":{"name":{"S":"Krish Sapra"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"Abrar"},"waNumber":{"S":"8688147740"}}},{"M":{"name":{"S":"Vatsal"},"waNumber":{"S":"8688147740"}}},{"M":{"name":{"S":"Raghav(Abrar+1)"},"waNumber":{"S":"8688147740"}}},{"M":{"name":{"S":"Siddhesh"},"waNumber":{"S":"7224960073"}}},{"M":{"name":{"S":"Nishant"},"waNumber":{"S":"9560537640"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-17T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-17T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harshit "},"waNumber":{"S":"7999692442"}}},{"M":{"name":{"S":"Harshit +1"},"waNumber":{"S":"7999692442"}}},{"M":{"name":{"S":"Harsh Varrdhan"},"waNumber":{"S":"9591866833"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"7004319253"}}},{"M":{"name":{"S":"Aman +1"},"waNumber":{"S":"7004319253"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"8057857697"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"7241145820"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-18T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vidit "},"waNumber":{"S":"7973966321"}}},{"M":{"name":{"S":"Pravar"},"waNumber":{"S":"9131832511"}}},{"M":{"name":{"S":"Rishi"},"waNumber":{"S":"9131832511"}}},{"M":{"name":{"S":"Manjunath"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Simranjeet"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Nitesh "},"waNumber":{"S":"8377890612"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"6294910181"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-04-19T14:30:00.000Z"},"endTime":{"S":"2024-04-19T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Kakashi"},"waNumber":{"S":"7018147132"}}},{"M":{"name":{"S":"Gaurav "},"waNumber":{"S":"7900440214"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-20T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-20T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"One"},"waNumber":{"S":"7988651514"}}},{"M":{"name":{"S":"Archit"},"waNumber":{"S":"9988829411"}}},{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Vinayak "},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deeepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Yuvraj"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"AKSHYAVRIT TANWAR"},"waNumber":{"S":"09119796110"}}},{"M":{"name":{"S":"Govind Dasan"},"waNumber":{"S":"8095393503"}}},{"M":{"name":{"S":"Nishant"},"waNumber":{"S":"9560537640"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-22T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-22T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krish"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Ashish "},"waNumber":{"S":"9971647065"}}},{"M":{"name":{"S":"Animesh Chhabra"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Abhimanyu Kadam "},"waNumber":{"S":"9594068835"}}},{"M":{"name":{"S":"Pack"},"waNumber":{"S":"9568116408"}}},{"M":{"name":{"S":"Lun Baite"},"waNumber":{"S":"9821049213"}}},{"M":{"name":{"S":"Ashok"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Ashok "},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Manjunath"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Simranjeet "},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Tushar"},"waNumber":{"S":"9811550117"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-23T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"9591866833"}}},{"M":{"name":{"S":"Deba"},"waNumber":{"S":"9692337160"}}},{"M":{"name":{"S":"Siddharth Yadav"},"waNumber":{"S":"9650279212"}}},{"M":{"name":{"S":"Saurabh"},"waNumber":{"S":"9871492577"}}},{"M":{"name":{"S":"Ishir"},"waNumber":{"S":"9971611025"}}},{"M":{"name":{"S":"Rohan"},"waNumber":{"S":"9880598492"}}},{"M":{"name":{"S":"Saimon"},"waNumber":{"S":"9319934154"}}},{"M":{"name":{"S":"Ayush"},"waNumber":{"S":"9319934154"}}},{"M":{"name":{"S":"Harman Singh"},"waNumber":{"S":"9511540413"}}},{"M":{"name":{"S":"Manas"},"waNumber":{"S":"+919999363518"}}},{"M":{"name":{"S":"Manas Sharma"},"waNumber":{"S":"+919999363518"}}},{"M":{"name":{"S":"Seerat"},"waNumber":{"S":"9991052009"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9991052009"}}},{"M":{"name":{"S":"Russh Ahluwalia"},"waNumber":{"S":"+919971045005"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-24T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-24T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mihir"},"waNumber":{"S":"6395598744"}}},{"M":{"name":{"S":"Keshav"},"waNumber":{"S":"8076184167"}}},{"M":{"name":{"S":"Dibyansh"},"waNumber":{"S":"8076184167"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}},{"M":{"name":{"S":"Karan"},"waNumber":{"S":"9910921217"}}},{"M":{"name":{"S":"Dwaipayan Bhattacharyya"},"waNumber":{"S":"7875533511"}}},{"M":{"name":{"S":"Milind"},"waNumber":{"S":"9410405944"}}},{"M":{"name":{"S":"Ujjwal Duvedi"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"08368829030"}}},{"M":{"name":{"S":"rishab"},"waNumber":{"S":"9873669884"}}},{"M":{"name":{"S":"Ishir"},"waNumber":{"S":"9971611025"}}},{"M":{"name":{"S":"Sulaksh"},"waNumber":{"S":"8800643183"}}},{"M":{"name":{"S":"Chiru"},"waNumber":{"S":"9761914155"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-25T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-25T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aashish tyagi"},"waNumber":{"S":"9716664460"}}},{"M":{"name":{"S":"Aman kumar"},"waNumber":{"S":"+917004319253"}}},{"M":{"name":{"S":"Manjunath"},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Pranav "},"waNumber":{"S":"9481985585"}}},{"M":{"name":{"S":"Pranjal"},"waNumber":{"S":"9871770386"}}},{"M":{"name":{"S":"Utkarsh"},"waNumber":{"S":"9871770386"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"SAHIL SIWATCH"},"waNumber":{"S":"+918700148224"}}},{"M":{"name":{"S":"Anant Akash"},"waNumber":{"S":"+919900981166"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anmol"},"waNumber":{"S":"7988651514"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"Sid"},"waNumber":{"S":"8901572083"}}},{"M":{"name":{"S":"Sid"},"waNumber":{"S":"8901572083"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Gautam Kumar"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Neeraj manral"},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Ishu Bhagat"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Swapnil Pandey"},"waNumber":{"S":"9039011890"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaphil"},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Nishant garg"},"waNumber":{"S":"+919813493449"}}},{"M":{"name":{"S":"Shanu Kheria"},"waNumber":{"S":"9137119608"}}},{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Rohan "},"waNumber":{"S":"9880598492"}}},{"M":{"name":{"S":"Ishu"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Harmanpreet"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Bhavya "},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"Lionel"},"waNumber":{"S":"9958343619"}}},{"M":{"name":{"S":"Sahil Siwatch"},"waNumber":{"S":"+918700148224"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-28T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-28T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Suyash Saxena"},"waNumber":{"S":"7447000080"}}},{"M":{"name":{"S":"Shubham Sehgal"},"waNumber":{"S":"7447000080"}}},{"M":{"name":{"S":"Vinayak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam "},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Akshay "},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Abrar"},"waNumber":{"S":"8688147740"}}},{"M":{"name":{"S":"Vatsal"},"waNumber":{"S":"8688147740"}}},{"M":{"name":{"S":"VIVEK GAUTAM "},"waNumber":{"S":"6376504721"}}},{"M":{"name":{"S":"Rocky "},"waNumber":{"S":"8383975427"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Lun Baite"},"waNumber":{"S":"9821049213"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-29T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-29T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-04-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rocky "},"waNumber":{"S":"8383975427"}}},{"M":{"name":{"S":"Nipun"},"waNumber":{"S":"9357100100"}}},{"M":{"name":{"S":"Sarthak"},"waNumber":{"S":"9357100100"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Asif"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Abhimanyu"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-04-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ankit Yadav"},"waNumber":{"S":"7678673497"}}},{"M":{"name":{"S":"Sid"},"waNumber":{"S":"7678673497"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Vinayak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Suyash"},"waNumber":{"S":"7447000080"}}},{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"7447000080"}}},{"M":{"name":{"S":"Vedank"},"waNumber":{"S":"7447000080"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepanshu Khulbe"},"waNumber":{"S":"9205625628"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"7004319253"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-01T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-01T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-02T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Trimith"},"waNumber":{"S":"8335994416"}}},{"M":{"name":{"S":"Dhwaj"},"waNumber":{"S":"8335994416"}}},{"M":{"name":{"S":"Pushpendra "},"waNumber":{"S":"8335994416"}}},{"M":{"name":{"S":"Tara"},"waNumber":{"S":"6370793116"}}},{"M":{"name":{"S":"Shanu"},"waNumber":{"S":"9137119608"}}},{"M":{"name":{"S":"sahil siwatch"},"waNumber":{"S":"918700148224"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-03T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Ishu Bhagat"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Harmanpreet "},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Uu"},"waNumber":{"S":"7985679186"}}},{"M":{"name":{"S":"Vaibhav"},"waNumber":{"S":"7985679186"}}},{"M":{"name":{"S":"Atjun"},"waNumber":{"S":"7985679186"}}},{"M":{"name":{"S":"Suyash"},"waNumber":{"S":"9565233082"}}},{"M":{"name":{"S":"Siddharth"},"waNumber":{"S":"9368257852"}}},{"M":{"name":{"S":"Dhairya"},"waNumber":{"S":"9936790544"}}},{"M":{"name":{"S":"Sankalp"},"waNumber":{"S":"9565233082"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-04T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-04T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-04T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Bhavya"},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Sanav"},"waNumber":{"S":"7015557836"}}},{"M":{"name":{"S":"Ankit Yadav"},"waNumber":{"S":"7678673497"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Sahil Siwatch "},"waNumber":{"S":"918700148224"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-05T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-05T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Priyanshu Chakravarty"},"waNumber":{"S":"9670935911"}}},{"M":{"name":{"S":"Vivek Kaushik "},"waNumber":{"S":"9729721965"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Ishaan"},"waNumber":{"S":"9540290714"}}},{"M":{"name":{"S":"Vinayak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Chirag"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Ankit Singh"},"waNumber":{"S":"9811966273"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-06T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-06T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"8130280543"}}},{"M":{"name":{"S":"Aryan"},"waNumber":{"S":"7290998828"}}},{"M":{"name":{"S":"Deepanshu Khulbe"},"waNumber":{"S":"9205625628"}}},{"M":{"name":{"S":"Vivek kaushik"},"waNumber":{"S":"9729721965"}}},{"M":{"name":{"S":"Milind"},"waNumber":{"S":"9410405944"}}},{"M":{"name":{"S":"Aayush"},"waNumber":{"S":"9410405944"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"9720903097"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}},{"M":{"name":{"S":"Bhasskar "},"waNumber":{"S":"8074407730"}}},{"M":{"name":{"S":"Rishab Kaushik"},"waNumber":{"S":"9873669884"}}},{"M":{"name":{"S":"Ankit Systum"},"waNumber":{"S":"7678673497"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-07T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Yash srivastava"},"waNumber":{"S":"7579252284"}}},{"M":{"name":{"S":"Ruthiran "},"waNumber":{"S":"8248858416"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-08T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-08T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aniket Mandal"},"waNumber":{"S":"8697575548"}}},{"M":{"name":{"S":"Mansher"},"waNumber":{"S":"9830827746"}}},{"M":{"name":{"S":"Kakashi"},"waNumber":{"S":"7018147132"}}},{"M":{"name":{"S":"Ayush"},"waNumber":{"S":"9319934154"}}},{"M":{"name":{"S":"Saimon"},"waNumber":{"S":"9319934154"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8585056628"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-09T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-09T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaphil"},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Ross "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Digvijay"},"waNumber":{"S":"9873771100"}}},{"M":{"name":{"S":"Abhishek "},"waNumber":{"S":"9873771100"}}},{"M":{"name":{"S":"Abheek"},"waNumber":{"S":"7975893065"}}},{"M":{"name":{"S":"Utkarsh"},"waNumber":{"S":"7975893065"}}},{"M":{"name":{"S":"Sako"},"waNumber":{"S":"7042809597"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"VIVEK GAUTAM "},"waNumber":{"S":"6376504721"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"9380432372"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-10T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Gaurav Vaswani"},"waNumber":{"S":"7387197759"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Neeraj Manral"},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Hitesh"},"waNumber":{"S":"9760624156"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Pranit Tandon"},"waNumber":{"S":"9826876398"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-11T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-11T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"Dishant Wadhwani"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Ishu Bhagat"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Harman"},"waNumber":{"S":"7348302346"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-12T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-12T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"shubham yadav"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Dhruv yadav"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Puru"},"waNumber":{"S":"8368829030"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"8368829030"}}},{"M":{"name":{"S":"Dishant"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Kartikey"},"waNumber":{"S":"8173867461"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"7557852775"}}},{"M":{"name":{"S":"Abheek"},"waNumber":{"S":"7975893065"}}},{"M":{"name":{"S":"Utkarsh "},"waNumber":{"S":"7975893065"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Udai"},"waNumber":{"S":"9915776176"}}},{"M":{"name":{"S":"Pranav Kulkarni"},"waNumber":{"S":"7760891616"}}},{"M":{"name":{"S":"Madhvan"},"waNumber":{"S":"9068647047"}}},{"M":{"name":{"S":"Bhaswata Sarkar"},"waNumber":{"S":"8900131231"}}},{"M":{"name":{"S":"Shubh"},"waNumber":{"S":"9042331350"}}},{"M":{"name":{"S":"AKSHYAVRIT"},"waNumber":{"S":"9119796110"}}},{"M":{"name":{"S":"Sanjay "},"waNumber":{"S":"9119796110"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}},{"M":{"name":{"S":"Dipangshu"},"waNumber":{"S":"8861617897"}}},{"M":{"name":{"S":"Akshay Chauhan"},"waNumber":{"S":"8130280543"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-14T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-13T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aniket Mandal"},"waNumber":{"S":"8697575548"}}},{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"priyank"},"waNumber":{"S":"9568116408"}}},{"M":{"name":{"S":"Tushar"},"waNumber":{"S":"9811550117"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"9872551702"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mansher "},"waNumber":{"S":"9830827746"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"8427845035"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-17T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sako"},"waNumber":{"S":"9289291222"}}},{"M":{"name":{"S":"Neeraj"},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Siddhartha "},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"one "},"waNumber":{"S":"9871126433"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Sam"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Lal"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Saimon"},"waNumber":{"S":"9319934154"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-18T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"shubham yadav"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Dhruv yadav"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Aksh"},"waNumber":{"S":"9412550081"}}},{"M":{"name":{"S":"Pranav Kulkarni"},"waNumber":{"S":"7760891616"}}},{"M":{"name":{"S":"Simranjeet"},"waNumber":{"S":"8077689490"}}},{"M":{"name":{"S":"Gaura lv"},"waNumber":{"S":"7900440214"}}},{"M":{"name":{"S":"Vinay"},"waNumber":{"S":"7900440214"}}},{"M":{"name":{"S":"Pravar"},"waNumber":{"S":"9131832511"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-18T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-18T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shubham S"},"waNumber":{"S":"9872551702"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"3"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-18T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-18T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Anuj"},"waNumber":{"S":"9987417958"}}},{"M":{"name":{"S":"Samarth gupta"},"waNumber":{"S":"8076219093"}}},{"M":{"name":{"S":"Ansh Gupta"},"waNumber":{"S":"8587813258"}}},{"M":{"name":{"S":"AY"},"waNumber":{"S":"7678673497"}}},{"M":{"name":{"S":"Arpan "},"waNumber":{"S":"8585056628"}}},{"M":{"name":{"S":"Kshitij Neekhra"},"waNumber":{"S":"6266298768"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-19T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-19T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-20T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-20T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aniket Mandal"},"waNumber":{"S":"8697575548"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Aryan bhati"},"waNumber":{"S":"7290998828"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"9540906555"}}},{"M":{"name":{"S":"Aryan "},"waNumber":{"S":"9540906555"}}},{"M":{"name":{"S":"Yatharth"},"waNumber":{"S":"9810020865"}}},{"M":{"name":{"S":"Yatharth Plus One"},"waNumber":{"S":"9810020865"}}},{"M":{"name":{"S":"Kartik"},"waNumber":{"S":"9871282918"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-21T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"Aditya T"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Ritesh"},"waNumber":{"S":"8860343737"}}},{"M":{"name":{"S":"Romil Nagar"},"waNumber":{"S":"8764176349"}}},{"M":{"name":{"S":"Govind"},"waNumber":{"S":"8095393503"}}},{"M":{"name":{"S":"Hashim"},"waNumber":{"S":"8427977266"}}},{"M":{"name":{"S":"Nishant"},"waNumber":{"S":"9560537640"}}},{"M":{"name":{"S":"Ujjwal B"},"waNumber":{"S":"9560986179"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"9720903097"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-22T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-22T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Manraj"},"waNumber":{"S":"9592620229"}}},{"M":{"name":{"S":"Subhav Duggal"},"waNumber":{"S":"8447977967"}}},{"M":{"name":{"S":"Abhishek "},"waNumber":{"S":"9205257304"}}},{"M":{"name":{"S":" kshitij"},"waNumber":{"S":"9205257304"}}},{"M":{"name":{"S":"Dhruv"},"waNumber":{"S":"9205257304"}}},{"M":{"name":{"S":"yash srivastava"},"waNumber":{"S":"7579252284"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Saharsh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Saksham"},"waNumber":{"S":"9779562476"}}},{"M":{"name":{"S":"Arpan"},"waNumber":{"S":"8861617897"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-23T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Deepak Nerusu"},"waNumber":{"S":"9614777999"}}},{"M":{"name":{"S":"Ujjwal B"},"waNumber":{"S":"9560986179"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-24T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhilash"},"waNumber":{"S":"9742017700"}}},{"M":{"name":{"S":"Sankalp Rajpoot"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Rahul Bhutani"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Shailesh"},"waNumber":{"S":"9897662885"}}},{"M":{"name":{"S":"Vibhor"},"waNumber":{"S":"9897662885"}}},{"M":{"name":{"S":"Vaibhav"},"waNumber":{"S":"8759207596"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Shubham S"},"waNumber":{"S":"9872551702"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"9380432372"}}},{"M":{"name":{"S":"Bhavya"},"waNumber":{"S":"9610366773"}}},{"M":{"name":{"S":"AKSHYAVRIT TANWAR"},"waNumber":{"S":"09119796110"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Divesh"},"waNumber":{"S":"9179260342"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-25T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rajath"},"waNumber":{"S":"9605605801"}}},{"M":{"name":{"S":"Shubham "},"waNumber":{"S":"7060722754"}}},{"M":{"name":{"S":"KP"},"waNumber":{"S":"7060722754"}}},{"M":{"name":{"S":"Uddy"},"waNumber":{"S":"9026625209"}}},{"M":{"name":{"S":"Naman"},"waNumber":{"S":"9026625209"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"9720903097"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-26T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-26T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashish Rai"},"waNumber":{"S":"9971647065"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Saharsh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Aditya S"},"waNumber":{"S":"8696558653"}}},{"M":{"name":{"S":"Param"},"waNumber":{"S":"8696558653"}}},{"M":{"name":{"S":"Deepanshu Khulbe"},"waNumber":{"S":"9205625628"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-27T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-27T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krish Darshan Sapra"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Aryan bhati"},"waNumber":{"S":"7290998828"}}},{"M":{"name":{"S":"Param "},"waNumber":{"S":"8360220267"}}},{"M":{"name":{"S":"Param Plus One"},"waNumber":{"S":"8360220267"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Subba  Abhimanyu"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Subba Ganesh"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Rishab"},"waNumber":{"S":"9873669884"}}},{"M":{"name":{"S":"Rishabk"},"waNumber":{"S":"9873669884"}}},{"M":{"name":{"S":"Ashish Rai"},"waNumber":{"S":"9971647065"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-28T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ritesh Kesarwani"},"waNumber":{"S":"+918860343737"}}},{"M":{"name":{"S":"Manraj"},"waNumber":{"S":"9592620229"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Himank"},"waNumber":{"S":"8851552631"}}},{"M":{"name":{"S":"Himank"},"waNumber":{"S":"8851552631"}}},{"M":{"name":{"S":"Himank"},"waNumber":{"S":"8851552631"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"9013047177"}}},{"M":{"name":{"S":"Saharsh"},"waNumber":{"S":"9013047177"}}},{"M":{"name":{"S":"Kashif Bahl"},"waNumber":{"S":"9810514068"}}},{"M":{"name":{"S":"Vivek kaushik"},"waNumber":{"S":"9729721965"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-29T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-29T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Atrij"},"waNumber":{"S":"8795484505"}}},{"M":{"name":{"S":"Vivek Gautam"},"waNumber":{"S":"7992282991"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Sankalp Rajpoot"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Rahul Bhutani"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"Govind Dasan"},"waNumber":{"S":"8095393503"}}},{"M":{"name":{"S":"Aryan bhati "},"waNumber":{"S":"7290998828"}}},{"M":{"name":{"S":"Aman"},"waNumber":{"S":"9720903097"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Nishant"},"waNumber":{"S":"9560537640"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-30T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-30T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-05-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krish sapra"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"9380432372"}}},{"M":{"name":{"S":"Yatharth"},"waNumber":{"S":"9810020865"}}},{"M":{"name":{"S":"Sankalp Rajpoot"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Rahul Bhutani"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Puru"},"waNumber":{"S":"8368829030"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"8368829030"}}},{"M":{"name":{"S":"Paritosh"},"waNumber":{"S":"9319779073"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Dwai"},"waNumber":{"S":"7875533511"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-05-31T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-31T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhilash Bhanot"},"waNumber":{"S":"9742017700"}}},{"M":{"name":{"S":"Sumit"},"waNumber":{"S":"9742017700"}}},{"M":{"name":{"S":"One"},"waNumber":{"S":"9084938966"}}},{"M":{"name":{"S":"Mitul Goyal"},"waNumber":{"S":"9953841083"}}},{"M":{"name":{"S":"Twinkle sirola"},"waNumber":{"S":"8527245456"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"9872551702"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"9380432372"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"8076708926"}}},{"M":{"name":{"S":"Vishal"},"waNumber":{"S":"8171559664"}}},{"M":{"name":{"S":"Naman"},"waNumber":{"S":"8171559664"}}},{"M":{"name":{"S":"Divyanshu "},"waNumber":{"S":"8171559664"}}},{"M":{"name":{"S":"Vishu"},"waNumber":{"S":"8171559664"}}},{"M":{"name":{"S":"Bhavya"},"waNumber":{"S":"9610366773"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-01T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rohan"},"waNumber":{"S":"9880598492"}}},{"M":{"name":{"S":"Krish sapra"},"waNumber":{"S":"9769279277"}}},{"M":{"name":{"S":"sahil"},"waNumber":{"S":"9582865113"}}},{"M":{"name":{"S":"Abhishek Jha"},"waNumber":{"S":"6354928831"}}},{"M":{"name":{"S":"Mujtaba "},"waNumber":{"S":"8605150383"}}},{"M":{"name":{"S":"Harsh Singh"},"waNumber":{"S":"7289933461"}}},{"M":{"name":{"S":"Dishant"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Deepesh Agarwal DA"},"waNumber":{"S":"9604435988"}}},{"M":{"name":{"S":"Keyush"},"waNumber":{"S":"8700929632"}}},{"M":{"name":{"S":"Ashwini  Rana"},"waNumber":{"S":"9503442409"}}},{"M":{"name":{"S":"Sukhmeet"},"waNumber":{"S":"9811624844"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-02T01:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-02T03:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"8860401190"}}},{"M":{"name":{"S":"Vinayak Mishra"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Vishnu"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Parth"},"waNumber":{"S":"9810440013"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-02T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-02T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Prakhar "},"waNumber":{"S":"8989738343"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-03T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-03T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-06-04T15:00:00.000Z"},"endTime":{"S":"2024-06-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Himank"},"waNumber":{"S":"8851552631"}}},{"M":{"name":{"S":"Mihir"},"waNumber":{"S":"8851552631"}}},{"M":{"name":{"S":"Rachit"},"waNumber":{"S":"8851552631"}}},{"M":{"name":{"S":"Sukhmeet"},"waNumber":{"S":"9811624844"}}},{"M":{"name":{"S":"Ritesh"},"waNumber":{"S":"8860343737"}}},{"M":{"name":{"S":"One"},"waNumber":{"S":"9310134382"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-05T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-05T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"Ashish Rai"},"waNumber":{"S":"9971647065"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-06T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-06T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kaphil "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Chirag "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Anubrata "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Pritam "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Kd"},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Rj"},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Kaphil "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Chirag "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Anubrata "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Pritam "},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Kd"},"waNumber":{"S":"7022454155"}}},{"M":{"name":{"S":"Rj"},"waNumber":{"S":"7022454155"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-07T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-07T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dishant Wadhwani"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Kartikey"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Dishant Wadhwani"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Kartikey"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Asif Anjum"},"waNumber":{"S":"9062330231"}}},{"M":{"name":{"S":"Neeraj M"},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Pao"},"waNumber":{"S":"08447549179"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Krishan Pal"},"waNumber":{"S":"9389865363"}}},{"M":{"name":{"S":"Shubham"},"waNumber":{"S":"9389865363"}}},{"M":{"name":{"S":"Ansh Deshwal"},"waNumber":{"S":"8130065641"}}},{"M":{"name":{"S":"Sahil Garg "},"waNumber":{"S":"9167366908"}}},{"M":{"name":{"S":"Ajay"},"waNumber":{"S":"919350662212"}}},{"M":{"name":{"S":"Ansh"},"waNumber":{"S":"8287018564"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-09T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-09T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"one"},"waNumber":{"S":"7017954332"}}},{"M":{"name":{"S":"Shantanu "},"waNumber":{"S":"9639962697"}}},{"M":{"name":{"S":"Ritesh Kesarwani"},"waNumber":{"S":"+918860343737"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Krishan"},"waNumber":{"S":"9389865363"}}},{"M":{"name":{"S":"Kashif Bahl"},"waNumber":{"S":"9810514068"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-10T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-10T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Sudhanshu"},"waNumber":{"S":"7310770043"}}},{"M":{"name":{"S":"Manav"},"waNumber":{"S":"7310770043"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-11T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"9589020902"}}},{"M":{"name":{"S":"Aditya"},"waNumber":{"S":"8427845035"}}},{"M":{"name":{"S":"Bikram"},"waNumber":{"S":"+919988410911"}}},{"M":{"name":{"S":"Vishnu"},"waNumber":{"S":"9650214801"}}},{"M":{"name":{"S":"Jaimeet"},"waNumber":{"S":"0123456789"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-12T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-12T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ishan Kundu"},"waNumber":{"S":"9540290714"}}},{"M":{"name":{"S":"Dev"},"waNumber":{"S":"8882966894"}}},{"M":{"name":{"S":"Paras Thakkar"},"waNumber":{"S":"9527755666"}}},{"M":{"name":{"S":"Romil Nagar"},"waNumber":{"S":"8764176349"}}},{"M":{"name":{"S":"Lun Baite"},"waNumber":{"S":"7982571282"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-13T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-13T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dishant"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Aashutosh"},"waNumber":{"S":"9084938966"}}},{"M":{"name":{"S":"Naman Sagar"},"waNumber":{"S":"8523965829"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"9694906750"}}},{"M":{"name":{"S":"Ud"},"waNumber":{"S":"919026625209"}}},{"M":{"name":{"S":"Snehil"},"waNumber":{"S":"919026625209"}}},{"M":{"name":{"S":"Ankit"},"waNumber":{"S":"919026625209"}}},{"M":{"name":{"S":"Manraj"},"waNumber":{"S":"9592620229"}}},{"M":{"name":{"S":"Sameer "},"waNumber":{"S":"9953513150"}}},{"M":{"name":{"S":"Andro"},"waNumber":{"S":"6294910181"}}},{"M":{"name":{"S":"Chandresh"},"waNumber":{"S":"7465983940"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-15T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dishant"},"waNumber":{"S":"9653067215"}}},{"M":{"name":{"S":"Neeraj"},"waNumber":{"S":"8800940934"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-16T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vinayak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Vishnu"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9999652109"}}},{"M":{"name":{"S":"Shantanu "},"waNumber":{"S":"9639962697"}}},{"M":{"name":{"S":"Yatharth"},"waNumber":{"S":"9810020865"}}},{"M":{"name":{"S":"shubham yadav"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Dhruv yadav"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Dhruv Sharma"},"waNumber":{"S":"9811297070"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Krishan Pal"},"waNumber":{"S":"9389865363"}}},{"M":{"name":{"S":"Jim"},"waNumber":{"S":"8348410556"}}},{"M":{"name":{"S":"Amit"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-17T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-17T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-19T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-19T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shantanu "},"waNumber":{"S":"9639962697"}}},{"M":{"name":{"S":"Tushar"},"waNumber":{"S":"9811550117"}}},{"M":{"name":{"S":"Rey"},"waNumber":{"S":"08447549179"}}},{"M":{"name":{"S":"Pao"},"waNumber":{"S":"08447549179"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-20T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-20T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Vinayak "},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Vishnu"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Yuvraj"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Yuvrajj"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"SanjayParihar "},"waNumber":{"S":"8057857697"}}},{"M":{"name":{"S":"Krishan Pal"},"waNumber":{"S":"9389865363"}}},{"M":{"name":{"S":"Subba"},"waNumber":{"S":"8348410556"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"8"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-22T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-22T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abheek"},"waNumber":{"S":"7975893065"}}},{"M":{"name":{"S":"Sako"},"waNumber":{"S":"9289291222"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Lun"},"waNumber":{"S":"7982571282"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-23T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-23T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Lun"},"waNumber":{"S":"7982571282"}}},{"M":{"name":{"S":"Arpit Jawalkar"},"waNumber":{"S":"09589020902"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Saharsh"},"waNumber":{"S":"8976263730"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-25T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-25T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Gokul "},"waNumber":{"S":"8778239878"}}},{"M":{"name":{"S":"Saharsh"},"waNumber":{"S":"9667098644"}}},{"M":{"name":{"S":"Animesh"},"waNumber":{"S":"9667098644"}}},{"M":{"name":{"S":"Subhav"},"waNumber":{"S":"8447977967"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-27T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Neeraj M"},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Digvijay Singh"},"waNumber":{"S":"9873771100"}}},{"M":{"name":{"S":"Manish"},"waNumber":{"S":"9772213440"}}},{"M":{"name":{"S":"Faizan"},"waNumber":{"S":"9772213440"}}},{"M":{"name":{"S":"Ashu"},"waNumber":{"S":"9380432372"}}},{"M":{"name":{"S":"Jatin"},"waNumber":{"S":"9380432372"}}},{"M":{"name":{"S":"Vinayak Mishra"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-28T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-06-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Digvijay"},"waNumber":{"S":"9873771100"}}},{"M":{"name":{"S":"Abhishek"},"waNumber":{"S":"9873771100"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-06-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"6"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vinayak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Vishnu"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Akshay"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Deepak"},"waNumber":{"S":"9810440013"}}},{"M":{"name":{"S":"Neeraj"},"waNumber":{"S":"8800940934"}}},{"M":{"name":{"S":"Sidhartha"},"waNumber":{"S":"8800940934"}}}]},"venueName":{"S":"Basecamp | Sushant University"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/r2aPyES7RqtLGvrS6?g_st=ic"},"index":{"N":"2"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Manish"},"waNumber":{"S":"9772213440"}}},{"M":{"name":{"S":"Faizan"},"waNumber":{"S":"9772213440"}}},{"M":{"name":{"S":"Vivek gautam"},"waNumber":{"S":"6376504721"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Pulkit"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Deron"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Daksh"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Dhruv"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Dhruv"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Nirvan"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Kaal"},"waNumber":{"S":"7011503787"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-12T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-12T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ujjwal"},"waNumber":{"S":"9056380440"}}},{"M":{"name":{"S":"One"},"waNumber":{"S":"9307824898"}}},{"M":{"name":{"S":"Shantanu "},"waNumber":{"S":"9639962697"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}},{"M":{"name":{"S":"Aditya S"},"waNumber":{"S":"8696558653"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash"},"waNumber":{"S":"8427845035"}}},{"M":{"name":{"S":"Aditya Jain"},"waNumber":{"S":"8427845035"}}},{"M":{"name":{"S":"Sankalp Rajpoot"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Gautam "},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Abhinav Gupta"},"waNumber":{"S":"7259648432"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-17T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-17T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"225"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-24T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-24T15:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ashwini  Rana"},"waNumber":{"S":"9503442409"}}},{"M":{"name":{"S":"Tejeshwar AKA TJ"},"waNumber":{"S":"9711599576"}}},{"M":{"name":{"S":"Sankalp Rajpoot"},"waNumber":{"S":"8872203385"}}},{"M":{"name":{"S":"Harsh G"},"waNumber":{"S":"9619551440"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-26T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Sanjay "},"waNumber":{"S":"8057857697"}}},{"M":{"name":{"S":"Sanjay "},"waNumber":{"S":"8057857697"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-28T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ishir "},"waNumber":{"S":"9971611025"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-29T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-29T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-07-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shourya "},"waNumber":{"S":"8826146270"}}},{"M":{"name":{"S":"Chirag "},"waNumber":{"S":"8826146270"}}},{"M":{"name":{"S":"Kashif Bahl"},"waNumber":{"S":"9810514068"}}},{"M":{"name":{"S":"Praseej"},"waNumber":{"S":"9988341172"}}},{"M":{"name":{"S":"Digvijay Singh"},"waNumber":{"S":"+919873771100"}}},{"M":{"name":{"S":"Gautam"},"waNumber":{"S":"8383048624"}}},{"M":{"name":{"S":"Hemanth"},"waNumber":{"S":"8075835531"}}},{"M":{"name":{"S":"Tushar Nitharwal"},"waNumber":{"S":"9811550117"}}},{"M":{"name":{"S":"Neeraj"}}},{"M":{"name":{"S":"Neeraj +1"}}},{"M":{"name":{"S":"Neeraj +1"}}},{"M":{"name":{"S":"Govind "},"waNumber":{"S":"8095393503"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-07-30T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-03T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-04T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-04T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-05T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-05T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Subba"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Abhimanyu +1"}}},{"M":{"name":{"S":"Lun"}}},{"M":{"name":{"S":"Pulkit "}}},{"M":{"name":{"S":"Pulkit +1"}}},{"M":{"name":{"S":"Pulkit +2"}}},{"M":{"name":{"S":"Phulkit+3"}}},{"M":{"name":{"S":"Pulkit+4"}}},{"M":{"name":{"S":"Pulkit +5"}}},{"M":{"name":{"S":"Pulkit +6"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-08T16:00:00.000Z"},"endTime":{"S":"2024-08-08T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"300"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-09T16:00:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQeYM5gM7uSbQI005"},"waitListPlayersCount":{"N":"6"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ishu Bhagat"},"waNumber":{"S":"7348302346"}}},{"M":{"name":{"S":"Ashwini  Rana"},"waNumber":{"S":"7020362152"}}},{"M":{"name":{"S":"Aashish tyagi"},"waNumber":{"S":"9716664460"}}},{"M":{"name":{"S":"Luv"},"waNumber":{"S":"8377933264"}}},{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"Pranav"},"waNumber":{"S":"9999936063"}}},{"M":{"name":{"S":"Deepanshu "},"waNumber":{"S":"9205625628"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"260"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-10T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"9"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"startTime":{"S":"2024-08-12T16:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-12T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-13T15:00:00.000Z"},"endTime":{"S":"2024-08-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"9"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Nishant Tiwari"},"waNumber":{"S":"9560537640"}}},{"M":{"name":{"S":"Vishal "},"waNumber":{"S":"08477801895"}}},{"M":{"name":{"S":"Divyanshu "},"waNumber":{"S":"08477801895"}}},{"M":{"name":{"S":"Pawan"},"waNumber":{"S":"08477801895"}}},{"M":{"name":{"S":"Maghvendra "},"waNumber":{"S":"08477801895"}}},{"M":{"name":{"S":"Abhijeet Singh Dhaka"},"waNumber":{"S":"9001501558"}}},{"M":{"name":{"S":"Lokesh Meena"},"waNumber":{"S":"9521476135"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-14T16:00:00.000Z"},"endTime":{"S":"2024-08-14T17:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"9"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Deepanshu Khulbe"},"waNumber":{"S":"09205625628"}}},{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"9619551440"}}},{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"9619551440"}}},{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"9619551440"}}},{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"9619551440"}}},{"M":{"name":{"S":"Krish"},"waNumber":{"S":"9619551440"}}},{"M":{"name":{"S":"Tanish Banvat"},"waNumber":{"S":"+919301900211"}}},{"M":{"name":{"S":"Sako"},"waNumber":{"S":"9289291222"}}},{"M":{"name":{"S":"Vidur"},"waNumber":{"S":"9050478863"}}},{"M":{"name":{"S":"Atish"},"waNumber":{"S":"9999450825"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-15T15:00:00.000Z"},"endTime":{"S":"2024-08-15T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Pulkit "},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Deron"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Raj"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Dakshesh"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"CM"},"waNumber":{"S":"9354694299"}}},{"M":{"name":{"S":"Raghav"},"waNumber":{"S":"9354694299"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"2"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-15T16:00:00.000Z"},"endTime":{"S":"2024-08-15T17:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU5oc4cIdTg2g85kn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 1,
      date: '2024-08-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Hemanth"},"waNumber":{"S":"8075835531"}}},{"M":{"name":{"S":"pranav harmilapi"},"waNumber":{"S":"+919999936063"}}},{"M":{"name":{"S":"Jewel"},"waNumber":{"S":"7432983153"}}}]},"venueName":{"S":"Gallant play arena south City 1"},"charges":{"N":"270"},"venueLocationLink":{"S":"https://maps.app.goo.gl/ebEXAjXrsUvBanyY9"},"index":{"N":"1"},"currency":{"S":"INR"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-16T14:30:00.000Z"},"endTime":{"S":"2024-08-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oE9Es7oUdTg4ogeVn"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 6,
      date: '2023-10-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sayan"}}},{"M":{"name":{"S":"Subham"}}}]},"venueName":{"S":"Turf-e-istan"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/rqj6YFYDyj4Uz5YN9"},"index":{"N":"1"},"currency":{"S":"DEFAULT_CURRENCY_CODE"},"startTime":{"S":"2023-10-07T11:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-07T12:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-10-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sayan✅"}}},{"M":{"name":{"S":"Debarya ✅"}}},{"M":{"name":{"S":"Soham✅"}}},{"M":{"name":{"S":"Ayush✅"}}},{"M":{"name":{"S":"Sangbarta ✅"}}},{"M":{"name":{"S":"Mrinmoy ✅"}}},{"M":{"name":{"S":"Vishal✅"}}},{"M":{"name":{"S":"Deep✅"}}}]},"venueName":{"S":"Turf-e-istan"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/rqj6YFYDyj4Uz5YN9"},"index":{"N":"1"},"currency":{"S":"DEFAULT_CURRENCY_CODE"},"startTime":{"S":"2023-10-08T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-08T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-10-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Soham"}}},{"M":{"name":{"S":"Vishal"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"DEFAULT_CURRENCY_CODE"},"startTime":{"S":"2023-10-12T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-12T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-10-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sangbarta"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Rajdeep"}}},{"M":{"name":{"S":"Aaradho"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-10-29T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-29T13:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-10-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sangbarta"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Rajdeep"}}},{"M":{"name":{"S":"Aaradho"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-10-30T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-30T13:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-10-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sangbarta"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Rajdeep"}}},{"M":{"name":{"S":"Aaradho"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-10-31T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-10-31T13:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sangbarta"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Rajdeep"}}},{"M":{"name":{"S":"Aaradho"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-01T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-01T13:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya ✅"}}},{"M":{"name":{"S":"Tanay ✅"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sayan ✅"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-03T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-03T13:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Debarya ✅"}}},{"M":{"name":{"S":"Tanay ✅"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Sahil"}}},{"M":{"name":{"S":"Vishal"}}},{"M":{"name":{"S":"Sayan ✅"}}}]},"venueName":{"S":"Vplay, Narendrapur Turf"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/4JhUjp4RZCDVkVBR7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-04T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-04T13:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sayan"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Sangbarta"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Shoummyodip"}}}]},"venueName":{"S":"TURF XL"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/vf3a1tzkA6LRpc3G6"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-05T08:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-05T09:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sayan"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Abhishek"}}},{"M":{"name":{"S":"Anirudh"}}},{"M":{"name":{"S":"Shoummyodip"}}},{"M":{"name":{"S":"Aayush"}}}]},"venueName":{"S":"TURF XL"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/vf3a1tzkA6LRpc3G6"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-10T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-10T14:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sayan"}}},{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Debjit"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Sayan Saha"}}}]},"venueName":{"S":"Turf A4 near ozone"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7NT3q1p1L2te6mrF7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-13T11:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-13T12:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sayan"}}},{"M":{"name":{"S":"Debarya"}}},{"M":{"name":{"S":"Debjit"}}},{"M":{"name":{"S":"Subham"}}},{"M":{"name":{"S":"Sayan Saha"}}}]},"venueName":{"S":"Turf A4 near ozone"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7NT3q1p1L2te6mrF7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-15T11:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-15T12:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2023-11-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Harsh"}}}]},"venueName":{"S":"Turf A4 near ozone"},"charges":{"N":"180"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7NT3q1p1L2te6mrF7"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2023-11-23T23:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-11-24T00:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 6,
      date: '2024-02-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Uday"}}},{"M":{"name":{"S":"⁠ ⁠AC"}}}]},"venueName":{"S":"SkyTurf"},"charges":{"N":"250"},"venueLocationLink":{"S":"https://maps.app.goo.gl/1GjVuCp1tk4PWyui6"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-02-29T13:00:00.000Z"},"endTime":{"S":"2024-02-29T14:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/bIY03ScJebL8aMEcNc"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 5,
      date: '2023-08-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Uday"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Luis"}}},{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"Rachit"}}},{"M":{"name":{"S":"Meghdad"}}}]},"venueName":{"S":"Beach Chalet Soccer Fields"},"charges":{"N":"9.99"},"venueLocationLink":{"S":"https://goo.gl/maps/PwXoierADT1kUL5K9"},"index":{"N":"1"},"startTime":{"S":"2023-08-24T03:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-24T04:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/eVa17WdNi4iGcUM28u"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 5,
      date: '2024-06-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sumit"},"waNumber":{"S":"8971829355"}}},{"M":{"name":{"S":"Kshitij"},"waNumber":{"S":"233445667"}}},{"M":{"name":{"S":"sfsdf"},"waNumber":{"S":"sdfsdfsdf"}}}]},"venueName":{"S":"Beach Chalet Soccer Fields"},"charges":{"N":"19"},"venueLocationLink":{"S":"https://goo.gl/maps/PwXoierADT1kUL5K9"},"index":{"N":"1"},"currency":{"S":"USD"},"startTime":{"S":"2024-06-17T11:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-17T13:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 5,
      date: '2024-07-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sumit2"},"waNumber":{"S":"8971892355"}}},{"M":{"name":{"S":"Sumit2"}}}]},"venueName":{"S":"Beach Chalet Soccer Fields"},"charges":{"N":"11"},"venueLocationLink":{"S":"https://goo.gl/maps/PwXoierADT1kUL5K9"},"index":{"N":"1"},"currency":{"S":"USD"},"startTime":{"S":"2024-07-15T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 4,
      date: '2023-08-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Caleb"}}},{"M":{"name":{"S":"Shubham aggarwal"}}},{"M":{"name":{"S":"Karthic Paramasivam"}}},{"M":{"name":{"S":"Ingrid Montanez"}}},{"M":{"name":{"S":"Deanne K Charan"}}},{"M":{"name":{"S":"Adithya"}}},{"M":{"name":{"S":"Carlos Salandia"}}},{"M":{"name":{"S":"Shikhir"}}},{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"Pratik Jayarao"}}},{"M":{"name":{"S":"Akshay Tondak"}}},{"M":{"name":{"S":"Siddhant Patny"}}},{"M":{"name":{"S":"Abhimanyu"}}},{"M":{"name":{"S":"Sam"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"7"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"1"},"startTime":{"S":"2023-08-15T02:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-15T03:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/8wMg2Q9x27uS9IA00i"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 4,
      date: '2023-08-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Aditya Vikram Mohapatra"},"waNumber":{"S":"+19094178326"}}},{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"Pratik"}}},{"M":{"name":{"S":"Deanne"}}},{"M":{"name":{"S":"Josh"}}},{"M":{"name":{"S":"Srinivas"}}},{"M":{"name":{"S":"Priyesh"}}},{"M":{"name":{"S":"Adithys"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Blessing K Ojo"}}},{"M":{"name":{"S":"William"}}},{"M":{"name":{"S":"Oscar"}}},{"M":{"name":{"S":"Alejandro"}}},{"M":{"name":{"S":"Juliana"}}},{"M":{"name":{"S":"Amuthan Palani Selvam"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"7.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"1"},"startTime":{"S":"2023-08-22T01:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-22T02:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00gg2Q6kQbL82g83cx"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arun Sethupat Radhakrishna"},"waNumber":{"S":"+12133103986"}}},{"M":{"name":{"S":"Dipayan Datta Choudhary"},"waNumber":{"S":"+12405931683"}}},{"M":{"name":{"S":"Vamsi Kunapuli"},"waNumber":{"S":"+14695096188"}}},{"M":{"name":{"S":"Yogesh"},"waNumber":{"S":"+17326927542"}}},{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"Rohan"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Carlos"}}},{"M":{"name":{"S":"Anurag"}}},{"M":{"name":{"S":"Dipayan"}}},{"M":{"name":{"S":"Dipayan+1"}}},{"M":{"name":{"S":"Blessing"},"waNumber":{"S":"+14704391801"}}},{"M":{"name":{"S":"Soumosir Dutta"},"waNumber":{"S":"+12405958370"}}},{"M":{"name":{"S":"Pratik Jayarao"},"waNumber":{"S":"+14126364615"}}},{"M":{"name":{"S":"Leo"},"waNumber":{"S":"+16505757127"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"7.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"2"},"startTime":{"S":"2023-08-22T02:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-08-22T03:00:00.000Z"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00gg2Q6kQbL82g83cx"},"reservedPlayersCount":{"N":"18"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 4,
      date: '2023-09-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Leo"},"waNumber":{"S":"+16505757127"}}},{"M":{"name":{"S":"William Tjen"},"waNumber":{"S":"+14088932050"}}},{"M":{"name":{"S":"Alejandro"},"waNumber":{"S":"+16692518828"}}},{"M":{"name":{"S":"Dipayan Datta Choudhary"},"waNumber":{"S":"+12405931683"}}},{"M":{"name":{"S":"Soumosir Dutta"},"waNumber":{"S":"+12405958370"}}},{"M":{"name":{"S":"Oz"},"waNumber":{"S":"+17865699466"}}},{"M":{"name":{"S":"Adithya Venkat Ramanan"},"waNumber":{"S":"+12137258344"}}},{"M":{"name":{"S":"Priyesh Mishra"},"waNumber":{"S":"+13179984627"}}},{"M":{"name":{"S":"Amuthan Palani Selvam"},"waNumber":{"S":"+16692926222"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"+14244404279"}}},{"M":{"name":{"S":"Vamsi Kunapuli"},"waNumber":{"S":"+14695096188"}}},{"M":{"name":{"S":"Samarth"},"waNumber":{"S":"+16504416560"}}},{"M":{"name":{"S":"Oscar"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"Ankush"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Pandu"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"7.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"1"},"currency":{"S":"USD"},"startTime":{"S":"2023-09-12T01:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-12T02:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00gg2Q6kQbL82g83cx"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Oz"},"waNumber":{"S":"+16693029341"}}},{"M":{"name":{"S":"Soumosir Dutta"},"waNumber":{"S":"+12405958370"}}},{"M":{"name":{"S":"Adithya"},"waNumber":{"S":"+12137258344"}}},{"M":{"name":{"S":"Micah"}}},{"M":{"name":{"S":"Carlos"}}},{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"Ron"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Oscar"}}},{"M":{"name":{"S":"Richard"}}},{"M":{"name":{"S":"Luis"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"7.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"2"},"currency":{"S":"USD"},"startTime":{"S":"2023-09-12T02:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-12T03:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00gg2Q6kQbL82g83cx"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 4,
      date: '2023-09-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"David Hervy"},"waNumber":{"S":"+16506057753"}}},{"M":{"name":{"S":"Dante Carrillo"},"waNumber":{"S":"+19258189531"}}},{"M":{"name":{"S":"Adithya"},"waNumber":{"S":"+12137258344"}}},{"M":{"name":{"S":"KST"},"waNumber":{"S":"+14702726881"}}},{"M":{"name":{"S":"Rohit Das"},"waNumber":{"S":"+18312665298"}}},{"M":{"name":{"S":"Alejandro"},"waNumber":{"S":"+16692518828"}}},{"M":{"name":{"S":"Leo"},"waNumber":{"S":"+16505757127"}}},{"M":{"name":{"S":"Hayato Hoshikawa"},"waNumber":{"S":"+819054187217"}}},{"M":{"name":{"S":"Calvin Fernandez"},"waNumber":{"S":"+13524608815"}}},{"M":{"name":{"S":"Siddhant"},"waNumber":{"S":"+12013559838"}}},{"M":{"name":{"S":"Yash Sindhwani"},"waNumber":{"S":"+18574379182"}}},{"M":{"name":{"S":"Srinivas Atmakuri"},"waNumber":{"S":"+16107329872"}}},{"M":{"name":{"S":"Priyesh Mishra"},"waNumber":{"S":"+13179984627"}}},{"M":{"name":{"S":"Eli Khurgin"},"waNumber":{"S":"+16503160858"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"Ojo"},"waNumber":{"S":"+14704391801"}}},{"M":{"name":{"S":"Rajat Suri"},"waNumber":{"S":"+18574458112"}}},{"M":{"name":{"S":"Ankush Kappe"},"waNumber":{"S":"+12096659639"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"8.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"1"},"currency":{"S":"USD"},"startTime":{"S":"2023-09-19T01:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-19T02:00:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/7sI4k86kQ16u4og6oM"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Adithya"},"waNumber":{"S":"+12137258344"}}},{"M":{"name":{"S":"Calvin George Fernandez"},"waNumber":{"S":"+13524608815"}}},{"M":{"name":{"S":"Ojo"},"waNumber":{"S":"+14704391801"}}},{"M":{"name":{"S":"KST"},"waNumber":{"S":"+14702726881"}}},{"M":{"name":{"S":"Oscar Gonzalez"},"waNumber":{"S":"+16692039341"}}},{"M":{"name":{"S":"Ankush"},"waNumber":{"S":"+12096659639"}}},{"M":{"name":{"S":"Shikhir"},"waNumber":{"S":"+16692631589"}}},{"M":{"name":{"S":"Shantanu Jamble"},"waNumber":{"S":"+15854450841"}}},{"M":{"name":{"S":"Chris trinh"},"waNumber":{"S":"+15105072779"}}},{"M":{"name":{"S":"Mark cobang"},"waNumber":{"S":"+15105072779"}}},{"M":{"name":{"S":"phuong khang nguyen"},"waNumber":{"S":"+14083558918"}}},{"M":{"name":{"S":"Harumi Hokari"},"waNumber":{"S":"+16692255293"}}},{"M":{"name":{"S":"John"},"waNumber":{"S":"+15105072779"}}},{"M":{"name":{"S":"Yash"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"8.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"2"},"currency":{"S":"USD"},"startTime":{"S":"2023-09-19T02:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-19T03:00:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/7sI4k86kQ16u4og6oM"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 4,
      date: '2023-09-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash Sindhwani"},"waNumber":{"S":"+18574379182"}}},{"M":{"name":{"S":"Srinivas Atmakuri"},"waNumber":{"S":"+16107329872"}}},{"M":{"name":{"S":"Priyesh Mishra"},"waNumber":{"S":"+13179984627"}}},{"M":{"name":{"S":"Leo"},"waNumber":{"S":"+16505757127"}}},{"M":{"name":{"S":"Alejandro"},"waNumber":{"S":"+16692518828"}}},{"M":{"name":{"S":"Dante Carrillo"},"waNumber":{"S":"+19258189531"}}},{"M":{"name":{"S":"Felipe De Souza"},"waNumber":{"S":"+13235014520"}}},{"M":{"name":{"S":"Adithya"},"waNumber":{"S":"+12137258344"}}},{"M":{"name":{"S":"Calvin George Fernandez"},"waNumber":{"S":"+13524608815"}}},{"M":{"name":{"S":"Soumosir Dutta"},"waNumber":{"S":"+12405958370"}}},{"M":{"name":{"S":"Vladimir Markov"},"waNumber":{"S":"+14155251220"}}},{"M":{"name":{"S":"Amuthan Palani Selvam"},"waNumber":{"S":"+16692926222"}}},{"M":{"name":{"S":"Siddhant Patny"},"waNumber":{"S":"+12013559838"}}},{"M":{"name":{"S":"Ankush"},"waNumber":{"S":"+12096659639"}}},{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Pratik"},"waNumber":{"S":"+14126364615"}}},{"M":{"name":{"S":"Gavan"},"waNumber":{"S":"+12097652494"}}},{"M":{"name":{"S":"Tanmay Dehury"},"waNumber":{"S":"+16508143079"}}},{"M":{"name":{"S":"David Castelan"},"waNumber":{"S":"+16507717023"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"8.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"1"},"currency":{"S":"USD"},"startTime":{"S":"2023-09-26T01:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-26T02:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/7sI4k86kQ16u4og6oM"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash Sindhwani"},"waNumber":{"S":"+18574379182"}}},{"M":{"name":{"S":"Seth moure"},"waNumber":{"S":"+15105025786"}}},{"M":{"name":{"S":"Hayato Hoshikawa"},"waNumber":{"S":"+16283637983"}}},{"M":{"name":{"S":"Calvin George Fernandez"},"waNumber":{"S":"+13524608815"}}},{"M":{"name":{"S":"Shantanu"},"waNumber":{"S":"+15854450841"}}},{"M":{"name":{"S":"Gavan"},"waNumber":{"S":"+12097652494"}}},{"M":{"name":{"S":"Shikhar"}}},{"M":{"name":{"S":"Nischay"}}},{"M":{"name":{"S":"Kapil"}}},{"M":{"name":{"S":"AC"}}},{"M":{"name":{"S":"Ankush"}}},{"M":{"name":{"S":"Adithya"},"waNumber":{"S":"+12137258344"}}},{"M":{"name":{"S":"Mauricio"},"waNumber":{"S":"+12145055218"}}},{"M":{"name":{"S":"David Castelan"},"waNumber":{"S":"+16507717023"}}},{"M":{"name":{"S":"David Castelan"},"waNumber":{"S":"+16507717023"}}}]},"venueName":{"S":"Vista Montana Park"},"charges":{"N":"8.99"},"venueLocationLink":{"S":"https://goo.gl/maps/ivkhHaXWM3RBTJ5r9"},"index":{"N":"2"},"currency":{"S":"USD"},"startTime":{"S":"2023-09-26T02:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2023-09-26T03:00:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/7sI4k86kQ16u4og6oM"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarthak"}}},{"M":{"name":{"S":"⁠Shivaansh Sharma"}}},{"M":{"name":{"S":"Trivendra"},"waNumber":{"S":"7007972277"}}},{"M":{"name":{"S":"Aadarsh"},"waNumber":{"S":"7007972277"}}},{"M":{"name":{"S":"ankur"},"waNumber":{"S":"7007972277"}}},{"M":{"name":{"S":"Shiv"},"waNumber":{"S":"6006181998"}}}]},"venueName":{"S":"Sportage sector 110 Noida"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/pKThT73fKAGWPXgGA?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-10T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-10T14:30:00.000Z"},"reservedPlayersCount":{"N":"12"},"stripePaymentUrl":{"S":"https://buy.stripe.com/9AQ4k8fVq8yW7As6oU"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash Singh"},"waNumber":{"S":"9717497168"}}},{"M":{"name":{"S":"Norbert "},"waNumber":{"S":"8787592480"}}},{"M":{"name":{"S":"akshat"},"waNumber":{"S":"8787592480"}}},{"M":{"name":{"S":"khawaish"},"waNumber":{"S":"8787592480"}}},{"M":{"name":{"S":"pranshu"},"waNumber":{"S":"9818499127"}}},{"M":{"name":{"S":"Ayush Yadav"},"waNumber":{"S":"9810474202"}}},{"M":{"name":{"S":"SURAJ SINGH"},"waNumber":{"S":"8375890102"}}},{"M":{"name":{"S":"Luv sharma"},"waNumber":{"S":"8685807414"}}},{"M":{"name":{"S":"Shiv"},"waNumber":{"S":"6006181998"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}}]},"venueName":{"S":"Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-14T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Punit"},"waNumber":{"S":"8685807414"}}},{"M":{"name":{"S":"Abhinav Haridas"},"waNumber":{"S":"9526222666"}}},{"M":{"name":{"S":"Kushagra Bhatnagar"},"waNumber":{"S":"918853061507"}}},{"M":{"name":{"S":"pranshu gupta"},"waNumber":{"S":"9818499127"}}},{"M":{"name":{"S":"Avik"},"waNumber":{"S":"+919140531708"}}},{"M":{"name":{"S":"Kunal Bhatia"},"waNumber":{"S":"8727961891"}}},{"M":{"name":{"S":"Aditya Garg"},"waNumber":{"S":"9837405515"}}},{"M":{"name":{"S":"SURAJ SINGH"},"waNumber":{"S":"8375890102"}}},{"M":{"name":{"S":"Prabudh Sharma"},"waNumber":{"S":"9837405515"}}}]},"venueName":{"S":"Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-03-15T14:30:00.000Z"},"endTime":{"S":"2024-03-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kushagra Kaintura"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Kanav Ahooja"},"waNumber":{"S":"9311559438"}}},{"M":{"name":{"S":"Kanav Ahooja"},"waNumber":{"S":"9311559438"}}},{"M":{"name":{"S":"Geetansh"},"waNumber":{"S":"9953148589"}}},{"M":{"name":{"S":"Ayush Yadav"},"waNumber":{"S":"9810474202"}}},{"M":{"name":{"S":"Ayush Yadav"},"waNumber":{"S":"9810474202"}}},{"M":{"name":{"S":"Adarsh Vatsa"},"waNumber":{"S":"+917491874868"}}},{"M":{"name":{"S":"pranshu gupta"},"waNumber":{"S":"09818499127"}}},{"M":{"name":{"S":"SURAJ SINGH"},"waNumber":{"S":"8375890102"}}},{"M":{"name":{"S":"Ayush Kapil"},"waNumber":{"S":"9456018527"}}},{"M":{"name":{"S":"Rishi"},"waNumber":{"S":"9456018527"}}},{"M":{"name":{"S":"Satwik Vaishnava"},"waNumber":{"S":"9818448461"}}}]},"venueName":{"S":"Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-17T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-17T14:30:00.000Z"},"reservedPlayersCount":{"N":"16"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Subham"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-19T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Shoaib"},"waNumber":{"S":"7017265725"}}},{"M":{"name":{"S":"Parvez"},"waNumber":{"S":"7017265725"}}},{"M":{"name":{"S":"Punit"},"waNumber":{"S":"8685807414"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"pranshu gupta"},"waNumber":{"S":"9818499127"}}},{"M":{"name":{"S":"ARJUN SURESH"},"waNumber":{"S":"9074818594"}}}]},"venueName":{"S":"Smashtress arena, Sector 121, Noida"},"charges":{"N":"200"},"venueLocationLink":{"S":"https://maps.app.goo.gl/BKDE4yC4qXjiAVW29"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/aEU17W8sYaH49IA6oY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Shubham"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-23T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-23T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"⁠ ⁠Shubham"}}},{"M":{"name":{"S":"ARJUN SURESH"},"waNumber":{"S":"9074818594"}}},{"M":{"name":{"S":"George Kizhakkudan"},"waNumber":{"S":"8921989223"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Ayush Bhatt"},"waNumber":{"S":"9319436454"}}},{"M":{"name":{"S":"Priyanshu"},"waNumber":{"S":"9319436454"}}},{"M":{"name":{"S":"Ha Emmanuel"},"waNumber":{"S":"885188826"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-24T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-24T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash Pratap"},"waNumber":{"S":"9045220018"}}},{"M":{"name":{"S":"Abhijit Pandey"},"waNumber":{"S":"9820661014"}}},{"M":{"name":{"S":"Abhijit Pandey"},"waNumber":{"S":"9820661014"}}},{"M":{"name":{"S":"Anvesh Sharma"},"waNumber":{"S":"7987885279"}}},{"M":{"name":{"S":"George Kizhakkudan"},"waNumber":{"S":"8921989223"}}},{"M":{"name":{"S":"Sarthak Choudhary"},"waNumber":{"S":"9518436751"}}},{"M":{"name":{"S":"ARJUN SURESH"},"waNumber":{"S":"9074818594"}}},{"M":{"name":{"S":"Ayush Kapil"},"waNumber":{"S":"9456018527"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-27T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"George mohan"},"waNumber":{"S":"8921989223"}}},{"M":{"name":{"S":"Suhaib Khan"},"waNumber":{"S":"7006436482"}}},{"M":{"name":{"S":"Showmick Thakurta"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"Yash Singh"},"waNumber":{"S":"9717497168"}}},{"M":{"name":{"S":"Ayush Kapil"},"waNumber":{"S":"9456018527"}}},{"M":{"name":{"S":"Ashutosh Ushottam"},"waNumber":{"S":"9667896568"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-29T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-29T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Avneesh Singh Saini"},"waNumber":{"S":"9023840303"}}},{"M":{"name":{"S":"Sarthak Khandelwal"},"waNumber":{"S":"9023840303"}}},{"M":{"name":{"S":"Suhaib Khan"},"waNumber":{"S":"7006436482"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"240"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-30T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-30T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-03-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-31T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-31T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-31T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-31T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kushagra Kaintura"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Arnold"},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"Babaloo "},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"ARJUN SURESH"},"waNumber":{"S":"9074818594"}}},{"M":{"name":{"S":"Ayush Bhatt"},"waNumber":{"S":"9319436454"}}},{"M":{"name":{"S":"Ashutosh Ushottam"},"waNumber":{"S":"9667896568"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"3"},"currency":{"S":"IN"},"startTime":{"S":"2024-03-31T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-03-31T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash Singh"},"waNumber":{"S":"09717497168"}}},{"M":{"name":{"S":"Showmick Thakurta"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"ISHAAN SOOD"},"waNumber":{"S":"9958684203"}}},{"M":{"name":{"S":"SURAJ SINGH"},"waNumber":{"S":"8375890102"}}},{"M":{"name":{"S":"CHANDAN DATTA"},"waNumber":{"S":"9597000313"}}},{"M":{"name":{"S":"CHANDAN DATTA"},"waNumber":{"S":"9457789371"}}},{"M":{"name":{"S":"Dhruv"},"waNumber":{"S":"+917976519757"}}},{"M":{"name":{"S":"Pritesh"},"waNumber":{"S":"+919805189110"}}},{"M":{"name":{"S":"Ayush Kapil"},"waNumber":{"S":"9456018527"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-02T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-02T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"Ishaan Kumar"},"waNumber":{"S":"9082307820"}}},{"M":{"name":{"S":"Kaartik Sharma"},"waNumber":{"S":"7290944814"}}},{"M":{"name":{"S":"Shivaansh"},"waNumber":{"S":"6006181998"}}},{"M":{"name":{"S":"Showmick Thakurta"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"pranshu gupta"},"waNumber":{"S":"9818499127"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-04T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-04T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-06T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-06T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-07',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sarthak"},"waNumber":{"S":"8192988741"}}},{"M":{"name":{"S":"Avneesh"},"waNumber":{"S":"8192988741"}}},{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"Kushagra Kaintura"},"waNumber":{"S":"880094731"}}},{"M":{"name":{"S":"Kanav Lyder"},"waNumber":{"S":"9311559438"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-07T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-07T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-09T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-09T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arnold"},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"SUVOJIT ROY"},"waNumber":{"S":"9634781809"}}},{"M":{"name":{"S":"Showmick"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"George "},"waNumber":{"S":"8921989223"}}},{"M":{"name":{"S":"Abhijeet "},"waNumber":{"S":"7709341134"}}},{"M":{"name":{"S":"Mihir"},"waNumber":{"S":"7835866894"}}},{"M":{"name":{"S":"Geetansh"},"waNumber":{"S":"09953148589"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-11T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-11T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"George "},"waNumber":{"S":"8921989223"}}},{"M":{"name":{"S":"1"},"waNumber":{"S":"9718929119"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-13T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-12T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"SUVOJIT ROY"},"waNumber":{"S":"9634781809"}}},{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Yash Singh"},"waNumber":{"S":"9717497168"}}},{"M":{"name":{"S":"Mihir "},"waNumber":{"S":"7835866894"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-14T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-14T13:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-16T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-16T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"George"},"waNumber":{"S":"8921989223"}}},{"M":{"name":{"S":"Soumik"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"Pranshu"},"waNumber":{"S":"9818499127"}}},{"M":{"name":{"S":"Ayush"},"waNumber":{"S":"9456018527"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-17T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-04-19T14:30:00.000Z"},"endTime":{"S":"2024-04-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Sanjith"},"waNumber":{"S":"9562448738"}}},{"M":{"name":{"S":"Anuvesh "},"waNumber":{"S":"8859035467"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"260"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-21T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-21T14:30:00.000Z"},"reservedPlayersCount":{"N":"18"},"stripePaymentUrl":{"S":"https://buy.stripe.com/5kA3g46kQ7uS7As4gT"},"waitListPlayersCount":{"N":"9"}}},{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"8168891581"}}},{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"230"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-21T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-21T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Zeeshan"},"waNumber":{"S":"9234628347"}}},{"M":{"name":{"S":"one"},"waNumber":{"S":"9667219789"}}},{"M":{"name":{"S":"Ishaan sood"},"waNumber":{"S":"9958684203"}}},{"M":{"name":{"S":"Arjun"},"waNumber":{"S":"9074818594"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-22T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-22T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-24',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ojas"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Sarthak"},"waNumber":{"S":"9594619017"}}},{"M":{"name":{"S":"Kartik"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-24T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-24T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ojas"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Amrit"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Sahil"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Soumik"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"Subhojit"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"George"},"waNumber":{"S":"9836505010"}}}]},"venueName":{"S":"Claygrounds by Plaza"},"charges":{"N":"210"},"venueLocationLink":{"S":"https://maps.app.goo.gl/9q6JThj7RnXSxHg87?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-26T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-26T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/00gbMAeRmeXkcUM5kY"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Yatharth"},"waNumber":{"S":"9953478788"}}},{"M":{"name":{"S":"Anuvesh"},"waNumber":{"S":"+918859035467"}}},{"M":{"name":{"S":"Agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"8168891581"}}},{"M":{"name":{"S":"Pranshu"},"waNumber":{"S":"09818499127"}}},{"M":{"name":{"S":"Ritesh "},"waNumber":{"S":"9075235760"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-28T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-28T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-04-30',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijit "},"waNumber":{"S":"9820661014"}}},{"M":{"name":{"S":"Shiv"},"waNumber":{"S":"9820661014"}}},{"M":{"name":{"S":"Kartik"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Mihit"},"waNumber":{"S":"7835866894"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-04-30T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-04-30T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Yash Singh"},"waNumber":{"S":"09717497168"}}},{"M":{"name":{"S":"Amrit"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Ojas"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Sahil"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Shivam"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Aryan"},"waNumber":{"S":"8957990352"}}},{"M":{"name":{"S":"Yatharth"},"waNumber":{"S":"9953478788"}}},{"M":{"name":{"S":"Abhishek Tiwari"},"waNumber":{"S":"9004664432"}}},{"M":{"name":{"S":"Harsh Singh"},"waNumber":{"S":"9899386041"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-03T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-03T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-04T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-04T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"SANGEET BHATTACHARYA"},"waNumber":{"S":"8167826014"}}},{"M":{"name":{"S":"Anuvesh"},"waNumber":{"S":"8859035467"}}},{"M":{"name":{"S":"Pranshu"},"waNumber":{"S":"9818499127"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"8168891581"}}},{"M":{"name":{"S":"Ishaan Kumar"},"waNumber":{"S":"9082307820"}}},{"M":{"name":{"S":"Shivaansh Sharma"},"waNumber":{"S":"6006181998"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-05T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-05T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"ISHAAN SOOD"},"waNumber":{"S":"9958684203"}}},{"M":{"name":{"S":"Ritesh "},"waNumber":{"S":"9075235760"}}},{"M":{"name":{"S":"Sarthak Dogra"},"waNumber":{"S":"9711461646"}}},{"M":{"name":{"S":"Suseel"},"waNumber":{"S":"7838380070"}}},{"M":{"name":{"S":"Shivaansh"},"waNumber":{"S":"6006181998"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-06T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-06T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Manik Bhardwaj "},"waNumber":{"S":"8979176234"}}},{"M":{"name":{"S":"Pradumn Dwivedi"},"waNumber":{"S":"9810489871"}}},{"M":{"name":{"S":"Suseel"},"waNumber":{"S":"7838380070"}}},{"M":{"name":{"S":"Sarthak Dogra"},"waNumber":{"S":"9711461646"}}},{"M":{"name":{"S":"Rahul Pathak"},"waNumber":{"S":"9717699647"}}},{"M":{"name":{"S":"Uday Pratap"},"waNumber":{"S":"9560239878"}}},{"M":{"name":{"S":"Aditya B"},"waNumber":{"S":"9560239878"}}},{"M":{"name":{"S":"Sarthak Pippal"},"waNumber":{"S":"9560239878"}}},{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-08T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-08T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-10',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-10T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-10T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Hamza"},"waNumber":{"S":"8595301176"}}},{"M":{"name":{"S":"Ayman "},"waNumber":{"S":"8595301176"}}},{"M":{"name":{"S":"Sahil "},"waNumber":{"S":"8595301176"}}},{"M":{"name":{"S":"Suseel"},"waNumber":{"S":"7838380070"}}},{"M":{"name":{"S":"Ishaan sood"},"waNumber":{"S":"9958684203"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-11T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-11T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-12',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"SANGEET"},"waNumber":{"S":"8167826014"}}},{"M":{"name":{"S":"Abhishek Tiwari"},"waNumber":{"S":"9004664432"}}},{"M":{"name":{"S":"Elkan Quadros "},"waNumber":{"S":"7900124056"}}},{"M":{"name":{"S":"Pradumn Dwivedi"},"waNumber":{"S":"9810489871"}}},{"M":{"name":{"S":"One"},"waNumber":{"S":"8979176234"}}},{"M":{"name":{"S":"Ishdeep"},"waNumber":{"S":"7838875336"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"8168891581"}}},{"M":{"name":{"S":"Rahul Pathak"},"waNumber":{"S":"9717699647"}}},{"M":{"name":{"S":"Bhaskar "},"waNumber":{"S":"9717384495"}}},{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-12T14:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-11T15:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-13',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Ishaan Kumar"},"waNumber":{"S":"9082307820"}}},{"M":{"name":{"S":"Sumit"},"waNumber":{"S":"9911370940"}}},{"M":{"name":{"S":"Pranshu"},"waNumber":{"S":"09818499127"}}},{"M":{"name":{"S":"Sarthak Dogra"},"waNumber":{"S":"9711461646"}}},{"M":{"name":{"S":"Agrim"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Shivaansh"},"waNumber":{"S":"6006181998"}}},{"M":{"name":{"S":"Ashutosh "},"waNumber":{"S":"9667896568"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-13T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-13T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"AD"},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"Sarthak Dogra"},"waNumber":{"S":"9711461646"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-14T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-14T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-15T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-15T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-16',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-16T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-16T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-17',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-17T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-17T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Kush "},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Chandan"},"waNumber":{"S":"9597000313"}}},{"M":{"name":{"S":"Pritesh"},"waNumber":{"S":"9597000313"}}},{"M":{"name":{"S":"Om"},"waNumber":{"S":"9597000313"}}},{"M":{"name":{"S":"Abhishek Tiwari"},"waNumber":{"S":"9004664432"}}},{"M":{"name":{"S":"Rahul Pathak"},"waNumber":{"S":"9717699647"}}},{"M":{"name":{"S":"Suseel"},"waNumber":{"S":"7838380070"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-18T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-18T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Arnav"},"waNumber":{"S":"8448239679"}}},{"M":{"name":{"S":"Sumit Saha "},"waNumber":{"S":"9911370940"}}},{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"8168891581"}}},{"M":{"name":{"S":"Sachin"},"waNumber":{"S":"7876529084"}}},{"M":{"name":{"S":"Yash"},"waNumber":{"S":"9899639326"}}},{"M":{"name":{"S":"Siddharth "},"waNumber":{"S":"9899639326"}}},{"M":{"name":{"S":"Ritesh "},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Abhishek"},"waNumber":{"S":"7876529084"}}},{"M":{"name":{"S":"Roshan Singh kandra "},"waNumber":{"S":"8851377012"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-19T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-19T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Punit"},"waNumber":{"S":"9599857337"}}},{"M":{"name":{"S":"Suvojit "},"waNumber":{"S":"9599857337"}}},{"M":{"name":{"S":"Abhijit"},"waNumber":{"S":"7579093205"}}},{"M":{"name":{"S":"Daksh Chamoli"},"waNumber":{"S":"7838005411"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-21T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-21T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-22',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Manik Bhardwaj "},"waNumber":{"S":"8979176234"}}},{"M":{"name":{"S":"Aryaman"},"waNumber":{"S":"7827194836"}}},{"M":{"name":{"S":"Satyam"},"waNumber":{"S":"7827194836"}}},{"M":{"name":{"S":"Kartik"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Sachin"},"waNumber":{"S":"7876529084"}}},{"M":{"name":{"S":"Kunal"},"waNumber":{"S":"7876529084"}}},{"M":{"name":{"S":"Pradumn"},"waNumber":{"S":"9810489871"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-22T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-22T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Abhijit "},"waNumber":{"S":"9820661014"}}},{"M":{"name":{"S":"Shiv "},"waNumber":{"S":"9820661014"}}},{"M":{"name":{"S":"Kalani "},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Prakhyat "},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Suseel"},"waNumber":{"S":"7838380070"}}},{"M":{"name":{"S":"Shivaansh "},"waNumber":{"S":"6006181998"}}},{"M":{"name":{"S":"Ishaan"},"waNumber":{"S":"9082307820"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-23T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-23T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-25',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Satyam Singh "},"waNumber":{"S":"08349880781"}}},{"M":{"name":{"S":"Akash Sood"},"waNumber":{"S":"9566191215"}}},{"M":{"name":{"S":"Aditya Gupta"},"waNumber":{"S":"9566191215"}}},{"M":{"name":{"S":"SUVO"},"waNumber":{"S":"9634781809"}}},{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Aksh Jain"},"waNumber":{"S":"9259045142"}}},{"M":{"name":{"S":"Kunal Bhatia"},"waNumber":{"S":"8727961891"}}},{"M":{"name":{"S":"Anurag Jangra"},"waNumber":{"S":"8727961891"}}},{"M":{"name":{"S":"agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Kushagra"},"waNumber":{"S":"8853061507"}}},{"M":{"name":{"S":"Rahul Pathak"},"waNumber":{"S":"9717699647"}}},{"M":{"name":{"S":"Prem"},"waNumber":{"S":"09310052165"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-25T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-25T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-26',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Satyam Singh"},"waNumber":{"S":"08349880781"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-26T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-26T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Janak"},"waNumber":{"S":"9810970368"}}},{"M":{"name":{"S":"Janak"},"waNumber":{"S":"9810970368"}}},{"M":{"name":{"S":"Janak"},"waNumber":{"S":"9810970368"}}},{"M":{"name":{"S":"Janak"},"waNumber":{"S":"9810970368"}}},{"M":{"name":{"S":"SUVO"},"waNumber":{"S":"9634781809"}}},{"M":{"name":{"S":"Ronny"},"waNumber":{"S":"9910071863"}}},{"M":{"name":{"S":"Sid"},"waNumber":{"S":"9910071863"}}},{"M":{"name":{"S":"Ishaan"},"waNumber":{"S":"9082307820"}}},{"M":{"name":{"S":"Shivaansh"},"waNumber":{"S":"6006181998"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-27T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-28',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-28T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-28T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-29',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Pranshu"},"waNumber":{"S":"9818499127"}}},{"M":{"name":{"S":"Harsh"},"waNumber":{"S":"9591866833"}}},{"M":{"name":{"S":"Satyam Singh"},"waNumber":{"S":"08349880781"}}},{"M":{"name":{"S":"Ratul Ghosh"},"waNumber":{"S":"9051298623"}}},{"M":{"name":{"S":"Aryaman "},"waNumber":{"S":"7827194836"}}},{"M":{"name":{"S":"Vimanyu"},"waNumber":{"S":"7827194836"}}},{"M":{"name":{"S":"Satyam"},"waNumber":{"S":"7827194836"}}},{"M":{"name":{"S":"Rahul Pathak"},"waNumber":{"S":"9717699647"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-29T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-29T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-05-31',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-05-31T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-05-30T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-01',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Pranshu"},"waNumber":{"S":"09818499127"}}},{"M":{"name":{"S":"Tanmay"},"waNumber":{"S":"9654993326"}}},{"M":{"name":{"S":"Punarv"},"waNumber":{"S":"9654993326"}}},{"M":{"name":{"S":"Rahul"},"waNumber":{"S":"9654993326"}}},{"M":{"name":{"S":"Agrim"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Aryan"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Arnold "},"waNumber":{"S":"8731024323"}}},{"M":{"name":{"S":"Prem"},"waNumber":{"S":"09310052165"}}},{"M":{"name":{"S":"Satyam Singh"},"waNumber":{"S":"08349880781"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-01T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-01T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-02',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavesh"},"waNumber":{"S":"9958300486"}}},{"M":{"name":{"S":"Nakul"},"waNumber":{"S":"9958300486"}}},{"M":{"name":{"S":"SANGEET BHATTACHARYA"},"waNumber":{"S":"8167826014"}}},{"M":{"name":{"S":"Saurya"},"waNumber":{"S":"8475965272"}}},{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Saurabh Yadav"},"waNumber":{"S":"8287810588"}}},{"M":{"name":{"S":"Ishdeep"},"waNumber":{"S":"7838875336"}}},{"M":{"name":{"S":"Mohit "},"waNumber":{"S":"8168891581"}}},{"M":{"name":{"S":"Hamza almadni "},"waNumber":{"S":"8595301176"}}},{"M":{"name":{"S":"Aksh Jain"},"waNumber":{"S":"9259045142"}}},{"M":{"name":{"S":"Satyam Singh"},"waNumber":{"S":"08349880781"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-02T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-02T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-03',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rakesh "},"waNumber":{"S":"9664615955"}}},{"M":{"name":{"S":"Ashutosh"},"waNumber":{"S":"9664615955"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-03T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-02T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-04',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Khaled "},"waNumber":{"S":"8595301176"}}},{"M":{"name":{"S":"Abhijit Negi"},"waNumber":{"S":"7579093285"}}},{"M":{"name":{"S":"Dhruv Narang"},"waNumber":{"S":"9643342711"}}},{"M":{"name":{"S":"Yavnaal"},"waNumber":{"S":"9818188312"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-04T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-04T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-05T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kartik Walia"},"waNumber":{"S":"9810711493"}}},{"M":{"name":{"S":"Mohit"},"waNumber":{"S":"9654891680"}}},{"M":{"name":{"S":"Shubho"},"waNumber":{"S":"9540057401"}}},{"M":{"name":{"S":"Soumik"},"waNumber":{"S":"9836505010"}}},{"M":{"name":{"S":"Dhruv Narang"},"waNumber":{"S":"9643342711"}}},{"M":{"name":{"S":"SUVO"},"waNumber":{"S":"9634781809"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Agrim khurana"},"waNumber":{"S":"7042165956"}}},{"M":{"name":{"S":"Om "},"waNumber":{"S":"9925915192"}}},{"M":{"name":{"S":"Pritesh "},"waNumber":{"S":"9925915192"}}},{"M":{"name":{"S":"Prem"},"waNumber":{"S":"9310052165"}}},{"M":{"name":{"S":"Dhruv Narang"},"waNumber":{"S":"9643342711"}}},{"M":{"name":{"S":"Aryan khurana"},"waNumber":{"S":"7042165956"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-08T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-08T14:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-09',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Bhavesh"},"waNumber":{"S":"9958300486"}}},{"M":{"name":{"S":"Mannat"},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Ritesh "},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Mannat"},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Ritesh "},"waNumber":{"S":"7379082553"}}},{"M":{"name":{"S":"Kartik"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Satyam"},"waNumber":{"S":"08349880781"}}},{"M":{"name":{"S":"Aadweek "},"waNumber":{"S":"08349880781"}}},{"M":{"name":{"S":"Aksh Jain "},"waNumber":{"S":"9259045142"}}},{"M":{"name":{"S":"Sachin"},"waNumber":{"S":"7876529084"}}},{"M":{"name":{"S":"Kunal"},"waNumber":{"S":"7876529084"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-09T13:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-09T14:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-11',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-06-11T15:00:00.000Z"},"endTime":{"S":"2024-06-11T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"3"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Nihal"},"waNumber":{"S":"9819890763"}}},{"M":{"name":{"S":"Abhishek T"},"waNumber":{"S":"9004664432"}}},{"M":{"name":{"S":"Satyam Singh"},"waNumber":{"S":"08349880781"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-15T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-15T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-18',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Rishikesh"},"waNumber":{"S":"9137270349"}}},{"M":{"name":{"S":"Roshan"},"waNumber":{"S":"918851377012"}}},{"M":{"name":{"S":"Bhavya"},"waNumber":{"S":"918851377012"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-18T15:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-18T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}},{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"2"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-18T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-18T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-19',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-06-19T14:30:00.000Z"},"endTime":{"S":"2024-06-19T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-20',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-06-20T14:30:00.000Z"},"endTime":{"S":"2024-06-20T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-06-23',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"SANGEET"},"waNumber":{"S":"8167826014"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-06-23T12:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-06-23T13:59:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-07-06',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Stadeum"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/D6b7SoJEbq57CNpY9"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-07-06T15:00:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-06T16:00:00.000Z"},"reservedPlayersCount":{"N":"10"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-07-14',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Dhruv Narang"},"waNumber":{"S":"9643342711"}}},{"M":{"name":{"S":"Prem "},"waNumber":{"S":"9310052165"}}},{"M":{"name":{"S":"Harsh Singh"},"waNumber":{"S":"9899386041"}}},{"M":{"name":{"S":"Bhaskar"},"waNumber":{"S":"9899386041"}}},{"M":{"name":{"S":"Nikhil"},"waNumber":{"S":"9899386041"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-07-14T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-14T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 7,
      date: '2024-07-21',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Om"},"waNumber":{"S":"9106369945"}}},{"M":{"name":{"S":"Pritesh"},"waNumber":{"S":"9106369945"}}},{"M":{"name":{"S":"Kartik"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Shubhiksh "},"waNumber":{"S":"08920495179"}}}]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-07-21T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-21T15:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-07-27',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"Kartik Gupta"},"waNumber":{"S":"9871249967"}}},{"M":{"name":{"S":"Kush"},"waNumber":{"S":"8800904731"}}},{"M":{"name":{"S":"Aryan"},"waNumber":{"S":"8557837799"}}},{"M":{"name":{"S":"Raghav"},"waNumber":{"S":"8557837799"}}},{"M":{"name":{"S":"Abhinav"},"waNumber":{"S":"7428608108"}}},{"M":{"name":{"S":"Dhruv Narang"},"waNumber":{"S":"9643342711"}}}]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"280"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-07-27T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-27T16:00:00.000Z"},"reservedPlayersCount":{"N":"8"},"waitListPlayersCount":{"N":"4"}}}]',
    },
    {
      cityId: 7,
      date: '2024-08-05',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"Classic XI, Sector 78"},"charges":{"N":"330"},"venueLocationLink":{"S":"https://maps.app.goo.gl/7B4yUmrsWgdgJEzQ8?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"startTime":{"S":"2024-08-05T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-08-05T16:00:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
    {
      cityId: 7,
      date: '2024-08-15',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[]},"venueName":{"S":"GD Goenka Sports arena, Sector 50, Noida"},"charges":{"N":"220"},"venueLocationLink":{"S":"https://maps.app.goo.gl/LRihVCq3FmXwNT3K7?g_st=ic"},"index":{"N":"1"},"currency":{"S":"IN"},"sportName":{"S":"Football"},"startTime":{"S":"2024-08-15T14:30:00.000Z"},"endTime":{"S":"2024-08-15T15:30:00.000Z"},"reservedPlayersCount":{"N":"10"},"stripePaymentUrl":{"S":"https://buy.stripe.com/6oEaIw10w7uS1c44gN"},"waitListPlayersCount":{"N":"5"}}}]',
    },
    {
      cityId: 3,
      date: '2024-07-08',
      eventDetailsList:
        '[{"M":{"playerDetailsList":{"L":[{"M":{"name":{"S":"kk"},"waNumber":{"S":"98976868678"}}},{"M":{"name":{"S":"kk"}}},{"M":{"name":{"S":"kk"}}},{"M":{"name":{"S":"kk"}}}]},"venueName":{"S":"Testing Camp Kirkwood Park"},"charges":{"N":"10"},"venueLocationLink":{"S":"https://maps.app.goo.gl/KsAwrLdHXJsyC5np7"},"index":{"N":"1"},"currency":{"S":"USD"},"startTime":{"S":"2024-07-08T14:30:00.000Z"},"sportName":{"S":"Football"},"endTime":{"S":"2024-07-08T16:30:00.000Z"},"reservedPlayersCount":{"N":"14"},"waitListPlayersCount":{"N":"7"}}}]',
    },
  ],
};

export default gamesData;
