import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

   function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); 
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleclick=()=>{
      navigate("/SignUp")
    }
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("process.env.API_URL/api/login", {
          email,
          password,
          role,
        });
        setMessage(`Login successful as ${res.data.role}`);
        navigate('/');
        
      } catch (err) {
        setMessage("Login failed: " + err.response?.data?.error || err.message);
      }
    };
    return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          value={email}

          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="w-full border px-3 py-2 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button type='button' onClick={handleclick}
         className='bg-blue-500 w-full rounded py-2 text-white cursor-pointer '>Create New Account</button>
        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
   }

export default Login;
