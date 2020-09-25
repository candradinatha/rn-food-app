import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jPEEKPyez0bthERaJNoPCXUjTjakqTeCOW0Jpuz2doW_8WoqnYLHiTU1unym9ZOeBxWYlH1wvDo-inZzjGJC636TlraREfrH38HDbmZTrabWPljFha4DiYiDx0NsX3Yx'
    }
});

