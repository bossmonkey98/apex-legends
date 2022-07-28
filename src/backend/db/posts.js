import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 'fsjfhjsdh434jhsjd3',
    pic: 'https://res.cloudinary.com/donqbxlnc/image/upload/v1652342774/photo-1652298926911-9d628f82e7de_xnxfvn.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam veniam, voluptates illum repellendus vitae blanditiis voluptatum omnis reprehenderit corrupti officia.',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    comments: [
      {
        _id: 'f0e1394a-8fd4-421b-a750-0d3d63d7e0cc',
        comment: 'Nice pic',
        user: {
          _id: 'asassdafdgdk',
          firstName: 'Banglore',
          lastName: 'Smoke Thot',
          username: 'Bossmonkey',
          password: '123456789',
          pic: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
          createdAt: '2022-01-25T10:38:12+05:30',
          updatedAt: '2022-05-17T10:33:36+05:30',
          followers: [],
          following: [],
          bookmarks: [],
          id: '1'
        },
        replies: [],
        votes: {
          upvotedBy: []
        },
        createdAt: '2022-07-25T15:34:49+05:30',
        updatedAt: '2022-07-25T15:34:49+05:30'
      },
      {
        _id: 'ad1d137a-92f1-4779-a30d-be0f8490c403',
        comment: ':)',
        user: {
          _id: 'asassdafdgdk',
          firstName: 'Banglore',
          lastName: 'Smoke Thot',
          username: 'Bossmonkey',
          password: '123456789',
          pic: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
          createdAt: '2022-01-25T10:38:12+05:30',
          updatedAt: '2022-05-17T10:33:36+05:30',
          followers: [],
          following: [],
          bookmarks: [],
          id: '1'
        },
        replies: [],
        votes: {
          upvotedBy: []
        },
        createdAt: '2022-07-25T15:34:55+05:30',
        updatedAt: '2022-07-25T15:34:55+05:30'
      },
      {
        _id: '1b3bbadb-c75d-46b1-a0e3-07b7720d8dec',
        comment: 'lit',
        user: {
          _id: 'asassdafdgdk',
          firstName: 'Banglore',
          lastName: 'Smoke Thot',
          username: 'Bossmonkey',
          password: '123456789',
          pic: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
          createdAt: '2022-01-25T10:38:12+05:30',
          updatedAt: '2022-05-17T10:33:36+05:30',
          followers: [],
          following: [],
          bookmarks: [],
          id: '1'
        },
        replies: [],
        votes: {
          upvotedBy: []
        },
        createdAt: '2022-07-25T15:35:08+05:30',
        updatedAt: '2022-07-25T15:35:08+05:30'
      },
      {
        _id: 'd3dcf4e3-5547-473a-837e-e913df14a5fd',
        comment: 'adasdasdasdasd',
        user: {
          _id: 'fdgdg5590sd90',
          firstName: 'Ash',
          lastName: 'strix',
          username: 'Ash',
          password: '1234asdf',
          createdAt: '2022-03-20T09:30:12+05:30',
          updatedAt: '2022-05-16T18:11:01+05:30',
          followers: [],
          following: [],
          bookmarks: [],
        },
        replies: [],
        votes: {
          upvotedBy: []
        },
        createdAt: '2022-07-25T15:35:16+05:30',
        updatedAt: '2022-07-25T15:35:16+05:30'
      }
    ],
    userId: 'asassdafdgdk',
    username: 'Bossmonkey',
    createdAt: '2022-01-25T10:38:12+05:30',
    updatedAt: '2022-07-25T15:34:37+05:30',
    id: '1'
  },
  {
    _id: '343asa232sfdgt45',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, esse.',
    pic: 'https://res.cloudinary.com/donqbxlnc/image/upload/v1652342874/photo-1652335223113-9919b4e052d5_ecguab.jpg',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: 'fdgdg5590sd90',
    username: 'Ash',
    createdAt: '2022-01-25T10:38:12+05:30',
    updatedAt: '2022-07-25T15:34:37+05:30',
    id: '2'
  },
  {
    _id: '343asa232sfdgt55',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, esse.',
    pic: 'https://i.postimg.cc/PrTF78CZ/1096619.jpg',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: 'asassddfd23dgdg334df',
    username: 'Bloodhound',
    createdAt: '2022-01-25T10:38:12+05:30',
    updatedAt: '2022-07-25T15:34:37+05:30',
    id: '3'
  },
];

