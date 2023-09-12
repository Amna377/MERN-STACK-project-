import { makeObservable, observable, action, toJS } from 'mobx';
import axios from 'axios';
class SignupStore {
  formData = {
    firstName: '',
    Email: '',
    Gender: '',
    id: '',
  };

  constructor() {
    makeObservable(this, {
      formData: observable,
      setFormData: action,
    });
  }
  setFormData(key, value) {
    this.formData[key] = value;
  }

  async submitFormData() {
    
    try {
      console.log("data of firstname",this.formData.firstName)
     console.log("check payload data object..>",toJS(this.formData))
      const response = await axios.post('http://localhost:1000/submit', this.formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const responseData = response.data;
        console.log('Response from server:', responseData);
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }

  getFormData() {
    return { ...this.formData };
  }



}

const signupStore = new SignupStore();
export default signupStore;
