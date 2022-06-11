import User from '../models/User'

const userData = [
  {
    id: '12a1s3dz24c635q2e213a2dw1',
    username: 'volkankaya',
    password: '1721012176',
    profile: {
      pic: 'https://pbs.twimg.com/profile_images/1488190524280422404/HKjiNoiC_400x400.jpg',
      pic_full: 'https://pbs.twimg.com/profile_images/1488190524280422404/HKjiNoiC_400x400.jpg',
      pic_cover: 'https://pbs.twimg.com/profile_banners/1142171408916762624/1605471218/1500x500',
      description: 'Somedescription goes there...',
      nickname: '@volkanKaya',
      name: 'Volkan Kaya',
      website: 'https://volkankaya.com'
    },
    account: {
      followingCount: '515',
      followerCount: '152'
    }
  }
]

export const users = [
  new User(userData[0])
]

export const userOneAuthInfo = {
  username: userData[0].username,
  password: userData[0].password
}

export const tweets = []

export const trends = [
  {
    name: '#Salı',
    tweetsCount: 155614
  },
  {
    name: '#ProductHunt',
    tweetsCount: 121353
  },
  {
    name: '#DummyTrend',
    tweetsCount: 90420
  }
]