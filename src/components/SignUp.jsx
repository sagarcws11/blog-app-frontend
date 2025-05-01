import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

 function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/api/register", {
          email,
          password,
          role,
        });
        setMessage("Registration successful! You can now log in.");
        navigate('/login');
      } catch (err) {
        setMessage("Registration failed: " + err.response?.data?.error || err.message);
      }
    };
  

 return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
        <Link to='/Login' className=' w-full rounded text-blue-600 flex justify-center '>Already have an account ?</Link> 
        {message && <p className="text-center text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
 }

export default SignUp;
