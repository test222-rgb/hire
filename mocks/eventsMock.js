import uniqid from 'uniqid'

export default () => ({
  events: [
    {
      id: uniqid(),
      name: 'Event 1',
      location: 'California 3/4',
      eventDate: '17 May 2020',
      description: `Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book`,
      public: true,
      payload: [
        {
          attendee: 'attendee 1',
          email: 'attendee_1@gmail.com',
        },
        {
          attendee: 'attendee 2',
          email: 'attendee_2@gmail.com',
        },
        {
          attendee: 'attendee 3',
          email: 'attendee_3@gmail.com',
        },
      ],
    },
    {
      id: uniqid(),
      name: 'Event 2',
      location: 'New York 5',
      eventDate: '30 May 2020',
      description: `Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book`,
      public: false,
      payload: [
        {
          attendee: 'attendee 4',
          email: 'attendee_4@gmail.com',
        },
        {
          attendee: 'attendee 5',
          email: 'attendee_5@gmail.com',
        },
        {
          attendee: 'attendee 6',
          email: 'attendee_6@gmail.com',
        },
      ],
    },
    {
      id: uniqid(),
      name: 'Event 3',
      location: 'Thansania 8/9',
      eventDate: '17 June 2020',
      description: `Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book`,
      public: true,
      payload: [
        {
          attendee: 'attendee 1',
          email: 'attendee_1@gmail.com',
        },
        {
          attendee: 'attendee 4',
          email: 'attendee_4@gmail.com',
        },
        {
          attendee: 'attendee 3',
          email: 'attendee_3@gmail.com',
        },
      ],
    },
    {
      id: uniqid(),
      name: 'Event 4',
      location: 'Thansania 2/7',
      eventDate: '20 Oct 2020',
      description: `Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book`,
      public: false,
      payload: [
        {
          attendee: 'attendee 1',
          email: 'attendee_1@gmail.com',
        },
        {
          attendee: 'attendee 4',
          email: 'attendee_4@gmail.com',
        },
        {
          attendee: 'attendee 5',
          email: 'attendee_5@gmail.com',
        },
      ],
    },
    {
      id: uniqid(),
      name: 'Event 5',
      location: 'Washington 8/9',
      eventDate: '21 June 2020',
      description: `Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book`,
      public: true,
      payload: [
        {
          attendee: 'attendee 1',
          email: 'attendee_1@gmail.com',
        },
        {
          attendee: 'attendee 4',
          email: 'attendee_4@gmail.com',
        },
        {
          attendee: 'attendee 3',
          email: 'attendee_3@gmail.com',
        },
      ],
    },
  ],
})
