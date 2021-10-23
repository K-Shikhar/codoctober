import axios from 'axios';
class AuthResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = 'https://zouke.in';
        } else {
            this.host = 'http://localhost:8000';
        }
        this.mock = (process.env.NODE_ENV !== 'production');
    }

    loadUser(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': {
                        "id": 1,
                        "name": "Abhishek Bharadwaz",
                        "email": "abhishekbharadwaz22@gmail.com",
                        "profile-pic": "https://picsum.photos/200",
                        "domain": "coding"
                    }
                });
            });
        }

        return axios
            .get(this.host + '...', config);
    }

    loginUser(name, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'name': name,
            'password': password
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': {
                        "user": {
                            "id": 1,
                            "name": "Abhishek Bharadwaz",
                            "email": "abhishekbharadwaz22@gmail.com",
                            "profile-pic": "https://picsum.photos/200",
                            "domain": "coding"
                        },
                        "token": "12345"
                    }
                });
            });
        }

        return axios
            .post(this.host + '...', data, config);
    }

    signupUser(name, email, password, profilePic, domain) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'name': name,
            'email': email,
            'password': password,
            'profilePic': profilePic,
            'domain': domain
        };

        console.log(data);
        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': {
                        "user": {
                            "id": 1,
                            "name": "Abhishek Bharadwaz",
                            "email": "abhishekbharadwaz22@gmail.com",
                            "profile-pic": "https://picsum.photos/200",
                            "domain": "coding"
                        },
                        "token": "12345"
                    }
                });
            });
        }

        return axios
            .post(this.host + '...', data, config);
    }

    logoutUser(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({});
            });
        }

        return axios
            .post(this.host + '...', {}, config);
    }
}

export default AuthResource;
