import axios from 'axios';
import { expect } from 'chai';

describe('Reqres API Testing', () => {
    it('Get User from Page 3', async () => {
        const response = await axios.get('https://reqres.in/api/users?page=3');
        expect(response.status).to.equal(200);
        expect(response.data.page).to.equal(3);
        
        console.log('Data from Page 3:', response.data);
    });

    it('Get Single User with ID 10', async () => {
        const response = await axios.get('https://reqres.in/api/users/10');
        expect(response.status).to.equal(200);
        expect(response.data.data.id).to.equal(10);
        
        console.log('User with ID 10:', response.data.data);
    });

    it('Register Successful', async () => {
        const response = await axios.post('https://reqres.in/api/register', {
            email: "eve.holt@reqres.in",
            password: "pistol"
        });
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('token');
        
        console.log('Register Success Response:', response.data);
    });

    it('Register Failed', async () => {
        const response = await axios.post('https://reqres.in/api/register', {
            email: "sydney@fife"
        }).catch(error => error.response);
        expect(response.status).to.equal(400);
        expect(response.data.error).to.equal("Missing password");
        
        console.log('Register Failed Response:', response.data);
    });
});
