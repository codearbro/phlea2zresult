
import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from './../CreateUser';
import EditUser from './../EditUser';
import Update from "../update";


export default function Header() {
    return (
        <div>
            <h1>Hello</h1>
            <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Update />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
        </div>
    )
}
