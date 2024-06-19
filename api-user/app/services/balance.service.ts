import axios from "axios";

class BalanceService {
  createBalance(user_id: string, balance: number) {
    const data = {
      balance: balance,
      user_id: user_id
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('http://localhost:3001/balance',data, config)
    .catch(error => {console.log(error.data)})
  }
}

export { BalanceService }